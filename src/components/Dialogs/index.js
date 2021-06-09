import React, { useReducer } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ru from "date-fns/locale/ru";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./Dialogs.scss";
import { BsCheckAll } from "react-icons/bs";

const Dialogs = ({items}) => {
    return (
        <>
        {items.map((item, index) => {
            const {user, message} = item;
            return <div className="dialogs__item" key={index}>
            <div className="dialogs__item-avatar">
                {user.avatar === null ? <div className='dialogs__item-anon'><span>{user.fullname[0]}</span></div>
                :
                <img
                    src={user.avatar}
                    alt="avatar"
                />
                }
                
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <div className="dialogs__item-info-name">{user.fullname.length > 17 ? `${user.fullname.slice(0, 17)}...` : user.fullname}</div>
                    <div className="dialogs__item-info-data">
                    {`${formatDistanceToNow(message.created_data, {
                            addSuffix: true,
                            locale: ru,
                        }).slice(0, 15)}...`}
                        </div>
                </div>
                <div className="dialogs__item-info-bottom">
                    <div className="dialogs__item-info-text">{message.text.length > 30 ? `${message.text.slice(0, 30)}...` : message.text}</div>
                    {message.isReaded ? <BsCheckAll className="dialogs__item-info-icon" /> :  
                        <div className="dialogs__item-info-num">
                        
                        <span>13</span>
                    </div>
                    }
                    
                </div>
            </div>
        </div>
        })}
        
         </>
        
    );
};

Dialogs.propTypes = {
    className: PropTypes.string,
};

export default Dialogs;
