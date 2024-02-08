import { TableColumn } from 'react-data-table-component';
import Table from '../atom-table/table.component';
import { strings } from './strings';
import { User, Users } from '../../pages/user/request-types';
import caseInsensitiveSort from '../../utils/table-sort';
import IconButton from '../atom-icon-button/icon-button.component';
import { useNavigate } from 'react-router-dom';

interface UserTableProps {
  userListData: Users;
}

const UserTable = ({ userListData }: UserTableProps): React.ReactElement => {
  const navigate = useNavigate();

  const handleRowClick = (row: User) => {
    navigate(`/users/${row.id}`);
  };

  const columns: TableColumn<User>[] = [
    {
      name: strings.nameColumnTitle,
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: strings.jobTitleColumnTitle,
      selector: (row) => row.job_title,
      sortable: true,
    },
    {
      name: strings.emailColumnTitle,
      selector: (row) => row.email,
    },
    {
      cell: (row) => (
        <IconButton
          $noBorder
          $circularButton
          iconType='remove'
          color='black'
          size='sm'
          onClick={() => console.log(`delete ${row.name}`)}
        />
      ),
      right: true,
    },
  ];

  return (
    <Table
      columns={columns}
      data={userListData}
      striped
      sortFunction={caseInsensitiveSort}
      onRowClicked={handleRowClick}
      pointerOnHover
      highlightOnHover
      pagination
    />
  );
};

export default UserTable;
