import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = () =>{
    return(
        <div>
            <li className="messages-user"><NavLink to='/messages/1'>Олег</NavLink></li>
        </div>
    )
}
const Messages = () =>{
    return(
        <div className="messages">
            <div className="messages-wrap">
                <div className="messages-left">
                    <ul className="messages-users">
                        
                        <li className="messages-user"><NavLink to='/messages/2'>Вася</NavLink></li>
                        <li className="messages-user"><NavLink to='/messages/3'>Данька</NavLink></li>
                        <li className="messages-user"><NavLink to='/messages/4'>Вовка</NavLink></li>
                        <li className="messages-user"><NavLink to='/messages/5'>Владос</NavLink></li>
                        <li className="messages-user"><NavLink to='/messages/6'>Хуесос</NavLink></li>
                    </ul>
                </div><hr/>
                <div className="messages-right">
                    <p className="messages-message">Попка мамонта</p>
                    <input type="text" className="messages-input" />
                    <button className="messages-btn">Отправить</button>
                </div>
            </div>
            <h1>Messages</h1>
            
        </div>
    )
}

export default Messages