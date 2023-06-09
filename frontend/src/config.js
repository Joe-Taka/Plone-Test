/**
 * Add your config changes here.
 * @module config
 * @example
 * export default function applyConfig(config) {
 *   config.settings = {
 *     ...config.settings,
 *     port: 4300,
 *     listBlockTypes: {
 *       ...config.settings.listBlockTypes,
 *       'my-list-item',
 *    }
 * }
 */

// All your imports required for the config here BEFORE this line
import '@plone/volto/config';

import { buttonConfig, ourTeamConfig } from './components';

export default function applyConfig(config) {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['en'],
    defaultLanguage: 'en',
  };

  /* config.blocks = {
    ...config.blocks,
    blocksConfig: {
      ...config.blocks.blocksConfig,
      ...Button,
    },
  }; */

  // config.blocks.blocksConfig.[id do component]
  config.blocks.blocksConfig.myCustomButton = buttonConfig;
  config.blocks.blocksConfig.ourTeam = ourTeamConfig;
  return config;
}
