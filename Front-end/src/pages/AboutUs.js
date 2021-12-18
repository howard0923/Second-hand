import React from 'react';
import Layout from 'Layout';
import 'bulma/css/bulma.css';

const AboutUs = (props) => {
    return (

        <Layout>
                    <section class="section">
                        <div className="columns is-centered is-vcentered is-mobile">
                            <div className="column is-narrow ">
                            <i className="fas fa-address-card fa-3x"></i>
                            </div>
                            <div className="column title is-narrow">
                                關於我們
                            </div>
                        </div>
                        <div class="has-text-left fontlarge marginlrauto w90per">
                            <div class="has-text-weight-bold quespad textjustify">關於哈極品</div>
                            <div class="tableborder1 answerpad textjustify">本公司為二手精品店,
                                        專門經營二手名牌包包.飾品.手錶.服飾.鞋子及其他產品,
                                        除了實體店面外,也有經營網路拍賣業務,線上直播銷售，商品種類眾多。</div>
                            <div class="has-text-weight-bold quespad textjustify">實體店面位置</div>
                            <div class="tableborder2 answerpad textjustify">
                                <div>
                                    <div class="marb10px">新田店(總店)</div>
                                    <div>電話：07-2212288</div>
                                    <div class="marb10px">地址：高雄市前金區新田路265號</div>
                                </div>
                                <div>
                                    <div class="marb10px">明誠店</div>
                                    <div>電話：07-3951717</div>
                                    <div>地址：高雄市三民區明誠一路659號</div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="content is-medium"> */}
                            {/* <table class="has-text-left fontlarge marginlrauto w95per">
                                <tbody>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder1 tablepad1">關於哈極品</td>
                                        <td class="tableborder1 tablepad2">本公司為二手精品店,
                                        專門經營二手名牌包包.飾品.手錶.服飾.鞋子及其他產品,
                                        除了實體店面外,也有經營網路拍賣業務,線上直播銷售，商品種類眾多。</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder2 tablepad1">實體店面位置</td>
                                        <td class="tableborder2 tablepad2">新田店(總店)07-2212288，高雄市前金區新田路265號；明誠店07-3951717，高雄市三民區明誠一路659號</td>
                                    </tr>
                                </tbody>
                            </table> */}
                        {/* </div> */}
                    </section>



        </Layout>

                );
}


                export default AboutUs;
