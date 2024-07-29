'use client'
import * as React from 'react';
import { Box, Typography, Button, Grid, Container, Stack, Switch, TextField } from '@mui/material';
import { SearchAppBar } from "../navigation"


export default function JsonConvertor() {
    const [input,setInput] = React.useState("")
    const [output,setOutput] = React.useState("")
    const handleInputChange = (e) => {
        setInput(input=>e.target.value)
    }

    const jsonPrettify = () => {
        const answer = JSON.stringify(JSON.parse(input), null, 4)
        setOutput(output=>answer)
    }

    return (
        <>
            <SearchAppBar title={"JSON viewer"} />
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: '95vh' }}>
                <TextField
                    id="outlined-multiline-static"
                    label="Input"
                    multiline
                    rows={30}
                    sx ={{width:"30vw", maxHeight:"70vh"}}
                    onChange={handleInputChange}
                />
                <Stack>
                <Button variant='contained'sx={{m:3}} onClick={jsonPrettify}>
                    Prettify
                </Button>
                </Stack>
                <TextField
                    id="outlined-multiline-static"
                    label="output"
                    multiline
                    rows={30}
                    sx ={{width:"30vw", maxHeight:"70vh"}}
                    value={output}
                />
            </Box>
        </>
    )
}