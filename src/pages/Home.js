import React from 'react';
import {Message} from '../components';
import {Link} from 'react-router-dom';
import {Button} from '../components';

const Home = () => {
    return (
        <div>
            <Button type='primary'>
            <Link to='/login'>Вход в аккаунт</Link>
            </Button>
            <h1>Pages Home</h1>
            <Message />
            
            
        </div>
    );
}

export default Home;
