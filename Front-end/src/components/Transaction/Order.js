import React, { useState, useEffect } from 'react';
import axios from 'commons/axios';
import { toast } from 'react-toastify';


export default function Order(props) {
   
    const { pId,tId,date,delivery,isConsummerReceived } = props.order;
    const [product, setProduct] = useState([]);
    const [confirmButton,setConfirmButton] = useState(false);

    const RequestProdcutInfo = async () => {
        try {
            const result = await axios.post(
                "http://140.117.71.141:3001/api/orderGetProduct", { pId }
            )
            setProduct(result.data[0]);
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        RequestProdcutInfo();
    }, [])
    const {name,image} = product;

    const Confirm = async () => {
        try{
            const result = await axios.post(
                "http://140.117.71.141:3001/api/confirmTransaction",{tId}
            );
            setConfirmButton(true)
            toast.success('訂單確認成功!');
        }
        catch(err){
            console.error(err);
        }
    }
    

    return (
        <React.Fragment>

            <div className="content ml-4 mt-6">
                <h1 className="content is-large">訂單資訊</h1>
            </div>

            <div className="columns is-mobile is-one-quarter">
                <div className="column">
                    <figure className="image is-128x128 mt-3 ml-4">
                        <img src={image} />
                    </figure>
                </div>

                <div className="column mt-3 mr-6 has-text-left">
                    <p className="">{name}</p>
                </div>

            </div>
            <p className="has-text-right mr-6"><strong>總計1項</strong></p>
            <div className="columns is-mobile ">
                <div class="column is-narrow ml-4 ">訂單編號</div>
                <div class="column is-narrow ml-6 ">{tId}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">訂單日期</div>
                <div class="column is-narrow ml-6 ">{date}</div>
            </div>
            <div className="columns is-mobile">
                <div class="column is-narrow ml-4">訂單狀態</div>
                <div class="column is-narrow ml-6 ">{delivery}</div>
            </div>
            {isConsummerReceived === null && delivery === 'Arrived' && confirmButton === false ? (
              <button className="button is-black cancelmodify" onClick={Confirm}>
                確認收貨
              </button>
            ) : null}
            <div className="link-top"></div>
        </React.Fragment>


    );
}