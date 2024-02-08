import React from 'react';
import { useParams } from 'react-router-dom';
import UserDetailsTemplate from '../../../components/template-user-details/user-details.template';
import { Comment, User } from '../request-types';
import { CommentFormData } from '../../../components/molecule-comment-form/comment-form.component';
import { getUserDetails } from './get-user-details.request';
import { getUserComments } from './get-user-comments.request';
import { postComment } from './post-comment.request';
import { updateUserDetails } from './update-user-details.request';
import { UserFormData } from '../../../components/organism-user-form/user-form.component';

const UserDetailsPage = (): React.ReactElement => {
  const { id: userId } = useParams();

  const { response: userDetailsResponse, loading: userDetailsLoading } =
    getUserDetails(userId as string);

  const {
    response: commentsResponse,
    loading: isCommentsLoading,
    refetch: refetchComments,
  } = getUserComments(userId as string);

  const { loading: isCreateCommentsLoading, onCreateComment } = postComment(
    userId as string,
  );

  const handleCreateComment = (comment: CommentFormData) => {
    onCreateComment(comment, refetchComments);
  };

  const { loading: isUpdateUserLoading, onUpdateUser } = updateUserDetails(
    userId as string,
  );

  const handleUpdateUser = (user: UserFormData) => {
    onUpdateUser(user);
  };

  const userData = userDetailsResponse?.user;
  const commentsData = commentsResponse?.comments;

  return (
    <UserDetailsTemplate
      userData={userData as User}
      isUserDataLoading={userDetailsLoading}
      onUpdateUser={handleUpdateUser}
      isUpdateUserLoading={isUpdateUserLoading}
      commentsData={commentsData as Comment[]}
      isCommentsLoading={isCommentsLoading}
      onCreateComment={handleCreateComment}
      isCreateCommentsLoading={isCreateCommentsLoading}
    />
  );
};

export default UserDetailsPage;
