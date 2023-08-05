import React from 'react'
import './Virtual.css'
import Shade from '../../assets/shade.png'
import ReactCompareImage from "react-compare-image"
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
const Virtual = () => {
  return (
    <div className="Vertual">
      <div className="left">
        <span>Virtual Try-On</span>
        <span>Never Buy the Wrong Shade Again!!</span>
        <span>Try Now!!</span>
        <img src={Shade} alt="" />
      </div>

      <div className="right">
        <div className="wrapper">
        <ReactCompareImage leftImage={Before} rightImage={After}></ReactCompareImage>
        </div>
        
      </div>
    </div>
  )
}

export default Virtual
