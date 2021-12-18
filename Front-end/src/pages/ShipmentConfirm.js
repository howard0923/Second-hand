import React, { useEffect, useState } from 'react';
import Layout from 'Layout';
import AdminOrderDetail from 'components/Admin/AdminOrderDetail';
import AdminCustomerDetail from 'components/Admin/AdminCustomerDetail';
import axios from '../commons/axios';
import { toast } from 'react-toastify';

export default function ShipmentConfirm(props) {
    const order = props.location.state.order;
    const { uId, pId, tId } = order
    const [product, setProduct] = useState([]);
    const [plan, setPlan] = useState([]);
    const [customer, setCustomer] = useState([]);
    const { email } = customer;
    const { deliveryId } = order;

    const RequestProduct = async () => {
        try {
            const result = await axios.post(
                "/api/adminGetTransactionProduct", { pId }
            )
            setProduct(result.data[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    const RequestCustomerProfile = async () => {
        try {
            const result = await axios.post(
                "/api/adminCustomerProfile", { uId }
            )
            setCustomer(result.data[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    const RequestPlan = async () => {
        try {
            const result = await axios.post(
                "/api/adminGetPlan", { uId }
            )
            setPlan(result.data[0]);
        }
        catch (err) {
            console.log(err);
        }
    }

    const confirmShip = async () => {
        try {
            const user = global.auth.getUser() || {};
            const uId = user.uId;
            const result = await axios.post(
                "/api/adminConfirmShip", { uId, email, tId }
            )
            toast.success(result.data.message)
            props.history.push({
                pathname: '/adminorder'
              })
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        RequestProduct();
        RequestPlan();
        RequestCustomerProfile();
    }, [])
    return (
        <Layout>
            <p className="fontbold fontxlarge textcenter martb30px">出貨確認</p>
            <section class="w80per marginlrauto mb-4">
                <div className="w30per textcenter fontbold">訂單資訊</div>
                <p></p>
            </section>
            <AdminOrderDetail
                product={product}
                order={order}
                plan={plan}
            />
            <div className="link-top"></div>
            <section class="w80per marginlrauto mt-4">
                <div className="w30per textcenter fontbold">顧客資料</div>
            </section>
            <AdminCustomerDetail
                customer={customer}
            />
            <div className="field is-grouped is-grouped-centered">
                <div className="control">
                    {deliveryId > 0 ? (
                       <button className="button is-link">已出貨</button>
                    ) :
                        <button className="button is-link" onClick={confirmShip}>確認出貨</button>
                    }
                </div>
            </div>
        </Layout>
    );
}
