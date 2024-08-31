import { MapContainer } from "react-leaflet";
import CountryMap from "./CountryMap";

type Props = {
  lat?: number;
  lng?: number;
};

export default function CountryLocation({ lat, lng }: Props) {
  return (
    <div className="mt-12">
      <div className="flex items-end justify-between mb-10 pb-6 border-b-[1px] border-slate-600 max-sm:flex-col max-sm:items-start max-sm:gap-3">
        <h3 className="text-3xl text-white">Map Location</h3>
        <p className="text-slate-400">
          LAT : {lat}, LNG : {lng}
        </p>
      </div>
      <div className="rounded-lg overflow-hidden">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{
            height: "40rem",
          }}
        >
          <CountryMap lat={lat} lng={lng} />
        </MapContainer>
      </div>
    </div>
  );
}
