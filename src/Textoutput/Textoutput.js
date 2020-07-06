import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class ConvertedsqlString extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'O codigo novo aparecerá aqui:'
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('testando: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="imput">        
              <TextareaAutosize  class="form-control" value={this.state.value} onChange={this.handleChange} />
              </div>
      );
    }
  }
export default ConvertedsqlString;