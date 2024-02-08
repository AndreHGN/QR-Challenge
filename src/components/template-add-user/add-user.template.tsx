import Layout from '../atom-layout/layout.styled';
import Title from '../atom-title/title.styled';
import UserForm, {
  UserFormData,
} from '../organism-user-form/user-form.component';
import { strings } from './strings';

interface AddUserTemplateProps {
  onAddUser: (user: UserFormData) => void;
  loading: boolean;
}

const AddUserTemplate = ({
  onAddUser,
  loading,
}: AddUserTemplateProps): React.ReactElement => {
  const initialValues: UserFormData = {
    name: '',
    email: '',
    cpf: '',
    date: '',
    jobTitle: '',
    avatar: undefined,
  };

  return (
    <>
      <Layout $mb='xl'>
        <Title>{strings.pageTitle}</Title>
      </Layout>
      <UserForm
        initialValues={initialValues}
        onSaveUserData={onAddUser}
        loading={loading}
      />
    </>
  );
};

export default AddUserTemplate;
