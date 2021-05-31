import React from 'react'
import './closefriends.css'

export default function CloseFriends({user}) {
    return (
        <div>
            <li className="sidebarfriend">
                <img src={user.profilePicture} alt="" className="sidebarfriendpic" />
                <span className="sidebarfriendname">{user.username}</span>
            </li>
        </div>
    )
}
