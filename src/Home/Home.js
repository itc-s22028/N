import React from 'react';
import './HomeStyle.css'
import N_Logo from '../Image/Logo.png'

function Home() {
    return (
        <div className="HomeTop">
            <div className="SideBar">
                <img className="N_Logo" src={N_Logo} alt=""/>
                <h1>Home</h1>
                <h1>プロフィール</h1>
                <h1>通知</h1>
                <h1>DM</h1>
                <h1>投稿・予定</h1>
            </div>
            <div className="HomeCenter">
                <p className="HomeTitle">HOME</p>
            </div>
            <div>
                <p>検索</p>
            </div>
        </div>

    );
}

export default Home;