import React, { useState, useEffect } from 'react';
import axios from '../../commons/axios';
import { toast } from 'react-toastify';


export default function Order(props) {
   
    const { pId,tId,date,delivery,isConsummerReceived,isProductReturned } = props.order;
    const [product, setProduct] = useState([]);
    const [confirmButton,setConfirmButton] = useState(false);

    const RequestProdcutInfo = async () => {
        try {
            const result = await axios.post(
                "/api/orderGetProduct", { pId }
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
                "/api/confirmTransaction",{tId}
            );
            setConfirmButton(true)
            toast.success('訂單確認成功!');
        }
        catch(err){
            console.error(err);
        }
    }
    const BackToStore = async () => {
        try{
            const result = await axios.post(
                "/api/backToStore",{tId,pId}
            );
            setConfirmButton(true)
            toast.success('商品歸還成功!');
        }
        catch(err){
            console.error(err);
        }
    }
    

    return (
      <React.Fragment>
        <div className="w90per marlr5per">
          <div className="content ml-4 mt-4">
            <h1 className="content is-large">訂單資訊</h1>
          </div>

          <div className="w100per h128px martb20px">
            <div className="inlineblock h100per picarea">
              <figure className="image is-128x128 mt-3">
                <img src={image} />
              </figure>
            </div>
            {/* <div className="column">
                        <figure className="image is-128x128 mt-3 ml-4">
                            <img src={image} />
                        </figure>
                    </div> */}
            <div className="inlineblock contentarea h100per vertical-align-top contentpadding positionrelative textjustify">
              <p className="fontsmall">{name}</p>
              <p className="totalposition fontlarge">
                <strong>總計1項</strong>
              </p>
            </div>
            {/* <div className="column mt-3 mr-6 has-text-left">
                        <p className="">{name}</p>
                    </div>
                    <p className="has-text-right mr-6"><strong>總計1項</strong></p> */}
          </div>

          <div className="columns is-mobile ">
            <div class="column is-narrow ml-4 ">訂單編號</div>
            <div class="column is-narrow ml-5 ">{tId}</div>
          </div>
          <div className="columns is-mobile">
            <div class="column is-narrow ml-4">訂單日期</div>
            <div class="column is-narrow ml-5 ">{date}</div>
          </div>
          <div className="columns is-mobile">
            <div class="column is-narrow ml-4">訂單狀態</div>
            <div class="column is-narrow ml-5 ">{delivery}</div>
          </div>
          {isConsummerReceived === null &&
            delivery === "Arrived" &&
            confirmButton === false && (
              <button
                className="button is-black cancelmodify floatright marb20px"
                onClick={Confirm}
              >
                確認收貨
              </button>
            )}
          {isConsummerReceived === 1 &&
            delivery === "Arrived" &&
            confirmButton === false &&
            isProductReturned === null && (
              <button
                className="button is-black cancelmodify floatright marb20px"
                onClick={BackToStore}
              >
                歸還商品
              </button>
            )}
          <div className="link-top1 floatclear"></div>
        </div>
      </React.Fragment>
    );
}