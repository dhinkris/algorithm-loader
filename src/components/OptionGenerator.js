import React, { Component } from 'react';
import { Radio, Input, Icon } from 'antd';
const RadioGroup = Radio.Group;

class OptionGenerator extends Component{
    state = {
        value: 1,
    }
    onChange = (e) => {
        // console.log(e.target.value)
        // console.log(e.target.option)
        console.log(this.props.onChange)
        if (this.props.onChange!==undefined){
            this.props.onChange(e.target.option)
        }
        this.setState({
            value: e.target.value,
        });
    }

    render(){
        return(
            <React.Fragment>
                {
                    this.props.question.questionType==='text'?
                        <Input style={{textAlign: 'left'}} placeholder={this.props.question.text} key={this.props.question.id} />:
                        this.props.question.questionType==='option'?
                            <RadioGroup buttonStyle="solid" onChange={this.onChange} value={this.state.value}>
                                {
                                    this.props.question.option.map((option, index) => {
                                        console.log(this.props.question.id+'-'+index)
                                        return(
                                            <Radio.Button
                                                key={this.props.question.id+'-'+index}
                                                option={option}
                                                value={option.id+'-'+index}>
                                                {option}
                                            </Radio.Button>
                                    )
                                })}
                            </RadioGroup>:null
                }
            </React.Fragment>
        )
    }
}

export default OptionGenerator;