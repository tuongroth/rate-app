import React, { useState } from 'react';

function Unicafe() {
  // Initial feedback counts
  const [feedback, setFeedback] = useState({
    good: 3,
    neutral: 2,
    bad: 2,
  });

  // Calculate the total number of feedback entries
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  // Calculate the average score: good: 1, neutral: 0, bad: -1
  const averageScore = (
    (feedback.good * 1 + feedback.neutral * 0 + feedback.bad * -1) /
    totalFeedback
  ).toFixed(2);  // Limiting to two decimal places

  // Calculate percentage of positive feedback (good)
  const positiveFeedbackPercentage = (
    (feedback.good / totalFeedback) * 100
  ).toFixed(2);  // Limiting to two decimal places

  // Function to handle adding feedback
  const addFeedback = (type) => {
    setFeedback((prevFeedback) => {
      return { ...prevFeedback, [type]: prevFeedback[type] + 1 };
    });
  };

  return (
    <div>
      <h1>Feedback Statistics</h1>
      
      {/* Showing good, neutral, and bad feedback */}
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>

      {/* Showing the total feedback count */}
      <p>Total Feedback: {totalFeedback}</p>
      
      {/* Showing the average score */}
      <p>Average Score: {averageScore}</p>
      
      {/* Showing the percentage of positive feedback */}
      <p>Positive Feedback: {positiveFeedbackPercentage}%</p>

      {/* Feedback buttons */}
      <div>
        <button onClick={() => addFeedback('good')}>Good</button>
        <button onClick={() => addFeedback('neutral')}>Neutral</button>
        <button onClick={() => addFeedback('bad')}>Bad</button>
      </div>
    </div>
  );
}

export default Unicafe;
