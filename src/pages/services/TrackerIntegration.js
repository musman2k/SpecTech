import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import Footer from '../../components/Footer';

export default function TrackerIntegration() {
  return (
    <>
      <ServiceDetailLayout
        subtitle="SERVICE // 01"
        title="TRACKER"
        accentWord="INTEGRATION"
        description="Connect GPS and asset trackers to web servers, cloud platforms, and live dashboards. We handle device provisioning, data pipelines, protocol bridging, and real-time visualization."
        overview={[
          'We integrate commercial and custom GPS/asset tracking devices with enterprise cloud platforms, enabling real-time location data to flow from hardware to dashboards and alert systems.',
          'Our expertise spans Flespi for device management and data normalization, ThingsBoard for powerful visualization and rule chains, and GPSServer as a self-hosted tracking server — giving you full control over your data.',
          'From single-device prototypes to multi-thousand fleet deployments, we architect solutions that scale without vendor lock-in.',
        ]}
        features={[
          { icon: '🔌', title: 'Device Provisioning',   desc: 'Onboard GPS trackers to Flespi or ThingsBoard with plug-and-play device profiles.' },
          { icon: '📊', title: 'Live Dashboards',        desc: 'Real-time maps, charts, and KPI widgets via ThingsBoard or custom React frontends.' },
          { icon: '⚡', title: 'MQTT / HTTP Pipelines',  desc: 'Protocol normalization — translate any tracker format to structured MQTT or REST payloads.' },
          { icon: '🔔', title: 'Alerting & Geofencing',  desc: 'Rule-based alerts for entry/exit, speed violations, battery, and device disconnects.' },
          { icon: '🗄️',  title: 'Data Retention',        desc: 'Configurable storage: hot data in InfluxDB, cold archival in S3-compatible storage.' },
          { icon: '🐳', title: 'Docker Deployment',      desc: 'Fully containerized stack — deploy on your own server or any major cloud provider.' },
        ]}
        tools={[
          { label: 'Flespi' },
          { label: 'ThingsBoard' },
          { label: 'GPSServer' },
          { label: 'Mosquitto MQTT' },
          { label: 'Docker' },
          { label: 'Node.js' },
          { label: 'React' },
          { label: 'InfluxDB' },
          { label: 'PostgreSQL' },
          { label: 'NMEA Protocol' },
          { label: 'Teltonika FMB', color: 'amber' },
          { label: 'Queclink', color: 'amber' },
          { label: 'Coban', color: 'amber' },
          { label: 'GT06 Protocol', color: 'amber' },
        ]}
        process={[
          { title: 'Requirements Analysis',   desc: 'Understand tracker hardware, data format, required KPIs, and target platform constraints.' },
          { title: 'Platform Selection',       desc: 'Choose between Flespi, ThingsBoard, GPSServer, or hybrid architecture based on scale and budget.' },
          { title: 'Device Configuration',     desc: 'Configure tracker APN, server IP/port, reporting intervals, and protocol settings.' },
          { title: 'Pipeline Development',     desc: 'Build parsers, MQTT bridges, and REST adapters to normalize raw data into structured payloads.' },
          { title: 'Dashboard & Alerts',       desc: 'Create intuitive dashboards with live maps, charts, and configurable alert rules.' },
          { title: 'Testing & Deployment',     desc: 'End-to-end testing on field hardware, Docker deployment, and handoff documentation.' },
        ]}
        useCases={[
          { icon: '🚗', title: 'Vehicle Tracking',   desc: 'Live GPS tracking for cars, motorcycles, and heavy machinery.' },
          { icon: '📦', title: 'Asset Monitoring',   desc: 'Track containers, equipment, and high-value shipments in real time.' },
          { icon: '🏭', title: 'Industrial IoT',     desc: 'Monitor machinery location and movement on factory floors.' },
          { icon: '🐄', title: 'Livestock Tracking', desc: 'GPS collar integration for agricultural asset management.' },
          { icon: '⛵', title: 'Marine Tracking',    desc: 'Vessel tracking with satellite fallback and geofence alerts.' },
          { icon: '🔐', title: 'Security Systems',   desc: 'Anti-theft tracking with panic button and cut-off relay support.' },
        ]}
      />
      <Footer />
    </>
  );
}
