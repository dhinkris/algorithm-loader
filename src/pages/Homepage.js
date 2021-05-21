import React from 'react'
import data from './../data/index'
import { Layout } from 'antd';
import AlgorithmCard from '../components/AlgorithmCard/AlgorithmCard'

console.log(data)

const HomePage = () => {
    return <Layout.Content>
        {
            data.map((item) => {
                console.log(item)
                return <AlgorithmCard data={item} />
            })
        }
    </Layout.Content>
};

export default HomePage;