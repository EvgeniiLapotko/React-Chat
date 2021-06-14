import React, { useState, useRef } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import waveSvg from "../../assets/wave.svg";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";
import { format, parseISO } from "date-fns";
import isToday from "date-fns/isToday";
import "./Message.scss";
import { IconReaded } from "../index";

const Message = ({
    avatar,
    audio,
    name,
    text,
    created_at,
    isMe,
    isReading,
    attachment,
    isTyping,
    user,
}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioRef = useRef();

    const convetTime = (number) => {
        const mins = Math.floor(number / 60);
        const secs = (number % 60).toFixed();
        return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const getMessageTime = (date) => {
        if (isToday(date)) {
            return format(date, "HH:mm");
        } else {
            return format(date, "dd.MM.yyyy");
        }
    };

    const getPlaying = () => {
        if (!isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    };
    const onPlayingStart = () => {
        setIsPlaying(true);
    };
    const onEndedEnd = () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
    };
    const onPausePause = () => {
        setIsPlaying(false);
    };
    const timeUpdate = () => {
        const duration = (audioRef.current && audioRef.current.duration) || 0;
        setCurrentTime(audioRef.current.currentTime);
        setProgress((audioRef.current.currentTime / duration) * 100);
    };

    const getAvatar = (avatar, name) => {
        if (avatar) {
            return <img src={avatar} alt="avatar" />;
        } else {
            return (
                <div className="message__item-anon">
                    <span>{name ? name[0] : "AN"}</span>
                </div>
            );
        }
    };
    return (
        <div
            className={classNames("message", {
                message__isMe: isMe,
                message__isTyping: isTyping,
                message__image: attachment && attachment.length === 1,
                message__isAudio: audio,
            })}
        >
            <IconReaded isMe={isMe} isReading={isReading} />
            <div className="message__avatar">
                {getAvatar(avatar, user.fullname)}
            </div>
            {/* <div className="message__username">{name}</div> */}

            <div className="message__block-text">
                {(text || isTyping || audio) && (
                    <div className="wrapper__bubble">
                        {text && (
                            <div className="message__bubble">
                                <p className="message__text">{text}</p>
                            </div>
                        )}
                        {isTyping && (
                            <div className="typing-indicator">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        )}
                        {audio && (
                            <div className="message__bubble">
                                <div className="message__audio">
                                    <audio
                                        ref={audioRef}
                                        src={audio}
                                        preload="auto"
                                        onPlaying={onPlayingStart}
                                        onEnded={onEndedEnd}
                                        onPause={onPausePause}
                                        onTimeUpdate={timeUpdate}
                                    ></audio>
                                    <div
                                        className="message__audio-progress"
                                        style={{ width: progress + "%" }}
                                    ></div>
                                    <div className="message__audio-info">
                                        <div className="message__audio-btn">
                                            <button onClick={getPlaying}>
                                                {!isPlaying ? (
                                                    <img
                                                        src={playSvg}
                                                        alt="play"
                                                    />
                                                ) : (
                                                    <img
                                                        src={pauseSvg}
                                                        alt="play"
                                                    />
                                                )}
                                            </button>
                                        </div>
                                        <div className="message__audio-wave">
                                            <img src={waveSvg} alt="wave" />
                                        </div>
                                        <div className="message__audio-time">
                                            {convetTime(currentTime)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
                <div className="message__attachment">
                    {attachment &&
                        attachment.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="message__attachment-img"
                                >
                                    <img src={item.img} alt={name} />
                                </div>
                            );
                        })}
                </div>

                {created_at && (
                    <div className="message__date">
                        {getMessageTime(
                            parseISO(created_at, {
                                additionalDigits: 1,
                            })
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

Message.defaultProps = {
    name: {},
};

Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.object,
    isTyping: PropTypes.bool,
};

export default Message;
