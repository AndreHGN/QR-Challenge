import * as Yup from 'yup';
import { strings } from './strings';
import { isCpfValid } from '../../utils/cpf-validation';

const errorMessages = strings.errors;

const userValidationSchema = Yup.object().shape({
  name: Yup.string().required(errorMessages.required),
  email: Yup.string()
    .email(errorMessages.email)
    .required(errorMessages.required),
  cpf: Yup.string().test('is-cpf-valid', errorMessages.cpf, (cpf) =>
    isCpfValid(cpf),
  ),
  date: Yup.date()
    .max(new Date(), errorMessages.date)
    .required(errorMessages.required),
  jobTitle: Yup.string().required(errorMessages.required),
});

export default userValidationSchema;
