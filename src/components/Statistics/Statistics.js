import React from 'react';
import PropTypes from 'prop-types';
import Notification from './Notification/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
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
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
