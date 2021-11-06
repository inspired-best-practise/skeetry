import * as default_dark from './default_dark';
import { Theme } from '_app/theme/theme.types';

type Themes = { [key: string]: Partial<Theme> };

export default {
  default_dark,
} as Themes;
