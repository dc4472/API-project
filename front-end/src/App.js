// import logo from './logo.svg';
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import CatFacts from './CatFacts';

const App=props=> {

      return(
        <div className="App">
        <Router>
            <main className="App-main">
                <Routes>
                  <Route path="/" element={<CatFacts />} />

                </Routes>
            </main>
        </Router>
      </div>

      )




}

export default App;
