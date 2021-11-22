import React from 'react';


export default function SubPlan(props) {
    return (
        <React.Fragment>

            <div className="content ml-4 mt-3">
                <h1 className="content is-large">訂閱方案</h1>
            </div>

            <div className="columns is-mobile ">
                <div class="column is-3 ml-4 ">訂閱方案</div>
                <div class="column is-narrow ml-5 ">方案A</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-3 ml-4">到期日</div>
                <div class="column is-narrow ml-5 ">2021/12/31</div>
            </div>

        </React.Fragment>


    );
}