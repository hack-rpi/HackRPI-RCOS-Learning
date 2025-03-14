
// This creates a component in React
// A component in React represents part of a user interface
  export default function Board() {// "export" makes this function accessible to programs outside of the file, "default" tells other files this is the main function
    return (
      // The CSS in styles.css allows the board to be split into three rows
      <>
        <div className="board-row"> 
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
    );
  }
  

// Populate board with numbers 1-9
  function Square({ value }) { // Create a new square component and allow a value to be passed in
    return <button className="square">{value}</button>;
  }
  export default function Board() {
    return (
      <>
        <div className="board-row">
          <Square value="1" />
          <Square value="2"/>
          <Square value="3"/>
        </div>
        <div className="board-row">
          <Square value="4"/>
          <Square value="5"/>
          <Square value="6"/>
        </div>
        <div className="board-row">
          <Square value="7"/>
          <Square value="8"/>
          <Square value="9"/>
        </div>
      </>
    );
  }
  



  import { useState } from 'react'; // useState is a react function that can help components "remember" things

function Square() {
  const [value, setValue] = useState(null); // Set initial use state to null

  function handleClick() {
    setValue('X'); // Display an X whenever the button is clicked
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
