import React, {useState, useEffect} from 'react';

function useCoords(){
    let [coords, setCoords] = useState({
        latitud : null, 
        longitud : null
    });
    
    let idGeo;
    
    useEffect( () => {
        idGeo = navigator.geolocation.watchPosition((position) => {
            setCoords({
                latitud : position.coords.latitude, 
                longitud : position.coords.longitude
            })
        });
        
        return () => {
            console.log("Parar el escuchador")
            navigator.geolocation.clearWatch(idGeo);
        }
    });
    
    return coords;
}

export default function Coords(){
    let geo = useCoords();
    console.log( geo.latitud );
    return geo.latitud == null?(
        <div>
           Cargando ... 
        </div>
    ) : (
        <div>
            <h4>Latitud: {geo.latitud}</h4>
            <h4>Longitud: {geo.longitud}</h4>
        </div>
    );
}