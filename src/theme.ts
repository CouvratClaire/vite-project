declare module "@emotion/react" {
  export interface Theme {
    colors: {
      primary: string;
      text: {
        primary: string;
        light: string;
      };
      background: {
        primary: string;
        light: string;
        very_light: string;
        dark: string;
      };
    };
  }
}

export const theme = {
  colors: {
    primary: "#E08A00",
    text: {
      primary: "#14213E",
      light: "#F5F5F5",
    },
    background: {
      primary: "#FFD899",
      light: "#F1F1F1",
      very_light: "#FFE8C2",
      dark: "#3D3D3D",
    },
  },
};
