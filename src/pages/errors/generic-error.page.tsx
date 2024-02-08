import ErrorPlaceholder from '../../components/molecule-error-placeholder/error-placeholder.component';
import { strings } from './strings';
import { useRouteError } from 'react-router-dom';
import { toast } from 'react-toastify';

const GenericErrorPage = (): React.ReactElement => {
  const error = useRouteError() as Error;

  if (error) {
    toast(error.message, { type: 'error' });
  }

  return <ErrorPlaceholder errorMessage={strings.genericErrorMessage} />;
};

export default GenericErrorPage;
