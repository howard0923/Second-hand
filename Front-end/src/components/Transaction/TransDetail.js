import React, { useState, useEffect } from 'react'
import Order from './Order';
import Customer from './Customer';
import Delivery from './Delivery';
import axios from '../../commons/axios';

export default function TransDetail(props) {
  const [customer, setCustomer] = useState([]);
  const user = global.auth.getUser() || {}
  const UserEmail = user.email;
  const isStaff = user.isStaff
  const uId = user.uId;

  const RequestUserProfile = async () => {
    try {
      const result = await axios.post(
        "/api/userProfiles",
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

  return (
    <React.Fragment>
      
        <div className="w90per marlr5per mt-3">
            <button className="ml-2 returnbutton fontxlarge" onClick={props.List}>←</button>
        </div>
       <Order order={props.order}/>
       <Customer customer={customer}/>
       <Delivery customer={customer}/>
    </React.Fragment>
  )
}