import { Col, Row } from '../atom-grid/grid.styled';
import HomeCard from '../molecule-home-card/home-card.component';
import { strings } from './strings';

const HomeTemplate = () => {
  return (
    <Row $spacing='xxl'>
      <Col $colWidth={6}>
        <HomeCard
          to='/users'
          title={strings.usersCard}
          backgroundColor='secondary'
        />
      </Col>
      <Col $colWidth={6}>
        <HomeCard
          to='/users/add'
          title={strings.addUsersCard}
          backgroundColor='secondary'
        />
      </Col>
    </Row>
  );
};

export default HomeTemplate;
