import React from "react"
import Layout from "Layout"
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs"
import "bulma/css/bulma.css"
import { toast } from "react-toastify"
import UserProfiles from "components/UserProfiles"
import Transaction from "components/Transaction/Transaction"
import Favorites from "components/Favorite/Favorites"
import MemberSub from "components/Sub/MemberSub"
import "../css/verify.css"
import axios from "commons/axios"


class Member extends React.Component {
  user = global.auth.getUser() || {}

  componentDidMount() {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login")
      toast.info("Please Login First")
      return
    }
  }

  

  logout = () => {
    global.auth.logout()
    this.props.history.push("/")
  }

  render() {
    return (
      
      <Layout>
        <div className="level is-mobile">
          <div class="level-item memberarea">
            <p class="title is-5 mt-6 ">會員專區 &gt;</p>
          </div>

          <div class="level-item mt-6">
            <button
              className="button is-ghost"
              type="button"
              onClick={this.logout}
            >
              登出
            </button>
          </div>
        </div>
        <Tabs defaultTab="one">
          <TabList>
            <div className="tabs is-centered">
              <Tab tabFor="one">個人資訊</Tab>
              <Tab tabFor="two">我的最愛</Tab>
              <Tab tabFor="three">訂閱方案</Tab>
              <Tab tabFor="four">交易資料</Tab>
            </div>
          </TabList>
          <TabPanel tabId="one">
            {global.auth.isLogin() ? (
              <UserProfiles user={this.user} />)
              : this.props.history.push("/login")
            }
          </TabPanel>
          <TabPanel tabId="two">
            <Favorites />
          </TabPanel>
          <TabPanel tabId="three">
            <MemberSub />
          </TabPanel>
          <TabPanel tabId="four">
            <Transaction />
          </TabPanel>
        </Tabs>
      </Layout>
    )
  }
}
export default Member
