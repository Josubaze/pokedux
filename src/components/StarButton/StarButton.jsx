import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const StarButton = ({isFavorite, onClick}) => {
  const Icon = isFavorite ? <StarFilled style={{color: '#3498db'}}/> : <StarOutlined style={{fontSize: 24, color: '#3498db' }}/>
  return (
    <Button icon={Icon} onClick={onClick}/>
  )
};

export { StarButton };