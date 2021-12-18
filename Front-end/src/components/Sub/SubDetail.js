import React, { useState, useEffect } from 'react';
import Layout from 'Layout';
import axios from '../../commons/axios';
import { toast } from "react-toastify";
import { checkPrime } from 'crypto';
import { chown } from 'fs';
import { useParams } from 'react-router-dom';
export default function SubDetail(props) {

    const user = global.auth.getUser() || {};
    const uId = user.uId
    const [plan, setPlan] = useState([]);
    const [userPlan, setUserPlan] = useState([]);
    const { planId } = useParams()
    const [planStatus, setPlanStatus] = useState('');
    //const fromMember = useLocation();


    const GetPlanContent = async () => {
        try {
            const result = await axios.post("/api/GetPlanContent", { planId });
            setPlan(result.data[0]);
        }
        catch (error) {
            console.error(error);
        }
    }

    const GetPlanMember = async () => {
        try {
          const result = await axios.post(
            "/api/GetPlanMember",
            { uId }
          )
          setUserPlan(result.data)
          
        } catch (error) {
          console.error(error)
        }
      }

    const changeStatus = () => {
        if(userPlan.length == 0){
            setPlanStatus('前往支付')
        }

        else if (userPlan.planId != planId) {
            setPlanStatus('更改方案')
        }

        else {
            setPlanStatus('續訂方案')
        }
    }

    useEffect(() => {
        GetPlanContent();
        if(uId){
            GetPlanMember()
        }
    }, [])

    useEffect(() => {
       changeStatus();
    }, [userPlan]);

    const { date, price, text } = plan;
    const {due_date} = userPlan || {};
    // const addDays = (current,days) => {
    //     const due_date = new Date(
    //         current.getFullYear(),
    //         current.getMonth(),
    //         current.getDate() + days,
    //         current.getHours(),
    //         current.getMinutes(),
    //         current.getSeconds()
    //         );
    //     return (due_date)
    //   }

    const payForPlan = () => {
        if (!global.auth.isLogin()) {
            props.history.push("/login")
            toast.info("Please Login First")
            return
        }
        // const current = new Date();
        // const due_date = addDays(current,date);
        const result = axios.post(`/api/payForPlan`, { planId, uId, date,planStatus,due_date }).then(res => {
            //console.log(res)
            if(res.data.message == "信箱尚未驗證"){
                toast.error(res.data.message)
                props.history.push("/verify")
            }
            else{
                toast.success(res.data.message)
                window.history.go(-2);
            }
        })

    }

    return (
        <React.Fragment>
            <Layout>

                <div className="w100per padl5 fontlarge fontbold martb20px">訂閱方案 &gt; 方案{planId}</div>
                <div className="sub">
                    <p className="fontlarge fontbold">方案{planId}</p>
                    <p className="fontlarge">{text}</p>

                </div>
                <div className="blockarea">
                    <div className="block">
                        <div className="blockwrap fontbold fontxlarge fontoblique">
                            ${price}<br />TWD
                        </div>
                    </div>
                    <div className="middleblankforblock"></div>
                    <div className="block vertical-align-top">
                        <div className="blockwrap fontbold fontxlarge fontoblique">
                            <p>{date}天</p>
                        </div>
                    </div>
                </div>
                <div className="btnarea">
                    <button className="subbtn" onClick={payForPlan}>{planStatus}</button>
                </div>
            </Layout>
        </React.Fragment>
    );
}