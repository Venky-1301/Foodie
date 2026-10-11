import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='AppDownload' id="AppDownload">
        <p>For Better Experience Download Foodie App</p>
        <div className="App-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}
export default AppDownload
