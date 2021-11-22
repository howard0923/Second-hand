import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./SideBar"
import axios from "axios"
import "../css/verify.css"
import { withRouter } from "react-router"

const UserProfiles = (props) => {
  const [disabled, setDisabled] = useState(true)
  const [buttonshow, setButtonshow] = useState(false)
  const [buttonshow1, setButtonshow1] = useState(true)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [password, setPassword] = useState()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState()
  const [address, setAddress] = useState("")
  const [IsVerified, setIsVerified] = useState(0)

  const user = props.user 
  const UserEmail = user.email 
  const isStaff = user.isStaff 
  function toggleMenu() {
    setMenuOpen(!isMenuOpen)
  }
  function editClick() {
    setDisabled(!disabled)
    setButtonshow(true)
    setButtonshow1(false)
  }
  function resetUserLike() {
    axios.post("http://140.117.71.141:3001/api/resetUserLike", {
      UserEmail,
    })
  }

  const RequestUserProfile = async () => {
    try {
      const result = await axios.post("http://140.117.71.141:3001/api/userProfiles", {
        UserEmail,
        isStaff,
      })
      const data = result.data[0]

      setPassword(data.password)
      setName(data.name)
      setEmail(data.email)
      setPhone(data.phone)
      setAddress(data.address)
      setIsVerified(data.IsVerified)
    } catch (err) {
      console.error(err)
    }
  }
  useEffect(() => {
    RequestUserProfile()
  }, [])

  function Cancel() {
    setDisabled(!disabled)
    setButtonshow(false)
    setButtonshow1(true)
    RequestUserProfile()
  }

  const submit = (e) => {
    e.preventDefault()
    axios
      .post("http://140.117.71.141:3001/api/updateUser", {
        name,
        email,
        phone,
        address,
      })
      .then((res) => {
        console.log(res)
      })
    setDisabled(!disabled)
    setButtonshow(false)
    setButtonshow1(true)
  }

  return (
    <React.Fragment>
      <div className="content ml-4 baseinfo">{/* <h1 className="content is-large">基本資料</h1> */}</div>
      <form className="login-box" onSubmit={submit}>
        <div className="columns is-mobile">
          <div className="column is-narrow ml-6">
            <label className="label">密碼</label>
          </div>
          <div className="column ml-3">
            <input className="custom-input " type="password" name="password" value={password} disabled />
            <Link
              to={{
                pathname: "/resetPassword",
                state: {
                  email: email,
                  password: true,
                },
              }}
            >
              <button className="changepassword">修改密碼</button>
            </Link>
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-narrow ml-6">
            <label className="label">姓名</label>
          </div>
          <div className="column ml-3">
            <input
              className="custom-input "
              type="text"
              value={name}
              disabled={disabled}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-narrow ml-6">
            <label className="label">Email</label>
          </div>
          <div className="column emailtext">
            <input
              className="custom-input"
              type="email"
              name="email"
              value={email}
              disabled={disabled}
              onChange={(e) => setEmail(e.target.value)}
            />
            {IsVerified == 0 ? (
              <Link to="/verify">
                <button className="changepassword">認證信箱</button>
              </Link>
            ) : null}
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-narrow ml-6">
            <label className="label">電話</label>
          </div>
          <div className="column ml-3">
            <input
              className="custom-input"
              type="number"
              name="phone"
              value={phone}
              disabled={disabled}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="columns is-mobile">
          <div className="column is-narrow ml-6">
            <label className="label">地址</label>
          </div>
          <div className="column ml-3">
            <input
              className="custom-input "
              type="text"
              name="address"
              value={address}
              disabled={disabled}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>
        <div className="columns is-mobile ml-3">
          <div className="column">
            <Sidebar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />
            <div class="prefer-button">
              <button
                type="button"
                className="button small is-ghost"
                onClick={() => {
                  toggleMenu()
                  resetUserLike()
                }}
              >
                重新選擇喜好分類
              </button>
            </div>
          </div>
        </div>
        <div className="columns is-mobile has-text-centered">
          <div className="column">
            {buttonshow1 ? (
              <button className="button is-black " onClick={editClick}>
                {" "}
                編輯{" "}
              </button>
            ) : null}
          </div>
        </div>
        <div className="columns is-mobile has-text-centered ">
          <div className="column ">
            {buttonshow ? (
              <button className="button has-background-light cancelmodify " onClick={Cancel}>
                {" "}
                取消{" "}
              </button>
            ) : null}
          </div>
          <div className="column">
            {buttonshow ? (
              <button className="button is-black cancelmodify" type="submit">
                {" "}
                保存變更{" "}
              </button>
            ) : null}
          </div>
        </div>
      </form>
    </React.Fragment>
  )
}
export default withRouter(UserProfiles)
