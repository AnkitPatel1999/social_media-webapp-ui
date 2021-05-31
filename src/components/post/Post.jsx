import React,{ useState } from 'react'
import './post.css'
import { MoreVert } from '@material-ui/icons'
import {Users} from '../../dummyData'

export default function Post({post}) {

    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1);
        setIsLiked(!isLiked);
    }

    return (
        <div className="post">
           <div className="postwrapper">
               <div className="posttop">
                   <div className="posttopleft">
                       <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className="postprofileimg" />
                       <span className="postusername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                       <span className="postdate">{post.date}</span>
                   </div>
                   <div className="posttopright">
                        <MoreVert/>
                   </div>
               </div>
               <div className="postcenter">
                   <span className="posttext">{post.desc}</span>
                   <img src={post.photo} alt="" className="postimg" />
               </div>
               <div className="postbottom">
                   <div className="postbottomleft">
                        <img className="likeicon"onClick={likeHandler}  src="/assets/like.png" alt="" />
                        <img className="likeicon" src="/assets/heart.png" alt="" />
                        <span className="postlikecounter">{like} people like it</span>
                   </div>
                   <div className="postbottomright">
                       <span className="postcommenttext">{post.comment  } comments</span>
                   </div>
               </div>
           </div>
        </div>
    )
}
