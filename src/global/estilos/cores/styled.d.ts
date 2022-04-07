import 'styled-components';
import tema from '.';
declare module 'styled-components' {
  type ThemeType = typeof tema;

  export interface DefaultTheme extends ThemeType {}
}
