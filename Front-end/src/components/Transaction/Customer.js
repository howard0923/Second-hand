import React,{useState,useEffect} from 'react';


export default function Customer(props) {
    
      const {name,email,phone} = props.customer;
    return (
        <React.Fragment>
            <div className="w90per marlr5per">
                <div className="content ml-4 mt-3">
                    <h1 className="content is-large mart20px">顧客資料</h1>
                </div>

                <div className="columns is-mobile ">
                    <div class="column is-3 ml-4 ">顧客名稱</div>
                    <div class="column is-narrow ml-5 ">{name}</div>
                </div>
                <div className="columns is-mobile">
                    <div class="column is-3 ml-4">Email</div>
                    <div class="column is-narrow ml-5 ">{email}</div>
                </div>
                <div className="columns is-mobile">
                    <div class="column is-3 ml-4">電話號碼</div>
                    <div class="column is-narrow ml-5 ">{phone}</div>
                </div>
            </div>
        </React.Fragment>


    );
}