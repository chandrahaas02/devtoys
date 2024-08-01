'use client'

import { FFmpeg } from '@ffmpeg/ffmpeg'
import { fetchFile, toBlobURL } from '@ffmpeg/util'
import { useRef, useState } from 'react'
import { SearchAppBar } from "../navigation"


export default function Home() {
    return (
        <>
            <SearchAppBar title={"ffmpeg"} />
        </>
    )
}