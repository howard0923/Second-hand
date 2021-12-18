from itertools import count
import numpy as np
from sklearn.neighbors import NearestNeighbors
import os
import sys
import math
import pandas as pd
from random import shuffle

from dataset_handler import DatasetHandler


db_settings = {
    "host": "140.117.71.141",
    "port": 3306,
    "user": "team",
    "password": "520",
    "db": "test",
    "charset": "utf8"
}


#宣告 dataset_handler透過 dataset_handler module來執行 dataset100k檔案
dataset_handler = DatasetHandler(0)

#宣告 user_ratings執行上述 module中的 load_users_ratings()函式
usr_ratings = dataset_handler.create_rating(db_settings)

#紀錄商品數
product_amount = dataset_handler.count_product(db_settings)


uid = int(sys.argv[1])

final_result = []


class ContentBasedRecommender(object):
    
    #計算相似矩陣
    product_similarity = {}
    
    #存取content-based排列過的推薦陣列
    content_sort = []
    
    def __init__(self, dataset_handler):
        
        self.dataset_handler = dataset_handler
        
        # product_vectors來執行 DatasetHandler的 load_product()函式
        self.product_vectors = self.dataset_handler.load_product(db_settings)
       


    
    def train(self, train_set):
        pass
    
    def top(self, user_profile, usr_ratings, topN):
        
        self.top = self._cosineKNN_all_product(usr_profile[0], topN)
        
        for i in usr_ratings:
            
            self.top.remove(i)
        
        #跑 _cosineKNN函式
     
        return self.top
        
    def create_user_profile(self, usr_ratings):
        #用以複製user ratings
        copy = []
        
        for i in usr_ratings:
            copy.append(usr_ratings[i])
        
        #存放加權分數陣列
        w_values = []
        
        #讀取資料庫使用者最愛分類存到product_feature
        feature_vectors = self.dataset_handler.load_favor(db_settings, uid)
        product_feature = feature_vectors[0]
        
        #計算使用者各分類的加權分數
        w_value = np.average(
                    np.array([
                        self.product_vectors[self.dataset_handler.id2index1(product)]
                        for (product, rating) in usr_ratings.items()
                    ]),
                    axis=0,
                    weights=copy

                )
        
        #將w_value乘上w_values形成最終加權分數
        for i in range(len(w_value)):
            
            num1 = w_value[i]
            num2 = product_feature[i]
            value = num1 * num2
            w_values.append(value)
        
        return (w_values, usr_ratings)
    
    def present_user_profile(self, user_profile):
        
        #印出user資訊及與其有關的電影評分
        for (productId, rating) in user_profile[1].items():
            product_vector = self.product_vectors[self.dataset_handler.id2index1(productId)]
    
    def present_recommendations(self, recommendations):
        
        #印出content-based的推薦電影
        for productId in recommendations:
            product_vector = self.product_vectors[self.dataset_handler.id2index1(productId)]
    
    def _cosineKNN_all_product(self, usr_profile, k):
        
        #利用KNN演算法算出推薦順序
        nbrs = NearestNeighbors(metric='cosine', algorithm='brute')
        nbrs.fit(self.product_vectors)
        
        content_sort = self.dataset_handler.indices2ids1(nbrs.kneighbors(np.array([usr_profile]), k, return_distance=False)[0])
        
        return self.dataset_handler.indices2ids1(nbrs.kneighbors(np.array([usr_profile]), k, return_distance=False)[0])
    
    def itemCF(self, usr_ratings):
        
        #根據使用者跟產品相關的評分進行計算次數
        product_rate_count = dict()

        #共現矩陣
        product_cuv_matrix = dict()
        
        #根據所有使用者建立矩陣
        for user_id, product_ids in usr_ratings.items():
            for i in product_ids.keys():
                product_rate_count.setdefault(i, 0)
                product_rate_count[i] += 1

                for j in product_ids.keys():
                    if i == j:
                        continue

                    product_cuv_matrix.setdefault(i, dict())
                    product_cuv_matrix[i].setdefault(j, 0)
                    product_cuv_matrix[i][j] += 1
        
        #根據上述矩陣建立相似矩陣
        for i, product_ids in product_cuv_matrix.items():
            self.product_similarity.setdefault(i, dict())

            for j, cuv in product_ids.items():
                similarity = cuv / math.sqrt(product_rate_count[i] * product_rate_count[j])
                self.product_similarity[i].setdefault(j, 0)
                self.product_similarity[i][j] = similarity
        
    def recommend(self, uid, usr_ratings, counter):
        rank = dict()
        top_n_product = dict()
        user_rate_product = usr_ratings.get(uid, {})
        #根據相似矩陣跟使用者產品評分進行推薦
        for i, rate in user_rate_product.items():
           
        
            top_n_product = dict(sorted(self.product_similarity[i].items(),
            key = lambda x:x[1], reverse = True)[0:counter])

            for j, similarity in top_n_product.items():
                if j in user_rate_product:
                    continue
                rank.setdefault(j, 0)
         
                rank[j] += rate * similarity
        
        #依據分數高低進行排列
        result = dict(sorted(rank.items(), key = lambda x:x[1], reverse = True)[0:counter])
        
        return result
    
    def combined_recommend(self, result):
        final = {}
        Counter = 0
        Count = 0

        if len(result) == 0:
            return self.top
        if len(self.top) == 0:
            return result
        else:
            for ids in self.top:
                Count += 1
                Counter = 0
                for ids2 in result:

                    Counter += 1
                    if ids == ids2:
                        tempnum = Count*4
                        final[int(ids)] = Counter + tempnum
                        break
                    else:
                        final[int(ids)] = Count + len(result) + 1

            combine_recommend = dict(sorted(final.items(), key = lambda x:x[1], reverse = False)[0:product_amount])
            
            return combine_recommend


recommender = ContentBasedRecommender(dataset_handler)
if not bool(usr_ratings[uid]) == False:

    usr_profile = recommender.create_user_profile(usr_ratings[uid])
    recommender.present_user_profile(usr_profile)


    top = recommender.top(usr_profile, usr_ratings[uid], topN=product_amount)
    recommender.present_recommendations(top)


    item_CF = recommender.itemCF(usr_ratings)

    results = recommender.recommend(uid, usr_ratings, product_amount)
        
    

    final_recommend = recommender.combined_recommend(results)


    for item in final_recommend:
        final_result.append(item)

    print(final_result)

else:
    products, aaaaa = dataset_handler.read_product(db_settings)
    print(aaaaa)