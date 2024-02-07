import { useNavigate } from 'react-router-dom';
import { Users } from '../../pages/user/request-type';
import Button from '../atom-button/button.component';
import Layout from '../atom-layout/layout.styled';
import Spinner from '../atom-spinner/spinner.styled';
import Title from '../atom-title/title.styled';
import UserTable from '../molecule-user-table/user-table.component';
import { strings } from './strings';

interface UserListTemplateProps {
  userListData: Users;
  loading: boolean;
}

const UserListTemplate = ({
  userListData,
  loading,
}: UserListTemplateProps): React.ReactElement => {
  const navigate = useNavigate();

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
        $mb='lg'
      >
        <Layout></Layout>
        <Button action='secondary' onClick={handleAddUserClick}>
          {strings.addUserButton}
        </Button>
      </Layout>
      {loading ? (
        <Layout $my='lg' $display='flex' $justifyContent='center'>
          <Spinner color='primary' size='lg' />
        </Layout>
      ) : (
        <UserTable userListData={userListData} />
      )}
    </>
  );
};

export default UserListTemplate;
