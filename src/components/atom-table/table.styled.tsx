import { TableStyles } from 'react-data-table-component';
import { DefaultTheme } from 'styled-components';

export const getCustomTableStyles = (theme: DefaultTheme): TableStyles => {
  return {
    cells: {
      style: {
        fontSize: theme.fontSizes.primary,
        color: theme.colors.black,
      },
    },
    headCells: {
      style: {
        fontSize: theme.fontSizes.primary,
        color: theme.colors.black,
        fontWeight: theme.fontWeights.semibold,
      },
    },
    headRow: {
      style: {
        border: 'none',
        backgroundColor: theme.colors.white,
      },
    },
    rows: {
      style: {
        border: `1px solid ${theme.colors.black}`,
        backgroundColor: theme.colors.white,
      },
      stripedStyle: {
        backgroundColor: theme.colors.lightGray,
      },
      highlightOnHoverStyle: {
        backgroundColor: theme.colors.secondary,
        borderBottomColor: theme.colors.secondary,
      },
    },
    pagination: {
      style: {
        backgroundColor: 'transparent',
        color: theme.colors.black,
        fontSize: theme.fontSizes.secondary,
      },
    },
    noData: {
      style: {
        display: 'none',
        backgroundColor: 'transparent',
      },
    },
  };
};
