import React,{useState} from 'react';
import Detail from '../../images/Detail.png';
import { Link} from 'react-router-dom';
import Layout from '../../Layout';
import Customer from 'components/Transaction/Customer';
import Delivery from 'components/Transaction/Delivery';

export default function ThirdCart(props) {

    const [customer,setCustomer] = useState(props.location.state.customer);
    const { pId, name, price, og_price, level, length, width, height, detail, note } = props.location.state.product;
    const FirstImage = props.location.state.image;
    return (
        <React.Fragment>
           <Layout>
                <div className="has-text-centered">訂單確認</div>
                <div className="w100per textcenter martb20px">
                    <h1 className="content is-large fontbold">您的訂單已成立</h1>
                </div>

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
                <div className="btnarea">
                    <Link to="/">
                        <button className="cartbtn">確認</button>
                    </Link>
                </div>

           </Layout>
        </React.Fragment>


    );
}