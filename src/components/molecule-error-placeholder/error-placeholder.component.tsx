import { SadFaceImage } from '../../assets/img';
import { Image } from '../atom-image/image.styled';
import Layout from '../atom-layout/layout.styled';
import Text from '../atom-text/text.styled';

interface ErrorElementTemplateProps {
  errorMessage: string;
}

const ErrorPlaceholder = ({
  errorMessage,
}: ErrorElementTemplateProps): React.ReactElement => {
  return (
    <Layout
      $display='flex'
      $justifyContent='center'
      $alignItems='center'
      $flexDirection='column'
    >
      <Layout $mb='md'>
        <Image src={SadFaceImage as string} $width='20vw' $height='20vw' />
      </Layout>
      <Text>{errorMessage}</Text>
    </Layout>
  );
};

export default ErrorPlaceholder;
