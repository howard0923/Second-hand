import React from 'react';
import Layout from 'Layout';
import 'bulma/css/bulma.css';
import image from '../images/contact.png';
const Contact = (props) => {
    return (

        <Layout>
                    <section class="section">
                        <div className="columns is-centered is-vcentered is-mobile">
                            <div className="column is-narrow ">
                                <img src={image} width="50" height="20" />
                            </div>
                            <div className="column title is-narrow">
                                聯絡我們
                            </div>
                        </div>
                        {/* <div class="content is-medium"> */}
                            <table class="has-text-left fontlarge marginlrauto w95per">
                                <thead >
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder1 tablepad1">Line客服</td>
                                        <td class="tableborder1 tablepad2">@id</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder1 tablepad1">Fb粉絲專頁</td>
                                        <td class="tableborder1 tablepad2">二手精品訂閱</td>
                                    </tr>
                                    <tr>
                                        <td class="pl-2 has-text-weight-bold tableborder2 tablepad1">客服信箱</td>
                                        <td class="tableborder2 tablepad2">service@mail.com</td>
                                    </tr>
                                </tbody>
                            </table>
                        {/* </div> */}
                    </section>



        </Layout>

                );
}


                export default Contact;
