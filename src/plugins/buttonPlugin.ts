import lightOrdarkColor from '@check-light-or-dark/color';
import plugin from 'tailwindcss/plugin';

const buttonPlugin = plugin(({ addComponents, matchComponents, theme }) => {
  // console.log(theme('spacing'));
  addComponents({
    '.btn': {
      display: 'inline-block',
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      borderRadius: `${theme('borderRadius.lg')}`,
    },
  });

  for (const key in theme('colors')) {
    if (
      typeof theme('colors')[key] === 'object' &&
      theme('colors')[key] !== undefined
    ) {
      for (const shade in theme('colors')[key]) {
        const colorType = lightOrdarkColor(theme(`colors.${key}.${shade}`));
        addComponents({
          [`.btn-${key}-${shade}`]: {
            backgroundColor: theme(`colors.${key}.${shade}`),
            color: colorType === 'dark' ? 'white' : 'black',
          },
        });
      }
    }
  }

  matchComponents({
    btn: (value) => {
      const colorType = lightOrdarkColor(value);
      return {
        backgroundColor: value,
        color: colorType === 'dark' ? 'white' : 'black',
      };
    },
  });
});

export default buttonPlugin;
