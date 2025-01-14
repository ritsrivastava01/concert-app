import plugin from 'tailwindcss/plugin';
import { PluginAPI } from 'tailwindcss/types/config';

const openVariant = plugin(function ({ addVariant }: PluginAPI) {
  addVariant('group-open', ':merge(.group).open &');
});

export default openVariant;
