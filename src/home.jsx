import React from 'react';
import Header from './components/header';
import Community from './components/community';
import FirstComponent from './components/firstContent';
import SecondComponent from './components/secondContent';
import ThirdComponent from './components/thirdContent';

const Home = () => {
    return(
        <div className=''>
            <Header/>

            <Community/>

            <FirstComponent/>
            <SecondComponent/>
            <ThirdComponent/>
        </div>
    )
}

export default Home;