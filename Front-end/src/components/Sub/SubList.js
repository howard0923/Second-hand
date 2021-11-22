import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function SubList(props) {




    return (
        <React.Fragment>

            <div className="w100per padl5 fontlarge fontbold martb20px">訂閱方案 &gt;</div>
            <div className="w100per">
                {props.plan.map(p => {

                    return (
                        <Link to={{
                            pathname: `/subDetail/${p.planId}`,
                            state:{
                                planId:p.planId
                            }
                        }}>
                            <div className="" key={p.planId}>
                                <div type="button" className="sub">
                                    <p className="fontlarge fontbold">方案{p.planId}</p>
                                    <p>每月{p.price}起</p>
                                </div>
                            </div>
                        </Link>
                    )
                }
                )}
            </div>

        </React.Fragment >
    );
}