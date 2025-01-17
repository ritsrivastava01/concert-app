import lightOrdarkColor from '@check-light-or-dark/color';
import plugin from 'tailwindcss/plugin';

const buttonPlugin = plugin(({ addComponents, matchComponents, theme }) => {
  addComponents({
    '.btn': {
      display: 'inline-block',
      cursor: 'pointer',
      fontWeight: 'bold',
      padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
      borderRadius: `${theme('borderRadius.lg')}`,
    },
  });
  const colors = theme('colors') || {};
  for (const key in colors) {
    if (colors[key] !== undefined && typeof colors[key] === 'object') {
      for (const shade in colors[key]) {
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
