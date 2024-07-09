export const muiSelectSettings = {
  MuiSelect: {
    variants: [
      {
        props: { className: 'custom' },
        style: {
          width: 110,
          height: 50,
          cursor: 'pointer',
          boxSizing: 'border-box',
          marginRight: 20,
          color: 'white',
          fieldset: {
            border: 'none',
          },
          svg: {
            color: '#fff',
          },
          li: {
            backgroundColor: '#191919',
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        width: 200,
        textAlign: 'left',
      },
      icon: {
        fontSize: 40,
      },
    },
  },
}
