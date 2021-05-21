import React from 'react';
import { Card, Avatar } from 'antd';
import history from './../../history';


/**Router to move to the issue page with appropriate data */
const onClick = (data) =>{
    // console.log(data)
    history.push('/algorithm/details', {data})
}

const AlgorithmCard = ({data}) => {
    return <Card
        style={{ width: 400 }}
        onClick={() => onClick(data)}
        cover={
            <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
        }
    >
        <Card.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={data.name}
            description={data.description}
        />

    </Card>
}

export default AlgorithmCard;