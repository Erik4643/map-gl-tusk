import { Marker } from 'react-map-gl'
import { Box } from '@mui/material'
import { ICONS } from 'assets/icons'
import { COLORS } from 'styles/colors'

const MapMarker = ({ item, isActiveIcon }) => (
  <Marker key={`${item.lat}-${item.lng}`} offset={[0, -22]} longitude={item.lng} latitude={item.lat}>
    <ICONS.MarkerIcon />
    <Box sx={{
      position: 'absolute',
      top: 3,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '18px',
      height: '18px',
      border: `1px solid ${COLORS.white}`,
      background: isActiveIcon ? COLORS.blue : COLORS.white,
      borderRadius: '100%',
      color: isActiveIcon ? COLORS.white : COLORS.dark_gray,
      overflow: 'hidden',
      textAlign: 'center'
    }}
    >
      <Box
        sx={{
          fontSize: '10px',
          lineHeight: '12px',
          fontWeight: '700',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {item.sequence_number}
      </Box>
    </Box>
  </Marker>
)

export default MapMarker
