import Card from '../atom-card/card.styled';
import Layout from '../atom-layout/layout.styled';
import { Comment } from '../../pages/user/request-types';
import CommentForm, {
  CommentFormData,
} from '../molecule-comment-form/comment-form.component';
import CommentCard from '../molecule-comment-card/comment-card.component';
import Spinner from '../atom-spinner/spinner.styled';
import Text from '../atom-text/text.styled';
import { strings } from './strings';

interface CommentSectionProps {
  comments: Comment[];
  isCommentsLoading: boolean;
  onCommentSubmit: (comment: CommentFormData) => void;
  isCreateLoading: boolean;
}

const CommentSection = ({
  comments,
  isCommentsLoading,
  onCommentSubmit,
  isCreateLoading,
}: CommentSectionProps): React.ReactElement => {
  const commentsCards = comments?.map((comment, index) => {
    return (
      <Layout $mb='md' key={comment.value + index}>
        <CommentCard comment={comment} />
      </Layout>
    );
  });

  const noComments = (
    <Layout $display='flex' $justifyContent='center'>
      <Text>{strings.noComments}</Text>
    </Layout>
  );

  return (
    <Card $padding='lg'>
      <Layout $mb='xl'>
        <CommentForm
          isCreateLoading={isCreateLoading}
          onSubmit={onCommentSubmit}
        />
      </Layout>
      {isCommentsLoading ? (
        <Layout $my='xxl' $display='flex' $justifyContent='center'>
          <Spinner color='primary' size='md' />
        </Layout>
      ) : commentsCards.length === 0 ? (
        noComments
      ) : (
        commentsCards
      )}
    </Card>
  );
};

export default CommentSection;
