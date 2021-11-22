import React from 'react';
import Layout from 'Layout';

const OrderDetail = (props) => {
    return (
      <Layout>
        <section class="w80per marginlrauto">
            <div className="w40per martb20px mart40px fontbold fontxlarge">訂單資訊</div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">訂單編號</div>
               <div className="letterspacesmall fontsmaller positionabsolute left30per">A000000001</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">下單日期</div>
               <div className="letterspacesmall positionabsolute left30per">2021/01/01</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">訂單方案</div>
               <div className="letterspacesmall fontsmaller positionabsolute left30per">方案A</div>
            </div>
            <div className="w100per orderpnameheight positionrelative">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">租用產品</div>
               <div className="letterspacesmall textjustify fontsmaller positionabsolute left30per">美品《CHANEL香奈兒 黑色 菱格紋 全皮 銀扣 33公分 maxi 側背包/肩背包/斜背包》</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">租用開始日</div>
               <div className="letterspacesmall positionabsolute left30per">2021/01/02</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">租用到期日</div>
               <div className="letterspacesmall positionabsolute left30per">2021/01/08</div>
            </div>
            <div className="link-top1 mart20px"></div>
            <div className="w40per martb20px fontbold fontxlarge">顧客資料</div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">顧客名稱</div>
               <div className="letterspacesmall fontsmaller positionabsolute left30per">Eliza Marshall</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">Email</div>
               <div className="letterspacesmall positionabsolute left30per">ryan.richards@mail.com</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">電話號碼</div>
               <div className="letterspacesmall fontsmaller positionabsolute left30per">0912345678</div>
            </div>
            <div className="w100per h30px positionrelative ">
               <div className="w30per marl2per fontsmaller positionabsolute left0per">地址</div>
               <div className="letterspacesmall fontsmaller positionabsolute left30per">高雄市鼓山區蓮海路70號</div>
            </div>
            <div className="btnarea mart40px">
               <button className="commonbtn">出貨</button>
            </div>
        </section>
      </Layout>
    )
  }
  
  export default OrderDetail