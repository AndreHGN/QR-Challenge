import { toast } from 'react-toastify';
import { CommentFormData } from '../../../components/molecule-comment-form/comment-form.component';
import { useAxios } from '../../../hooks/use-axios';
import { CreateCommentInput, CreateCommentOutput } from '../request-types';

interface PostCommentReturn {
  error?: Error;
  loading: boolean;
  onCreateComment: (comment: CommentFormData, onComplete: () => void) => void;
}

export const postComment = (userId: string): PostCommentReturn => {
  const {
    error,
    loading,
    makeRequest: createCommentRequest,
  } = useAxios<CreateCommentInput, CreateCommentOutput>();

  const handleRequest = (
    commentData: CommentFormData,
    onComplete: () => void,
  ) => {
    const commentInput = {
      comment: {
        user_id: parseInt(userId),
        value: commentData.comment,
      },
    };

    createCommentRequest(
      {
        method: 'POST',
        url: '/api/v1/comments',
        data: commentInput,
      },
      onComplete,
    );
  };

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return { error, loading, onCreateComment: handleRequest };
};
