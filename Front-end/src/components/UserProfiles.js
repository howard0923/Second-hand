import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Sidebar from "./SideBar"
import axios from "../commons/axios"
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
    axios.post("/api/resetUserLike", {
      UserEmail,
    })
  }

  const RequestUserProfile = async () => {
    try {
      const result = await axios.post("/api/userProfiles", {
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
      .post("/api/updateUser", {
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
      <div className="content ml-4 baseinfo">
        {/* <h1 className="content is-large">基本資料</h1> */}
      </div>
      <form className="w80per marlr10per marb60px" onSubmit={submit}>
        <div className="verticalcenter  positionrelative martb10px">
          <label className="fontbold positionabsolute left0per">密碼</label>
          <div className="w60per marr10per">
            <input
              className="custom-input"
              type="password"
              name="password"
              value={password}
              disabled
            />
            <Link
              to={{
                pathname: "/resetPassword",
                state: {
                  email: email,
                  password: true,
                },
              }}
            >  
              <button className="changepassword positionabsolute">修改密碼</button>
            </Link>
          </div>
        </div>

        <div className="verticalcenter positionrelative martb10px">
          <label className="fontbold positionabsolute left0per">姓名</label>
          <div className="w60per marr10per">
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

        <div className="verticalcenter positionrelative martb10px">
          <label className="fontbold positionabsolute left0per">Email</label>
          <div className="w60per marr10per">
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
               <button className="changepassword positionabsolute">驗證信箱</button>
               </Link>
            ):
             null
            }
          </div>
        </div>

        <div className="verticalcenter positionrelative martb10px">
          <label className="fontbold positionabsolute left0per">電話</label>
          <div className="w60per marr10per">
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

        <div className="verticalcenter positionrelative martb10px">
          <label className="fontbold positionabsolute left0per">地址</label>
          <div className="w60per marr10per">
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
        <div className="textcenter martb20px">
          <Sidebar isMenuOpen={isMenuOpen} onMenuToggle={toggleMenu} />
            <button
              type="button"
              className="changefavoritebutton marginlrauto"
              onClick={() => {
                toggleMenu()
                resetUserLike()
              }}
            >
              重新選擇喜好分類
            </button>
        </div>
        <div className="textcenter martb10px">
          {buttonshow1 ? (
            <button
              className="editbutton marginlrauto"
              type="submit"
              onClick={editClick}
            >
              {" "}
              編輯{" "}
            </button>
          ) : null}
        </div>
        <div className="verticalcenter">
          {buttonshow ? (
            <button
              className="cancelbutton"
              onClick={Cancel}
            >
              {" "}
              取消{" "}
            </button>
          ) : null}
          {buttonshow ? (
            <button className="savebutton" type="submit">
              {" "}
              保存變更{" "}
            </button>
          ) : null}
        </div>
      </form>
    </React.Fragment>
  )
}
export default withRouter(UserProfiles)
