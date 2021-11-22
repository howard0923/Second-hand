import React, { useState, useEffect } from 'react';
import axios from 'commons/axios';
import { Link } from 'react-router-dom';

export default function TransList(props) {
    const [order, setOrder] = useState([]);

    const user = global.auth.getUser() || {}

    const uId = user.uId;

    const getOrder = async () => {
        try {
            const result = await axios.post("http://140.117.71.141:3001/api/getOrder", { uId });
            for (var i = 0; i < result.data.length; i++) {
                result.data[i].date = new Date(result.data[i].date).toLocaleString("zh-TW", {
                    timeZone: "Asia/Taipei",
                })
            }
            setOrder(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getOrder();
    }, [])

   
    return (
        <section class="section  ">
            <div className="columns is-centered is-mobile">

                <table class="table is-bordered is-four-fifths">

                    <thead>
                        <tr>
                            <th>訂單編號</th>
                            <th>訂單日期</th>
                            <th>訂單狀態</th>
                        </tr>

                    </thead>
                    <tbody>

                        {order.map(o => {
                            return (

                                <tr onClick={() => props.Detail(o)}>
                                    <td>{o.tId}</td>
                                    <td>{o.date}</td>
                                    <td>{o.delivery}</td>

                                </tr>


                            );
                        })
                        }
                    </tbody>
                </table>

            </div>
        </section>
    );
}