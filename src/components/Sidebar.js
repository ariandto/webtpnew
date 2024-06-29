import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaChartBar, FaLaptopCode, FaChartLine } from 'react-icons/fa';
import './Sidebar.css';
import Dashboard from './Dashboard';

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
            <h3>{isOpen ? 'Transport Planning KLS' : ''}</h3>
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
                {!isOpen && (
                  <span className="tooltip">
                    <span className="tooltip-icon"><FaHome /></span>
                    Home
                  </span>
                )}
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="menu-item">
                <FaChartBar />
                {isOpen && <span className="menu-text">Dashboard LC</span>}
                {!isOpen && (
                  <span className="tooltip">
                    <span className="tooltip-icon"><FaChartBar /></span>
                    Dashboard
                  </span>
                )}
              </Link>
            </li>
            <li>
              <a href="#" className="menu-item">
                <FaLaptopCode />
                {isOpen && <span className="menu-text">Report Delivery</span>}
                {!isOpen && (
                  <span className="tooltip">
                    <span className="tooltip-icon"><FaLaptopCode /></span>
                    Report Delivery
                  </span>
                )}
              </a>
            </li>
            <li>
              <a href="#" className="menu-item">
                <FaChartLine />
                {isOpen && <span className="menu-text">Reporting</span>}
                {!isOpen && (
                  <span className="tooltip">
                    <span className="tooltip-icon"><FaChartLine /></span>
                    Reporting
                  </span>
                )}
              </a>
            </li>
          </ul>
          <div className="profile-section">
            {isOpen && (
              <div className="profile-details">
                {/* <p className="profile-name">Your Name</p>
                <p className="profile-role">Your Role</p> */}
              </div>
            )}
          </div>
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
