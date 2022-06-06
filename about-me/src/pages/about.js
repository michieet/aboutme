import { useState } from "react";
import FlashcardList from "../components/flashcardList";
import Flashcard from "../components/flashcard";
import '../about.css';

export default function About() {

    const [flashcards, setFlashCards] = useState(FLASHCARD);

    return (
        <div>
        <h1>About</h1>
            <div>
                <FlashcardList flashcards={flashcards}/>
            </div>
        </div>
    );
};

const FLASHCARD = [

    {
        id: 1,
        title: 'Hobbies',
        ans: 'Movies',
        opts: [
            'Lord of the Rings',
            'Harry Potter'
        ]
    },
    {
        id: 2,
        title: 'Spicy food?',
        ans: 'YES',
        opts: [

        ]
    },

]