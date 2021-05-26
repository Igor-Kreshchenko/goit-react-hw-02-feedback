import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        total: <span>{total}</span>
      </li>
      <li>
        positivePercentage: <span>{positivePercentage}</span>
      </li>
    </ul>
  );
};

export default Statistics;
