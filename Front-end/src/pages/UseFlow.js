import React from "react"
import Layout from "Layout"
import flow1 from "../images/Flow/FLOW-1.png"
import flow2 from "../images/Flow/FLOW-2.png"
import flow3 from "../images/Flow/FLOW-3.png"
import flow4 from "../images/Flow/FLOW-4.png"
import flow5 from "../images/Flow/FLOW-5.png"
import flow6 from "../images/Flow/FLOW-6.png"
import flow0 from "../images/Flow/FLOW-0.png"
import flow00 from "../images/Flow/FLOW-00.png"
import { Link } from "react-router-dom"

import "../css/verify.css"
import "bulma/css/bulma.css"
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Pagination, Navigation } from "swiper/core"
import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
SwiperCore.use([Pagination, Navigation])

const useFlow = (props) => {
  return (
    <Layout>
      <section class="section">
        <div>
          <div className="useflowtitle">
            {/* <i class="fas fa-book fa-2x"></i> */}
            <br></br>
            {/* <i class="fas fa-3x">操作指南</i> */}
            <br></br>

            <br></br>

            <br></br>
          </div>
          <br></br>
          <div>
            <Swiper
              pagination={{
                dynamicBullets: true,
              }}
              className="mySwiper swipersize"
            >
              <SwiperSlide>
                <img src={flow00} className="flowpicsize" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow0} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow1} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow2} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow3} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow4} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow5} />
              </SwiperSlide>
              <SwiperSlide>
                <img src={flow6} />
              </SwiperSlide>
              <SwiperSlide>
                <Link to="/">
                  <button className="loadingAni1 startshop">開始購物</button>
                </Link>
              </SwiperSlide>
            </Swiper>

            {/* <img src={flow0}></img> */}
          </div>
          <br></br>
          <br></br>
          <Link to="/">
            <button id="idleflow" className="loadingAni1">
              略過
            </button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default useFlow
