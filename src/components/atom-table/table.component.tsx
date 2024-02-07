import DataTable, { TableProps } from 'react-data-table-component';
import { useTheme } from 'styled-components';
import { getCustomTableStyles } from './table.styled';

const Table = <T,>(props: TableProps<T>): React.ReactElement => {
  const theme = useTheme();
  const customStyles = getCustomTableStyles(theme);

  return <DataTable customStyles={customStyles} {...props} />;
};

export default Table;
