import React from "react";
import { Message } from "../components";
import { Link } from "react-router-dom";
import { Button } from "../components";

const Home = () => {
    return (
        <div>
            <Button type="primary">
                <Link to="/login">Вход в аккаунт</Link>
            </Button>
            <h1 className="title__home">Pages Home</h1>
            <div className="chat">
                <Message
                    avatar="https://sun1-90.userapi.com/s/v1/ig2/Rs0rm1SJkNMZSgioGN5exxiSxyRA07R4oqRDr7_BfNlx1M1M_i3DFTkDrKMm70ww8rn5_PKNdB_jkjDHNmUUQhFP.jpg?size=100x0&quality=96&crop=0,0,1024,1024&ava=1"
                    text="Return the distance between the given dates in words, using strict units. This is like formatDistance..."
                    date={new Date()}
                />
                <Message
                    avatar="https://sun1-86.userapi.com/s/v1/if1/u8Jbju-GJehoCkhS4pvJeo9IS7dj8Wy7jcgfsKqfUgF4VazqMtgSwH6ubvEMShD0HXn6TzM0.jpg?size=100x0&quality=96&crop=0,0,461,461&ava=1"
                    text="Return the distance between the given dates in words, using strict units. This is like formatDistance, but does not use helpers like 'almost', 'over', 'less than' and the like."
                    date={new Date()}
                    isMe="isMe"
                />
            </div>
        </div>
    );
};

export default Home;
