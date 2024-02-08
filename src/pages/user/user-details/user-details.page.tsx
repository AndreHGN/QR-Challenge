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

  const {
    response: userDetailsResponse,
    error: userDetailsError,
    loading: userDetailsLoading,
  } = getUserDetails(userId as string);

  const {
    response: commentsResponse,
    error: commentsError,
    loading: isCommentsLoading,
    refetch: refetchComments,
  } = getUserComments(userId as string);

  const {
    error: createCommentError,
    loading: isCreateCommentsLoading,
    onCreateComment,
  } = postComment(userId as string);

  const handleCreateComment = (comment: CommentFormData) => {
    onCreateComment(comment, refetchComments);
  };

  const {
    error: updateUserError,
    loading: isUpdateUserLoading,
    onUpdateUser,
  } = updateUserDetails(userId as string);

  const handleUpdateUser = (user: UserFormData) => {
    onUpdateUser(user);
  };

  if (userDetailsError) {
    console.log(userDetailsError);
  }

  if (commentsError) {
    console.log(commentsError);
  }

  if (createCommentError) {
    console.log(createCommentError);
  }

  if (updateUserError) {
    console.log(updateUserError);
  }

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
