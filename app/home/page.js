'use client'
import * as React from 'react';
import Image from "next/image";
import { Box, Typography, Button, Grid, Container , Card , CardContent, CardActions} from '@mui/material';
import { useRouter } from 'next/navigation'
import {toolsData}from '../navigation.js'


function ToolCard({ tool }) {
  const router = useRouter()
  return (
    <Card sx={{ maxWidth: 345, width:"fit-content"}}>
      <CardContent>
        <Typography gutterBottom variant="h5">
          {tool.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tool.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant='contained' onClick={() => router.push(tool.path)}>Explore</Button>
      </CardActions>
    </Card>
  );
}


export default function  LandingPage()  {
  return (
    <>
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      <Typography variant="h2" component="h1" gutterBottom> Find our Never ending tools</Typography>
    </Box>
      <Grid container spacing={2}>
      {toolsData.map((tool) => (
        <Grid item xs={12} sm={6} md={4} key={tool.title} sx ={{display:"flex", justifyContent:"center"}}>
          <ToolCard tool={tool} />
        </Grid>
      ))}
    </Grid>
    </>
  )
}