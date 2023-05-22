import React, { useState, useEffect } from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"
import { Link, withRouter } from "react-router-dom"
import axios from "../../commons/axios"

const SideMenu = ({ open, setOpen }) => {
  const [subMenu, setSubMenu] = useState(0)
  const [brand, setBrand] = useState([])
  const [color, setColor] = useState([])
  const [type, setType] = useState([])
  const [typeOfClassify, setTypeOfClassify] = useState([])

  const toSub = (key) => {
    setSubMenu(subMenu + 1)
    if (key === "brand") {
      setTypeOfClassify(brand)
    } else if (key === "color") {
      setTypeOfClassify(color)
    } else if (key === "type") {
      setTypeOfClassify(type)
    }
  }

  const goBack = () => {
    setSubMenu(subMenu - 1)
  }

  const RequestBrand = async () => {
    try {
      const result = await axios.get("/api/getBrand")
      setBrand(result.data)
    } catch (err) {
      console.error(err)
    }
  }

  const RequestColor = async () => {
    try {
      const result = await axios.get("/api/getColor")
      setColor(result.data)
    } catch (err) {
      console.error(err)
    }
  }

  const RequestType = async () => {
    try {
      const result = await axios.get("/api/getType")
      setType(result.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    RequestBrand()
    RequestColor()
    RequestType()
  }, [])

  return (
    <StyledMenu open={open}>
      <div class="link-top">
        {submenu === 0 && (
          <React.Fragment>
            <Link to="/addinventory">上架商品</Link>
            <Link to="/adminorder">訂單查詢</Link>
          </React.Fragment>
        )}

        {subMenu === 0 && !global.auth.isLogin() && (
          <React.Fragment>
            <Link onClick={() => toSub()}>
              <nobr>
                <span> 商品分類</span> <span className="fas fa-chevron-right"></span>
              </nobr>
            </Link>
            <Link to="/Member">會員專區</Link>
            <Link to="/sub">訂閱方案</Link>
            <Link to="/FAQ">FAQS問與答</Link>
            <Link to="/guide">平台操作指南</Link>
            <Link to="/rules">會員條款</Link>
            <Link to="/verifyGood">防偽驗證頁</Link>
            <Link to="/aboutus">關於我們</Link>
            <Link to="/contact">聯絡我們</Link>
            <Link to="/first">主頁</Link>
          </React.Fragment>
        )}

        {subMenu === 1 && !global.auth.isLogin() && (
          <React.Fragment>
            <Link onClick={() => goBack()}>
              <i class="fas fa-chevron-left"></i>
            </Link>
            <Link onClick={() => toSub("brand")}>
              <nobr>
                品牌 <i class="fas fa-chevron-right"></i>
              </nobr>
            </Link>
            <Link onClick={() => toSub("color")}>
              <nobr>
                {" "}
                顏色 <i class="fas fa-chevron-right"></i>
              </nobr>
            </Link>
            <Link onClick={() => toSub("type")}>
              <nobr>
                {" "}
                類型 <i class="fas fa-chevron-right"></i>
              </nobr>
            </Link>
          </React.Fragment>
        )}

        {subMenu === 2 && !global.auth.isLogin() && (
          <React.Fragment>
            <Link onClick={() => goBack()}>
              <i className="fas fa-chevron-left"></i>
            </Link>
            {typeOfClassify.map((t) => {
              return (
                <div className="">
                  <Link
                    to={{
                      pathname: `/classification/${t.classifyId}/${t.typeOf}`,
                      state: {
                        classify: t,
                      },
                    }}
                    onClick={() => setOpen(!open)}
                  >
                    {t.classify}
                  </Link>
                </div>
              )
            })}
          </React.Fragment>
        )}

        {subMenu === 0 && (global.auth.getUser() || {}).isStaff === 0 && (
                    <React.Fragment>
                    <Link onClick={() => toSub()}>
                      <nobr>
                        <span> 商品分類</span> <span className="fas fa-chevron-right"></span>
                      </nobr>
                    </Link>
                    <Link to="/Member">會員專區</Link>
                    <Link to="/sub">訂閱方案</Link>
                    <Link to="/FAQ">FAQS問與答</Link>
                    <Link to="/guide">平台操作指南</Link>
                    <Link to="/rules">會員條款</Link>
                    <Link to="/verifyGood">防偽驗證頁</Link>
                    <Link to="/aboutus">關於我們</Link>
                    <Link to="/contact">聯絡我們</Link>
                    <Link to="/first">主頁</Link>
                  </React.Fragment>
        )}

        {subMenu === 1 && (global.auth.getUser() || {}).isStaff === 0 && (
          <React.Fragment>
          <Link onClick={() => goBack()}>
            <i class="fas fa-chevron-left"></i>
          </Link>
          <Link onClick={() => toSub("brand")}>
            <nobr>
              品牌 <i class="fas fa-chevron-right"></i>
            </nobr>
          </Link>
          <Link onClick={() => toSub("color")}>
            <nobr>
              {" "}
              顏色 <i class="fas fa-chevron-right"></i>
            </nobr>
          </Link>
          <Link onClick={() => toSub("type")}>
            <nobr>
              {" "}
              類型 <i class="fas fa-chevron-right"></i>
            </nobr>
          </Link>
        </React.Fragment>
        )}

        {subMenu === 2 && (global.auth.getUser() || {}).isStaff === 0 && (
          <React.Fragment>
            <Link onClick={() => goBack()}>
              <i class="fas fa-chevron-left"></i>
            </Link>
            {typeOfClassify.map((t) => {
              return (
                <div className="">
                  <Link
                    to={{
                      pathname: `/classification/${t.classifyId}/${t.typeOf}`,
                      state: {
                        classify: t,
                      },
                    }}
                    onClick={() => setOpen(!open)}
                  >
                    {t.classify}
                  </Link>
                </div>
              )
            })}
          </React.Fragment>
        )}
      </div>
    </StyledMenu>
  )
}
SideMenu.propTypes = {
  open: bool.isRequired,
}
export default withRouter(SideMenu)
