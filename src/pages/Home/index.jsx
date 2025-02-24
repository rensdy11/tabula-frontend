import { Map } from "leaflet";
import MapComponent from "../../components/MapComponent";

function Home (){
  return (
    <div className="text-center p-10">
      <h1 className="text-8xl font-bold ">Tabula</h1>
      <p className="text-gray-600 font-bold">Home</p>
      <MapComponent />
    </div>
  );
};

export default Home;