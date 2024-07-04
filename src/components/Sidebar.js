import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaChartBar, FaChartLine, FaCity } from 'react-icons/fa';
import './Sidebar.css';
import Dashboard from './Dashboard';
import Areakirim from './Areakirim';
import Dashboardinforma from './Dashboardinforma';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <div className="app">
        <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
          <div className="sidebar-header">
            <h3>{isOpen && 'Transport Planning'}</h3>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <div className="sidebar-title">
            {isOpen && <h4>Menu</h4>}
          </div>
          <ul className="sidebar-menu">
            <li>
              <Link to="/" className="menu-item">
                <FaHome />
                {isOpen && <span className="menu-text">Home</span>}
                <span className="tooltip">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="menu-item">
                <FaChartBar />
                {isOpen && <span className="menu-text">Dashboard LC</span>}
                <span className="tooltip">Dashboard LC</span>
              </Link>
            </li>
            <li>
              <Link to="/areakirim" className="menu-item">
                <FaCity />
                {isOpen && <span className="menu-text">Area Kirim</span>}
                <span className="tooltip">Area Kirim</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="menu-item">
                <FaChartLine />
                {isOpen && <span className="menu-text">Reporting</span>}
                <span className="tooltip">Reporting</span>
              </Link>
            </li>
          </ul>
          {isOpen && (
            <div className="profile-section">
              <div className="profile-details">
                {/* Add user details here */}
              </div>
            </div>
          )}
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={
              <div>
                <h1>Main Content Area</h1>
                <p>This is the main content of your application.</p>
              </div>
            } />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/areakirim" element={<Areakirim />} />
            <Route path="/dashboardinforma" element={<Dashboardinforma />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
