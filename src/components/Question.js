import React, { Component } from 'react';
import _ from 'lodash';

import QuestionData from '../data/Questions';
import QuestionGenerator from './QuestionGenerator';
import OptionGenerator from './OptionGenerator'
class Question extends Component{
    state={
        l2Questions: null
    }
    handleChange = (group)=> {
        this.setState({
            l2Questions: group
        })
    }
    render(){
        const {l2Questions} = this.state
        return(
            <React.Fragment >
                {QuestionData.l1Questions.map((l1Question, index) => {
                    return(
                        <React.Fragment>
                            <QuestionGenerator key={index} question={l1Question} onChange={this.handleChange}/>
                            <OptionGenerator key={index} question={l1Question} onChange={this.handleChange}/>
                        </React.Fragment>)
                })}
                {
                    l2Questions!==null?
                        _.filter(QuestionData.l2Questions, {"group":this.state.l2Questions}).map((l2question, index)=> {
                            return (
                                <React.Fragment>
                                 <QuestionGenerator key={index} question={l2question} onChange={this.handleChange} />
                                    <OptionGenerator key={index} question={l2question} />
                                </React.Fragment>
                            )
                        }) :null
                }
            </React.Fragment>
        )
    }
}

export default Question;