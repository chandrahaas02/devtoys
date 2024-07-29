'use client'
import * as React from 'react';
import { Box, Typography,Container} from '@mui/material';
import { useRouter } from 'next/navigation'
import { SearchAppBar } from './navigation.js'


export default function LandingPage() {
  const router = useRouter()
  return (
    <>
      <SearchAppBar />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '95vh' }}>
          {/* Hero section */}
          <Typography variant="h2" component="h1" gutterBottom>
            {"{"} {"}"} Dev Toys
          </Typography>
          <Typography variant="body1" sx={{ p: 3 }}>
            Find your every Day tools at place
          </Typography>
        </Box>
      </Container>
    </>
  )
}