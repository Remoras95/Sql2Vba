import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';

class originalsqlString extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 'Cole sua Query aqui'
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
                    
              <TextareaAutosize class="form-control"value={this.state.value} onChange={this.handleChange} rows={25}/>
              
        
          </div>
      );
    }
  }
export default originalsqlString;



/*
   const initialText = "csql = csql & \"    " 
    const finalText = "    \" " 
    
return <p><h3>{initialText}</h3>text from text form<h3>{finalText}</h3></p>
*/
// <Textarea placeholder='Cole sua Query aqui:' />

