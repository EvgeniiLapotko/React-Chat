import React from "react";
import Message from "../Messages";

import { Empty } from "antd";

import "./MessageBlock.scss";

function MessageBlock({ items }) {
    return (
        <div className="chat__window">
            {!items ? (
                <div className="chat__window-empty">
                    <div>
                        <Empty description="Сообщений нет" />
                    </div>
                </div>
            ) : (
                <>
                    <Message
                        avatar="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                        text="Return the distance between the given dates in words, using strict units. This is like formatDistance..."
                        date={new Date()}
                        isMe={false}
                        attachment={[
                            {
                                img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                                name: "img1",
                            },
                            {
                                img: "http://sun9-44.userapi.com/s/v1/if1/qw3vWR63rnWIPexrEErujILvop-GpxX8MJRJx1emFNrgy2Ve9Hf3sqh5NLHETJNtyNMxaiTe.jpg?size=200x0&quality=96&crop=18,0,586,594&ava=1",
                                name: "img2",
                            },
                            {
                                img: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
                                name: "img3",
                            },
                        ]}
                    />
                    <Message
                        avatar="https://sun1-86.userapi.com/s/v1/if1/u8Jbju-GJehoCkhS4pvJeo9IS7dj8Wy7jcgfsKqfUgF4VazqMtgSwH6ubvEMShD0HXn6TzM0.jpg?size=100x0&quality=96&crop=0,0,461,461&ava=1"
                        text="Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like."
                        date={new Date()}
                        isMe="isMe"
                        isReading={false}
                    />

                    <Message
                        avatar="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                        attachment={[
                            {
                                img: "https://i.pinimg.com/originals/4b/ba/6f/4bba6f4d487a8029817f63ff9101911d.jpg",
                                name: "img1",
                            },
                        ]}
                        date={new Date()}
                    />
                    <Message
                        avatar="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                        isTyping={true}
                    />
                    <Message
                        avatar="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                        date={new Date("2021-06-09")}
                        audio="https://notificationsounds.com/storage/sounds/file-sounds-1075-12-days-of-christmas.mp3"
                    />
                </>
            )}
        </div>
    );
}

export default MessageBlock;
