import React from "react"
import { withRouter } from "react-router-dom"
import axios from "../commons/axios"
//import { toast } from "react-toastify"
import { formatPrice } from "commons/helper"
//import EditInventory from "components/EditInventory"
import { Link } from "react-router-dom"
import Heart from "react-heart"

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: this.props.product.isFavorite || false
    }
  }

  // addCart = async () => {
  //   if (!global.auth.isLogin()) {
  //     this.props.history.push("/login")
  //     toast.info("Please Login First")
  //     return
  //   }
  //   try {
  //     const user = global.auth.getUser() || {}
  //     const email = user.email
  //     const { id, name, image, price } = this.props.product
  //     const res = await axios.post("/api/carts", {
  //       email,
  //       id,
  //     })

  //     const carts = res.data
  //     if (carts) {
  //       toast.success("Add Cart Success")
  //     }
  //   } catch (error) {
  //     toast.error("Add Cart Failed")
  //   }
  // }

  // renderMangerBtn = () => {
  //   const user = global.auth.getUser() || {}
  //   if (user.type === 1) {
  //     return (
  //       <div className="p-head has-text-right" onClick={this.toEdit}>
  //         <span className="icon edit-btn">
  //           <i className="fas fa-sliders-h"></i>
  //         </span>
  //       </div>
  //     )
  //   }
  // }

  addFavorite = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login")
      return
    }
    const user = global.auth.getUser() || {}
    const email = user.email
    const product = this.props.product
    axios.post(`/api/addFavorite`, { product, email }).then((res) => {
    })
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  deleteFavorite = () => {
    const id = this.props.product.pId
    axios.delete(`/api/deleteFavorite/${id}`).then((res) => {
      console.log(res)
    })
    this.setState({ isFavorite: !this.state.isFavorite })
  }
  render() {
    const { pId, name, image, tags, price, status } = this.props.product
    const _pClass = {
      available: "product",
      unavailable: "product out-stock",
    }
    return (
      <div className={_pClass[status]}>
        <Link
          to={{
            pathname: `/productDetail/${pId}/${this.state.isFavorite}`,
            state: {
              pId: { pId },
              isFavorite: this.state.isFavorite,
            },
          }}
        >
          <div className="img-wrapper">
            <figure className="image is-4by3">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="p-content">

            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
        </Link>
        <div className="p-footer positionrelative">
          <p className="price">{formatPrice(price)}</p>
          <span className="icon is-pulled-right ">
            {this.state.isFavorite === true ? (
              <Heart isActive={this.state.isFavorite} onClick={this.deleteFavorite} />
            ) : (
              <Heart isActive={this.state.isFavorite} onClick={this.addFavorite} />
            )}
          </span>
        </div>
      </div>
    )
  }
}

export default withRouter(Product)
