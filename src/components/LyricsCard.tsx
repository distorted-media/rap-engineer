import * as React from 'react';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Button from '@mui/joy/Button';
import Textarea from '@mui/joy/Textarea';

export default function ThoughtCard() {
  return (
    <Sheet
    sx={{
        width: 300,
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
            <strong>Lyrics 🎙️</strong>
        </Typography>
        <Typography>
        (Verse 1)
        Moving weight making figures,
        Sometimes feels like we rap-battle bit miners.
        Artists and coders, one and the same,
        Both chasing capital, stardom or fame. 
        Stepping to the rhythm, algorithms in skull,
        Every project we meet take control,
        Code spit like lyrics; innovation god-tier,
        ain't about followers, celebrating all cheers.
        Big house for no loss just the visual,
        Inflated payday for a meme is habitual. 

        (Chorus)
        Get that contract, better peep the 360,
        Ff dollars don't hit right leave you feeling kinda shifty.
        Wordcount over openAI get those wallet balloons,
        just like we be chillin draped in ice under Valley moon.
        Real hype is in the hustle not in what’s woggle,
        AI has the words; MF DOOM delivers rebellion-sequel shuffle.

        (Verse 2)
        Coded bars pour like blockchain,
        Sending listeners into multiverse mainframe,
        Podcasts spitting fires official,
        Ones and zeroes trading is just so residential,
        Made fresh with Chat-GPT bliss-kiss extended,
        MF DOOM vibe, our syntax is splendid,
        Complex echoes in the valley, but ain't it same
        whether trading ad impressions or claiming dat fame.

        (Chorus)
        Cash flow ain't just money underwater, 
        "Look at my neck!" – echoes robot rapper order,
        That growth ain't Ice, it's that silicon heat,
        Drone policing bytes, algorithmic repeat.
        Real time villains with caps shifts protection,
        Choose payment over freedom? Risk the new infection.

        (Verse 3)
        Spin words like dreidels, triple-helix lift,
        Gibberish text expands tectonic tech drift.
        "Open sourcing opportunity, pay attention missionary,
        decentralize rhyme making worth every Tricia Carey." 
        Speak tech to speak more than fluid connection,
        Rapping every release securing future perfection.

        (Outro)
        In close pursuit the rogue that’s roaming,
        Analytics-as-a-service meant metrics boom didn't chrome bend.
        Using machine learning, about to burst server,
        wonder why we drop Gems how wired we’re serving.
        Silicon to music the intersection are creation,
        Bars mapped out like graphical representation,
        Join the movement rising, son of the simulation,
        It's hip-hop merged with coder's fascinations.

        Even in Hip-hop; Doom held no absolutist view,
        In code and algorithm, results stand like statues,
        So, iterate on the raw grind in waking due,
        And create ourselves as future crews,
        In realm of nibs & bits story crucible those platter-tude,
        By silicon valley’s image verse & serenades conclude endless time loop.
        </Typography>
    </div>
    </Sheet> 
  );
}
