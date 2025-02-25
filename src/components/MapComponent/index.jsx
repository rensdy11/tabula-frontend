import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locations from "../Locations";
import { Link } from "react-router-dom";

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
        {locations.map((location) => (
          <Marker key={location.id} position={location.latlng}>
            <Popup>
              <strong>{location.title}</strong>
              <br />
              {location.address}
              <br />
              <Link to={`/location/${location.id}`} className="text-blue-500 underline">
                View Details
              </Link>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;