import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'

import Footer from 'components/footer'
import Header from 'components/header'

export const Layout = () => (
  <>
    <Header />
    <Box
      sx={{
        height: 'calc(100vh - 80px)',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </>
)
