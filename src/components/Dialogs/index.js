import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import ru from "date-fns/locale/ru";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import "./Dialogs.scss";
import {IconReaded, Time} from '../index'

const Dialogs = ({items}) => {
    const getAvatar = (avatar, name) => {
        if(avatar){
            return <img
            src={avatar}
            alt="avatar"
        />
        } else {
            return <div className='dialogs__item-anon'><span>{name[0]}</span></div>
        }
    }
    return (
        
        <>
        {items.map((item, index) => {
            const {user, message} = item;
            return <div className={classNames('dialogs__item', {
                'dialogs__item-online' : user.isOnline
            } )} key={index}>
            <div className="dialogs__item-avatar">
                {getAvatar(user.avatar, user.fullname)}
                
                
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <div className="dialogs__item-info-name">{user.fullname}</div>
                    <div className="dialogs__item-info-data">
                        {/* <Time date={message.created_data} /> */}
                    {/* {`${formatDistanceToNow(message.created_data, {
                            addSuffix: true,
                            locale: ru,
                        }).slice(0, 15)}...`} */}
                        13:05
                        </div>
                </div>
                <div className="dialogs__item-info-bottom">
                    <div className="dialogs__item-info-text">{message.text}</div>
                    {user.isMe ? <IconReaded isMe={user.isMe} isReading={message.isReaded} dialogs__icon={true}/> :  
                        <div className={classNames({
                            'dialogs__item-info-num' : message.noReaded
                        })}>
                        {message.noReaded ? <span>{message.noReaded}</span> : ''}
                        
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
