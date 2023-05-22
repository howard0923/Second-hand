import "../css/verify.css"
import React, { useState } from "react"
import axios from "Axios";
import Layout from "Layout"
import "bulma/css/bulma.css"

function Verifygood() {
  const [uid, setUid] = useState([])
  const [content, setContent] = useState([])
  const [nfcList, setnfcList] = useState([])

  const getNFC = () => {
    if (document.getElementById("uid").value === "") {
      document.getElementById("pic").innerHTML = ""
      document.getElementById("uidempty").innerHTML = "※uid不得為空"
      if (document.getElementById("content").value !== "") {
        document.getElementById("contentempty").innerHTML = ""
      }
    }
    if (document.getElementById("content").value === "") {
      document.getElementById("pic").innerHTML = ""
      document.getElementById("contentempty").innerHTML = "※content不得為空"
      if (document.getElementById("uid").value !== "") {
        document.getElementById("uidempty").innerHTML = ""
      }
    } else if (document.getElementById("uid").value !== "" && document.getElementById("content").value !== "") {
      document.getElementById("uidempty").innerHTML = ""
      document.getElementById("contentempty").innerHTML = ""
      Axios.post("https://140.117.71.141:3011/getnfc", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: "Bearer df498c83-1c88-308e-a224-5408dd67bb7f",
        },
        uid: uid,
        content: content,
      })
        .then((response) => {
          console.log("success")
          console.log(response.data)
          setnfcList(response.data)
          getEther(response.data[0])
        })
        .catch((err) => {
          console.error(err)
          document.getElementById("pic").innerHTML = "無此商品"
        })
    }
  }

  const getEther = (data) => {
    //利用ETHERSCAN API獲取資訊
    console.log(data.nfctext)
    const Reak_URL = "https://rinkeby.etherscan.io/tx/" + data.nfctext
    const BASE_URL =
      "https://api-rinkeby.etherscan.io/api?module=proxy&action=eth_getTransactionByHash&txhash=" + data.nfctext
    document.getElementById("ethlink").innerHTML = "點擊得知以太坊明細"
    document.getElementById("ethlink").setAttribute("href", Reak_URL)

    Axios.get(BASE_URL).then((response) => {
      const content = response.data.result.input
      var contentQM = content.slice(-128, -36) //剔除合約中不重要部分
      const qmContent = hextoascii(contentQM) //得到加密QM值
      console.log(qmContent)
      getipfs(qmContent) //將QM傳參到getipfs函式處理
    })
  }

  //change hex to ascii 轉換合約內容近制
  const hextoascii = (content) => {
    var hex1 = content.toString()
    var hex = hex1.replace(/0x/g, "") //delete 0x number
    var str = ""
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16)) //文字處理合約不必要冗贅內容
    return str
  }

  const getipfs = (QM) => {
    //via IPFS api to get pic
    // var imgurl = "https://ipfs.io/ipfs/" + QM //獲取IPFS圖片
    // var imgurl = "https://ipfs.io/ipfs/" + QM + "?filename=" + QM //獲取IPFS圖片
    var imgurl = "https://ipfs.infura.io/ipfs/" + QM //獲取IPFS圖片

    // var imgurl = "http://localhost:8080/ipfs/" + QM //獲取IPFS圖片

    document.getElementById("pic").innerHTML = '<img className="imgverify1" src="' + imgurl + '"">'
    document.getElementById("pic").style.lineHeight = "100%"
  }

  const changecolor = () => {
    document.getElementById("ethlink").style.color = "#0288D1"
  }

  const changecolorout = () => {
    document.getElementById("ethlink").style.color = "black"
  }

  return (
    <Layout>
      <div className="w80per registerposition mart40px">
        <div className="">
          <label className="fontbold">uId:</label>
          <input
            id="uid"
            type="text"
            className="loginitem h40px"
            onChange={(event) => {
              setUid(event.target.value)
            }}
            required="required"
          ></input>
          <p id="uidempty" className="errortext"></p>
          <label className="fontbold">Content:</label>
          <input
            id="content"
            type="text"
            className="loginitem h40px"
            onChange={(event) => {
              setContent(event.target.value)
            }}
            required="required"
          ></input>
          <p id="contentempty" className="errortext"></p>
          <br />
          <button className="loginbtn" onClick={getNFC}>
            送出
          </button>
          <br /> <br />
          <br />
          {nfcList.map((value, key) => {
            return (
              <div className="employee">
                {/* <h3>uId : {value.nfcuid}</h3>
                <h3>Content : {value.nfctext}</h3> */}
                <a id="ethlink" href="" onMouseOver={changecolor} onMouseOut={changecolorout}></a>
                {/* <h3 id="ethlink"></h3> */}
              </div>
            )
          })}
          <div className="verifyimg fontbold" id="pic">
            圖片
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Verifygood
