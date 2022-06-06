import React from 'react'
import Flashcard from './flashcard';

//Usual way is to input (props) then props.flashcards, but {flashcards} is another way to destructure it
export default function FlashcardList({ flashcards }) {
  return (
    <div className='card-grid'>
    {/* Loop through all flashcard to return flashcard component */}
      {flashcards.map(flashcard => {
          return <Flashcard flashcard={flashcard} key={flashcard.id}/>
      })}
    </div>
  );
;}
