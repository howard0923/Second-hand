import React from "react"
import "../css/verify.css"
import red from "../images/img/red.jpg"
import black from "../images/img/black.jpg"
import white from "../images/img/white.jpg"
import brown from "../images/img/brown.jpg"
import yellowwhite from "../images/img/yellowwhite.jpg"
import littleblue from "../images/img/littleblue.jpg"
import pink from "../images/img/pink.jpg"
import littlepink from "../images/img/littlepink.jpg"
import grey from "../images/img/grey.jpg"
import yellow from "../images/img/yellow.jpg"

import type1 from "../images/img/type1.jpg"
import type3 from "../images/img/type3.jpg"
import type4 from "../images/img/type4.png"
import type5 from "../images/img/type5.png"
import type6 from "../images/img/type6.jpg"
import type7 from "../images/img/type7.png"
import type8 from "../images/img/type8.jpg"
import type9 from "../images/img/type9.jpg"
import type10 from "../images/img/type10.png"
import type12 from "../images/img/type12.png"
import axios from "commons/axios"

import chanel from "../images/img/chanel.png"
import bally from "../images/img/bally.png"
import lv from "../images/img/LV.png"
import celine from "../images/img/celine.png"
import coach from "../images/img/coach.png"
import dior from "../images/img/dior.png"
import fendi from "../images/img/fendi.png"
import gucci from "../images/img/gucci.png"
import prada from "../images/img/prada.png"

function SideBar(props) {
  //-----------------------color function---------------------------
  function LikeColorgrey() {
    const likeColor = "grey"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("grey").style.borderStyle === "solid") {
          document.getElementById("grey").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("grey").style.borderStyle = "solid"
        }
      })
  }
  function LikeColoryellow() {
    const likeColor = "yellow"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("yellow").style.borderStyle === "solid") {
          document.getElementById("yellow").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("yellow").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorRed() {
    const likeColor = "red"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("red").style.borderStyle === "solid") {
          document.getElementById("red").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("red").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorlittlepink() {
    const likeColor = "littlepink"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("littlepink").style.borderStyle === "solid") {
          document.getElementById("littlepink").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("littlepink").style.borderStyle = "solid"
        }
      })
  }
  function LikeColoryellowwhite() {
    const likeColor = "yellowwhite"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("yellowwhite").style.borderStyle === "solid") {
          document.getElementById("yellowwhite").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("yellowwhite").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorlittleblue() {
    const likeColor = "littleblue"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("littleblue").style.borderStyle === "solid") {
          document.getElementById("littleblue").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("littleblue").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorbrown() {
    const likeColor = "brown"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("brown").style.borderStyle === "solid") {
          document.getElementById("brown").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("brown").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorblack() {
    const likeColor = "black"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("black").style.borderStyle === "solid") {
          document.getElementById("black").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("black").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorwhite() {
    const likeColor = "white"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("white").style.borderStyle === "solid") {
          document.getElementById("white").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("white").style.borderStyle = "solid"
        }
      })
  }
  function LikeColorpink() {
    const likeColor = "pink"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeColorChange`, {
        likeColor,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("pink").style.borderStyle === "solid") {
          document.getElementById("pink").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeColorDelete`, {
            likeColor,
            email,
          })
        } else {
          document.getElementById("pink").style.borderStyle = "solid"
        }
      })
  }
  //------------------------------liketype----------------------------------------

  function Liketype1() {
    const likeType = "1"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t1").style.borderStyle === "solid") {
          document.getElementById("t1").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t1").style.borderStyle = "solid"
        }
      })
  }
  function Liketype3() {
    const likeType = "3"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t3").style.borderStyle === "solid") {
          document.getElementById("t3").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t3").style.borderStyle = "solid"
        }
      })
  }
  function Liketype4() {
    const likeType = "4"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t4").style.borderStyle === "solid") {
          document.getElementById("t4").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t4").style.borderStyle = "solid"
        }
      })
  }
  function Liketype5() {
    const likeType = "5"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t5").style.borderStyle === "solid") {
          document.getElementById("t5").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t5").style.borderStyle = "solid"
        }
      })
  }
  function Liketype6() {
    const likeType = "6"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t6").style.borderStyle === "solid") {
          document.getElementById("t6").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t6").style.borderStyle = "solid"
        }
      })
  }
  function Liketype7() {
    const likeType = "7"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t7").style.borderStyle === "solid") {
          document.getElementById("t7").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t7").style.borderStyle = "solid"
        }
      })
  }
  function Liketype8() {
    const likeType = "8"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t8").style.borderStyle === "solid") {
          document.getElementById("t8").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t8").style.borderStyle = "solid"
        }
      })
  }
  function Liketype9() {
    const likeType = "9"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t9").style.borderStyle === "solid") {
          document.getElementById("t9").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t9").style.borderStyle = "solid"
        }
      })
  }
  function Liketype10() {
    const likeType = "10"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t10").style.borderStyle === "solid") {
          document.getElementById("t10").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t10").style.borderStyle = "solid"
        }
      })
  }
  function Liketype12() {
    const likeType = "12"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeTypeChange`, {
        likeType,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("t12").style.borderStyle === "solid") {
          document.getElementById("t12").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeTypeDelete`, {
            likeType,
            email,
          })
        } else {
          document.getElementById("t12").style.borderStyle = "solid"
        }
      })
  }
  //------------------------------------user like brand ----------------------------
  function Likebrand3() {
    const likeBrand = "3"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b3").style.borderStyle === "solid") {
          document.getElementById("b3").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b3").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand6() {
    const likeBrand = "6"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b6").style.borderStyle === "solid") {
          document.getElementById("b6").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b6").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand8() {
    const likeBrand = "8"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b8").style.borderStyle === "solid") {
          document.getElementById("b8").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b8").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand11() {
    const likeBrand = "11"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b11").style.borderStyle === "solid") {
          document.getElementById("b11").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b11").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand17() {
    const likeBrand = "17"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b17").style.borderStyle === "solid") {
          document.getElementById("b17").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b17").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand18() {
    const likeBrand = "18"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b18").style.borderStyle === "solid") {
          document.getElementById("b18").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b18").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand19() {
    const likeBrand = "19"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b19").style.borderStyle === "solid") {
          document.getElementById("b19").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b19").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand20() {
    const likeBrand = "20"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b20").style.borderStyle === "solid") {
          document.getElementById("b20").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b20").style.borderStyle = "solid"
        }
      })
  }
  function Likebrand21() {
    const likeBrand = "21"
    const user = global.auth.getUser() || {}
    const email = user.email
    axios
      .post(`http://140.117.71.141:3001/api/LikeBrandChange`, {
        likeBrand,
        email,
      })
      .then((res) => {
        console.log(res)
        if (document.getElementById("b21").style.borderStyle === "solid") {
          document.getElementById("b21").style.borderStyle = "none"
          axios.post(`http://140.117.71.141:3001/api/LikeBrandDelete`, {
            likeBrand,
            email,
          })
        } else {
          document.getElementById("b21").style.borderStyle = "solid"
        }
      })
  }

  function deleteAllBorder() {
    for (var i = 3; i <= 10; i++) document.getElementById("t" + i).style.borderStyle = "none"
    document.getElementById("t1").style.borderStyle = "none"
    document.getElementById("t12").style.borderStyle = "none"

    document.getElementById("red").style.borderStyle = "none"
    document.getElementById("grey").style.borderStyle = "none"
    document.getElementById("pink").style.borderStyle = "none"
    document.getElementById("littlepink").style.borderStyle = "none"
    document.getElementById("littleblue").style.borderStyle = "none"
    document.getElementById("yellowwhite").style.borderStyle = "none"
    document.getElementById("white").style.borderStyle = "none"
    document.getElementById("black").style.borderStyle = "none"
    document.getElementById("brown").style.borderStyle = "none"
    document.getElementById("yellow").style.borderStyle = "none"
    document.getElementById("t12").style.borderStyle = "none"
  }

  return (
    <div className={`sidebar-menu${props.isMenuOpen === true ? " open" : ""}`}>
      <div className="columns is-mobile">
        <div>
          {/* <button
            type="button"
            className="button small is-outlined is-link is-rounded mt-3 sidebarfinish"
            onClick={() => {
              props.onMenuToggle()
              deleteAllBorder()
            }}
          >
            跳過
          </button> */}
        </div>
        <div className="column finishmiddle">
          <button
            type="button"
            className="button small is-outlined is-link is-rounded mt-3 sidebarfinish"
            onClick={() => {
              props.onMenuToggle()
              deleteAllBorder()
            }}
          >
            完成
          </button>
        </div>
      </div>
      <p class="has-text-centered is-size-4">請選擇您喜好的分類</p>
      <div class="link-top"></div>
      <div className="sidebarmiddle">
        <div className="sidebarmiddlefont">顏色</div>
        <img id="red" src={red} className="colorCircle" onClick={LikeColorRed}></img>
        <img id="littlepink" src={littlepink} className="colorCircle" onClick={LikeColorlittlepink}></img>
        <img id="pink" src={pink} className="colorCircle" onClick={LikeColorpink}></img>
        <img id="brown" src={brown} className="colorCircle" onClick={LikeColorbrown}></img>
        <img id="yellow" src={yellow} className="colorCircle" onClick={LikeColoryellow}></img>
        <img id="yellowwhite" src={yellowwhite} className="colorCircle" onClick={LikeColoryellowwhite}></img>
        <img id="littleblue" src={littleblue} className="colorCircle" onClick={LikeColorlittleblue}></img>
        <img id="grey" src={grey} className="colorCircle" onClick={LikeColorgrey}></img>
        <img id="white" src={white} className="colorCircle" onClick={LikeColorwhite}></img>
        <img id="black" src={black} className="colorCircle" onClick={LikeColorblack}></img>
        <hr></hr>
        <div className="sidebarmiddlefont">包型</div>
        <img id="t1" src={type1} className="colorCircle" onClick={Liketype1}></img>
        <img id="t3" src={type3} className="colorCircle" onClick={Liketype3}></img>
        <img id="t4" src={type4} className="colorCircle" onClick={Liketype4}></img>
        <img id="t5" src={type5} className="colorCircle" onClick={Liketype5}></img>
        <img id="t6" src={type6} className="colorCircle" onClick={Liketype6}></img>
        <img id="t7" src={type7} className="colorCircle" onClick={Liketype7}></img>
        <img id="t8" src={type8} className="colorCircle" onClick={Liketype8}></img>
        <img id="t9" src={type9} className="colorCircle" onClick={Liketype9}></img>
        <img id="t10" src={type10} className="colorCircle" onClick={Liketype10}></img>
        <img id="t12" src={type12} className="colorCircle" onClick={Liketype12}></img>
        <hr></hr>
        <div className="sidebarmiddlefont">品牌</div>
        <img id="b3" src={chanel} className="colorCircle" onClick={Likebrand3}></img>
        <img id="b6" src={bally} className="colorCircle" onClick={Likebrand6}></img>
        <img id="b8" src={lv} className="colorCircle" onClick={Likebrand8}></img>
        <img id="b11" src={celine} className="colorCircle" onClick={Likebrand11}></img>
        <img id="b17" src={coach} className="colorCircle" onClick={Likebrand17}></img>
        <img id="b18" src={dior} className="colorCircle" onClick={Likebrand18}></img>
        <img id="b19" src={fendi} className="colorCircle" onClick={Likebrand19}></img>
        <img id="b20" src={gucci} className="colorCircle" onClick={Likebrand20}></img>
        <img id="b21" src={prada} className="colorCircle" onClick={Likebrand21}></img>
      </div>
    </div>
  )
}
export default SideBar
