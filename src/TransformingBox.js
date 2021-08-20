import { Component } from "react";
import randomColor from 'randomcolor';
import Shape from './Shape'


class TransformingBox extends Component {
  constructor() {
    super();
    this.state = {
      width: 600,
      height: 400,
      bgColor: "blue"
    };
  }
  increaseWidth = () => {
    this.setState({ width: this.state.width + 10 });
  };
  decreaseWidth = () => {
    this.setState({ width: this.state.width - 10 });
  };
  increaseHeight = () => {
    this.setState({ height: this.state.height + 10 });
  };
  decreaseHeight = () => {
    this.setState({ height: this.state.height - 10 });
  };
  changeColor=() => {
    let color = randomColor();
    this.setState({bgColor: color})
  }
  render() {
    return (
  

     <div>
      <div>
        <button onClick={this.increaseWidth}>+</button>
        <button onClick={this.decreaseWidth}>-</button>
     </div>
     <div>
          <button onClick={this.increaseHeight}>+</button>
          <button onClick={this.decreaseHeight}>-</button>
        </div>
        <div>
          <button onClick={this.changeColor}>Change Color</button>
        </div>
     <Shape  width={this.state.width} height={this.state.height}  bgColor ={this.state.bgColor} />
      </div>
     
    );
  }
}

export default TransformingBox;
