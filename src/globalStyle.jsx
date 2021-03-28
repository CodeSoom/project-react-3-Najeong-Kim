import React from 'react';
import { Global, css } from '@emotion/react'

export const GlobalStyle = () => (
  <Global
    styles={css`
      * {
        background-color: #FFFEF2;
      }
    `}
  />
)
