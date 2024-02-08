import { Formik } from 'formik';
import { Col, Row } from '../atom-grid/grid.styled';
import FormTextAreaField from '../molecule-form-fields/form-text-area-field.component';
import Layout from '../atom-layout/layout.styled';
import IconButton from '../atom-icon-button/icon-button.component';

export type CommentFormData = {
  comment: string;
};

interface CommentFormProps {
  onSubmit: (commentData: CommentFormData) => void;
  isCreateLoading: boolean;
}

const CommentForm = ({
  onSubmit,
  isCreateLoading,
}: CommentFormProps): React.ReactElement => {
  return (
    <Formik<CommentFormData>
      initialValues={{ comment: '' }}
      onSubmit={onSubmit}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <Row $spacing='xs' $justifyContent='center'>
            <Col $colWidth={11}>
              <FormTextAreaField name='comment' />
            </Col>
            <Col $colWidth={1}>
              <Layout $display='flex' $justifyContent='center'>
                <IconButton
                  $circularButton
                  type='submit'
                  color='black'
                  size='sm'
                  iconType='send'
                  loading={isCreateLoading}
                />
              </Layout>
            </Col>
          </Row>
        </form>
      )}
    </Formik>
  );
};

export default CommentForm;
