import React from 'react';
/**
 * Square component renders a single <button> 
 * As next step, we want the Square component to "remember" that it got clicked, and fill it 
 * with an "X" mark. To remember things components use state
 */
class Square extends React.Component {
    constructor(props){
        super(props);
        //Initializing the state of a Square component
        this.state ={
            value: null,
        };
    }
    /**
    render() {
      return (
        //<button className="square" onClick={function(){console.log('click');}}>
        <button className="square" onClick={()=>console.log('click')}>
          {this.props.value}
        </button>
      );
    } */

    render(){
        return(
            <button className="square" onClick={()=>this.setState({value:'X'})}>
                {this.state.value}
            </button>
        );
    }
  }

export  default Square;