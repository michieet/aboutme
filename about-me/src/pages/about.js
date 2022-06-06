import { useState, useEffect } from "react";
import FlashcardList from "../components/flashcardList";
import '../about.css';
import '../index.css';

export default function About() {

    const [flashcards, setFlashCards] = useState(FLASHCARD);

    useEffect(() => {
        setFlashCards(FLASHCARD);
    }, []);

    return (
        <>
            <div className="container">
                <a href='/'>Home</a>
            <h1>About</h1>
                <div className="abtcontainer">
                    <FlashcardList flashcards={flashcards}/>
                </div>
            </div>
        </>
    );
};

const FLASHCARD = [

    {
        id: 1,
        title: 'Movies',
        ans: 'Some favourites: LOTR, HP, Forrest Gump, The Blind Side, Emma etc',
        opts: [
            'Genre: Action, Fantasy, Drama/ Period-drama'
        ]
    },
    {
        id: 2,
        title: 'Foodie',
        ans: 'I love beef, spicy food, Italian, Japanese.',
        opts: [
            'p.s. Lots of saved places in Google maps :)'
        ]
    },
    {
        id: 3,
        title: 'De-stress',
        ans: 'Gym, go for walks, cafe-hop',
        opts: [
            'What I do to manage stress'
        ]
    },
    {
        id: 4,
        title: 'Gaming',
        ans: 'Used to play CS, Blackshot, The Forest, FFXIV. Current: 7DaystoDie',
        opts: [
            'Genre: Survival, FPS, RPG'
        ]
    },
    {
        id: 5,
        title: 'Enjoys learning',
        ans: 'Java, Python, VUE, Angular, more hands-on about testings',
        opts: [
            'Some skills I wish to learn'
        ]
    },
    {
        id: 6,
        title: 'Future Projects',
        ans: 'Auto-biography webpages, mental health mobile app',
        opts: [
            'Projects I wish to do in the future'
        ]
    },


]