import { User } from '../../pages/user/request-types';
import Layout from '../atom-layout/layout.styled';
import Spinner from '../atom-spinner/spinner.styled';
import Title from '../atom-title/title.styled';
import UserForm, {
  UserFormData,
} from '../organism-user-form/user-form.component';
import { strings } from './strings';

interface UserDetailsTemplateProps {
  userData: User;
  onUpdateUser: (user: UserFormData) => void;
  loading: boolean;
}

const UserDetailsTemplate = ({
  userData,
  onUpdateUser,
  loading,
}: UserDetailsTemplateProps): React.ReactElement => {
  const initialValues: UserFormData = {
    name: userData?.name,
    email: userData?.email,
    cpf: '',
    date: userData?.admission_date,
    jobTitle: userData?.job_title,
    avatar: userData?.photo_url,
  };

  console.log(initialValues);

  return (
    <>
      <Layout $mb='xl'>
        <Title>{strings.pageTitle}</Title>
      </Layout>
      {loading ? (
        <Layout $my='xxl' $display='flex' $justifyContent='center'>
          <Spinner color='primary' size='xl' />
        </Layout>
      ) : (
        <UserForm
          initialValues={initialValues}
          onSaveUserData={onUpdateUser}
          loading={loading}
        />
      )}
    </>
  );
};

export default UserDetailsTemplate;
