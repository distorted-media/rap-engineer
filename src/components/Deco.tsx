import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

interface DecoProps {
    lyrics: string;
}

export default function Deco({ lyrics }: DecoProps) {
  return (
    <Sheet
    sx={{
        width: '90%', // Use relative unit
        maxWidth: '300px', // Limit the maximum width
        mx: 'auto',
        my: 4,
        py: 1, // Reduce padding
        px: 1, // Reduce padding
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
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
        
        <Typography sx={{ whiteSpace: 'wrap' }}>
            {lyrics}
        </Typography>
    </div>
    </Sheet> 
  );
}

