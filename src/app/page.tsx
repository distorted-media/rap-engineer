import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

import InputBox from '@/components/InputBox';
import ThoughtCard from '@/components/ThoughtCard';
import LyricsCard from '@/components/LyricsCard';

export default function Home() {
  return (
    <Sheet
      sx={{
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <InputBox/>
      <ThoughtCard thought="This is a thought"/>
      <LyricsCard lyrics="This is a lyric"/>
    </Sheet>
  );
}
