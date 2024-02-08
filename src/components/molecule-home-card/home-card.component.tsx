import { To } from 'react-router-dom';
import { Colors } from '../../styles/styled';
import Card from '../atom-card/card.styled';
import Title from '../atom-title/title.styled';
import Layout from '../atom-layout/layout.styled';
import { HomeCardStyled } from './home-card.styled';

interface HomeCardProps {
  backgroundColor?: Colors;
  title: string;
  to: To;
}

const HomeCard = ({ backgroundColor, title, to }: HomeCardProps) => {
  return (
    <HomeCardStyled to={to}>
      <Card $backgroundColor={backgroundColor}>
        <Layout $display='flex' $alignItems='center' $justifyContent='center'>
          <Title color='white'>{title}</Title>
        </Layout>
      </Card>
    </HomeCardStyled>
  );
};

export default HomeCard;
