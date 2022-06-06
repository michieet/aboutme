import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {

    const [flip, setFlip] = useState(false);

  return (
    //Swapping flip to not flip
    <div 
    //Have a class of 'card' for every card, and class of 'flip' if flip is true, otherwise nothing extra
        className={`card ${flip ? 'flip' : ''}`}
        onClick={() => setFlip(!flip)}>
    <div className='front'>
        {flashcard.title}
        <div className='flashcard-opts'>
            {flashcard.opts.map(opt => {
                return <div className='flashcard-opt'>{opt}</div>
            })}
        </div>
    </div>
    <div className='back'>{flashcard.ans}</div>
    {/* If flip is true then show 'ans', if not, show title
      {flip ? flashcard.ans : flashcard.title} */}
    </div>
  );
};
