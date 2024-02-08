import { useNavigate } from 'react-router-dom';
import TextButton from '../atom-text-button/text-button.styled';
import { strings } from './strings';

const BackButton = () => {
  const navigate = useNavigate();

  return <TextButton onClick={() => navigate(-1)}>{strings.back}</TextButton>;
};

export default BackButton;
