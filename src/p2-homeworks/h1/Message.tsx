
import React from 'react';
import classes from './Message.module.css'


type MessageType = {
    avatar:string
    name: string,
    message: string,
    time: string
}
function Message(props:MessageType) {
    return (
        <div className={classes.Message}>
            <div className={classes.MessageImg}>
                <img
                    src={props.avatar}
                    alt="avatar"/>
            </div>
            <div className={classes.MessageText}>
                <div className={classes.userMessage}>
                    <h1 className={classes.userName}>{props.name}</h1>
                    <p className={classes.userText}>{props.message}</p>
                </div>
                <div className={classes.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message


