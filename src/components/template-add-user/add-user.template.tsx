import Avatar from '../atom-avatar/avatar.component';
import Layout from '../atom-layout/layout.styled';
import Title from '../atom-title/title.styled';

const AddUserTemplate = (): React.ReactElement => {
  return (
    <>
      <Layout $mb='lg'>
        <Title>Adicionar colaborador</Title>
      </Layout>
      <Avatar img='https://placehold.jp/150x150.png' size='xs' />
      <Avatar img='https://placehold.jp/150x150.png' size='sm' />
      <Avatar img='https://placehold.jp/150x150.png' size='md' />
      <Avatar img='https://placehold.jp/150x150.png' size='lg' />
      <Avatar img='https://placehold.jp/150x150.png' size='xl' />
    </>
  );
};

export default AddUserTemplate;
