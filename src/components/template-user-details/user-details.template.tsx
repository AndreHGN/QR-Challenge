import { Comment, User } from '../../pages/user/request-types';
import { Col, Row } from '../atom-grid/grid.styled';
import Layout from '../atom-layout/layout.styled';
import Spinner from '../atom-spinner/spinner.styled';
import Title from '../atom-title/title.styled';
import BackButton from '../molecule-back-button/back-button.component';
import { CommentFormData } from '../molecule-comment-form/comment-form.component';
import ErrorPlaceholder from '../molecule-error-placeholder/error-placeholder.component';
import CommentSection from '../organism-comment-section/comment-section.component';
import UserForm, {
  UserFormData,
} from '../organism-user-form/user-form.component';
import { strings } from './strings';

interface UserDetailsTemplateProps {
  userData: User;
  isUserDataLoading: boolean;
  onUpdateUser: (user: UserFormData) => void;
  isUpdateUserLoading: boolean;
  commentsData: Comment[];
  isCommentsLoading: boolean;
  onCreateComment: (comment: CommentFormData) => void;
  isCreateCommentsLoading: boolean;
}

const UserDetailsTemplate = ({
  userData,
  isUserDataLoading,
  onUpdateUser,
  isUpdateUserLoading,
  commentsData,
  isCommentsLoading,
  onCreateComment,
  isCreateCommentsLoading,
}: UserDetailsTemplateProps): React.ReactElement => {
  const initialValues: UserFormData = {
    name: userData?.name,
    email: userData?.email,
    cpf: '',
    date: userData?.admission_date,
    jobTitle: userData?.job_title,
    avatar: userData?.photo_url,
  };

  const userForm = (
    <Layout $mb='xxl'>
      <UserForm
        initialValues={initialValues}
        onSaveUserData={onUpdateUser}
        isSaveLoading={isUpdateUserLoading}
      />
    </Layout>
  );

  return (
    <>
      <Layout $display='flex' $mb='xl' $alignItems='center'>
        <Layout $mr='md'>
          <BackButton />
        </Layout>
        <Title>{strings.pageTitle}</Title>
      </Layout>
      {isUserDataLoading ? (
        <Layout $my='xxl' $display='flex' $justifyContent='center'>
          <Spinner color='primary' size='xl' />
        </Layout>
      ) : userData ? (
        <>
          {userForm}
          <Row $justifyContent='center'>
            <Col $colWidth={10}>
              <CommentSection
                comments={commentsData}
                isCommentsLoading={isCommentsLoading}
                onCommentSubmit={onCreateComment}
                isCreateLoading={isCreateCommentsLoading}
              />
            </Col>
          </Row>
        </>
      ) : (
        <ErrorPlaceholder errorMessage={strings.noUserMessage} />
      )}
    </>
  );
};

export default UserDetailsTemplate;
