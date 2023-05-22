import React, { useState, useEffect } from "react"
import Heart from "react-heart"
import Contact from "../images/contact.png"
import Favorites from "components/Favorite/Favorites"
import { Link } from "react-router-dom"
import Layout from "Layout"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../css/verify.css"
import axios from "../commons/axios"
import { toast } from "react-toastify"
import { Cipher } from "crypto"
import { useParams } from "react-router-dom"
SwiperCore.use([Pagination, Navigation])

export default function ProductDetail(props) {
  const { pId, isFavoriteToDetail } = useParams()
  const [product, setProduct] = useState([])
  const [image, setImage] = useState([])
  const [isFavorite, setIsFavorite] = useState(/true/i.test(isFavoriteToDetail))
  const [status, setStatus] = useState("")

  const RequestProductDetail = async (pId) => {
    try {
      const result = await axios.post("/api/productDetail", { pId })
      setProduct(result.data[0])
    } catch (err) {
      console.error(err)
    }
  }

  const productStatus = async (pId) => {
    try {
      const result = await axios.post("/api/productStatus", { pId })
      setStatus(result.data[0].status)
    } catch (err) {
      console.error(err)
    }
  }

  const RequestProductDetailImage = async (pId) => {
    try {
      const resultImage = await axios.post("/api/productDetailImage", { pId })
      const imageArray = []
      for (var i = 0; i < resultImage.data.length; i++) {
        imageArray.push(resultImage.data[i].image)
      }
      setImage(imageArray)
    } catch (err) {
      console.error(err)
    }
  }

  const AddRecord = async (uId, pId) => {
    try {
      const result = await axios.post("/api/addRecord", { pId, uId })
    } catch (err) {
      console.error(err)
    }
  }
  const tt = () => {
    window.history.back();
  }

  useEffect(() => {
    const user = global.auth.getUser() || null
    window.scrollTo({
      top: 0
    })
    RequestProductDetail(pId)
    RequestProductDetailImage(pId)
    productStatus(pId)
    if (user) {
      const uId = user.uId
      AddRecord(uId, pId)
    }
  }, [])

  const addFavorite = () => {
    if (!global.auth.isLogin()) {
      props.history.push("/login")
      return
    }
    const user = global.auth.getUser() || {}
    const email = user.email
    const res = axios.post(`/api/addFavorite`, { product, email })
    setIsFavorite(!isFavorite)
  }

  const deleteFavorite = () => {
    const id = product.pId
    axios.delete(`/api/deleteFavorite/${id}`).then((res) => {
      console.log(res)
    })
    setIsFavorite(!isFavorite)
  }
  const { name, price, og_price, level, length, width, height, detail, note } = product

  const addCart = () => {
    if (!global.auth.isLogin()) {
      props.history.push("/login")
      toast.info("Please Login First")
      return
    }
    const user = global.auth.getUser() || {}
    const uId = user.uId
    const email = user.email
    axios.post("/api/userPlan", { uId }).then((res) => {
      if (res.data.length == 0) {
        toast.error("請先訂閱方案!")
        props.history.push({
          pathname: "/sub",
        })
      } else {
        axios.post(`/api/addCart`, { pId, email }).then((res) => {
          if (res.data.message == "購物車中已有其他商品，請先清空購物車") {
            toast.error(res.data.message)
            props.history.push("/cartUpdate")
          } else if (res.data.message == "您目前已租用其他商品") {
            toast.error(res.data.message)
          } else if (res.data.message == "此信箱尚未驗證，請先驗證信箱。") {
            toast.error(res.data.message)
            props.history.push("/verify")
          } else if (res.data.message == "您的訂閱方案已過期") {
            toast.error(res.data.message)
          } else {
            props.history.push("/cartUpdate")
          }
        })
      }
    })
  }

  return (
    <React.Fragment>
      <Layout>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          className="mySwiper mySwiperimg imagewidth"
        >
          {image.map((i) => {
            return (
              <SwiperSlide>
                {" "}
                <img src={i} />
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="w90per marlr5per">
          <div className="has-text-centered">
            <div className="columns is-mobile">
              <div className="column martb20px has-text-left">
                <strong>{name}</strong>
              </div>
            </div>
          </div>
          <p className="has-text-right">
            <strong>原價 ${og_price}</strong>
          </p>
          <div className="w100per">
            <div className="inlineblock vertical-align-center w50per">
              <span class="icon vertical-align-bottom">
                {isFavorite == true ? (
                    <Heart isActive={isFavorite} onClick={deleteFavorite} />
                ) : (
                  <Heart isActive={isFavorite} onClick={addFavorite} />
                )}
              </span>
              <div className="middleblank"></div>
              <span class="icon vertical-align-bottom marl10px">
                <img src={Contact} />
              </span>
            </div>
            <div className="inlineblock vertical-align-center w50per textright">
              <strong>買斷 ${price}</strong>
            </div>
          </div>

          <div className="link-top1 mart20px"></div>
          <div className="content martb20px">
            <h1 className="content is-large">商品資訊</h1>
          </div>

          <div className="productdetail">
            <div class="item1">商品編號：</div>
            <div class="item2">000{pId}</div>
          </div>
          <div className="productdetail">
            <div class="item1">商品尺寸：</div>
            <div class="item2">
              {length}x{width}x{height}
            </div>
          </div>
          <div className="productdetail">
            <div class="item1">商品敘述：</div>
            <div class="item2">{detail}</div>
          </div>
          <div className="productdetail">
            <div class="item1">附有配件備註：</div>
            <div class="item2">{note}</div>
          </div>
          <div className="blankspace"></div>
          <div className="link-top1"></div>
          {status == 'available' ? (
            <div className="btnarea">
              <button class="btnindetail" onClick={addCart}>
                確定租用
              </button>

              <div className="middleblank"></div>
              <button class="btnindetail" onClick={addCart}>
                確定買斷
              </button>
            </div>
          ) : (
              <div className="btnarea">
                <button class="btnindetail">商品出租中</button>
              </div>
          )}
          {(global.auth.getUser()) ? (
              <React.Fragment>
                <div className="link-top1"></div>
                <p className="has-text-centered mt-2">您可能喜歡 ...</p>
                <Favorites />
              </React.Fragment>
            ) : (
              <div></div>
            )}
        </div>  
        
      </Layout>
    </React.Fragment>
  )
}
