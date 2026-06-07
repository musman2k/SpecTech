/**
 * Central registry of all agency services.
 * Used by Navbar, Home page ServiceCards, and routing.
 */
export const SERVICES = [
  {
    id:          'tracker-integration',
    path:        '/services/tracker-integration',
    icon:        '📡',
    title:       'TRACKER INTEGRATION',
    short:       'Integrate GPS/asset trackers with web servers, cloud platforms, and real-time dashboards using Flespi, ThingsBoard, and GPSServer — from device provisioning to live data pipelines.',
    accentColor: 'cyan',
    soon:        false,
  },
  {
    id:          'mit-app-inventor',
    path:        '/services/mit-app-inventor',
    icon:        '📱',
    title:       'MIT APP INVENTOR',
    short:       'Build functional IoT mobile applications with MIT App Inventor. Connect your app to Bluetooth, MQTT, REST APIs, and microcontrollers — no prior mobile dev experience required.',
    accentColor: 'cyan',
    soon:        false,
  },
  {
    id:          'arduino-sensors',
    path:        '/services/arduino-sensors',
    icon:        '⚡',
    title:       'ARDUINO & SENSORS',
    short:       'End-to-end sensor integration with Arduino, ESP8266, ESP32, Raspberry Pi, and STM32. Temperature, humidity, GPS, RFID, ultrasonic, gas, and custom sensor arrays connected to cloud.',
    accentColor: 'cyan',
    soon:        false,
  },
  {
    id:          'fleet-management',
    path:        '/services/fleet-management',
    icon:        '🚛',
    title:       'FLEET MANAGEMENT',
    short:       'Full-stack fleet management: live vehicle tracking, geofencing, trip history, fuel monitoring, driver behavior analytics, and alert systems — on your infrastructure or cloud.',
    accentColor: 'amber',
    soon:        false,
  },
  {
    id:          'robotics',
    path:        '/services/robotics',
    icon:        '🤖',
    title:       'ROBOTICS & AUTOMATION',
    short:       'Autonomous robotics systems, PLC integration, industrial automation, robotic arms, and edge AI. Bringing intelligence to hardware for next-generation automation workflows.',
    accentColor: 'amber',
    soon:        true,
  },
];

export const TECH_STACK = [
  'Flespi', 'ThingsBoard', 'GPSServer', 'Mosquitto MQTT', 'Docker',
  'React', 'React Native', 'Arduino UNO', 'ESP8266', 'ESP32',
  'Raspberry Pi', 'LoRaWAN', 'Node.js', 'Firebase', 'AWS IoT',
];
