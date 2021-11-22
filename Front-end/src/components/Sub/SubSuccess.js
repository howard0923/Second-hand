import React from 'react'
import Customer from '../Transaction/Customer';
import SubPlan from './SubPlan';
export default function SubSuccess(props) {
    
    return (
        <React.Fragment>
            <div className="box">訂閱成功</div>
            <Customer />
            <SubPlan />
        </React.Fragment>
    )
}