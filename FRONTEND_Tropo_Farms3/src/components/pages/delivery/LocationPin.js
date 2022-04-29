
import { LocationMarkerIcon } from '@heroicons/react/outline/index'
import React from 'react'


const LocationPin = ({ text }) => (
    <div className="pin">
        <LocationMarkerIcon width={32} height={32} />
        <p className="text-sm  text-lightBlue-400 font-bold ">{text}</p>
    </div>
)

export  default LocationPin;
