import Layout from '../atom-layout/layout.styled';
import Title from '../atom-title/title.styled';
import UserForm, {
  UserFormData,
} from '../organism-user-form/user-form.component';
import { strings } from './strings';

const AddUserTemplate = (): React.ReactElement => {
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
      <Layout $mb='lg'>
        <Title>{strings.pageTitle}</Title>
      </Layout>
      <UserForm
        initialValues={initialValues}
        onSubmit={(result) => console.log(result)}
      />
    </>
  );
};

export default AddUserTemplate;
