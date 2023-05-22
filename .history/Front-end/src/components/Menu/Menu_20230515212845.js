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
      <div>
        hello
      </div>
    </StyledMenu>
  )
}
SideMenu.propTypes = {
  open: bool.isRequired,
}
export default withRouter(SideMenu)
