import React, { useState, useEffect } from 'react';
import Layout from 'Layout';
import SubList from '../components/Sub/SubList';
import axios from '../commons/axios';
import { useLocation } from 'react-router-dom';

const Sub = (props) => {
    const [plan, setPlan] = useState([]);
    //const fromMember = useLocation();
    const GetPlan = async () => {
        try {
            const result = await axios.get("/api/GetPlan");
            setPlan(result.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        GetPlan();
    }, [])

    return (
        <Layout>
            <SubList plan={plan} />
        </Layout>

    );
}


export default Sub;

