import React, {Component} from 'react';
import SplitVolume from '../data/SplitVolume';
import BrainLocalization from '../data/BrainLocalization';
import SVRRecon from '../data/SVRRecon';


class ConnectPipeline extends Component{
    constructor(){
        super();
        this.state={
            "input_file":["test1.nii.gz", "test2.nii.gz", "test3.nii.gz"],
            "algorithm":{SplitVolume, BrainLocalization, SVRRecon}
        }
    }
    handleAlgorithms=()=> {
        console.log(this.state.algorithm)
    }
    render(){
        return(
            <div>
                {this.handleAlgorithms()}
            </div>
        )
    }
}

export default ConnectPipeline;