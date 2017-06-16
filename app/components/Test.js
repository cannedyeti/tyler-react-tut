var React = require('react');

class Test extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      message: 'Hii'
    }
    this.submit = this.submit.bind(this);
  }

  submit() {
    var word = sub.value;
    sub.value = '';
    this.setState({message: word})
  }

  render() {
    return(
      <div>
        <input type="text" id="sub"/>
        <button onClick={this.submit}>
        submit</button>
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}

module.exports = Test;