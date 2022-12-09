import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      sedundary: string;

      background: string;
      text: string ;
    }
  }
}