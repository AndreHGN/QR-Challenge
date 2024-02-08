import { useState } from 'react';
import { Formik, FormikConfig } from 'formik';
import Avatar from '../atom-avatar/avatar.component';
import FormTextField from '../molecule-form-fields/form-text-field.component';
import FormFileField from '../molecule-form-fields/form-file-field.component';
import FormCpfField from '../molecule-form-fields/form-cpf-field.component';
import FormDateField from '../molecule-form-fields/form-date-field.component';
import Button from '../atom-button/button.component';
import { readFileAsDataURL } from '../../utils/read-file';
import Layout from '../atom-layout/layout.styled';
import { strings } from './strings';
import userValidationSchema from './form-validation';

export interface UserFormData {
  name: string;
  email: string;
  cpf: string;
  date: string;
  jobTitle: string;
  avatar: string | undefined;
}

interface UserFormProps extends Omit<FormikConfig<UserFormData>, 'onSubmit'> {
  onSaveUserData: (user: UserFormData) => void;
  loading: boolean;
}

const UserForm = ({
  initialValues,
  onSaveUserData,
  loading,
  ...props
}: UserFormProps): React.ReactElement => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(
    initialValues.avatar,
  );

  const handleAvatarChange = (file: File) => {
    readFileAsDataURL(file)
      .then((result) => {
        setImageUrl(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (formValues: UserFormData) => {
    const userFormData: UserFormData = formValues;
    userFormData.avatar = imageUrl;
    onSaveUserData(userFormData);
  };

  return (
    <Formik<UserFormData>
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={userValidationSchema}
      {...props}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Layout $display='flex' $flexWrap='wrap'>
            <Layout
              $display='flex'
              $flexDirection='column'
              $mr='xxl'
              $alignItems='center'
            >
              <Layout $mb='md'>
                <Avatar img={imageUrl} size='xl' />
              </Layout>
              <FormFileField
                name='image'
                onFileChange={handleAvatarChange}
                accept='imageUrl/*'
                label={strings.avatarButton}
              />
            </Layout>
            <Layout $width='50%'>
              <FormTextField
                name='name'
                type='text'
                label={strings.inputs.name.label}
                required
                marginBottom
              />
              <FormTextField
                name='email'
                type='text'
                label={strings.inputs.email.label}
                required
                marginBottom
              />
              <FormCpfField
                name='cpf'
                label={strings.inputs.cpf.label}
                marginBottom
              />
              <FormDateField
                name='date'
                label={strings.inputs.date.label}
                required
                marginBottom
              />
              <FormTextField
                name='jobTitle'
                type='text'
                label={strings.inputs.jobTitle.label}
                required
                marginBottom
              />
              <Layout $display='flex' $justifyContent='flex-end'>
                <Button action='primary' type='submit' loading={loading}>
                  {strings.submitButton}
                </Button>
              </Layout>
            </Layout>
          </Layout>
        </form>
      )}
    </Formik>
  );
};

export default UserForm;
