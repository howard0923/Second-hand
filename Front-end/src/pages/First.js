import React from 'react';
import Layout from 'Layout';
import { Link } from 'react-router-dom';
import ImagePagination from "react-image-pagination";
import ImgSrc1 from '../images/First.png';
import ImgSrc2 from '../images/Second.jpeg';
import ImgSrc3 from '../images/Third.jpeg';


const First = () => {
    return (
        <Layout>
            <figure className="image-scale">
                <ImagePagination
                    pages={[
                        { src: ImgSrc1 },
                        { src: ImgSrc2 },
                        { src: ImgSrc3 }
                    ]}
                    dotDisplay={true}
                    s
                />
            </figure>
        
            <div class="columns is-centered ">
                <div class="column is-narrow has-text-centered mt-6 ">
                    <Link to="/">
                        <button class="button is-large ">立即開始選購 &gt;</button>
                    </Link>
                </div>
                <div class="column is-narrow has-text-centered">
                        <button class="button is-medium is-black">查看活動詳情</button>
                </div>
            </div>

        </Layout>





    );
}


export default First;
