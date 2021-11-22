//import Heart from "react-heart";
import React from 'react';
import Favorite from './Favorite';

const FavoriteList = ({ products }) => {
    return (
    <div>
        <div className="products">
          <div className="columns is-multiline is-mobile">
              {products && products.map((product) => <Favorite key={product.id} {...product} />)}
          </div>
        </div>
    </div>
    );
};
export default FavoriteList;