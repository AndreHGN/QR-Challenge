import { Selector } from 'react-data-table-component';

const caseInsensitiveSort = <T>(
  rows: T[],
  selector: Selector<T>,
  direction: 'asc' | 'desc',
) => {
  return rows.sort((rowA, rowB) => {
    const aField = selector(rowA).toString().toLowerCase();
    const bField = selector(rowB).toString().toLowerCase();

    let comparison = 0;

    if (aField > bField) {
      comparison = 1;
    } else if (aField < bField) {
      comparison = -1;
    }

    return direction === 'desc' ? comparison * -1 : comparison;
  });
};

export default caseInsensitiveSort;
