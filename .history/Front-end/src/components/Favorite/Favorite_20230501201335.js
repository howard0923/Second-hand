import React,{useState,useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import Heart from "react-heart";
import axios from "axios";

function Favorite(props){
    const { id,name, image, tags,status } = props.product;
    const [active, setActive] = useState(true)

    const _pClass = {
      available: 'product',
      unavailable: 'product out-stock'
    };
   
    const deleteFavorite = () => {
      axios.delete(`http://140.117.71.141:3001/api/deleteFavorite/${id}`).then(res => {
    });
    setActive(!active);
  }
    return (
      <div className={_pClass[status]}>
        <div className="img-wrapper">
           
            <figure className="image is-4by3">
              <img src={image} alt={name} />
            </figure>
        </div>
        <div className="p-content">
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
          <span class="icon mt-3 is-pulled-right ">
            <Heart isActive={active} onClick={deleteFavorite}/>
          </span>
        </div>
      </div>
    );
  }

export default withRouter(Favorite);