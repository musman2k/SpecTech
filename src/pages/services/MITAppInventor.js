import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import Footer from '../../components/Footer';

export default function MITAppInventor() {
  return (
    <>
      <ServiceDetailLayout
        subtitle="SERVICE // 02"
        title="MIT APP"
        accentWord="INVENTOR"
        description="Build and deploy IoT-connected Android applications using MIT App Inventor. From Bluetooth device control to cloud-connected sensor dashboards — no prior mobile development expertise needed."
        overview={[
          'MIT App Inventor is a powerful visual programming environment that allows rapid development of Android applications. We leverage it to create IoT mobile apps that communicate with microcontrollers, cloud APIs, and real-time databases.',
          'We design the app architecture, build the block logic, integrate communication protocols (Bluetooth Classic, BLE, HTTP, MQTT via custom WebSockets), and deliver a fully tested APK ready for deployment.',
          'Ideal for prototyping, educational platforms, small-scale deployments, and cost-sensitive projects where native mobile development would be overkill.',
        ]}
        features={[
          { icon: '📲', title: 'Bluetooth Control',   desc: 'Connect to Arduino and ESP devices via Bluetooth Classic or BLE for real-time device control.' },
          { icon: '🌐', title: 'REST API Integration', desc: 'Fetch and push data to cloud APIs, Firebase, or custom backend servers.' },
          { icon: '📈', title: 'Live Sensor Display',  desc: 'Real-time charts and gauges for temperature, humidity, distance, and custom sensor data.' },
          { icon: '🔔', title: 'Push Notifications',   desc: 'Alert users when sensor thresholds are exceeded or device state changes.' },
          { icon: '🗃️',  title: 'Local & Cloud DB',    desc: 'Store data locally with TinyDB or sync to Firebase Realtime Database for multi-user access.' },
          { icon: '🎨', title: 'Custom UI Design',     desc: 'Professional app layouts with custom color schemes, icons, and intuitive UX flows.' },
        ]}
        tools={[
          { label: 'MIT App Inventor' },
          { label: 'Firebase RTDB' },
          { label: 'Arduino UNO' },
          { label: 'ESP8266' },
          { label: 'HC-05 Bluetooth' },
          { label: 'BLE 4.0+' },
          { label: 'REST APIs' },
          { label: 'JSON' },
          { label: 'TinyDB' },
          { label: 'Google Sheets API', color: 'amber' },
          { label: 'Airtable', color: 'amber' },
          { label: 'IFTTT Webhooks', color: 'amber' },
        ]}
        process={[
          { title: 'Requirement Gathering',    desc: 'Define app screens, data flows, control actions, and connectivity requirements.' },
          { title: 'UI/UX Wireframing',        desc: 'Design screen layouts optimized for mobile interaction with IoT data.' },
          { title: 'Backend / Device Setup',   desc: 'Configure Arduino/ESP firmware to expose correct serial/BLE/HTTP endpoints.' },
          { title: 'Block Logic Programming',  desc: 'Implement all app logic, communication handlers, data parsing, and display updates.' },
          { title: 'Testing on Hardware',      desc: 'End-to-end testing with physical devices and edge case validation.' },
          { title: 'APK Build & Delivery',     desc: 'Compile, sign, and deliver the APK with full documentation and source blocks.' },
        ]}
        useCases={[
          { icon: '🏠', title: 'Home Automation',   desc: 'Control lights, fans, and appliances via smartphone over Bluetooth or WiFi.' },
          { icon: '🌡️', title: 'Sensor Dashboards', desc: 'Monitor temperature, humidity, and air quality from anywhere.' },
          { icon: '🌱', title: 'Smart Agriculture',  desc: 'Track soil moisture, irrigation valves, and greenhouse conditions.' },
          { icon: '🏥', title: 'Health Monitoring',  desc: 'Wearable device data collection and display on mobile screens.' },
          { icon: '🎓', title: 'Education Projects', desc: 'Student and university IoT projects requiring rapid mobile interfaces.' },
          { icon: '🤖', title: 'Robot Control',      desc: 'Remote control panels for RC robots and rover prototypes via BLE.' },
        ]}
      />
      <Footer />
    </>
  );
}
