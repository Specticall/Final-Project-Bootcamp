import { useEffect } from "react";
import { TileLayer, useMap } from "react-leaflet";

type Props = {
  lat?: number;
  lng?: number;
};

export default function CountryMap({ lat, lng }: Props) {
  const map = useMap();
  useEffect(() => {
    if (lat !== undefined && lng !== undefined) {
      map.setView([lat, lng], 6);
    }
  }, [lat, lng, map]);

  return (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
}
