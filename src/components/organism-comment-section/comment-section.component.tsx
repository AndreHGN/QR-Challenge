import Card from '../atom-card/card.styled';
import Layout from '../atom-layout/layout.styled';
import { Comment } from '../../pages/user/request-types';
import CommentForm, {
  CommentFormData,
} from '../molecule-comment-form/comment-form.component';
import CommentCard from '../molecule-comment-card/comment-card.component';

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

  return (
    <Card $padding='lg'>
      <Layout $mb='xl'>
        <CommentForm
          isCreateLoading={isCreateLoading}
          onSubmit={onCommentSubmit}
        />
      </Layout>
      {isCommentsLoading ? 'Loading' : commentsCards}
    </Card>
  );
};

export default CommentSection;
