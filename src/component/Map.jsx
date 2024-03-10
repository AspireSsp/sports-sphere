
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import { Icon } from 'react-leaflet';
import L from 'leaflet';

  const myIcon = new L.Icon({ // Create an L.Icon instance (Leaflet library)
    iconUrl: 'https://i.imgur.com/x6ImyVd.png',
    iconSize: [25, 28],
  });

const Map = () => {
    const [userLocations, setUserLocations] = useState([]);
    useEffect(() => {
        const sampleUserLocations = [
            { id: 1, coordinates: [23.2599, 77.4126], name: "bhopal"},
            { id: 2, coordinates: [ 23.1815, 79.9864], name: "jabalpur" },
            { id: 2, coordinates: [22.7196, 75.8577], name: "indore" },
            { id: 2, coordinates: [23.1765, 75.7885], name: 'ujjain' },            
        ];
    
        // Use reverse geocoding to get location names based on coordinates
        const fetchLocationNames = async () => {
          const updatedUserLocations = await Promise.all(
            sampleUserLocations.map(async (user) => {
              const [lat, lon] = user.coordinates;
              try {
                const response = await axios.get(
                  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`
                );
                const locationName = response.data.display_name;
                return { ...user, locationName };
              } catch (error) {
                console.error('Error fetching location name:', error);
                return user;
              }
            })
          );
            console.log(updatedUserLocations);
          setUserLocations(updatedUserLocations);
        };
    
        fetchLocationNames();
      }, []);
      const bounds = userLocations.map((user) => user.location);
      const mapBounds = bounds.length > 0 ? bounds : [[0, 0], [0, 0]];

  return (
    <div>
        <MapContainer
            center={[23.2599, 77.4126]}
            zoom={13}
            style={{ height: '95vh', width: '100%' }}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; OpenStreetMap contributors'
            />

            {userLocations.map((user) => (
                <Marker key={user.id} position={user.coordinates} icon={myIcon}>
                <Popup onMouseOver={() => { this.openPopup(); }}>
                    {user.locationName || 'Unknown Location'}
                </Popup>
                </Marker>
            ))}
        </MapContainer>
    </div>
  )
}

export default Map;


