import { useState } from 'react';
import { Formik, FormikConfig } from 'formik';
import Avatar from '../atom-avatar/avatar.component';
import FormTextField from '../molecule-form-fields/form-text-field.component';
import FormFileField from '../molecule-form-fields/form-file-field.component';
import FormCpfField from '../molecule-form-fields/form-cpf-field.component';
import FormDateField from '../molecule-form-fields/form-date-field.component';
import Button from '../atom-button/button.styled';
import { readFileAsDataURL } from '../../utils/read-file';
import Layout from '../atom-layout/layout.styled';
import { strings } from './strings';

export interface UserFormData {
  name: string;
  email: string;
  cpf: string;
  date: string;
  jobTitle: string;
  avatar: string | undefined;
}

interface UserFormProps extends FormikConfig<UserFormData> {}

const UserForm = ({
  initialValues,
  ...props
}: UserFormProps): React.ReactElement => {
  const [image, setImage] = useState<string | undefined>(initialValues.avatar);

  const handleAvatarChange = (file: File) => {
    readFileAsDataURL(file)
      .then((result) => {
        setImage(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Formik<UserFormData> initialValues={initialValues} {...props}>
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
                <Avatar img={image} size='xl' />
              </Layout>
              <FormFileField
                name='avatar'
                onFileChange={handleAvatarChange}
                accept='image/*'
                label={strings.avatarButton}
              />
            </Layout>
            <Layout $width='50%'>
              <FormTextField
                name='name'
                type='text'
                label={strings.inputs.name.label}
              />
              <FormTextField
                name='email'
                type='text'
                label={strings.inputs.email.label}
              />
              <FormCpfField name='cpf' label={strings.inputs.cpf.label} />
              <FormDateField name='date' label={strings.inputs.date.label} />
              <FormTextField
                name='jobTitle'
                type='text'
                label={strings.inputs.jobTitle.label}
              />
              <Layout $display='flex' $justifyContent='flex-end'>
                <Button action='primary' type='submit'>
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
