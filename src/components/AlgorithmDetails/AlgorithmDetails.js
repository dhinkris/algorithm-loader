import React from 'react';
import styles from './AlgorithmDetails.module.css';
import { Tag, Divider, Input, Upload, Button, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';



const parseInput = ({type, name}) => {

    switch(type){
        case 'String':
            return <Input placeholder={name} style={{marginTop:"1%", width:"50%", display:"block"}}/>
        case 'File':
            return <Upload>
            <Button style={{marginTop:"5%"}} icon={<UploadOutlined />}>{name}</Button>
          </Upload>;
        case 'Number':
            return <InputNumber placeholder={name}  style={{marginTop:"1%", width:"50%", display:"block"}}/>
        default:
            break;
    }
    return <div> {type} </div>
}

const AlgorithmDetails = ({ props: { location: { state: { data } } } }) => {
    console.log(data)
    return <React.Fragment>
        <Divider />
        <Tag color="#55acee">
        docker-image: {data["docker-image"]}
        </Tag>

        <Tag color="#cd201f">
            tool-version: {data["tool-version"]}
        </Tag>
        <Divider />
        {
            data.inputs.map(item => {
                return parseInput(item)
            })
        }
    </React.Fragment>
}

export default AlgorithmDetails;