import moment from 'moment';
import { Comment } from '../../pages/user/request-types';
import Card from '../atom-card/card.styled';
import Layout from '../atom-layout/layout.styled';
import Text from '../atom-text/text.styled';

moment.locale('pt-br');

interface CommentCardProps {
  comment: Comment;
}

const CommentCard = ({ comment }: CommentCardProps): React.ReactElement => {
  const createdAtMoment = moment(comment.created_at);
  const formattedCreatedAtDate = createdAtMoment.format('LLL');

  return (
    <Card $backgroundColor='white'>
      <Layout $mb='xs'>
        <Text $weight='normal' $fontSize='tertiary'>
          {formattedCreatedAtDate}
        </Text>
      </Layout>
      <Text>{comment.value}</Text>
    </Card>
  );
};

export default CommentCard;
