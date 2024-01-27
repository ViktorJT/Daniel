import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --containerWidth: 1440px;
    --spacer: 8px;
    --gap: 24px;

    --two-col: 1fr 40%;
    --one-col: 1fr;

    --layout: var(--two-col);

    --display-small: 2rem;
    --display-large: 3rem;

    --text-small: .85rem;
    --text-large: 1.15rem;

    --heading: var(--display-large);
    --body: var(--text-large);

    --primary: #2C2C2C;
    --primary-shade: #000000;
    --primary-tint: #999999;
    --primary-accent: #FF8C00;

    --secondary: #FFF6E5;
    --secondary-tint: #FFFFFF;
    --secondary-shade: #FFDFBB;
  }

  @font-face {
    font-family: 'Neue Montreal';
    src: url('/fonts/PPNeueMontreal-Book.woff2') format('woff2');
    font-style: normal;
    font-weight: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Neue Montreal';
    src: url('/fonts/PPNeueMontreal-Bold.woff2') format('woff2');
    font-style: normal;
    font-weight: bold;
    font-display: fallback;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }


  /* GLOBAL STYLES */
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    line-height: 1.25;
    text-wrap: balance;
    font-family: 'Neue Montreal', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
  }

  #root {
    /*
      Create a stacking context, without a z-index.
      This ensures that all portal content (modals and tooltips) will
      float above the app.
    */
    isolation: isolate;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-size: var(--body);
    color: var(--primary);
    background-color: var(--secondary-tint);
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: var(--display-small);
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: var(--primary);

    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--primary-accent) !important;
  }

  .scroll-lock {
    overflow: hidden;
  }

  @media only screen and (max-width: 900px) {
    :root {
      --layout: (--one-col);

      --heading: var(--display-small);
      --body: var(--text-small);
    }
  }
`;

export default GlobalStyles;
