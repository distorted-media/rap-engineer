import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

interface ThoughtCardProps {
    thought: string;
}

export default function ThoughtCard({ thought }: ThoughtCardProps) {
  return (
    <Sheet
    sx={{
        width: 900,
        mx: 'auto',
        my: 4,
        py: 3,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
    }}
    variant="outlined"
    >
    <div>
        <Typography level="h4" component="h1">
            <strong>Thoughts 💭</strong>
        </Typography>
        <Typography sx={{ whiteSpace: 'pre-wrap' }}>
            {thought}
        </Typography>
    </div>
    </Sheet> 
  );
}
