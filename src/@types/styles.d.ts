import 'styled-components';

import theme from '../themes';

declare module 'styled-components' {
  type ThemeThype = typeof theme;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeThype {}
}
