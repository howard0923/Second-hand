import React, { useState } from "react"
import { toast } from "react-toastify"
import axios from "axios"
import Layout from "Layout"
import "../css/verify.css"

class AddInventory extends React.Component {
  state = {
    name: "",
    price: "",
    tags: "",
    image: "",
    status: "available",
  }

  handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState({
      [name]: value,
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // 以下處理圖片上傳預覽及刪除
  state = {
    img: "",
  }
  imgChange = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad = (e) => {
    this.setState({
      img: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete = (e) => {
    e.preventDefault()
    this.setState({
      img: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  state = {
    img2: "",
  }
  imgChange2 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad2)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad2 = (e) => {
    this.setState({
      img2: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete2 = (e) => {
    e.preventDefault()
    this.setState({
      img2: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange3 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad3)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad3 = (e) => {
    this.setState({
      img3: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete3 = (e) => {
    e.preventDefault()
    this.setState({
      img3: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange4 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad4)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad4 = (e) => {
    this.setState({
      img4: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete4 = (e) => {
    e.preventDefault()
    this.setState({
      img4: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange5 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad5)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad5 = (e) => {
    this.setState({
      img5: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete5 = (e) => {
    e.preventDefault()
    this.setState({
      img5: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange6 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad6)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad6 = (e) => {
    this.setState({
      img6: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete6 = (e) => {
    e.preventDefault()
    this.setState({
      img6: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange6 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad6)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad6 = (e) => {
    this.setState({
      img6: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete6 = (e) => {
    e.preventDefault()
    this.setState({
      img6: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange7 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad7)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad7 = (e) => {
    this.setState({
      img7: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete7 = (e) => {
    e.preventDefault()
    this.setState({
      img7: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange8 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad8)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad8 = (e) => {
    this.setState({
      img8: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete8 = (e) => {
    e.preventDefault()
    this.setState({
      img8: "",
    })
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // submit = e => {
  //   e.preventDefault();
  //   const product = { ...this.state };
  //   axios.post('products', product).then(res => {
  //     this.props.close(res.data);
  //     toast.success('Add Success');
  //   });
  // };
  submit = (e) => {
    e.preventDefault()
    const product = { ...this.state }
    axios.post("http://140.117.71.141:3001/api/insert", product).then((res) => {
      console.log(res)
      toast.success("Add Success")
      this.props.history.push("/")
    })
  }

  // showToast = () => {
  //   toast('default');
  //   toast.info('info');
  //   toast.success('success');
  //   toast.warning('warning');
  //   toast.error('error');
  // };

  render() {
    return (
      <Layout>
        <div className="inventory">
          <p className="fontbold fontlarge textcenter martb20px">新增商品</p>
          <form onSubmit={this.submit}>
            <div className="">
              <div className="control">
                <label className="label">
                  <font color="red">*</font>商品名稱
                </label>
                <textarea
                  className="addtextarea hasbottom h20px nobackground"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field mart10px">
              <div className="control positionrelative">
                <label className="label ">商品敘述</label>
                <label className="productBrand">商品品牌</label>
                <select
                  name="brand"
                  value={this.state.brand}
                  onChange={this.handleChange}
                  className="nobackground noborder w60per textright padr6 positionabsolute stayr"
                >
                  <option disabled selected hidden>
                    請選擇
                  </option>
                  <option>coach</option>
                  <option>gucci</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="productBrand">商品顏色</label>
                <select
                  name="color"
                  value={this.state.color}
                  onChange={this.handleChange}
                  className="nobackground noborder w60per textright padr6 positionabsolute stayr"
                >
                  <option disabled selected hidden>
                    請選擇
                  </option>
                  <option>blue</option>
                  <option>green</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="productBrand">商品尺寸</label>
                <span className="w70per positionabsolute stayr">
                  <input
                    type="number"
                    className="w1205per h20px hasbottom nobackground padl2per fontsmall"
                    name="length"
                    value={this.state.length}
                    onChange={this.handleChange}
                  />
                  <input
                    disabled
                    type="text"
                    className="w1205per h20px hasbottom nobackground padl2per fontsmall textcenter padl8px"
                    value="cm"
                  />
                  <input
                    disabled
                    type="text"
                    className="w1205per h20px noborder nobackground textcenter padl4px"
                    value="x"
                  />
                  <input
                    type="number"
                    className="w1205per h20px hasbottom h30px nobackground padl2per fontsmall"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                  />
                  <input
                    disabled
                    type="text"
                    className="w1205per h20px hasbottom nobackground fontsmall textcenter padl8px"
                    value="cm"
                  />
                  <input
                    disabled
                    type="text"
                    className="w1205per h20px noborder nobackground textcenter padl4px"
                    value="x"
                  />
                  <input
                    type="number"
                    className="w1205per h20px hasbottom nobackground padl2per fontsmall"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                  />
                  <input
                    disabled
                    type="text"
                    className="w1205per h20px hasbottom nobackground padl2per fontsmall textcenter padl8px"
                    value="cm"
                  />
                </span>
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="productBrand">商品敘述</label>
                <textarea
                  className="addtextarea hasbottom h20px nobackground w65per vertical-align-bottom positionabsolute stayr"
                  name="state"
                  value={this.state.state}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="productBrand">附有配件備註</label>
                <textarea
                  className="addtextarea hasbottom h20px nobackground w65per vertical-align-bottom positionabsolute stayr"
                  name="note"
                  value={this.state.note}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">
                  <font color="red">*</font>原價
                </label>
                <input
                  type="number"
                  className="w100per hasbottom h30px nobackground"
                  name="price"
                  value={this.state.price}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">
                  <font color="red">*</font>買斷價格
                </label>
                <input
                  type="number"
                  className="w100per hasbottom h30px nobackground"
                  name="buyprice"
                  value={this.state.buyprice}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="label inlineblock">
                  <font color="red">*</font>產品等級
                </label>
                <select
                  name="level"
                  value={this.state.level}
                  onChange={this.handleChange}
                  className="nobackground noborder w60per textright padr6 positionabsolute stayr"
                >
                  <option disabled selected hidden>
                    請選擇
                  </option>
                  <option>blue</option>
                  <option>green</option>
                </select>
              </div>
            </div>

            <div className="field">
              <div className="control w2305per inlineblock">
                <label>
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image1"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image1}
                      onChange={this.imgChange}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img}
                    />
                    <span className="delAvatar" onClick={this.imgDelete}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image2"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image2}
                      onChange={this.imgChange2}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img2}
                    />
                    <span className="delAvatar" onClick={this.imgDelete2}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image3"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image3}
                      onChange={this.imgChange3}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img3}
                    />
                    <span className="delAvatar" onClick={this.imgDelete3}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image4"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image4}
                      onChange={this.imgChange4}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img4}
                    />
                    <span className="delAvatar" onClick={this.imgDelete4}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image5"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image5}
                      onChange={this.imgChange5}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img5}
                    />
                    <span className="delAvatar" onClick={this.imgDelete5}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image6"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image6}
                      onChange={this.imgChange6}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img6}
                    />
                    <span className="delAvatar" onClick={this.imgDelete6}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image7"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image7}
                      onChange={this.imgChange7}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img7}
                    />
                    <span className="delAvatar" onClick={this.imgDelete7}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
              <div className="control w2305per marl2per inlineblock">
                <label className="inllineblock">
                  <div className="imagecover positionrelative textcenter borderwithoutbg">
                    <input
                      type="file"
                      className="displaynone"
                      name="image8"
                      accept="image/gif, image/jpeg, image/png"
                      value={this.state.image8}
                      onChange={this.imgChange8}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.img8}
                    />
                    <span className="delAvatar" onClick={this.imgDelete8}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
            </div>
            {/* <div className="field">
              <div className="control">
                <label className="label">Tags</label>
                <input
                  type="text"
                  className="input"
                  name="tags"
                  value={this.state.tags}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">Image</label>
                <input
                  type="text"
                  className="input"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label className="label">Status</label>
                <div className="select is-fullwidth">
                  <select
                    name="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                  >
                    <option>available</option>
                    <option>unavailable</option>
                  </select>
                </div>
              </div>
            </div> */}
            <br />
            <div className="field is-grouped is-grouped-centered">
              <div className="control">
                <button className="button is-link">確認上架</button>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default AddInventory
