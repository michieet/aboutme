import React, { useState } from 'react';

export default function Flashcard({ flashcard }) {

    const [flip, setFlip] = useState(false);

  return (
    //Swapping flip to not flip
    <div onClick={() => setFlip(!flip)}>
    {/* If flip is true then show 'ans', if not, show title */}
      {flip ? flashcard.ans : flashcard.title}
    </div>
  );
};
