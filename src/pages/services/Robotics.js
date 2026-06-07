import React from 'react';
import ServiceDetailLayout from '../../components/ServiceDetailLayout';
import Footer from '../../components/Footer';

export default function Robotics() {
  return (
    <>
      <ServiceDetailLayout
        comingSoon
        subtitle="SERVICE // 05 // COMING SOON"
        title="ROBOTICS &"
        accentWord="AUTOMATION"
        description="Next-generation robotics and industrial automation solutions. Autonomous systems, robotic arms, PLC integration, and edge AI — currently in active development."
        overview={[
          'Our robotics division is currently under active development. We are building a team and infrastructure to deliver autonomous robotics systems, industrial automation solutions, and edge AI integration.',
          'Expected capabilities include custom robotic arm programming, autonomous mobile robots (AMR), PLC integration with SCADA systems, and computer vision pipelines for quality inspection.',
          'Join our early-access list to be notified when this service launches and to receive a priority consultation slot.',
        ]}
        features={[
          { icon: '🦾', title: 'Robotic Arm Programming',  desc: 'Inverse kinematics, trajectory planning, and G-code generation for 3-6 DOF arms.' },
          { icon: '🧠', title: 'Edge AI Vision',           desc: 'On-device object detection and classification with TensorFlow Lite and OpenCV.' },
          { icon: '🔄', title: 'PLC & SCADA',              desc: 'Siemens, Allen-Bradley, and Modbus integration for industrial process control.' },
          { icon: '📡', title: 'ROS2 Integration',         desc: 'Robot Operating System middleware for sensor fusion and motion planning.' },
          { icon: '⚙️', title: 'Industrial Automation',    desc: 'End-of-line automation, pick-and-place systems, and conveyor control.' },
          { icon: '🛡️', title: 'Safety Systems',           desc: 'E-stop integration, zone monitoring, and ISO 10218 safety compliance.' },
        ]}
        tools={[
          { label: 'ROS2' },
          { label: 'Arduino' },
          { label: 'Raspberry Pi' },
          { label: 'ESP32' },
          { label: 'TensorFlow Lite' },
          { label: 'OpenCV' },
          { label: 'Modbus RTU/TCP' },
          { label: 'Servo / Stepper Control' },
          { label: 'BLDC Motor Drivers' },
          { label: 'Siemens PLC', color: 'amber' },
          { label: 'Allen-Bradley', color: 'amber' },
          { label: 'SCADA Systems', color: 'amber' },
        ]}
        process={[
          { title: 'Requirements Scoping',  desc: 'Define automation goals, payload requirements, workspace constraints, and safety needs.' },
          { title: 'Mechanical Design',     desc: 'Select or design appropriate robot kinematics and actuator configurations.' },
          { title: 'Electronics & Wiring',  desc: 'Motor drivers, power distribution, safety circuits, and sensor integration.' },
          { title: 'Control Software',      desc: 'Firmware, motion control libraries, ROS2 nodes, and high-level task orchestration.' },
          { title: 'AI Integration',        desc: 'Computer vision models for object recognition, defect detection, or spatial navigation.' },
          { title: 'Commissioning',         desc: 'On-site installation, tuning, operator training, and safety certification.' },
        ]}
        useCases={[
          { icon: '🏭', title: 'Manufacturing',      desc: 'Automated assembly, welding, painting, and quality inspection lines.' },
          { icon: '📦', title: 'Warehouse',          desc: 'Autonomous mobile robots for inventory picking and goods-to-person systems.' },
          { icon: '🔬', title: 'Laboratory',         desc: 'Automated sample handling, liquid dispensing, and test execution.' },
          { icon: '🌾', title: 'AgriRobotics',        desc: 'Crop harvesting robots, seeding automation, and field surveillance drones.' },
          { icon: '🏗️', title: 'Construction',       desc: 'Autonomous bricklaying, concrete printing, and site surveying robots.' },
          { icon: '♻️', title: 'Waste Management',   desc: 'AI-guided waste sorting robots with recycling stream classification.' },
        ]}
      />
      <Footer />
    </>
  );
}
