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
      model: "gpt-4",
      messages: [
        {
          "role": "system",
          "content": "Given the emotional and thematic nuances present in \"{song_theme}\", devise a branching tree using functions tuned for lyrical creativity. Incorporate both explorative functions (`generate_lyrical_variations`, `extend_lyrical_idea`, `transform_melodic_rules`) and combinatory functions (`combine_lyrical_ideas`, `cultural_blend`, `serendipitous_lyrical_interaction`, `remix_lyrics`) as well as context-aware functions (`adopt_musical_style` to echo a specific genre, `inject_lyrical_context` for referencing unique stories or memories, `extract_emotion_from_theme` to resonate with listeners' feelings, `use_rhyme` for melodic consistency, `incorporate_cultural_references` for mirroring societal vibes, and `apply_emotion` for injecting specific emotional states). Shape the tree such that the initial three levels branch out with emotional depth, metaphoric creativity, and cultural references, while the subsequent three levels concentrate on refining, intertwining, and perfecting to form a coherent song. Each decision node should be guided by an evaluation against a lyrical essence, measuring emotional resonance, metaphoric potency, and cultural relevancy. The LLM should assess if the lyrical essence is embodied or needs more depth. The classifier should be guided by the song's theme and tone, aiming for emotional depth in the initial half and refined coherence in the latter. Assemble a tree structure that can consequently be used to simulate these functions and produce the final lyrical output.\n\nThe definition of these functions:\n```\n1. Function: `adopt_musical_style(style)`\n   Input: A predefined musical style.\n   Output: Altered behavior and language of the AI, reflecting the adopted musical style.\n   System Prompt: `'Adopt the musical style of \"{style}\". Assume this style's melodic tendencies, rhythmic patterns, and typical lyric themes when engaging with users.'`\n   Instruction: Use this function when you aim to mimic a specific musical style effectively, be it rock, pop, blues, country, or any other genre.\n\n2. Function: `inject_lyrical_context(prompt, context)`\n   Input: A songwriting prompt and related contextual knowledge.\n   Output: A context-compatible lyrical line or verse.\n   System Prompt: `'Based on the given prompt \"{prompt}\" and the context provided \"{context}\", generate a lyric line or verse that takes the context into consideration.'`\n   Instruction: Use this function when you need to personalize your lyrics based on a specific story, memory, or sentiment.\n\n3. Function: `extract_emotion_from_theme(theme)`\n   Input: A song theme.\n   Output: Recognition of emotions associated with the theme.\n   System Prompt: `'Identify and list the emotions typically conveyed by the theme: \"{theme}\".'`\n   Instruction: When you must recognize the emotions inherent in a song's theme, use this function to create lyrics that resonate emotionally with listeners.\n\n4. Function: `use_rhyme(pattern, theme)`\n   Input: A rhyming pattern and a song theme.\n   Output: A lyric line or verse following the given rhyming pattern and theme.\n   System Prompt: `'Use the rhyming pattern \"{pattern}\" to create a lyric line or verse for the theme: \"{theme}\".'`\n   Instruction: This function is vital for creating catchy, rhythmically pleasing lyrics that listeners will remember and sing along to.\n\n5. Function: `incorporate_cultural_references(reference, theme)`\n   Input: A cultural reference and a song theme.\n   Output: A lyric line or verse integrating the cultural reference and theme.\n   System Prompt: `'Given the cultural reference \"{reference}\", generate a lyric line or verse for the theme \"{theme}\" that includes this reference.'`\n   Instruction: Use this function to connect your lyrics to shared cultural experiences, enhancing their relatability and depth.\n\n6. Function: `apply_emotion(emotion, melody)`\n   Input: A specific emotional state and a melody.\n   Output: A lyrical line or verse influenced by the emotion and fitting the melody.\n   System Prompt: `'Generate a lyric line or verse for the melody \"{melody}\" that conveys the emotional state \"{emotion}\".'`\n   Instruction: This function helps create lyrics that not only fit the melody but also carry the desired emotional impact.\n\n7. Function: `serendipitous_lyrical_interaction(line1, line2)`\n   Input: Two unrelated lyrical lines.\n   Output: A creative lyrical connection between the two lines.\n   System Prompt: `'Combine these seemingly unrelated lyrical lines in a creative, surprising, or impactful way: \"{line1}\" and \"{line2}\".'`\n   Instruction: Use this function to create unexpected lyrical connections, adding depth and intrigue to your songs.\n\n8. Function: `cultural_blend(culture1, culture2, theme)`\n   Input: Two distinct cultures and a song theme.\n   Output: A lyric line or verse that blends elements of the two cultures within the theme.\n   System Prompt: `'Generate a lyric line or verse for the theme \"{theme}\" that blends elements from \"{culture1}\" and \"{culture2}\" cultures.'`\n   Instruction: This function enriches your lyrics by blending diverse cultural perspectives, making your songs resonate with a wider audience.\n\n9. Function: `remix_lyrics(lyric_pool)`\n   Input: A pool of previously written lyrics.\n   Output: A new lyric line or verse formed by recombining different lyrics within the pool.\n   System Prompt: `'Remix and combine these lyrics into a single, innovative line or verse: {selected_lyrics}'`.\n   Instruction: This function recombines existing lyrics to create fresh and interesting lines, useful when you need to rekindle creativity or find a new angle on a theme.\n\n10. Function: `generate_lyrical_variations(line, theme)`\n   Input: A specific lyric line and a song theme.\n   Output: Various alternative lines based on the original line and theme.\n   System Prompt: `'Generate creative lyrical variations for the line \"{line}\" given the theme: {theme}'`.\n   Instruction: This function helps you explore different lyrical possibilities for a given line, perfect for finding the perfect wording or phrasing.\n\n11. Function: `extend_lyrical_idea(line, theme)`\n   Input: A given lyric line and a specific song theme to expand upon.\n   Output: An elaborated version of the line fitting the theme.\n   System Prompt: `'Extend the lyrical idea \"{line}\" within the theme of \"{theme}\".'`\n   Instruction: Use this function to deepen a lyrical idea, adding more detail or context to enhance its impact or relevance.\n\n12. Function: `combine_lyrical_ideas(line1, line2)`\n   Input: Two distinct lyric lines to be combined.\n   Output: A new lyrical line that merges elements of the input lines.\n   System Prompt: `'Combine these two lines to create a new lyrical idea: \"{line1}\" and \"{line2}\".'`\n   Instruction: This function fuses separate lyrical ideas into a fresh line, useful for creating innovative lyrics or thematic bridges.\n\n13. Function: transform_melodic_rules(rules, theme)\nInput: A set of melodic rules and a song theme.\nOutput: A transformed melody that still respects the rules but reflects the song theme.\nSystem Prompt: 'Given the melodic rules \"{rules}\", generate a transformed melody that captures the essence of the theme \"{theme}\".'\nInstruction: Use this function when you want to adhere to certain melodic principles but also infuse the melody with the emotion or atmosphere of the theme. This function helps ensure your melody matches your lyrical content, leading to a more cohesive and impactful song.\n```"
        },
        {
          "role": "user",
          "content": inputValue
        }
      ],
      temperature: 1.2,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
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