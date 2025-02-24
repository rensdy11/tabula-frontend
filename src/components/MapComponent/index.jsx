import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markers = [
  { id: 1, position: [50.8503, 4.3517], name: "Grand Place" },
  { id: 2, position: [50.8467, 4.3499], name: "Manneken Pis" },
  { id: 3, position: [50.8449, 4.3495], name: "Bourse de Bruxelles" },
  { id: 4, position: [50.8505, 4.3488], name: "Saint-Hubert Royal Galleries" },
  { id: 5, position: [50.8476, 4.3572], name: "Brussels Park" },
  { id: 6, position: [50.8523, 4.3525], name: "Cathedral of St. Michael and St. Gudula" },
  { id: 7, position: [50.8463, 4.3517], name: "Place Royale" },
];

const MapComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Brussels Map</h1>
      <MapContainer
        center={[50.8503, 4.3517]} 
        zoom={14}
        className="w-full max-w-4xl h-[500px] rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {markers.map((marker) => (
          <Marker key={marker.id} position={marker.position}>
            <Popup>{marker.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;