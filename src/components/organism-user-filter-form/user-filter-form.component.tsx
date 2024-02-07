import { Formik } from 'formik';
import Layout from '../atom-layout/layout.styled';
import FormTextField from '../molecule-form-fields/form-text-field.component';
import { strings } from './strings';
import { useTheme } from 'styled-components';
import { useSearchParams } from 'react-router-dom';

interface FilterFormData {
  name: string;
  email: string;
  jobTitle: string;
}

const UserFilterForm = (): React.ReactElement => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsObject = Object.fromEntries([...searchParams]);

  const initialValues: FilterFormData = {
    name: searchParamsObject.name || '',
    email: searchParamsObject.email || '',
    jobTitle: searchParamsObject.jobTitle || '',
  };

  const handleSubmit = (values: FilterFormData) => {
    const nameParam = values.name && { name: values.name };
    const emailParam = values.email && { email: values.email };
    const jobTitleParam = values.jobTitle && { jobTitle: values.jobTitle };

    setSearchParams((prevParams) => {
      return {
        ...nameParam,
        ...emailParam,
        ...jobTitleParam,
        ...prevParams,
      };
    });
  };

  return (
    <Formik<FilterFormData>
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit} onChange={props.handleSubmit}>
          <Layout $display='flex' $gap={theme.margins.md} $flexWrap='wrap'>
            <FormTextField name='name' label={strings.nameFilter} />
            <FormTextField name='jobTitle' label={strings.jobTitleFilter} />
            <FormTextField name='email' label={strings.emailFilter} />
          </Layout>
        </form>
      )}
    </Formik>
  );
};

export default UserFilterForm;
