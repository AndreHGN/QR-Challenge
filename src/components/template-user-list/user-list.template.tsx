import { useNavigate, useSearchParams } from 'react-router-dom';
import { Users } from '../../pages/user/request-types';
import Button from '../atom-button/button.component';
import Layout from '../atom-layout/layout.styled';
import Spinner from '../atom-spinner/spinner.styled';
import Title from '../atom-title/title.styled';
import UserTable from '../molecule-user-table/user-table.component';
import { strings } from './strings';
import UserFilterForm from '../organism-user-filter-form/user-filter-form.component';
import { useTheme } from 'styled-components';
import ErrorPlaceholder from '../molecule-error-placeholder/error-placeholder.component';

interface UserListTemplateProps {
  userListData: Users;
  loading: boolean;
}

const UserListTemplate = ({
  userListData,
  loading,
}: UserListTemplateProps): React.ReactElement => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchParams] = useSearchParams();

  console.log(userListData);

  const { name, email, jobTitle } = Object.fromEntries([...searchParams]);

  const filteredListData = userListData?.filter((user) => {
    const isNameIncluded = name ? isStringIncluded(name, user.name) : true;
    const isEmailIncluded = email ? isStringIncluded(email, user.email) : true;
    const isJobTitleIncluded = jobTitle
      ? isStringIncluded(jobTitle, user.job_title)
      : true;

    return isNameIncluded && isEmailIncluded && isJobTitleIncluded;
  });

  const handleAddUserClick = () => {
    navigate('/users/add');
  };

  return (
    <>
      <Layout $mb='xl'>
        <Title>{strings.pageTitle}</Title>
      </Layout>
      <Layout
        $display='flex'
        $justifyContent='space-between'
        $alignItems='center'
        $flexWrap='wrap'
        $flexDirection='row-reverse'
        $mb='lg'
        $gap={theme.margins.lg}
      >
        <Button action='secondary' onClick={handleAddUserClick}>
          {strings.addUserButton}
        </Button>
        <UserFilterForm />
      </Layout>
      {loading ? (
        <Layout $my='xxl' $display='flex' $justifyContent='center'>
          <Spinner color='primary' size='xl' />
        </Layout>
      ) : filteredListData?.length === 0 ? (
        <ErrorPlaceholder errorMessage={strings.emptyTableMessage} />
      ) : (
        <UserTable userListData={filteredListData} />
      )}
    </>
  );
};

export default UserListTemplate;

const isStringIncluded = (value: string, data: string) => {
  const loweredData = data.toLowerCase();
  const loweredValue = value.toLowerCase();

  return loweredData.includes(loweredValue);
};
