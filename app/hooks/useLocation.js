import { useState, useEffect } from 'react'
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { granted } = await Location.requestForegroundPermissionsAsync();
            if (granted) {
              const lastKnownPosition = await Location.getLastKnownPositionAsync();
              if (!lastKnownPosition) {
                  return;
              }
              const { latitude, longitude } = lastKnownPosition.coords;
              setLocation({ latitude, longitude });
            } else {
              return;
            }
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getLocation();
    }, [])

    return location;
}

