import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';


// My components
import { Styles} from './Styles/PlayStyles';
import Label from './Elements/Label'
import Input from './Elements/Input'
import Checkbox from './Elements/Checkbox'
import Radio from './Elements/Radio'
import Calendar from './Elements/Calendar'

export const Header = styled.div`
  display: grid;
  grid-template-columns: 30% 30% 30%;
  margin: 0;
  @media (max-width: 700px) {
    grid-template-columns: auto;
  }
`;


class Play extends Component {
    state = {
        labelPosition: 'left',
        valueText: '',
        valueNumber: 0,
        value2: true,
        value3: 'opt1',
        value31: 'opt1',
        value32: 'opt2',
        value33: 'opt3'
      }; 
  
    handleChange = event => {
      const { name, value, type } = event.target;
      const val = type === 'number' ? parseFloat(value) : value;
      this.setState({
        [name]: val
      });
    };

    handleCheckBox = event => {
      const { name, checked } = event.target;
      this.setState({
        [name]: checked
      });
    };

  render() {
    return (
      <div>
        <Helmet>
          <title>Play | Mikel Loidi | Web Developer</title>
        </Helmet>
        <Styles>
            <h2>
                Input text sample
            </h2> 
            <Header>
                <Input label="Sample text" type="text" position={this.state.labelPosition} name="valueText" value={this.state.valueText} onChange={this.handleChange}/>
                <Label text={'Value ' + this.state.valueText}></Label>
            </Header>
            <h2>
                Input number sample
            </h2> 
            <Header>
                <Input label="Sample number" type="number" position={this.state.labelPosition} name="valueNumber" value={this.state.valueNumber} onChange={this.handleChange}/>
                <Label text={'Value ' + this.state.valueNumber}></Label>
            </Header>
            <h2>
                Checkbox sample
            </h2> 
            <Header>
                <Checkbox label="Sample 2" position={this.state.labelPosition} name="value2" checked={this.state.value2} onChange={this.handleCheckBox}/>
                <Label text={'Value2 ' + this.state.value2}></Label>
            </Header>
            <h2>
                Radio sample
            </h2> 
            <Header>
                <div>
                    <Radio label="Sample 31" position={this.state.labelPosition} name="value3" value={this.state.value31} selectedValue={this.state.value3} onChange={this.handleChange}/>
                    <Radio label="Sample 32" position={this.state.labelPosition} name="value3" value={this.state.value32} selectedValue={this.state.value3} onChange={this.handleChange}/>
                    <Radio label="Sample 33" position={this.state.labelPosition} name="value3" value={this.state.value33} selectedValue={this.state.value3} onChange={this.handleChange}/>
                </div>
                <Label text={'Value3 ' + this.state.value3}></Label>
            </Header>
            <h2>
                Calendar
            </h2> 
            <Header>
                <Calendar />
            </Header>
        </Styles>
      </div>
    );
  }
}

export default Play;
