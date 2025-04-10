

import '../App.css'
import { Box, IconButton, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

function Header() {
  const LogoText = styled(Typography)(({ }) => ({
    fontSize: '1.2rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
    fontFamily: '"Preahvihear", sans-serif',
    background: `linear-gradient(135deg, #0062FF, #6C47FF, #0091FF)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundSize: '300% 300%',
    animation: 'gradient-shift 8s ease infinite',
    position: 'relative',
    '@keyframes gradient-shift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' }
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-4px',
      left: 0,
      width: '60%',
      height: '3px',
      background: `linear-gradient(90deg, #0062FF, #6C47FF, transparent)`,
      borderRadius: '2px',
      animation: 'width-pulse 3s ease-in-out infinite',
    },
    '@keyframes width-pulse': {
      '0%': { width: '40%' },
      '50%': { width: '70%' },
      '100%': { width: '40%' },
    }
  }));


  return (
    <>
      <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '20px 24px',
                borderBottom: '1px solid',
                borderImage: 'linear-gradient(90deg, #0078FF, transparent) 1',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, #0078FF80, transparent)',
                  filter: 'blur(1px)',
                }
              }}>
                <LogoText variant="h5">
                  ITS<span style={{ color: "#0078FF" }}>me</span>
                  <span style={{ color: "#6C47FF" }}>Anjali</span>
                </LogoText>
                
                <IconButton 
                  // onClick={handleDrawerToggle} 
                  sx={{
                    color: '#333',
                    backgroundColor:  'rgba(0, 0, 0, 0.05)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor:  'rgba(255, 255, 255, 0.1)' ,
                      transform: 'rotate(90deg)'
                    }
                  }}
                >
                  🧭
                </IconButton>
              </Box>
     <div className='container'>
      <h1>Hi,I'm Anjali</h1>
    
      </div>
    </>
  )
}

export default Header
