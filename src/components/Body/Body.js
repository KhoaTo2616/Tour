import React from "react";
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function Body() {
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
    <div className="body">
      <div class="row">
        <div class="col">
          <div class="leftside">
            <h3>Xe Đi Thăm Nuôi: </h3>
            <p>- Trại Giam Huy Khiêm Tỉnh Bình Thuận</p>
            <p>- Trại Giam Tống Lê Chân Tỉnh Bình Phước</p>
            <p>- Trại Giam Phước Hòa - Mỹ Phước Tỉnh Tiền Giang</p>
          </div>
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
    </div>
  );
}

export default Body;
