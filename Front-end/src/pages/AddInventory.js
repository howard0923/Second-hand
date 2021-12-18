import React, { useState } from "react"
import { toast } from "react-toastify"
import axios from "../commons/axios"
import Layout from "Layout"
import "../css/verify.css"
import CloudinaryUpload from "./cloudinary/cloudinaryUpload"
import update from 'react-addons-update';

class AddInventory extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      org_brand: [],
    org_color: [],
    org_type: [],
    name: "",
    brand: null,
    color:null,
    type: null,
    length: null,
    width: null,
    height:null,
    detail: null,
    note: null,
    price: "",
    buyPrice: "",
    level: null,
    img1: [],
    img2: [],
    img3: [],
    img4: [],
    img5: [],
    img6: [],
    img7: [],
    img8: [],
    image1: [],
    image2: [],
    image3: [],
    image4: [],
    image5: [],
    image6: [],
    image7: [],
    image8: [],
    file:[],
    status: "available"
    };
  }
 
  getBrand = async () => {
    try {
      const response = await axios.get("/api/adminGetBrand")
      this.setState({ org_brand: response.data })
    } catch (error) {
      console.log(error);
    }
  }


  getColor = async () => {
    try {
      const response = await axios.get("/api/adminGetColor")
      this.setState({ org_color: response.data })
    } catch (error) {
      console.log(error);
    }
  }

  getType = async () => {
    try {
      const response = await axios.get("/api/adminGetType")
      this.setState({ org_type: response.data })
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getBrand();
    this.getColor();
    this.getType();
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

  imgChange1 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [0]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad1)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad1 = (e) => {
    this.setState({
      image1: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
   
  }
  imgDelete1 = (e) => {
    e.preventDefault()
    this.setState({
      image1: [],
    })
    delete this.state.file[0];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  imgChange2 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [1]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad2)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad2 = (e) => {
    this.setState({
      image2: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete2 = (e) => {
    e.preventDefault()
    this.setState({
      image2: [],
    })
    delete this.state.file[1];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  imgChange3 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [2]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad3)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad3 = (e) => {
    this.setState({
      image3: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete3 = (e) => {
    e.preventDefault()
    this.setState({
      image3: [],
    })
    delete this.state.file[2];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  imgChange4 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [3]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad4)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad4 = (e) => {
    this.setState({
      image4: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete4 = (e) => {
    e.preventDefault()
    this.setState({
      image4: [],
    })
    delete this.state.file[3];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange5 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [4]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad5)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad5 = (e) => {
    this.setState({
      image5: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete5 = (e) => {
    e.preventDefault()
    this.setState({
      image5: [],
    })
    delete this.state.file[4];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange6 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [5]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad6)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad6 = (e) => {
    this.setState({
      image6: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete6 = (e) => {
    e.preventDefault()
    this.setState({
      image6: [],
    })
    delete this.state.file[5];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange7 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [6]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad7)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad7 = (e) => {
    this.setState({
      image7: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete7 = (e) => {
    e.preventDefault()
    this.setState({
      image7: [],
    })
    delete this.state.file[6];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  imgChange8 = (e) => {
    const file = e.target.files.item(0) // 取得選中檔案們的一個檔案
    this.setState(update(this.state, {
      file: {
        [7]: {
          $set: file
        }
      }
    }));
    const fileReader = new FileReader() // FileReader為瀏覽器內建類別，用途為讀取瀏覽器選中的檔案
    fileReader.addEventListener("load", this.imgLoad8)
    if (file != null) {
      fileReader.readAsDataURL(file) // 讀取完檔案後，變成URL
    }
  }
  // e為第31行發出load之事件
  imgLoad8 = (e) => {
    this.setState({
      image8: e.target.result, // 讀取到DataURL後，儲存在result裡面，指定為img
    })
  }
  imgDelete8 = (e) => {
    e.preventDefault()
    this.setState({
      image8: [],
    })
    delete this.state.file[7];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////
  handleFileUpload = () => {
    const uploadData = new FormData();
    const file = this.state.file;
    for(let i = 0;i < file.length ;i++){
      uploadData.append("file",file[i]);
    }
    CloudinaryUpload(uploadData).then((res) =>{
        console.log(res)
    });
}
  submit = async (e) => {
    e.preventDefault()
    const { name, brand, color, type, length, width, height, detail, note, price, 
            buyPrice, level,status } = this.state;
    try{
      const res = await axios.post("/api/insert", { name, brand, color, type, length, width, height, 
                                               detail,note, price, buyPrice, level,status })
      console.log(res)
      await this.handleFileUpload();
      toast.success(res.data.message);
    }catch(error){
      console.log(error);
      const message = error.response.data.message
      toast.error(message)
    }

  }


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
                  required
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
                  <option selected >
                    請選擇
                  </option>
                  {this.state.org_brand.map((b) => {
                    return (
                      <option key={b.brandId} value={b.brandId}>{b.brand}</option>
                    )
                  })}
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
                  <option selected>
                    請選擇
                  </option>
                  {this.state.org_color.map((c) => {
                    return (
                      <option key={c.colorId} value={c.colorId}>{c.color}</option>
                    )
                  })}
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control positionrelative">
                <label className="productBrand">商品類型</label>
                <select
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                  className="nobackground noborder w60per textright padr6 positionabsolute stayr"
                >
                  <option selected>
                    請選擇
                  </option>
                  {this.state.org_type.map((t) => {
                    return (
                      <option key={t.typeId} value={t.typeId}>{t.type}</option>
                    )
                  })}
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
                  name="detail"
                  value={this.state.detail}
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
                  required
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
                  name="buyPrice"
                  value={this.state.buyPrice}
                  onChange={this.handleChange}
                  required
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
                      value={this.state.img1}
                      onChange={this.imgChange1}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image1}
                    />
                    <span className="delAvatar" onClick={this.imgDelete1}>
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
                      value={this.state.img2}
                      onChange={this.imgChange2}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image2}
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
                      value={this.state.img3}
                      onChange={this.imgChange3}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image3}
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
                      value={this.state.img4}
                      onChange={this.imgChange4}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image4}
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
                      value={this.state.img5}
                      onChange={this.imgChange5}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image5}
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
                      value={this.state.img6}
                      onChange={this.imgChange6}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image6}
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
                      value={this.state.img7}
                      onChange={this.imgChange7}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image7}
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
                      value={this.state.img8}
                      onChange={this.imgChange8}
                    />
                    <img
                      className="imgframe positionabsolute"
                      src={this.state.image8}
                    />
                    <span className="delAvatar" onClick={this.imgDelete8}>
                      x
                    </span>
                    <span className="uploadicon positionabsolute">+ 照片</span>
                  </div>
                </label>
              </div>
            </div>
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
