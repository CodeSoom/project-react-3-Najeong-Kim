import React from 'react';
import { Global, css } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      @import url('https://fonts.googleapis.com/css2?family=Stylish&display=swap');
      * {
        box-sizing: border-box;
        background-color: #FFFEF2;
        font-family: 'Stylish', sans-serif;
      }
    `}
  />
);
