

import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '@/components/pages/delivery/LocationPin'


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const DeliveryMap = ({ props })=>{


    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}  /*//#ChangeKey with company Key*/
                defaultCenter={props.center}
                defaultZoom={props.zoom}
            >
                <LocationPin
                    lat={props.center.lat}
                    lng={props.center.lng}
                    text={"ACTUAL DRIVER LOCATION"}
                />
            </GoogleMapReact>
        </div>
    );
}

export default DeliveryMap;
