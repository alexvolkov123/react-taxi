import { buttonColors, buttonSizes } from './button-settings'

export const muiButtonSettings = {
  MuiButton: {
    variants: [
      {
        props: { className: 'auth' },
        style: {
          ...buttonSizes.auth,
          ...buttonColors.auth,
        },
      },
      {
        props: { className: 'medium_auth' },
        style: {
          ...buttonSizes.medium_auth,
          ...buttonColors.auth,
        },
      },
      {
        props: { className: 'large_gold' },
        style: {
          ...buttonSizes.large,
          ...buttonColors.gold,
        },
      },
      {
        props: { className: 'large_purple' },
        style: {
          ...buttonSizes.large,
          ...buttonColors.purple,
        },
      },
      {
        props: { className: 'large_green' },
        style: {
          ...buttonSizes.large,
          ...buttonColors.green,
        },
      },
      {
        props: { className: 'medium_red' },
        style: {
          ...buttonSizes.medium,
          ...buttonColors.red,
        },
      },
      {
        props: { className: 'medium_green' },
        style: {
          ...buttonSizes.medium,
          ...buttonColors.green,
        },
      },
      {
        props: { className: 'medium_grey' },
        style: {
          ...buttonSizes.medium,
          ...buttonColors.grey,
        },
      },
      {
        props: { className: 'small_red' },
        style: {
          ...buttonSizes.small,
          ...buttonColors.red,
        },
      },
      {
        props: { className: 'small_green' },
        style: {
          ...buttonSizes.small,
          ...buttonColors.green,
        },
      },
    ],
  },
}
