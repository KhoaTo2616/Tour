import React from "react";
import "./App.css";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";

function App() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loadding....</div>;
  return <Map />;
}

function Map() {
  const center = useMemo(
    () => ({ lat: 10.760916992642976, lng: 106.66268292632239 }),
    []
  );

  return (
    <div>
      <Header />
      <Body />
      <div class="row">
        <div class="col">
          <div class="leftside"></div>
        </div>

        <div class="col">
          <div class="rightside">
            <GoogleMap
              zoom={20}
              center={center}
              mapContainerClassName="map-container"
            >
              <Marker position={center} />
            </GoogleMap>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
