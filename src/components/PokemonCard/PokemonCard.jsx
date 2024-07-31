import React from 'react';
import { Card } from 'antd';
import { StarButton } from '../StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../../slices/dataSlice';

const { Meta } = Card;
const PokemonCard = ({ name , imageUrl, types, id, favorite }) => {
    const dispatch = useDispatch()
    const typeString = types.map(elem => elem.type.name).join(', ');
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId: id}));
    }
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
                <StarButton isFavorite={favorite} onClick={handleOnFavorite}/>,
            ]}
            style={{ backgroundColor:'#fff  '}}
        >
            <Meta
                title={name}
                description={typeString}
            >
            </Meta>
        </Card>
    );
}

export { PokemonCard };
