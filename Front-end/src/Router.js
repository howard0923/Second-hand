import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "pages/App"
import Login from "pages/Login"
import Register from "pages/Register"
import NotFound from "pages/NotFound"
import Cart from "pages/Cart"
import Contact from "pages/Contact"
import First from "pages/First"
import Member from "pages/Member"
import Detail from "components/Transaction/TransDetail"
import AboutUs from "pages/AboutUs"
import FAQ from "pages/FAQ"
import Rules from "pages/Rules"
import Sub from "pages/Sub"
import ProductDetail from "pages/ProductDetail"
import CartUpdate from "pages/CartUpdate"
import SecondCart from "components/Cart/SecondCart"
import ThirdCart from "components/Cart/ThirdCart"
import VerifyGood from "pages/VerifyGood"
import AddInventory from "pages/AddInventory"
import AdminOrder from "pages/AdminOrder"
import OrderDetail from "pages/OrderDetail"
import ShipmentConfirm from "pages/ShipmentConfirm"
import SubDetail from "components/Sub/SubDetail"
import Verify from "pages/Verify"
import TransDetail from "components/Transaction/TransDetail"
import ForgetPassword from "pages/ForgetPassword"
import ResetPassword from "pages/ResetPassword"
import UserLikePage from "pages/UserLikePage"
import Classification from "pages/Classification"
import useFlow from "pages/UseFlow"
import Cloudinary from "pages/cloudinary/cloudinary"
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/cart" component={Cart} />
      <Route path="/contact" component={Contact} />
      <Route path="/first" component={First} />
      <Route path="/member" component={Member} />
      <Route path="/detail" component={Detail} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/FAQ" component={FAQ} />
      <Route path="/guide" component={useFlow} />
      <Route path="/rules" component={Rules} />
      <Route path="/productDetail/:pId/:isFavoriteToDetail" component={ProductDetail} />
      <Route path="/cartUpdate" component={CartUpdate} />
      <Route path="/secondCart" component={SecondCart} />
      <Route path="/thirdCart" component={ThirdCart} />
      <Route path="/sub" component={Sub} />
      <Route path="/verifyGood" component={VerifyGood} />
      <Route path="/addinventory" component={AddInventory} />
      <Route path="/adminorder" component={AdminOrder} />
      <Route path="/orderdetail" component={OrderDetail} />
      <Route path="/shipmentconfirm" component={ShipmentConfirm} />
      <Route path="/subDetail/:planId" component={SubDetail} />
      <Route path="/verify" component={Verify} />
      <Route path="/transDetail" component={TransDetail} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/resetPassword" component={ResetPassword} />
      <Route path="/UserLikePage" component={UserLikePage} />
      <Route path="/classification/:id/:type" component={Classification} />
      <Route path="/useFlow" component={useFlow} />
      <Route path ="/cloudinary"component={Cloudinary} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default Router
