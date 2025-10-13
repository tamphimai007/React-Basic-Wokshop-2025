import Header from "./components/layout/Header";
import LocationsList from "./components/locations/LocationsList";
import MapView from "./components/map/MapView";
import PersonelList from "./components/people/PersonelList";

// rafce
const App = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <PersonelList />

      <div className="flex flex-col flex-1">
        <Header />

        <div className="flex flex-1 overflow-hidden">
          <MapView />
          <LocationsList />
        </div>
      </div>
    </div>
  );
};
export default App;
