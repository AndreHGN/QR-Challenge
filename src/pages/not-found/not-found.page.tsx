import React from 'react';
import ErrorPlaceholder from '../../components/molecule-error-placeholder/error-placeholder.component';
import { strings } from './strings';

const NotFoundPage = (): React.ReactElement => {
  return <ErrorPlaceholder errorMessage={strings.noFoundMessage} />;
};

export default NotFoundPage;
