import React from 'react';
import Board from './Board';
/**
 * The Game compnent renders a board with placholder values
 */
  function Game() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
 

export default Game;