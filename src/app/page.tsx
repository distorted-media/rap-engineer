"use client"
import React, { useState } from 'react';
import Sheet from '@mui/joy/Sheet';
const { Configuration, OpenAIApi } = require("openai");

import InputBox from '@/components/InputBox';
import ThoughtCard from '@/components/ThoughtCard';
import LyricsCard from '@/components/LyricsCard';

const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);


export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [thought, setThought] = useState('');
  const [showInputBox, setShowInputBox] = useState(true);

  const handleGenerate = async () => {
    setShowInputBox(false);
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{role: "user", content: inputValue}], // use inputValue here
    });
    console.log(response.data.choices[0].message.content);
    setThought(response.data.choices[0].message.content);
  };

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
      {showInputBox && <InputBox onGenerate={handleGenerate} onChange={setInputValue} />}
      {!showInputBox && <ThoughtCard thought={thought} />}
      <LyricsCard lyrics="This is a lyric"/>
    </Sheet>
  );
}