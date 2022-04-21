import React from 'react';
import './single.scss';

import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import Chart from "./../../components/chart/Chart";
import List from "./../../components/table/Table";


const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
              <img
                  src="https://i.ndtvimg.com/i/2014-10/benedict-cumberbatch_625x300_41414581866.jpg"
                  alt=""
                  className="itemImg"
                />
              <div className="details">
              <h1 className='itemTitle'>Sherlock Holmes</h1>
              <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">sherlock@gmail.com</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+91 8841056945</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">221B, Bakers street, London</span>
              </div>
              <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">United Kingdom</span>
              </div>
              </div>   
            </div>
          </div>
          <div className="right">
            <Chart title="User Spendings Last 6 Months" aspect={3 / 1}/>
          </div>
        </div>
        <div className="bottom">
          <div className="title">Last Transactions</div>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single