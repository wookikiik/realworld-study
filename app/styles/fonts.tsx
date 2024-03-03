'use client';

import {
  Titillium_Web,
  Source_Serif_4,
  Merriweather_Sans,
  Source_Sans_3,
} from 'next/font/google';

export const source_sans_pro = Source_Sans_3({
  // variable: '--font-source_sans_pro',
  subsets: ['latin'],
  weight: ['400', '300', '600', '700'],
  style: ['italic'],
});

export const titillium_web = Titillium_Web({
  // variable: '--font-titillium-web',
  subsets: ['latin'],
  weight: ['700'],
});

export const source_serif_pro = Source_Serif_4({
  // variable: '--font-source_serif_pro',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const merriweather_sans = Merriweather_Sans({
  // variable: '--font-merriweather_sans',
  subsets: ['latin'],
  weight: ['400', '700'],
});

/**
 * import this component if do not want use 'global.css @import'
 *
 * @see https://blog.logrocket.com/next-js-font-optimization-custom-google-fonts/
 * @see https://dev.to/mikeesto/how-to-use-nextfont-globally-4img
 */
export function Fonts() {
  return (
    <style jsx global>
      {`
        :root {
          --font-source_sans_pro: ${source_sans_pro.style.fontFamily};
          --font-titillium-web: ${titillium_web.style.fontFamily};
          --font-source_serif_pro: ${source_serif_pro.style.fontFamily};
          --font-merriweather_sans: ${merriweather_sans.style.fontFamily};
        }
      `}
    </style>
  );
}
