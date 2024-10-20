// src/App.js
import React from 'react';
import Header from './Header';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Footer from './Footer';

const App = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <div className="container">
                <MainContent />
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
};

export default App;

