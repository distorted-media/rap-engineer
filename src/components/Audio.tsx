"use client"
import React from 'react';
import useSound from 'use-sound';
import { Button } from '@mui/joy';

const AudioPlayer: React.FC = () => {
  const [play, { stop, isPlaying }] = useSound('/Demo.mp3');

  return (
    <div>
      {!isPlaying && (
        <Button onClick={play}>Play a Beat</Button>
      )}
      {isPlaying && (
        <Button onClick={stop}>Stop</Button>
      )}
    </div>
  );
};

export default AudioPlayer;


