import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link} from 'react-router-dom';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <div class="link-top">
            <Link to="">商品分類</Link>
            <Link to="/Member">會員專區</Link>
            <Link to="">訂閱方案</Link>
            <Link to="">FAQS問與答</Link>
            <Link to="">平台操作指南</Link>
            <Link to="">會員條款</Link>
            <Link to="">防偽驗證頁</Link>
            <Link to="">關於我們</Link>
            <Link to="/contact">聯絡我們</Link>
            <Link to="/first">主頁</Link>
        </div>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;