import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos.js';
import SearchPage from './SearchPage.js'
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="app"> 
      <Router>
        <Header/>
        
        <Switch>
        
          <Route path="/search/:searchTerm">
          <div className="app_page">
            <Sidebar/>
            <SearchPage />
          </div>;
          </Route>
          
          <Route path="/">
            <div className="app_page">
            <Sidebar/>
            <RecommendedVideos/>
            </div>;  
          </Route>

        
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
