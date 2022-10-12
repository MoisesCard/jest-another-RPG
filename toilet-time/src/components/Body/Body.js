import React from 'react';
import "./body.css"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
    width: '90vw',
    height: '90vh'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};

const Body = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_API_KEY
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

  return isLoaded ? (
    <div className='map'>
    <GoogleMap
        mapContainerStyle= {containerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
        onUnmount={onUnmount}
    >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
    </GoogleMap>
    </div>
  ) : <></>
}

export default React.memo(Body)