export const muiTextFieldSettings = {
  MuiTextField: {
    variants: [
      {
        props: { className: 'auth' },
        style: {
          marginBottom: 20,
          backgroundColor: '#fff',
          borderRadius: 5,
          width: 300,
          ':hover > :not(.Mui-error) ': {
            color: '#00A1E5',

            input: {
              color: '#000000',
            },

            fieldset: {
              borderColor: '#00A1E5',
            },
          },
        },
      },
      {
        props: { type: 'date' },
        style: {
          input: {
            position: 'relative',

            '::-webkit-calendar-picker-indicator': {
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: 'auto',
              height: 'auto',
              color: 'transparent',
              background: 'transparent',
            },
          },
        },
      },
    ],
  },
}
