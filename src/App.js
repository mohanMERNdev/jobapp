import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import JobsList from './components/JobsList';
import Bookmarks from './components/Bookmarks';
import JobDetails from './components/JobDetails';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <h1>Jobs App</h1>
            <nav>
              <a href="/">Jobs</a>
              <a href="/bookmarks">Bookmarks</a>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<JobsList />} />
              <Route path="/bookmarks" element={<Bookmarks />} />
              <Route path="/job/:id" element={<JobDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
