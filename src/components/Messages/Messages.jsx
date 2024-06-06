import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = (props) =>{
    let path = '/messages/' + props.id
    return(
        <div>
            <li className="messages-user"><NavLink to={path}>{props.name}</NavLink></li> {/* фигурными скобками обозначается JS-код*/}
        </div>
    )
}
const Message = (props)=>{
    return <p className="messages-message">{props.text}</p>
}
const Messages = () =>{
    return(
        <div className="messages">
            <div className="messages-wrap">
                <div className="messages-left">
                    <ul className="messages-users">
                        <DialogItem name = 'Вася' id='1'/>
                        <DialogItem name = 'Олег' id='2'/>
                        <DialogItem name = 'Дима' id='3'/>
                        <DialogItem name = 'Дэн' id='4'/>
                        <DialogItem name = 'Оля' id='5'/>
                        <DialogItem name = 'Поля' id='6'/>
                    </ul>
                </div><hr/>
                <div className="messages-right">
                    <Message text='не попка'/>
                    <Message text='но мамонта'/>
                    <input type="text" className="messages-input" />
                    <button className="messages-btn">Отправить</button>
                </div>
            </div>
            <h1>Messages</h1>
            
        </div>
    )
}

export default Messages