import React from "react";
import Example from "./Example";
import Piechart from "./Piechart";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { PiNotebook } from "react-icons/pi";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import { TbSearch } from "react-icons/tb";

function Main() {
  return (
    <div className="main">
      <div className="main-top">
        <div className="main-text">Hello Titu</div>
        <div><TbSearch/>
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="main-top-1">
        <div className="balance">
          <div className="logo">
            <HiOutlineCurrencyDollar className="dollar" />
          </div>
          <div className="text">
            <p className="earning">Earning</p>
            <p className="text-dollar">$198k</p>
            <p className="month">
            <span style={{color:'green',fontWeight:'bold'}}>  <FaArrowUp />
              37.8% </span>this month
            </p>
          </div>
        </div>
        <div className="balance">
          <div className="logo">
            <PiNotebook className="Notebook" />
          </div>
          <div className="text">
            <p className="earning">Earning</p>
            <p className="text-dollar">$198k</p>
            <p className="month">
            <span style={{color:'red',fontWeight:'bold'}}>  <FaArrowDown />
              37.8% </span>this month
            </p>
          </div>
        </div>
        <div className="balance">
          <div className="logo">
            <MdOutlineAccountBalanceWallet className="wallet" />
          </div>
          <div className="text">
            <p className="earning">Earning</p>
            <p className="text-dollar">$198k</p>
            <p className="month">
            <span style={{color:'red',fontWeight:'bold'}}>  <FaArrowDown />
              37.8% </span>this month
            </p>
          </div>
        </div>
        <div className="balance">
          <div className="logo">
            <MdOutlineShoppingBag className="bag" />
          </div>
          <div className="text">
            <p className="earning">Earning</p>
            <p className="text-dollar">$198k</p>
            <p className="month">
            <span style={{color:'green',fontWeight:'bold'}}>  <FaArrowUp />
              37.8% </span>this month
            </p>
          </div>
        </div>
      </div>
      <div className="main-middle">
        <div className="chart">
          <div className="chart-top">
            <div>
              <p>overview</p>
              <p>monthly Earning</p>
            </div>
            <div>
              <p>Quaterly</p>
            </div>
          </div>
          <Example />
        </div>
        <div className="progress">
          <Piechart />
        </div>
      </div>
      <div className="main-bottom">
        <div className="btm-1">
          <h3>Product Sell</h3>
          <div className="searchbox">
            <input type="text" className="input-box" />
            <p>Last 30 Days</p>
          </div>
        </div>
        <div className="btm-2"></div>
        <div className="btm-3"></div>
      </div>
    </div>
  );
}

export default Main;
