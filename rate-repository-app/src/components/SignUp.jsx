import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'Another consequence of this single-threaded nature of JavaScript engines is that if some code execution takes up a lot of time, the browser will get stuck for the duration of the executionL.',
    'One particularly clear presentation of the topic is the keynote by Philip Roberts called What the heck is the event loop anyway?',
    'JavaScript engines, or runtime environments follow the asynchronous model. In principle, this requires all IO operations (with some exceptions) to be executed as non-blocking',
    'This means that code execution continues immediately after calling an IO function, without waiting for it to return.',
    'everything would work normally for 5 seconds when the function defined as the parameter for setTimeout is run, the browser will be stuck for the duration of the execution of the long loop',
    'For the browser to remain responsive, i.e., to be able to continuously react to user operations with sufficient speed, the code logic needs to be such that no single computation can take too long.',
    't is possible to run parallelized code with the help of so-called web workers. The event loop of an individual browser window is, however, still only handled by a single thread.',
    'The only way to go fast, is to go well.'
  ];

  // State to keep track of the selected anecdote
  const [selected, setSelected] = useState(0);

  // Function to select a random anecdote
  const getRandomAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
  };

  return (
    <div>
      {/* Display the selected anecdote */}
      <p>{anecdotes[selected]}</p>

      {/* Button to display a random anecdote */}
      <button onClick={getRandomAnecdote}>Show Random Anecdote</button>
    </div>
  );
};

export default App;
