'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

// Fix marker icon issue (Leaflet + Webpack/Next.js)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Dummy charging points for testing
const dummyChargingPoints = [
  { lat: 19.076, lng: 72.877, name: 'Charging Station - Mumbai CST' },
  { lat: 19.0896, lng: 72.8656, name: 'Charging Station - Dadar' },
  { lat: 19.2183, lng: 72.9781, name: 'Charging Station - Navi Mumbai' },
];

export default function MapPage() {
  useEffect(() => {
    // To fix any client-only rendering bugs
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <MapContainer
        center={[19.076, 72.877]} // Mumbai
        zoom={11}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {dummyChargingPoints.map((point, idx) => (
          <Marker key={idx} position={[point.lat, point.lng]}>
            <Popup>{point.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
