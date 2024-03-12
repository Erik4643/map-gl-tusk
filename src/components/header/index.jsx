import { Box } from '@mui/material'
import { COLORS } from 'styles/colors'

const Header = () => (
  <Box sx={{
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    paddingInline: '8px',
    justifyContent: 'space-between'
  }}
  >
    <Box sx={{
      fontSize: '12px',
      lineHeight: '18px'
    }}
    >
      12:13
    </Box>
    <Box sx={{
      display: 'flex',
      gap: '8px',
      alignItems: 'center'
    }}
    >
      <Box sx={{
        width: '10px',
        height: '10px',
        background: COLORS.dark_gray,
        borderRadius: '100%'
      }}
      />
      <Box sx={{
        width: '10px',
        height: '10px',
        background: COLORS.dark_gray
      }}
      />
      <Box sx={{
        width: '0',
        height: '0',
        borderRight: '5px solid transparent',
        borderTop: `10px solid ${COLORS.dark_gray}`,
        borderLeft: '5px solid transparent'
      }}
      />
    </Box>
  </Box>
)
export default Header
