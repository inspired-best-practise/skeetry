import { ThemeImages, ThemeVariables } from '_app/theme/theme.types';

/**
 *
 * @param Theme can be spread like {Colors, NavigationColors, Gutters, Layout, Common, ...args}
 * @return {*}
 */
export default function ({}: ThemeVariables): ThemeImages {
  return {
    // logo: require('_app/assets/images/logo.svg'),
  };
}
