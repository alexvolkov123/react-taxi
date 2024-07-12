export const muiSelectSettings = {
  MuiSelect: {
    variants: [
      {
        props: { className: 'custom' },
        style: {
          width: 100,
          height: 50,
          fontFamily: 'Rasa',
          fontSize: 20,
          cursor: 'pointer',
          color: 'white',

          '.MuiInputBase-input.MuiOutlinedInput-input': {
            padding: '3px 0 0 0',
          },

          fieldset: {
            border: 'none',
          },

          '.MuiSvgIcon-root': {
            color: '#fff',
            fontSize: 30,
            right: 10,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        width: 300,
        textAlign: 'left',
      },
      icon: {
        fontSize: 40,
      },
    },
  },
}
