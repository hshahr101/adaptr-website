'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Component to handle Leaflet size recalibration safely
function MapResizer() {
  const map = useMap();
  
  useEffect(() => {
    if (!map) return;
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);
    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

// Custom animated map marker
const createCustomIcon = () => {
  return L.divIcon({
    className: 'custom-map-marker',
    html: `
      <div style="position: relative; width: 20px; height: 20px;">
        <span style="position: absolute; width: 100%; height: 100%; border-radius: 50%; background-color: #EE6C4D; opacity: 0.75; animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;"></span>
        <span style="position: relative; display: block; width: 16px; height: 16px; margin: 2px; border-radius: 50%; background-color: #EE6C4D; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></span>
      </div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10],
  });
};
const mapProjects = [
  {
    id: 1,
    name: "Mary's Harbour Multi-Renewable Microgrid",
    location: 'Southern Labrador, NL, Canada',
    lat: 52.302,
    lng: -55.834,
    type: 'Multi-Renewable Microgrid (1.2 MW)',
    details: 'Supply of Canada’s first multi-renewables Microgrid Control System (MGCS), integrating hydro, solar PV, and battery storage. Fault-free operation since 2021.',
  },
  {
    id: 2,
    name: 'Nain Wind-Storage Microgrid',
    location: 'Nain, Labrador, Canada',
    lat: 56.541,
    lng: -61.693,
    type: 'Wind-Storage Microgrid Controls',
    details: 'System design, controls and technical interconnection studies for a high-penetration wind-storage-diesel system.',
  },
  {
    id: 3,
    name: 'Naujaat Solar-Storage Microgrid',
    location: 'Naujaat, Nunavut, Canada',
    lat: 66.522,
    lng: -86.226,
    type: 'Solar-Storage Microgrid Controls',
    details: 'Developed system design and protection philosophy securing Nunavut utility buy-in while replicating diesel plant operation.',
  },
  {
    id: 4,
    name: 'Coral Harbour Solar-Storage Microgrid',
    location: 'Coral Harbour, Nunavut, Canada',
    lat: 64.137,
    lng: -83.167,
    type: 'Solar-Storage Microgrid Controls',
    details: 'Achieved target renewable energy penetration targets and replicated utility diesel plant operation despite generation gaps.',
  },
  {
    id: 5,
    name: 'Rankin Inlet Wind-Storage Microgrid',
    location: 'Rankin Inlet, Nunavut, Canada',
    lat: 62.808,
    lng: -92.085,
    type: 'Wind-Storage Microgrid Simulation',
    details: 'Replicated diesel plant operation with <2% uncertainty in our operation simulator and quatified and validated project performance.',
  },
  {
    id: 6,
    name: 'Baker Lake Wind-Storage Microgrid',
    location: 'Baker Lake, Nunavut, Canada',
    lat: 64.317,
    lng: -96.017,
    type: 'Wind-Storage Microgrid Simulation',
    details: 'Optimized project configuration using our operation simulator and proprietary EMS to quantify and validate project performance.',
  },
  {
    id: 7,
    name: "M'Chigeeng First Nation & Mining Smart-Grid",
    location: 'Manitoulin Island, ON, Canada',
    lat: 45.811,
    lng: -82.164,
    type: 'Grid Adaptr Demonstration',
    details: 'Validated integrating MW-rated renewables and heavy industrial motors into weak rural feeders using Grid Adaptr.',
  },
  {
    id: 8,
    name: 'Haeckel Hill Hybrid Energy Storage System',
    location: 'Whitehorse, Yukon, Canada',
    lat: 60.750,
    lng: -135.233,
    type: 'Hybrid ESS Controls (HESS)',
    details: 'Designed hybrid ESS control strategy to mitigate wind turbine ramping events and grid frequency fluctuations for Yukon Electric.',
  },
  {
    id: 9,
    name: 'Toronto HQ & Power Systems R&D Lab',
    location: 'Toronto, ON, Canada',
    lat: 43.6535,
    lng: -79.36679,
    type: 'R&D Lab & Engineering Space.',
    details: 'In-house OPAL-RT real-time hardware-in-the-loop (HiL) and software-in-the-loop (SiL) simulation testing facility.',
  },
  {
    id: 10,
    name: 'Advanced controls for Industrial facility',
    location: 'Port Hawkesbury, NS',
    lat: 45.615,
    lng: -61.364,
    type: 'Power Systems Engineering',
    details: 'Advanced power system study and simulation of control system and grid support.',
  },
  {
    id: 11,
    name: 'Project NEOM Megacity Grid Studies',
    location: 'NEOM Region, Saudi Arabia',
    lat: 28.300,
    lng: 35.100,
    type: 'Power Systems & Smart Grid Studies',
    details: 'Performed advanced power system studies and grid integration modeling for 100% renewable powered megacity infrastructure.',
  },
  {
    id: 12,
    name: 'MATL Cross-Border Interconnection',
    location: 'Montana-Alberta Border (AB / MT)',
    lat: 49.000,
    lng: -111.900,
    type: 'Technical Compliance Review',
    details: 'Technical review of power system modeling and dynamic stability analysis for the Montana-Alberta Tie Line (MATL) merchant interconnection.',
  },
  {
    id: 13,
    name: 'Ontario LT1',
    location: 'Various Regional Distribution Feeders, ON',
    lat: 44.500,
    lng: -79.500,
    type: 'Utility Hosting Capacity Studies',
    details: 'Calculated hosting capacity limits, voltage rise mitigation, and IBR penetration thresholds across regional Ontario distribution networks.',
  },
  {
    id: 14,
    name: 'Offshore Oil & Gas Platform Microgrid',
    location: 'North Sea Offshore Basin, United Kingdom',
    lat: 57.500,
    lng: 1.500,
    type: 'System Impact & Reliability Studies',
    details: 'Conducted system impact studies for off-grid electrification of offshore platform power systems.',
  },
  {
    id: 15,
    name: 'Grid Code Assessment',
    location: 'New England, US',
    lat: 44.2,
    lng: -70.3,
    type: 'Technical Compliance Review',
    details: 'Performed New England grid code review to vet requirements and obligations for wind turbine inverter systems for a major OEM.',
  },
    {
    id: 16,
    name: 'Eastern King Wind Farm',
    location: 'PEI, CA',
    lat: 46.43,
    lng: -62.09,
    type: 'Power Systems & Smart Grid Studies',
    details: 'Performed Harmonic Load Flow Study for a wind farm project.',
  },
  {
    id: 17,
    name: 'Scioto Ridge Solar Project',
    location: 'Ohio, US',
    lat: 40.56,
    lng: -83.73,
    type: 'Power Systems & Smart Grid Studies',
    details: 'Performed Harmonic Load Flow Study for a 100MW+ solar project.',
  },
];

export default function ProjectMapComponent() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Inject CSS safely with cleanup
    if (typeof document !== 'undefined' && document.head) {
      const style = document.createElement('style');
      style.id = 'leaflet-custom-styles';
      style.innerHTML = `
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .leaflet-container img {
          max-width: none !important;
          max-height: none !important;
        }
        .leaflet-container {
          width: 100% !important;
          height: 100% !important;
          z-index: 1;
        }
      `;
      document.head.appendChild(style);

      return () => {
        const existingStyle = document.getElementById('leaflet-custom-styles');
        if (existingStyle && existingStyle.parentNode) {
          existingStyle.parentNode.removeChild(existingStyle);
        }
      };
    }
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-lightcyan/10 dark:bg-gunmetal rounded-2xl">
        <span className="text-xs font-bold text-bdazzled dark:text-cerulean">Loading map component...</span>
      </div>
    );
  }

  return (
    <MapContainer
      center={[50, -55.0]}
      zoom={3}
      scrollWheelZoom={false}
      style={{ width: '100%', height: '100%' }}
    >
      <MapResizer />
      
      {/* High-contrast, keyless tile layer */}
      <TileLayer
       attribution='&copy; <a href="https://carto.com/">CARTO</a>'
  url="https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png?key=cb1_2vgr_1_abf70ee25ab47550aa8c194f"
      />

      {mapProjects.map((project) => (
        <Marker
          key={project.id}
          position={[project.lat, project.lng]}
          icon={createCustomIcon()}
        >
          <Popup>
            <div style={{ padding: '4px', fontFamily: 'sans-serif' }}>
              <strong style={{ color: '#1E293B', fontSize: '13px' }}>{project.name}</strong>
              <p style={{ color: '#0284C7', fontSize: '11px', margin: '2px 0', fontWeight: 'bold' }}>{project.location}</p>
              <p style={{ color: '#475569', fontSize: '11px', margin: '4px 0 0 0' }}>{project.details}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}


