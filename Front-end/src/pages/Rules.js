import React from "react"
import Layout from "Layout"
import "bulma/css/bulma.css"

const Rules = (props) => {
  return (
    <Layout>
      <section class="section">
        <div className="columns is-centered is-vcentered is-mobile">
          <div className="column is-narrow ">
            <i class="fas fa-book-open fa-3x"></i>
          </div>
          <div className="column title is-narrow">會員條款</div>
        </div>
        {/* <div class="content is-medium"> */}
        <div>「精品訂閱平臺」網站為...股份有限公司(以下稱「本網站」、「本公司」、「我們」)所建置及提供之服務， 
          本公司之服務係提供出租/出售方會員(下稱出租/出售方)與租借/購買方會員(下稱租借/購買方)(統稱為”會員””您”)之間
          在平台進行商品租借及買賣的場所和機會； 會員須自行定期追蹤平台訂單狀態，並依平台網站流程指示出貨或歸還商品
          (以下稱「本服務」、「本平台」)，為了保障您的使用權益，所有使用或造訪本服務的使用者 
          （包括未註冊成為會員以及註冊會員之使用者）（以下簡稱「使用者」、「會員」 或「您」），都應詳細閱讀本服務條款。
          本服務條款構成您與本公司之約定 （以下簡稱「本服務條款」），一旦您開始使用本服務、或完成註冊時，
          即視為您已閱讀、暸解、並同意接受本服務條款之所有內容。</div>
        <table class="has-text-left fontlarge marginlrauto w95per">
          <tbody>
            <tr>
              <td class="pl-2 has-text-weight-bold tableborder1 tablepad1">
                條款1
              </td>
              <td class="tableborder1 tablepad2">...</td>
            </tr>
            <tr>
              <td class="pl-2 has-text-weight-bold tableborder2 tablepad1">
                條款2
              </td>
              <td class="tableborder2 tablepad2">...</td>
            </tr>
          </tbody>
        </table>
        {/* </div> */}
      </section>
    </Layout>
  )
}

export default Rules
