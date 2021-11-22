import React, { useState, useEffect } from 'react';
import Detail from '../../images/Detail.png';
import { Link } from 'react-router-dom';
import Layout from '../../Layout';
import Customer from 'components/Transaction/Customer';
import Delivery from 'components/Transaction/Delivery';
import axios from 'commons/axios';
import { toast } from 'react-toastify';
export default function SecondCart(props) {
  const product = props.location.state.product;
  const { pId, name, price, og_price, level, length, width, height, detail, note } = props.location.state.product;
  const FirstImage = props.location.state.image;
  const user = global.auth.getUser() || {}
  const UserEmail = user.email;
  const isStaff = user.isStaff
  const uId = user.uId;
  const [customer, setCustomer] = useState([]);
  const RequestUserProfile = async () => {
    try {
      const result = await axios.post(
        "http://140.117.71.141:3001/api/userProfiles",
        {
          UserEmail,
          isStaff
        }
      )
      const data = result.data[0]
      setCustomer(data);

    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    RequestUserProfile();
  }, [])

  const handleSubmit = async () => {
    try{
      const res = await axios.post("http://140.117.71.141:3001/api/addOrder", {
        pId,
        uId,
        isStaff
      })
    }
    catch(err){
      console.log(err)
    }
  }

 
 
  return (
    <React.Fragment>
      <Layout>
        <div className="has-text-centered">步驟二</div>

        <div className="w100per h150px martb20px">
          <div className="inlineblock h100per w40per">
            <figure className="image is-128x128 mt-3 ml-4">
              <img src={FirstImage[0]} />
            </figure>
          </div>

          <div className="inlineblock w60per h100per vertical-align-top padforinfo positionrelative textjustify">
            <p className="fontsmall">{name}</p>
            <p className="staymiddlecenter fontlarge"><strong>總計</strong></p>
            <p className="staymiddler fontlarge"><strong>$ {price}</strong></p>
            <p className="staybmiddle fontlarge"><strong>共</strong></p>
            <p className="staybr fontlarge"><strong>1項</strong></p>
          </div>
        </div>

        <div className="link-top"></div>
        <Customer customer={customer} />
        <Delivery customer={customer} />
        <div className="link-top"></div>
        <div className="btnarea">
        <Link to={{
            pathname:"/thirdCart",
            state:{
              customer: customer,
              product: product,
              image:FirstImage
            }          
          }}>
            <button className="cartbtn" onClick={handleSubmit}>提交訂單</button> 
          </Link>
        </div>

      </Layout>
    </React.Fragment>


  );
}