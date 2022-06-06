import React, { useState, useEffect, useRef } from 'react';

export default function Flashcard({ flashcard }) {

    const [flip, setFlip] = useState(false);
    const [height, setHeight] = useState('initial');

    const frontEl = useRef();
    const backEl = useRef();

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height;
        const backHeight = frontEl.current.getBoundingClientRect().height;
        setHeight(Math.max(frontHeight, backHeight, 100));
    };

    // First time using useEffect without arrow function!
    useEffect(setMaxHeight, [flashcard.title, flashcard.ans, flashcard.opts]);
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        //Remove above addEventListener gets called whenever component destroys itself
        return () => window.removeEventListener('resize', setMaxHeight)
    }, []);

  return (
    //Swapping flip to not flip
    <div 
    //Have a class of 'card' for every card, and class of 'flip' if flip is true, otherwise nothing extra
        className={`card ${flip ? 'flip' : ''}`}
        style={{height: height}}
        onClick={() => setFlip(!flip)}>
    <div className='front' ref={frontEl}>
        {flashcard.title}
        <div className='flashcard-opts'>
            {flashcard.opts.map(opt => {
                return <div className='flashcard-opt' key={opt}>{opt}</div>
            })}
        </div>
    </div>
    <div className='back' ref={backEl}>{flashcard.ans}</div>
    {/* If flip is true then show 'ans', if not, show title */}
      {/* {flip ? flashcard.ans : flashcard.title} */}
    </div>
  );
};
