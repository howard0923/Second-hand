import numpy as np
import os
import pandas as pd
import pymysql

#儲存所有類別
sort = []

class DatasetHandler(object):
    def __init__(self, dataset_path):
        
        self.dataset_path = dataset_path
    
    def ids2titles1(self, ids):
        return [self.id_to_product_name[productId] for productId in ids]
    
    def indices2ids1(self, indices):
        return [self.product_index_to_product_id[index] for index in indices]
    
    def id2index1(self, productId):
        return self.product_index_to_product_id.index(productId)
    
    def product_vector2sort(self, product_vector):
        return [self.feature_index2sort(i) for i, x in enumerate(product_vector) if x == 1]
    
    def feature_index2sort(self, feature_index):
        return sort[feature_index]
    
    def create_rating(self, db_settings):
        
        conn = pymysql.connect(**db_settings)
        
        rat_frame = {}
        usr_ratings = {}
        
        #讀取資料庫favorite資訊
        with conn.cursor() as cursor:
            
            sql_favorite = """SELECT * FROM favorite"""
            
            cursor.execute(sql_favorite)
            
            result_sql_favorite = cursor.fetchall()
            
            #建立user ratings，並將favorite產品評分為5
            for usr_fav in result_sql_favorite:

                if int(usr_fav[1]) not in usr_ratings:
                    usr_ratings[int(usr_fav[1])] = {}
                    
                usr_ratings[int(usr_fav[1])][int(usr_fav[0])] = 5    
            
            conn.commit()
            
        #讀取資料庫record資訊    
        with conn.cursor() as cursor:
            
            sql_record = """SELECT * FROM record"""
            
            cursor.execute(sql_record)
            
            result_sql_record = cursor.fetchall()
            
            #將record產品評分為3，並加入user ratings中
            for usr_rec in result_sql_record:
                
                if int(usr_rec[0]) not in usr_ratings:
                    
                    usr_ratings[int(usr_rec[0])] = {}
                    
                    usr_ratings[int(usr_rec[0])][int(usr_rec[1])] = 3
                    
                else:
                    if int(usr_rec[1]) not in usr_ratings[int(usr_rec[0])]:
                        
                        usr_ratings[int(usr_rec[0])][int(usr_rec[1])] = 3        
            
            conn.commit()
        return(usr_ratings)
            
    def load_product(self, db_settings):
        
        conn = pymysql.connect(**db_settings)
        
        i = 0
        
        self.id_to_product_name = {}
        self.product_index_to_product_id = []
        product_vectors = []
        
        #讀取資料庫所有顏色存入sort陣列
        with conn.cursor() as cursor:
            
            sql_p_color = """SELECT color FROM color"""
            
            cursor.execute(sql_p_color)
            
            result_sql_p_color = cursor.fetchall()
            
            for color in result_sql_p_color:
                                 
                temp_color = list(color)
                temp_color[0].split(",")
                sort.append(temp_color[0])
                
                i+=1
                
            conn.commit()
        
        #讀取資料庫所有品牌存入sort陣列
        with conn.cursor() as cursor:
            
            sql_p_brand = """SELECT brand FROM brand"""
            
            cursor.execute(sql_p_brand)
            
            result_sql_p_brand = cursor.fetchall()
            
            for brand in result_sql_p_brand:
                                 
                temp_brand = list(brand)
                temp_brand[0].split(",")
                sort.append(temp_brand[0])
                                
                i+=1
                
            conn.commit()
        
        #讀取資料庫所有包型存入sort陣列
        with conn.cursor() as cursor:
            
            sql_p_type = """SELECT type FROM type"""
            
            cursor.execute(sql_p_type)
            
            result_sql_p_type = cursor.fetchall()
            
            for types in result_sql_p_type:
                                 
                temp_type = list(types)
                temp_type[0].split(",")
                sort.append(temp_type[0])
                                
                i+=1
                
            conn.commit()  
        
        #建立產品資訊，並以1跟0來檢視產品具有哪些類別
        with conn.cursor() as cursor:
            
            sql_product = """SELECT product.pId, product.name, color.color, brand.brand, type.type
                      FROM product
                      LEFT JOIN color ON product.colorId = color.colorId
                      LEFT JOIN brand ON product.brandId = brand.brandId
                      LEFT JOIN type ON product.typeId = type.typeId
                      ORDER by product.pId"""
            
            cursor.execute(sql_product)
            
            result_sql_product = cursor.fetchall()
            
            for product in result_sql_product:
                
                sort_list = product[2] + product[3] + product[4]
                
                self.id_to_product_name[int(product[0])] = product[1]
                
                self.product_index_to_product_id.append(int(product[0]))
                
                product_vectors.append(np.array([1 if sorts in sort_list else 0 for sorts in sort]))
            return np.array(product_vectors)
        
    def load_favor(self, db_settings, uid):
        
        conn = pymysql.connect(**db_settings)
        
        feature = []
        feature_vectors = []
        
        #讀取資料庫使用者最愛類別回傳
        with conn.cursor() as cursor:
            
            sql_favor = """SELECT user_liketype.uId, color.color, brand.brand, type.type
                      FROM user_liketype
                      LEFT JOIN color ON user_liketype.colorId = color.colorId
                      LEFT JOIN brand ON user_liketype.brandId = brand.brandId
                      LEFT JOIN type ON user_liketype.typeId = type.typeId
                      ORDER by user_liketype.uId"""
            
            cursor.execute(sql_favor)
            
            result_sql_favor = cursor.fetchall()
            
            for features in result_sql_favor:
                
                if features[0] == uid: 
                    if features[1] != None:
                        feature.append(features[1])
                    if features[2] != None:
                        feature.append(features[2])
                    if features[3] != None:
                        feature.append(features[3])
                    
            feature_vectors.append(np.array([2 if sorts in feature else 1 for sorts in sort]))
            
            return(np.array(feature_vectors))
                                              
            conn.commit()
            
    def read_product(self, db_settings):
        
        conn = pymysql.connect(**db_settings)
        
        all_product = {}
        
        #讀取所有產品編號、名稱回傳
        with conn.cursor() as cursor:
            
            sql_product = """SELECT pId, name FROM product"""
            
            cursor.execute(sql_product)
            
            result_sql_product = cursor.fetchall()
             
            for products in result_sql_product:   
                
                all_product[int(products[0])] = {}
                    
                all_product[int(products[0])] = products[1]
                    
            return(all_product)
            
            conn.commit()
            
    def count_product(self, db_settings):
        
        counter = 0
        
        conn = pymysql.connect(**db_settings)
        
        #計算產品數回傳
        with conn.cursor() as cursor:
            
            sql_pid = """SELECT pId FROM product"""
            
            cursor.execute(sql_pid)
            
            result_sql_pid = cursor.fetchall()
            
            for count in result_sql_pid:   
                
                counter += 1
                
            conn.close()
                    
            return(counter)
            
            conn.commit()