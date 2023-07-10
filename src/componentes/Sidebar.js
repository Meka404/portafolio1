import React from 'react';
import '../css/sidebar.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBriefcase, faImage, faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
    return (
        <div className="sidebar">
          <h2 className="logo">Carlos Albino</h2>
          <nav>
            <ul className='sidebar-list'>
              <li>
                <a href="#home">
                  <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
                  <span className="sidebar-text">Home</span>
                </a>
              </li>
              <li>
                <a href="#about">
                  <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
                  <span className="sidebar-text">About</span>
                </a>
              </li>
              <li>
                <a href="#services">
                  <FontAwesomeIcon icon={faBriefcase} className="sidebar-icon" />
                  <span className="sidebar-text">Services</span>
                </a>
              </li>
              <li>
                <a href="#portfolio">
                  <FontAwesomeIcon icon={faImage} className="sidebar-icon" />
                  <span className="sidebar-text">Portfolio</span>
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FontAwesomeIcon icon={faEnvelope} className="sidebar-icon" />
                  <span className="sidebar-text">Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
};
