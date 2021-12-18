import React from 'react';


export default function AdminCustomerDetail(props) {
    
     const {name,email,phone,address} = props.customer;
    return (
        <React.Fragment>

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
            </div> <div className="columns is-mobile">
                <div class="column is-3 ml-4">地址</div>
                <div class="column is-narrow ml-5 ">{address}</div>
            </div>

        </React.Fragment>


    );
}