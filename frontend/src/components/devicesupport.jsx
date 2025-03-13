import React from "react";
import '../stylesheets/devicesupport.css';

const devices = [
  { name: "Smartphone", description: "Stream seamlessly on iOS and Android." },
  { name: "Tablet", description: "Enjoy on larger screens with optimized UI." },
  { name: "Laptop", description: "Access through any web browser." },
  
];

export default function DeviceSupport() {
  return (
    <div className="container">
      <h2 className="title">Stream Anywhere</h2>
      <p className="description">Our platform is compatible with multiple devices to ensure a smooth viewing experience.</p>
      <div className="device-list">
        {devices.map((device, index) => (
          <div key={index} className="device-box">
            <h3 className="device-name">{device.name}</h3>
            <p className="device-description">{device.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
