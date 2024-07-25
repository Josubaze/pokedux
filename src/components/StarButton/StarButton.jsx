import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StarButton = ({isFavorite, onClick}) => {
  const Icon = isFavorite ? <StarFilled style={{fontSize: 24}}/> : <StarOutlined style={{fontSize: 24}}/>
  return (
    <Button icon={Icon} onClick={onClick}/>
  )
};

export { StarButton };