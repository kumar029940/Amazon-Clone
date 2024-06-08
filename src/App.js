import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import Checkout from './Checkout';
import Header from './Header';
import Home from './Home';

export default function App() {
    return (
            <Router>
                <div className = 'App' >
                <Routes>
                    <Route 
                    path = '/checkout'
                    element = {
                        <div>
                        <Header />
                        <Checkout />
                        </div>
                    }
                    />
                    <Route
                    path = '/login'
                    element = {
                        <div>
                        <h1>Login Page</h1>
                        </div>
                    }
                    />
                    <Route 
                    path = '/'
                    element = {
                        <div>
                        <Header />
                        <Home />
                        </div>
                    }
                    />
                </Routes>
                </div>
            </Router>
    )
}