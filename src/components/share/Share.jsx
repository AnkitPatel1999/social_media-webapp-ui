import React from 'react'
import './share.css'
import { PermMedia , Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
    return (
        <div className="share">
            <div className="sharewrapper">
                <div className="sharetop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareprofileimg" />
                    <input placeholder="What's in your mind Ankit" className="shareinput" />
                </div>
                <hr className="sharehr" />
                <div className="sharebottom">
                    <div className="shareoptions">
                        <div className="shareoption">
                            <PermMedia htmlColor="tomato" className="shareicon"/>
                            <span className="shareoptiontext">Photo or Video</span>
                        </div>
                        <div className="shareoption">
                            <Label htmlColor="blue" className="shareicon"/>
                            <span className="shareoptiontext">Tag</span>
                        </div>
                        <div className="shareoption">
                            <Room htmlColor="green" className="shareicon"/>
                            <span className="shareoptiontext">Location</span>
                        </div>
                        <div className="shareoption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareicon"/>
                            <span className="shareoptiontext">Feelings</span>
                        </div>
                    </div>
                    <button className="sharebutton">Share</button>
                </div>
            </div>
        </div>
    )
}
