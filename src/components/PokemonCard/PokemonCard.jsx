import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Meta } = Card;
const PokemonCard = ({ name , url }) => {
    return (
        <Card 
            cover={
                <img 
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <StarOutlined key="favorite" />,
            ]}
        >
            <Meta
                title={name}
                description="Fire and Magic"
            >

            </Meta>
        </Card>
    );
}

export { PokemonCard };
