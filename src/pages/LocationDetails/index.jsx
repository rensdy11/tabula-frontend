import { useParams, Link } from "react-router-dom";
import locations from "../../components/Locations";
import { useState } from "react";

const LocationDetails = () => {
  const { id } = useParams(); 
  const location = locations.find((loc) => loc.id === parseInt(id)); 

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  if (!location) {
    return <h2 className="text-center text-red-500">Location not found</h2>;
  }

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment(""); 
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImages([...images, imageUrl]); 
      setSelectedImage(null);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-4">{location.title}</h1>
      <img src={location.image} alt={location.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700">{location.description}</p>
      <p className="text-gray-500 mt-2">
        <strong>Address:</strong> {location.address}
      </p>

      <div className="mt-6">
        <h2 className="text-2xl font-bold">Comments</h2>
        <form onSubmit={handleCommentSubmit} className="mt-2">
          <textarea className="w-full p-2 border rounded" placeholder="Write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} />
          <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add Comment</button>
        </form>
        <ul className="mt-4">
          {comments.map((comment, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded my-2">{comment}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-5">Upload Photos</h2>
        <label className="mt-4 bg-gray-200 px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-300">
            Upload Photo
          <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden"/>
        </label>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <img key={index} src={image} alt="Uploaded Image"  className="w-full h-32 object-cover rounded-lg" />
          ))}
        </div>
      </div>

      <Link
        to="/" className="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg" >
        Back to Map
      </Link>
    </div>
  );
};

export default LocationDetails;