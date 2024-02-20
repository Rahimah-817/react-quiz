import React from 'react';

function Options({ question }) {
  return (
    <div>
      <div className='option'>
        {question.options.map((option) => (
          <button className='btn btn-option' key={option}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
