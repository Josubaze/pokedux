import React from 'react';
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Meta } = Card;
const PokemonCard = ({ name , imageUrl, abilities }) => {
    return (
        <Card 
            cover={
                <img 
                    alt={name}
                    src={imageUrl}
                    style={
                        {   
                            margin: 0,
                        }
                    }
                />
                
            }
            actions={[
                <StarOutlined key="favorite" style={
                    {   
                        fontSize: 24,
                    }
                }/>,
            ]}
        >
            <Meta
                title={name}
                description={abilities}
                
            >

            </Meta>
        </Card>
    );
}

export { PokemonCard };
