import { Layer, Source } from 'react-map-gl'
import { COLORS } from 'styles/colors'
import { MARKERS } from 'utils/constants'

const MapSource = () => {
  const intersectionPoints = []

  for (let i = 1; i < MARKERS.length; i++) {
    const prevMarker = MARKERS[i - 1]
    const currentMarker = MARKERS[i]

    if (prevMarker.lng !== currentMarker.lng || prevMarker.lat !== currentMarker.lat) {
      intersectionPoints.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [currentMarker.lng, currentMarker.lat]
        }
      })
    }
  }

  const lineData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'LineString',
          coordinates: MARKERS.map((marker) => [marker.lng, marker.lat])
        }
      }
    ]
  }

  lineData.features.push(...intersectionPoints)

  return (
    <Source id="line" type="geojson" data={lineData}>
      <Layer
        id="line-layer"
        type="line"
        source="line"
        layout={{
          'line-cap': 'round',
          'line-join': 'round'
        }}
        paint={{
          'line-color': COLORS.blue,
          'line-width': 2
        }}
      />
      <Layer
        id="point-layer-gray"
        type="circle"
        source="line"
        paint={{
          'circle-radius': 8,
          'circle-color': COLORS.dark_gray,
          'circle-opacity': 0.2
        }}
        filter={['==', '$type', 'Point']}
      />
      <Layer
        id="point-layer-white"
        type="circle"
        source="line"
        paint={{
          'circle-radius': 6,
          'circle-color': COLORS.white
        }}
        filter={['==', '$type', 'Point']}
      />
      <Layer
        id="point-layer-blue"
        type="circle"
        source="line"
        paint={{
          'circle-radius': 4,
          'circle-color': COLORS.blue
        }}
        filter={['==', '$type', 'Point']}
      />
    </Source>
  )
}

export default MapSource
