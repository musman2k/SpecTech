import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import Footer from '../../components/Footer';

export default function ArduinoSensors() {
  return (
    <>
      <ServiceDetailLayout
        subtitle="SERVICE // 03"
        title="ARDUINO &"
        accentWord="SENSORS"
        description="Full-spectrum embedded systems engineering — from sensor wiring and firmware development to cloud data pipelines. We work with the full range of microcontrollers and sensor types."
        overview={[
          'We design and develop end-to-end embedded IoT systems: selecting the right microcontroller for the task, integrating the required sensors, writing clean and efficient firmware, and connecting everything to cloud platforms for monitoring and control.',
          'Whether you need a single-sensor prototype or a complex multi-node sensor network, we deliver well-documented, power-efficient, and reliable embedded solutions.',
          'We support MQTT, HTTP, WebSockets, and CoAP for cloud connectivity, with integration into platforms like ThingsBoard, AWS IoT Core, Google Firebase, and custom backends.',
        ]}
        features={[
          { icon: '🔬', title: 'Sensor Integration',     desc: 'Temperature (DHT22, DS18B20), humidity, pressure (BMP280), GPS (Neo-6M), RFID (RC522), ultrasonic (HC-SR04), gas, and many more.' },
          { icon: '💡', title: 'Firmware Development',   desc: 'Clean, well-commented C/C++ firmware for Arduino, ESP8266, ESP32, and STM32 — optimized for power and memory.' },
          { icon: '☁️', title: 'Cloud Connectivity',     desc: 'MQTT over TLS, HTTP REST, WebSocket clients — connect your microcontroller to any cloud endpoint securely.' },
          { icon: '🔋', title: 'Power Optimization',     desc: 'Deep sleep scheduling, wake-on-interrupt design, and solar/battery power management for remote deployments.' },
          { icon: '📟', title: 'LoRaWAN Integration',    desc: 'Long-range, low-power sensor nodes using LoRa modules with TTN / ChirpStack network servers.' },
          { icon: '🖥️', title: 'PCB & Prototyping',      desc: 'Breadboard prototypes through to custom PCB design and enclosure recommendations.' },
        ]}
        tools={[
          { label: 'Arduino UNO' },
          { label: 'ESP8266' },
          { label: 'ESP32' },
          { label: 'Raspberry Pi' },
          { label: 'STM32' },
          { label: 'LoRaWAN' },
          { label: 'MQTT' },
          { label: 'DHT22' },
          { label: 'DS18B20' },
          { label: 'Neo-6M GPS' },
          { label: 'HC-SR04' },
          { label: 'RFID RC522' },
          { label: 'BMP280' },
          { label: 'MPU6050' },
          { label: 'ThingsBoard', color: 'amber' },
          { label: 'AWS IoT Core', color: 'amber' },
          { label: 'Firebase RTDB', color: 'amber' },
          { label: 'TTN / ChirpStack', color: 'amber' },
          { label: 'Mosquitto MQTT', color: 'amber' },
        ]}
        process={[
          { title: 'System Design',          desc: 'Define sensor types, communication protocol, power budget, and data model.' },
          { title: 'Prototype & Validation', desc: 'Breadboard assembly and sensor calibration to validate readings against known references.' },
          { title: 'Firmware Development',   desc: 'Write and test embedded C/C++ firmware with state machine architecture and error handling.' },
          { title: 'Cloud Integration',      desc: 'Connect device to cloud broker or API with TLS security and data serialization (JSON/CBOR).' },
          { title: 'Field Testing',          desc: 'Real-world environment testing for temperature range, RF interference, and power stability.' },
          { title: 'Documentation',          desc: 'Full delivery: wiring diagrams, firmware source, setup guide, and calibration certificates.' },
        ]}
        useCases={[
          { icon: '🏗️', title: 'Industrial Monitoring',   desc: 'Machine temperature, vibration, and power monitoring for predictive maintenance.' },
          { icon: '🌾', title: 'Precision Agriculture',   desc: 'Soil sensors, weather stations, and automated irrigation controllers.' },
          { icon: '🏙️', title: 'Smart City',              desc: 'Air quality monitoring, smart waste bins, and parking sensors.' },
          { icon: '🏠', title: 'Smart Home',              desc: 'Environmental monitoring, access control, and appliance automation.' },
          { icon: '⚕️', title: 'Medical Devices',         desc: 'Patient vital sign monitoring and equipment telemetry for healthcare.' },
          { icon: '🔭', title: 'Research & Education',    desc: 'Custom data acquisition systems for labs and university research projects.' },
        ]}
      />
      <Footer />
    </>
  );
}
