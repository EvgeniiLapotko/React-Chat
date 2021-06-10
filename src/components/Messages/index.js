import React, { useState, useRef } from "react";

import PropTypes from "prop-types";
import classNames from "classnames";
import waveSvg from "../../assets/wave.svg";
import playSvg from "../../assets/play.svg";
import pauseSvg from "../../assets/pause.svg";

import "./Message.scss";
import { IconReaded, Time } from "../index";

const Message = ({
    avatar,
    audio,
    name,
    text,
    date,
    isMe,
    isReading,
    attachment,
    isTyping,
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
                <img src={avatar} alt="avatar" />
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

                {date && (
                    <div className="message__date">
                        <Time date={date} />
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
