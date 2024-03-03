import React from "react";
import s from './../Dialogs.module.css'


const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const SendMessage = () => {
    let newMessage = React.createRef();

    let addMessage = () => {
        let textMessage = newMessage.current.value;
        alert('send message: ' + textMessage);
    }

    return (
        <div className={s.sendMessage}>
            <h3>My Message</h3>
            <div>
                <textarea ref={newMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Send message</button>
            </div>
        </div>
    );
}

export default SendMessage;
