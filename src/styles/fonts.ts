import { css } from 'styled-components';
import { SourceSans3Bold, SourceSans3Regular, SourceSans3Semibold } from '../assets/fonts';

export const FontFace = css`
  @font-face {
    font-family: 'Source-Sans-3';
    font-weight: 400;
    font-style: normal;
    src: url('${SourceSans3Regular}') format('truetype');
  }

  @font-face {
    font-family: 'Source-Sans-3-Semibold';
    font-weight: 600;
    font-style: normal;
    src: url('${SourceSans3Semibold}') format('truetype');
  }

  @font-face {
    font-family: 'Source-Sans-3-Bold';
    font-weight: 700;
    font-style: normal;
    src: url('${SourceSans3Bold}') format('truetype');
  }
`;
