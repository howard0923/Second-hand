import React from 'react';
import Layout from 'Layout';
import 'bulma/css/bulma.css';

const FAQ = (props) => {
    return (

        <Layout>
                    <section class="section">
                        <div className="columns is-centered is-vcentered is-mobile">
                            <div className="column is-narrow">
                            <i class="fas fa-question fa-3x"></i>
                            </div>
                            <div className="column title is-narrow">
                                問與答
                            </div>
                        </div>
                        <div class="has-text-left fontlarge marginlrauto w90per">
                            <div class="has-text-weight-bold quespad textjustify">問：平台可以使用哪些付款方式？</div>
                            <div class="tableborder1 answerpad textjustify">答：目前提供信用卡線上刷卡的付款方式。</div>
                            <div class="has-text-weight-bold quespad textjustify">問：忘記密碼該怎麼辦?</div>
                            <div class="tableborder2 answerpad textjustify">答：可於登入頁面中點選【忘記密碼】按鈕，進行後續系統指示之操作來重設密碼。</div>
                        </div>
                    </section>
        </Layout>

                );
}
                export default FAQ;
