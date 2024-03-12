import { Link, useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { appRoutes } from 'appRouter/routes'
import { ICONS } from 'assets/icons'
import { COLORS } from 'styles/colors'

const Footer = () => {
  const { pathname } = useLocation()

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        paddingBlock: '8px'
      }}
    >

      <Link to={appRoutes.route}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'column',
            cursor: 'pointer',
            height: '40px',
            width: 'max-content',
            margin: 'auto'
          }}
        >
          <ICONS.RouteIcon color={pathname === appRoutes.route ? COLORS.blue : COLORS.dark_gray} />
          <Box sx={{
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0.4',
            color: pathname === appRoutes.route ? COLORS.blue : ''
          }}
          >
            Route
          </Box>
        </Box>

      </Link>

      <Link to={appRoutes.home}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '40px',
          cursor: 'pointer',
          width: 'max-content',
          margin: 'auto'
        }}
        >
          <ICONS.MapIcon color={pathname === appRoutes.home ? COLORS.blue : COLORS.dark_gray} />
          <Box sx={{
            fontSize: '14px',
            lineHeight: '16px',
            letterSpacing: '0.4',
            color: pathname === appRoutes.home ? COLORS.blue : ''
          }}
          >
            Map
          </Box>
        </Box>
      </Link>
    </Box>
  )
}
export default Footer
