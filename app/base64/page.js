'use client'
import * as React from 'react';
import Image from "next/image";
import { Box, Typography, Button, Grid, Container , Card , CardContent, CardActions} from '@mui/material';
import { useRouter } from 'next/navigation'
import { SearchAppBar } from "../navigation"


export default function  LandingPage() {
    return (
    <>
    <SearchAppBar title= {"base64 Tools"}/>
    <h1>GOOD</h1>
    </>)
}