import React from 'react';


export default function Delivery(props) {

    const {address} = props.customer;
    return (
        <React.Fragment>
            <div className="w90per marlr5per">
                <div className="content ml-4 mart20px">
                    <h1 className="content is-large">送貨資料</h1>
                </div>

                <div className="columns is-mobile ">
                    <div class="column is-3 ml-4 ">送貨方式</div>
                    <div class="column is-narrow ml-5 ">宅配</div>
                </div>
                <div className="columns is-mobile mb-3">
                    <div class="column is-3 ml-4">地址</div>
                    <div class="column is-narrow ml-5 ">{address}</div>
                </div>
            </div>
        </React.Fragment>


    );
}