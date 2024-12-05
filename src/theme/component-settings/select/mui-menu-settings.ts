import { themeColors } from '../../theme-colors'

export const customSelectMenuSettings = {
  PaperProps: {
    sx: {
      marginLeft: '-10px',
      backgroundColor: '#3e3436ff',
      padding: 0,
      borderRadius: '10px',
      overflow: 'visible',

      '::after': {
        content: `''`,
        position: 'absolute',
        right: 10,
        top: -5,
        width: 0,
        height: 0,
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderBottom: '6px solid #3e3436ff',
      },

      '& .MuiList-root': {
        padding: 0,
        marginTop: '5px',
        marginBottom: '5px',
      },

      '& .MuiMenuItem-root': {
        fontFamily: 'Rasa',
        width: '100%',
        padding: 0,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',

        ':hover': {
          backgroundColor: '#493f41ff',
          borderRadius: '4px',
        },
      },
    },
  },
}
export const baseSelectMenuSettings = {
  PaperProps: {
    sx: {
      marginTop: '-4px',
      backgroundColor: '#fff',
      padding: 0,
      width: 300,
      borderRadius: '0 0 5px 5px',

      '& .MuiList-root': {
        padding: 0,
        borderCollapse: 'collapse',
      },

      '& .MuiMenuItem-root': {
        fontFamily: 'Roboto',
        width: '100%',
        padding: '10px 7px',
        color: '#000',
        border: `2px solid ${themeColors.main}`,

        ':hover': {
          backgroundColor: '#c7f1ffff',
        },
        ':last-child': {
          borderTop: 'none',
          borderRadius: '0 0 5px 5px',
        },
      },
    },
  },
}
