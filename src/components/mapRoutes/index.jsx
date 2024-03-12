import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box
} from '@mui/material'
import { appRoutes } from 'appRouter/routes'
import { ICONS } from 'assets/icons'
import { COLORS } from 'styles/colors'
import { MARKERS } from 'utils/constants'

const MapRoutes = ({ completedArr, setCompletedArr }) => {
  const [accordionOpenArray, setAccordionOpenArray] = useState([])
  const navigate = useNavigate()

  const handleComplete = (item) => {
    const found = completedArr.find((element) => element === item.sequence_number)
    if (!found) {
      setCompletedArr((prev) => [...prev, item.sequence_number])
      navigate(appRoutes.home)
    }
  }

  const handleAccordionChange = (item) => {
    const isDelete = accordionOpenArray.find((element) => element === item.sequence_number)

    if (!isDelete) {
      setAccordionOpenArray((prev) => [...prev, item.sequence_number])
    } else {
      const filteredData = accordionOpenArray.filter((element) => element !== isDelete)
      setAccordionOpenArray(filteredData)
    }
  }

  return (
    <div>
      {MARKERS.map((item) => {
        const isDisabled = completedArr.find((element) => element === item.sequence_number)
        const isOpen = accordionOpenArray.find((element) => element === item.sequence_number)

        return (
          <Box key={`${item.lat}-${item.lng}`}>
            <Accordion onChange={() => handleAccordionChange(item)}>
              <AccordionSummary
                disabled={isDisabled}
                aria-controls={`${item.lat}-${item.lng}`}
                id={`${item.lat}-${item.lng}`}
                sx={{ background: isOpen ? COLORS.sky_blue : COLORS.white }}
              >
                <Box sx={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  textWrap: 'nowrap'
                }}
                >
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                  }}
                  >
                    <Box sx={{
                      display: 'flex',
                      gap: '8px',
                      alignItems: 'center'
                    }}
                    >
                      <Box sx={{
                        width: '24px',
                        height: '20px',
                        fontSize: '12px',
                        fontWeight: 700,
                        position: 'relative',
                        backgroundColor: COLORS.light_blue,
                        borderRadius: '4px',
                        overflow: 'hidden'
                      }}
                      >
                        <Box sx={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          color: isOpen ? COLORS.blue : ''
                        }}
                        >
                          {item.sequence_number}
                        </Box>
                      </Box>
                      <Box sx={{
                        fontSize: '16px',
                        color: COLORS.gray,
                        fontWeight: 500,
                        lineHeight: '20px'
                      }}
                      >
                        {item.street}
                      </Box>
                    </Box>
                    <Box sx={{
                      textAlign: 'left',
                      color: COLORS.light_gray,
                      fontSize: '14px',
                      lineHeight: '16px'
                    }}
                    >
                      {`${item.zip} ${item.city}`}
                    </Box>
                  </Box>

                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    textAlign: 'right'
                  }}
                  >
                    <Box sx={{
                      fontSize: '16px',
                      lineHeight: '20px',
                      color: COLORS.gray
                    }}
                    >
                      {item.eta}
                    </Box>
                    <Box
                      sx={{
                        fontSize: '14px',
                        lineHeight: '16px',
                        color: COLORS.light_gray
                      }}
                    >
                      {item.time_window}
                    </Box>
                  </Box>
                </Box>
              </AccordionSummary>

              <AccordionDetails
                sx={{ background: isOpen ? COLORS.sky_blue : COLORS.white }}
              >
                <Box sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  paddingTop: '12px',
                  borderTop: `1px solid ${COLORS.metallic}`
                }}
                >
                  <Link target="_blank" to={`http://maps.google.com?q=${[item.lat, item.lng]}`}>
                    <Box sx={{
                      width: '40px',
                      height: '40px',
                      background: COLORS.blue,
                      borderRadius: '100%',
                      position: 'relative',
                      cursor: 'pointer'
                    }}
                    >
                      <Box sx={{
                        position: 'absolute',
                        width: '18px',
                        height: '18px',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}
                      >
                        <ICONS.RedirectIcon />
                      </Box>
                    </Box>
                  </Link>

                  <Box
                    onClick={() => handleComplete(item)}
                    sx={{
                      padding: '8px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      border: `1px solid ${COLORS.metallic}`,
                      gap: '8px',
                      borderRadius: '1000px',
                      cursor: 'pointer'
                    }}
                  >
                    <ICONS.SuccessIcon />
                    <Box sx={{
                      fontSize: '14px',
                      lineHeight: '24px',
                      letterSpacing: '0.25px'
                    }}
                    >
                      Complete
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        )
      })}
    </div>
  )
}
export default MapRoutes
