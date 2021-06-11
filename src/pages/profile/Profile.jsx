import React from 'react'
import './profile.css'

import Topbar from './../../components/topbar/Topbar'
import Sidebar from './../../components/sidebar/Sidebar'
import Feed from './../../components/feed/Feed'
import Rightbar from './../../components/rightbar/Rightbar'

export default function Profile() {
  return (
      <div>
        <Topbar/>
        <div className="profile">
          <Sidebar/>
          <div className="profileRight">
              <div className="profileRight">
                  <div className="profileCover">
                    <img src="/assets/post/3.jpeg" alt="" className="profileCoverImg" />
                    <img src="/assets/post/7.jpeg" alt="" className="profileUserImg" />
                  </div>
                  <div className="profileInfo">
                      <h4 className="profileInfoName">Ankit Patel</h4>
                      <span className="profileInfoDesc">Heloo guyyyysss</span>
                  </div>
            </div>
              <div className="profileRightBottom">
                <Feed />
                <Rightbar />
              </div>
          </div>
        </div>
      </div>
    )
}
