import React from 'react';
import axios from '../../commons/axios';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Product from 'components/Product';
import { withRouter } from 'react-router-dom';

class Favorites extends React.Component {
  state = {
    products: [],
    isLoading: false,
    errorMsg: "",
    page: 0,
    showButton: false
  };

  loadMore = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }))
  }

  loadProducts = async () => {
    const { page } = this.state
    this.setState({ isLoading: true })
    const user = global.auth.getUser() || {};
    const uId = user.uId;
    try {
      const response = await axios.post(`/api/favorite/?page=${page}`, { uId })
      this.setState((prevState) => ({
        products: [...prevState.products, ...response.data],
        errorMsg: "",
      }))
    } catch (error) {
      this.setState({
        errorMsg: "Error while loading data. Try again later.",
      })
    } finally {
      this.setState({ isLoading: false })
      if(this.state.products.length > 0){
        document.getElementById("loadingAni").style.display = "none"
      }
      
    }
    // this.updateCartNum()
  }

  componentDidMount() {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login")
      return
    }
    this.loadProducts();
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        this.setState({ showButton: true })
      } else {
        this.setState({ showButton: false })
      }
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadProducts()
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smoothly scrolling
    })
  }



  render() {
    const { isLoading, errorMsg,products } = this.state;
    return (
      <div>
        {errorMsg && <p className="errorMsg">{errorMsg}</p>}
        <div className="products">
          <TransitionGroup component={null}>
            {this.state.products.map((p) => {
              return (
                <CSSTransition classNames="product-fade" timeout={300} key={p.pId}>
                  <div className="" key={p.pId}>
                    <Product product={p} />
                  </div>
                </CSSTransition>
              )
            })}
          </TransitionGroup>
          {this.state.showButton && (
            <button onClick={this.scrollToTop} className="back-to-top">
              <i className="fas fa-chevron-up" />
            </button>
          )}
        </div>
        {products.length == 0 ? null
          :
          <div>
            <div className="loadingAni">
              <img
                className="loadingAni2"
                id="loadingAni"
                src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif"
              ></img>
            </div>
            <button id="moreProduct" onClick={this.loadMore} className="btn-grad loadingbutton">
              {isLoading ? "Loading..." : "Load More"}
            </button>
          </div>
        }
      </div>
    );
  }
}

export default withRouter(Favorites);