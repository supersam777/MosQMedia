import React, { useEffect, useState } from 'react'
import { userLocationMap } from '../services'
import GoogleMapReact from 'google-map-react';


function Maps() {

    const [items, setItems] = useState([])
    const [center, setCenter] = useState({ lat: 37.7363665, lng: 38.2369792 })
    const [zoom, setZoom] = useState(11)
    const [lat, setLat] = useState(37.7363665)
    const [lng, setLng] = useState(38.2369792)


    const createMapOptions = (maps) => 
    {
        return {
            styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }]
        }
    }

    return (
        <>
            <div className="container" style={{ marginBottom: 10, height:500, }}>
            <GoogleMapReact
                options={createMapOptions}
                bootstrapURLKeys={{ key: "AIzaSyD5TrePAAcFPpDgtk6QUScVqaqVGYHN6U4" }}
                defaultCenter={center}
                defaultZoom={zoom}
                >

                <div 
                    className="place" 
                    lat={lat} 
                    lng={lng}>
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                </div>
            </GoogleMapReact>
            </div>
        </>
    )
}

export default Maps
