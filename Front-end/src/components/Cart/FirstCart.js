import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../commons/axios';
export default function FirstCart(props) {
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState([]);
    //const [planPrice,setPlanPrice] = useState();
    const user = global.auth.getUser() || {}
    const email = user.email;


    const getCartProduct = async () => {
        try {
            const result = await axios.post("/api/getCartProduct", { email });
            setProduct(result.data[0]);

        } catch (err) {
            console.error(err)
        }
    }

    // const getPlanPrice = async () => {
    //     try {
    //         const result = await axios.post("/api/userPlan", { uId });
    //         const planId = result.data[0].planId;
    //         const result2 = await axios.post("/api/getPlanPrice",{planId});
    //         setPlanPrice(result2.data[0].price);
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    const getCartProductImage = async () => {
        try {
            const resultImage = await axios.post("/api/getCartProductImage", { email });
            const imageArray = [];
            for (var i = 0; i < resultImage.data.length; i++) {
                imageArray.push(resultImage.data[i].image);
            }
            setImage(imageArray);

        } catch (err) {
            console.error(err)
        }
    }


    useEffect(() => {
        getCartProduct();
        getCartProductImage();
        // getPlanPrice();
    }, [])

    const { pId, name, price} = product;
    const FirstImage = image;

    const deleteCart = () => {
        axios.post("/api/deleteCart", { email, pId }).then(res => {
            setProduct([]);
            setImage([]);
        });
    };
    return (

        <React.Fragment>
            {!pId? (
                <React.Fragment>
                    <div>你的購物車為空</div>
                </React.Fragment>

            ) :
                <React.Fragment>
                    <div className="has-text-centered">步驟一</div>
                    <div className="w100per textcenter martb20px">
                        <h1 className="content is-large fontbold">您的購物車</h1>
                    </div>

                    <div className="w100per h150px">
                        <div className="inlineblock h100per w40per">
                            <figure className="image is-128x128 mt-3 ml-4">
                                <img src={FirstImage[0]} />
                            </figure>
                        </div>

                        <div className="inlineblock w60per h100per vertical-align-top padforinfo positionrelative textjustify">
                            <p className="fontsmall">{name}</p>
                            <p className="staymiddler fontbold">$ {price}</p>
                            <p className="staybr" onClick={deleteCart}>
                                <i class="fas fa-trash"></i>
                            </p>
                        </div>
                    </div>

                    <div className="w100per martb30px">
                        <div className="inlineblock w50per padl8 fontbold fontlarge">
                            <p>總計</p>
                        </div>
                        <div className="inlineblock w50per textright padr8 fontbold fontlarge">
                            <p>1 項</p>
                        </div>
                    </div>
                    <div className="btnarea">
                        <Link to={{
                            pathname: "/secondCart",
                            state: {
                                product:  product ,
                                image:   image
                            }
                        }}>
                            <button className="cartbtn">前往結帳</button>
                        </Link>
                    </div>
                </React.Fragment>
            }

        </React.Fragment>


    );
}