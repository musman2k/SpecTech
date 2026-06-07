import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TrackerIntegration from './pages/services/TrackerIntegration';
import MITAppInventor from './pages/services/MITAppInventor';
import ArduinoSensors from './pages/services/ArduinoSensors';
import FleetManagement from './pages/services/FleetManagement';
import Robotics from './pages/services/Robotics';
import './index.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-deep-navy text-white font-mono">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/tracker-integration" element={<TrackerIntegration />} />
          <Route path="/services/mit-app-inventor" element={<MITAppInventor />} />
          <Route path="/services/arduino-sensors" element={<ArduinoSensors />} />
          <Route path="/services/fleet-management" element={<FleetManagement />} />
          <Route path="/services/robotics" element={<Robotics />} />
        </Routes>
      </div>
    </Router>
  );
}
