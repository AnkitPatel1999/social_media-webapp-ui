import React from 'react'
import './online.css'

export default function Online({user}) {
    return (
        <div>
            <li className="rightbarfriend">
                <div className="rightbarprofileimgcontainer">
                    <img src={user.profilePicture} alt="" className="rightbarprofileimg" />
                    <div className="rightbaronline"></div>
                </div>
                <span className="rightbaronlineusername">{user.username}</span>
            </li>
        </div>
    )
}
