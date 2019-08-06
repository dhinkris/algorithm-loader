import React, { Component } from 'react';
import { Input } from 'antd';


class QuestionGenerator extends Component{

    render(){
        return(
            <React.Fragment>
                {
                    <h2>{this.props.question.text}</h2>
                }
            </React.Fragment>
        )
    }
}

export default QuestionGenerator;