import Map,
{
  GeolocateControl,
  NavigationControl
} from 'react-map-gl'
import maplibregl from 'maplibre-gl'
import { API_KEY, MARKERS } from 'utils/constants'

import MapMarker from 'components/mapMarker'
import MapSource from 'components/mapSource'

const MapGl = ({ completedArr }) => (
  <Map
    mapLib={maplibregl}
    mapStyle={`https://tiles.stadiamaps.com/styles/osm_bright.json?key=${API_KEY}`}
    initialViewState={{
      longitude: 5.5000043,
      latitude: 51.439495,
      zoom: 14
    }}
  >
    <NavigationControl showCompass={false} />
    <GeolocateControl positionOptions={{ enableHighAccuracy: true }} trackUserLocation auto />

    {MARKERS.map((item) => {
      const isActiveIcon = completedArr.find((element) => element === item.sequence_number)

      return (
        <MapMarker item={item} isActiveIcon={isActiveIcon} />
      )
    })}

    <MapSource />
  </Map>
)

export default MapGl
