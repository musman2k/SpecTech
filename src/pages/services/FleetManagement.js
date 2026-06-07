import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import Footer from '../../components/Footer';

export default function FleetManagement() {
  return (
    <>
      <ServiceDetailLayout
        subtitle="SERVICE // 04"
        title="FLEET"
        accentWord="MANAGEMENT"
        description="Complete fleet management solutions — live tracking, geofencing, trip analytics, driver behavior scoring, fuel monitoring, and maintenance alerts — deployed on your infrastructure or ours."
        overview={[
          'We build and deploy end-to-end fleet management systems for logistics, transportation, and field service companies. Our solutions integrate hardware (GPS trackers, OBD-II dongles, dashcams), connectivity infrastructure, and software dashboards into a unified platform.',
          'Our fleet systems run on proven open-source infrastructure (ThingsBoard, Flespi, GPSServer) containerized with Docker, giving you full data ownership and no per-vehicle SaaS fees. We also integrate with commercial platforms when required.',
          'From a 5-vehicle startup fleet to a 500-unit enterprise deployment, we architect systems that grow with you.',
        ]}
        features={[
          { icon: '🗺️', title: 'Live Tracking',         desc: 'Sub-minute position updates on interactive maps with vehicle status, speed, and heading.' },
          { icon: '📐', title: 'Geofencing',            desc: 'Zone-based alerts for entry, exit, and dwell time — with rule-based SMS/email notifications.' },
          { icon: '⛽', title: 'Fuel Monitoring',       desc: 'CAN-bus and level sensor integration for real-time consumption tracking and theft alerts.' },
          { icon: '👤', title: 'Driver Scoring',        desc: 'Behavior analytics: harsh braking, rapid acceleration, overspeeding, and idling reports.' },
          { icon: '🔧', title: 'Maintenance Alerts',    desc: 'Mileage-based and time-based maintenance reminders with service history logging.' },
          { icon: '📋', title: 'Trip Reports',          desc: 'Automated daily/weekly trip summaries with distance, duration, stops, and route replay.' },
        ]}
        tools={[
          { label: 'Flespi' },
          { label: 'ThingsBoard' },
          { label: 'GPSServer' },
          { label: 'Docker' },
          { label: 'PostgreSQL' },
          { label: 'InfluxDB' },
          { label: 'Mosquitto MQTT' },
          { label: 'React' },
          { label: 'Leaflet.js' },
          { label: 'Node.js' },
          { label: 'Teltonika FMB920', color: 'amber' },
          { label: 'Queclink GV series', color: 'amber' },
          { label: 'GT06 / GT02', color: 'amber' },
          { label: 'OBD-II Dongles', color: 'amber' },
          { label: 'Wialon (API)', color: 'amber' },
        ]}
        process={[
          { title: 'Fleet Assessment',        desc: 'Audit existing hardware, connectivity, and operational requirements across the fleet.' },
          { title: 'Hardware Deployment',     desc: 'Install and configure GPS trackers, ensure cellular coverage, and validate data transmission.' },
          { title: 'Platform Setup',          desc: 'Deploy server infrastructure (Docker), configure data pipelines, and set up user roles.' },
          { title: 'Dashboard Build',         desc: 'Develop custom dashboards with live map, reports, alerts, and driver management modules.' },
          { title: 'Training & Handover',     desc: 'Train fleet managers and drivers on the system with user guides and video walkthroughs.' },
          { title: 'Ongoing Support',         desc: 'System monitoring, hardware replacements, feature additions, and SLA-backed response.' },
        ]}
        useCases={[
          { icon: '🚛', title: 'Logistics & Freight',   desc: 'Multi-truck fleets with route optimization and delivery confirmation.' },
          { icon: '🚐', title: 'School Transport',      desc: 'Student safety with live parent tracking and attendance confirmation.' },
          { icon: '🚑', title: 'Emergency Services',    desc: 'Ambulance and fire fleet dispatch optimization and response time analytics.' },
          { icon: '🏗️', title: 'Construction',          desc: 'Heavy machinery tracking with utilization reports and theft prevention.' },
          { icon: '🚗', title: 'Car Rental',            desc: 'Self-drive vehicle monitoring with mileage billing and remote immobilization.' },
          { icon: '🌾', title: 'Agriculture',           desc: 'Tractor and combine harvester tracking across large farm operations.' },
        ]}
      />
      <Footer />
    </>
  );
}
