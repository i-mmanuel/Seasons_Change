import { useState, useEffect } from "react";

export default () => {
  let [lat, setLat] = useState(null),
    [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => setLat(position.coords.latitude),
      (err) => setErrorMessage(err.message)
    );
  }, []);

  return [lat, errorMessage];
};