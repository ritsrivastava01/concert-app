/* eslint-disable @typescript-eslint/no-explicit-any */
import plugin from 'tailwindcss/plugin';

const diagonalRadius = plugin(({ addUtilities, theme, e, matchUtilities }) => {
  const borderRadiusValues = theme('borderRadius') || {};

  const newUtilityClasses = Object.keys(borderRadiusValues).reduce(
    (acc: Record<string, any>, key) => {
      const roundedTlbrClass = `.${e(`rounded-tlbr-${key}`)}`;
      const roundedBltrClass = `.${e(`rounded-bltr-${key}`)}`;

      acc[roundedTlbrClass] = {
        borderTopLeftRadius: borderRadiusValues[key],
        borderBottomRightRadius: borderRadiusValues[key],
      };

      acc[roundedBltrClass] = {
        borderBottomLeftRadius: borderRadiusValues[key],
        borderTopRightRadius: borderRadiusValues[key],
      };

      return acc;
    },
    {},
  );

  addUtilities(newUtilityClasses);
  matchUtilities({
    'rounded-tlbr': (value) => {
      return {
        borderTopLeftRadius: value,
        borderBottomRightRadius: value,
      };
    },
    'rounded-bltr': (value) => {
      return {
        borderBottomLeftRadius: value,
        borderTopRightRadius: value,
      };
    },
  });
});

export default diagonalRadius;
