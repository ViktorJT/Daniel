import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --containerWidth: 1440px;
  --spacer: 160px;

  --white: #FFFFFF;
  --light: #FFF6E5;
  --light-transparent: rgba(229, 229, 229, 0.3);

  --black: #000000;
  --dark: #131313;
  --dark-transparent: rgba(28, 28, 28, 0.3);

  --primary: var(--dark);
  --secondary: var(--light);

  --primary-tint: var(--black);
  --secondary-tint: var(--white);

  --primary-transparent: var(--dark-transparent);
  --secondary-transparent: var(--light-transparent);
}

@font-face {
  font-family: 'Neue Montreal';
  src: url('/fonts/PPNeueMontreal-Book.otf') format('opentype');
  font-style: normal;
  font-weight: normal;
  font-display: fallback;
}

@font-face {
  font-family: 'Neue Montreal';
  src: url('/fonts/PPNeueMontreal-Bold.otf') format('opentype');
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
  line-height: 1.45;
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
  color: var(--secondary);
  background-color: var(--primary);
}

h1, h2, h3, h4, h5, h6 {
  font-size: 2.5rem;
  font-weight: normal;
}

p, a {
  text-transform: uppercase;
}
`;

export default GlobalStyles;
