import React, { useState, useEffect } from 'react';
import axios from 'commons/axios';


export default function AdminOrderDetail(props) {
    const { name } = props.product;
    const { tId, planId } = props.order;
    const date = new Date(props.order.date).toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
    })
    const start_date = new Date(props.plan.start_date).toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
    })
    const due_date = new Date(props.plan.due_date).toLocaleString("zh-TW", {
        timeZone: "Asia/Taipei",
      })
    


    return (
        <React.Fragment>

            <div className="columns is-mobile ">
                <div class="column is-narrow ml-4 ">訂單編號</div>
                <div class="column is-narrow ml-6 ">{tId}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">訂單日期</div>
                <div class="column is-narrow ml-6 ">{date}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">訂閱方案</div>
                <div class="column is-narrow ml-6 ">{planId}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">租用產品</div>
                <div class="column is-narrow ml-6 ">{name}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">租用開始日</div>
                <div class="column is-narrow ml-6 ">{start_date}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">租用結束日</div>
                <div class="column is-narrow ml-6 ">{due_date}</div>
            </div>
        </React.Fragment>


    );
}