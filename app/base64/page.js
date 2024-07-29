'use client'
import * as React from 'react';
import Image from "next/image";
import { Box, Typography, Button, Grid, Container, Stack, Switch, TextField } from '@mui/material';
import { useRouter } from 'next/navigation'
import { SearchAppBar } from "../navigation"


export default function LandingPage() {
    const [encode,setEncode] = React.useState(false)
    const [input,setInput] = React.useState("")
    const [output,setOutput] = React.useState("")
    const toggleSwitch = (e) => {
        setEncode(encode => e.target.checked)
    }
    const handleInputChange = (e) => {
        setInput(input=>e.target.value)
    }

    const base64Convert = () => {
        if (encode) {
            setOutput(output=>btoa(input))
        } else {
            setOutput(output=>atob(input))
        }
    }


    return (
        <>
            <SearchAppBar title={"Base 64 Tools"} />
            <Container maxWidth="lg" sx={{ display:'flex', alignItems: 'center', justifyContent: "center", flexDirection:'column'}}>
                <Stack direction="row" spacing={2} sx={{ mt: 3, justifyContent: "center" }}>
                    <Typography variant='h5'>Decode</Typography>
                    <Switch onChange={toggleSwitch}/>
                    <Typography variant='h5'>Encode</Typography>
                </Stack>
                <TextField  id="input" variant='outlined' label="Input" fullWidth='True' multiline='True' onChange={handleInputChange}/>
                <Button size='large' variant='contained'sx={{mt:3,mb:4, alignSelf:"center"}} onClick={base64Convert}>{encode?"Encode":"Decode"}</Button>
                <TextField  id="output" variant='outlined' label="output" fullWidth='True' value={output}/>
            </Container>
        </>)
}