import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

interface LyricsCardProps {
    lyrics: string;
}

export default function LyricsCard({ lyrics }: LyricsCardProps) {
  return (
    <Sheet
    sx={{
        width: '90%', // Use relative unit
        maxWidth: '900px', // Limit the maximum width
        mx: 'auto',
        my: 4,
        py: 1, // Reduce padding
        px: 1, // Reduce padding
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
        '@media (max-width:600px)': { // Adjust layout for small screens
            width: '100%',
            py: 0.5,
            px: 0.5,
        }
    }}
    variant="outlined"
    >
    <div>
        <Typography level="h4" component="h1">
            <strong>Lyrics 🎙️</strong>
        </Typography>
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
            {lyrics}
        </Typography>
    </div>
    </Sheet> 
  );
}