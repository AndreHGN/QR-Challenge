import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import AddUserPage from '../add-user.page';
import theme from '../../../../styles/theme';
import { User } from '../../request-types';

jest.mock('axios');

const Wrapper = ({ children }: React.PropsWithChildren): React.ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const MockedAddUserPage = () => {
  return (
    <Wrapper>
      <AddUserPage />
    </Wrapper>
  );
};

describe('<AddUserPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    axios.request = jest.fn();
  });

  it('should catch required fields errors on submit', async () => {
    render(<MockedAddUserPage />);

    const submitButton = screen.getByText(/Salvar/i);
    act(() => {
      submitButton.click();
    });

    const errorMessages = await screen.findAllByText('Campo obrigatório');
    expect(errorMessages.length).toBe(4);
    errorMessages.forEach((error) => expect(error).toBeInTheDocument());
  });

  it('should be able to add an user on submit', async () => {
    render(<MockedAddUserPage />);

    const mockedUser: User = {
      id: '',
      name: 'Name test',
      email: 'Email@test',
      job_title: 'Dev test',
      admission_date: '2000-01-01',
      photo_url: '',
      created_at: '',
      updated_at: '',
    };

    const nameInput = screen.getByTestId('nameInput');

    const emailInput = screen.getByTestId('emailInput');
    const dateInput = screen.getByTestId('dateInput');
    const jobTitleInput = screen.getByTestId('jobTitleInput');
    const submitButton = screen.getByText(/Salvar/i);

    (axios.request as jest.Mock).mockResolvedValue(mockedUser);

    fireEvent.change(nameInput, { target: { value: mockedUser.name } });
    fireEvent.change(emailInput, { target: { value: mockedUser.email } });
    fireEvent.change(dateInput, {
      target: { value: mockedUser.admission_date },
    });
    fireEvent.change(jobTitleInput, {
      target: { value: mockedUser.job_title },
    });

    fireEvent.click(submitButton);

    const userData: User = await axios.request({
      method: 'POST',
      url: '/api/v1/users',
      data: { user: mockedUser },
    });

    await waitFor(() => {
      expect(userData.name).toEqual(mockedUser.name);
      expect(userData.email).toEqual(mockedUser.email);
      expect(userData.job_title).toEqual(mockedUser.job_title);
      expect(userData.admission_date).toEqual(mockedUser.admission_date);
    });
  });
});
