"use client"
import React from 'react';
import useSound from 'use-sound';
import { Button } from '@mui/joy';

const AudioPlayer: React.FC = () => {
  const [play] = useSound('/Demo.mp3');

  const handlePlayClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    play();
  };

  return (
    <div>
        <Button onClick={handlePlayClick}>Play a Beat</Button>
    </div>
  );
};

export default AudioPlayer;


