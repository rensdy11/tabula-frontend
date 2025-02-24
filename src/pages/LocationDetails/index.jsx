import { useParams, Link } from "react-router-dom";
import locations from "../../components/Locations";

const LocationDetails = () => {
  const { id } = useParams(); 
  const location = locations.find((loc) => loc.id === parseInt(id)); 

  if (!location) {
    return <h2 className="text-center text-red-500">Location not found</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{location.title}</h1>
      <img
        src={location.image}
        alt={location.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700">{location.description}</p>
      <p className="text-gray-500 mt-2"><strong>Address:</strong> {location.address}</p>
      <Link
        to="/"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Back to Map
      </Link>
    </div>
  );
};

export default LocationDetails;