import React from 'react';
import Square from './Square';

/**
 * The Board component renders 9 squares
 */
class Board extends React.Component {

  constructor(props){
    super(props);
    this.state={
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i){

    //We are calling .slice() to create a copy of the squares array to modify instead of modifying the existing array
      const squares = this.state.squares.slice();
      if(calculateWinner(squares) || squares[i]){
        return;
      }
      squares[i]=this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares:squares,
        xIsNext:!this.state.xIsNext});
  }
    renderSquare(i) {
    //Passing data to the Square component using the prop(prop is the short form of properties) called value
      //return <Square value={i}/>;
      //Each Square will now receive a value prop that will either be 'X', 'O', or null for empty squares
      return <Square value={this.state.squares[i]} onClick={()=> this.handleClick(i)} />;
    }
  
    render() {
      const winner = calculateWinner(this.state.squares);
      let status;
      if(winner){
        status = 'Winner : '+ winner;
      }else{
        status = 'Next player: '+(this.state.xIsNext ? 'X' : 'O');
      }
     
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
   
  }

  function calculateWinner(squares){
    const lines =[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
    ];

    for(let i=0;i< lines.length; i++){
      const [a,b,c] =lines[i];
      if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a];
      }
    }
    return null;
  }
  export default Board;