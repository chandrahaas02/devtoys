'use client'
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const inter = Inter({ subsets: ["latin"] });

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Dev Tools </title>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
