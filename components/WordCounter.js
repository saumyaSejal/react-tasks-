import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).length;

  return (
    <div>
      <textarea
        rows={4}
        cols={50}
        value={text}
        onChange={handleChange}
        placeholder="Type your paragraph here..."
      />
      <p>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
