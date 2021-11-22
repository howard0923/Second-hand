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
                        {/* <div class="fontlarge marginlrauto"> */}
                            <table class="has-text-left fontlarge marginlrauto w95per">
                                <tbody>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder1 tablepad1">問：平台可以使用哪些付款方式？</td>
                                        <td class="tableborder1 tablepad2">答：目前提供信用卡線上刷卡的付款方式。</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder2 tablepad1">問：忘記密碼該怎麼辦?</td>
                                        <td class="tableborder2 tablepad2">答：可於登入頁面中點選【忘記密碼】按鈕，進行後續系統指示之操作來重設密碼。</td>
                                    </tr>
                                </tbody>
                            </table>
                        {/* </div> */}
                    </section>



        </Layout>

                );
}


                export default FAQ;
