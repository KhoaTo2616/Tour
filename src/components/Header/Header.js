import React from "react";
import "./Header.css";
import { Link } from "react-scroll";

function Header() {
  return (
    <div className="header">
      <a class="logo">Du Lịch Ngọc Trâm</a>
      <div class="header-right">
        <a class="float-on-hover" href="">
          Trang Chủ
        </a>
        <Link class="float-on-hover" to="footer" spy={true}>
          Liên Hệ
        </Link>
      </div>
    </div>
  );
}

export default Header;
