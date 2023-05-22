import React, { useState, useEffect } from 'react';
import Layout from 'Layout';
import { Link } from 'react-router-dom';
import axios from '../commons/axios';
import { cp } from 'fs';

export default function AdminOrder(props) {
    const [order, setOrder] = useState([]);
    const RequestOrder = async () => {
        try {
            const result = await axios.get(
                "/api/adminGetOrder"
            )
            setOrder(result.data);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        RequestOrder();
    }, [])
   
    return (
        <Layout>
            <p className="fontbold fontxlarge textcenter martb30px">訂單查詢</p>
            <section class="w80per marginlrauto">
                <div className="w30per textcenter fontbold">訂單編號</div>
                {order.map(o => {
                    return (
                        <div className="" key={o.tId}>
                            <div className="w100per h30px positionrelative verticalcenter martb30px">
                                <div className="w30per textcenter fontbold positionabsolute left0per">{o.tId}</div>
                                <Link to={{
                                    pathname: "/shipmentconfirm",
                                    state: {
                                        order: o
                                    }
                                }}>
                                    {o.deliveryId > 0 ? (
                                        <button
                                            className="orderbutton fontbold positionabsolute right30per is-black button"
                                        >
                                            已出貨
                                        </button>
                                    ) :
                                        <button className="orderbutton fontbold positionabsolute right30per">出貨</button>
                                    }
                                </Link>
                                <button className="orderbutton fontbold positionabsolute right0per">收貨</button>
                            </div>
                        </div>
                    )
                }
                )
                }
            </section>
        </Layout>
    );
}
