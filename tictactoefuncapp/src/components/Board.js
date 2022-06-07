import React from 'react';
import Square from './Square';

/**
 * The Board component renders 9 squares
 */
function Board () {
     
      const status = 'Next player: X';
      
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      );
       
  }

  function renderSquare(i) {
    //Passing data to the Square component using the prop(prop is the short form of properties) called value
      return <Square value={i}/>;
    }
  export default Board;