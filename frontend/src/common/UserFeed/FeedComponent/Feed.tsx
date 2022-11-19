import React from 'react';
import "./Feed.css";
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import image from '../../../assets/background.jpg'

const moment = require('moment');

export type FeedProp = {
    profilePic?: any,
    // image?:any,
    username?: string,
    timestamp?: string,
    message?: string,
};


function Feed({ profilePic, username, timestamp, message = 'This is a very long message to try soemthing' }: FeedProp) {

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

            <div className="post_image  max-md:h-1/2">
                <img src="https://images.unsplash.com/photo-1484591974057-265bb767ef71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt=""  />
            </div>

            <div className="post_options">
                <button className="post_option ">
                    <ThumbUpIcon />
                    <p>Like</p>
                </button>

                <button className="post_option">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </button>

                <div className="post_option">
                    <NearMeIcon />
                    <p>Share</p>
                </div>

                {/* <div className="post_option">
                    <AccountCircleIcon />
                    <ExpandMoreOutlined />
                </div> */}

            </div>

        </div>
    )
}

export default Feed;