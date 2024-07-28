'use client'
import * as React from 'react';
import { Box, Typography, Button, Grid, Container} from '@mui/material';
import { useRouter } from 'next/navigation'


export default function  LandingPage()  {
  const router = useRouter()
  return (
    <>
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        {/* Hero section */}
            <Typography variant="h2" component="h1" gutterBottom>
              {"{"} {"}"} Dev Toys
            </Typography>
            <Typography variant="body1" sx={{p:3}}>
              Find your every Day tools at place
            </Typography>
            <Button variant="contained" color="primary" onClick={() => router.push('/home')}>
              Explore Tools
            </Button>
      </Box>
    </Container>
    </>
  )
}