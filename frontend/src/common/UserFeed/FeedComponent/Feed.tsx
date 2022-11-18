import React from 'react';
import "./Feed.css";
import {Avatar} from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import {ExpandMoreOutlined} from "@material-ui/icons";

const moment = require('moment');

export type FeedProp={
    profilePic?:any,
    image?:any,
    username?:string,
    timestamp?:string,
    message?:string,
};


function Feed({profilePic, image, username, timestamp, message='This is a very long message to try soemthing'}:FeedProp) {
    
    return (
        <div className="post">

            <div className="post_top">
                <Avatar src={profilePic} 
                className="post_avatar" />

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(moment(timestamp)?.toDate()).toUTCString()}</p>
                </div>

            </div>


            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>

            </div>

        </div>
    )
}

export default Feed;