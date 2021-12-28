import * as NextImage from 'next/image';

const customViewports = {
  mobile1: {
    name: 'xs',
    styles: {
      height: '640px',
      width: '360px',
    },
    type: 'mobile',
  },
  mobile2: {
    name: 'sm',
    styles: {
      height: '1136px',
      width: '640px',
    },
    type: 'mobile',
  },
  tablet1: {
    name: 'md',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  tablet2: {
    name: 'lg',
    styles: {
      height: '768px',
      width: '1024px',
    },
    type: 'tablet',
  },
  desktop1: {
    name: 'xl',
    styles: {
      height: '720px',
      width: '1280px',
    },
    type: 'desktop',
  },
  desktop2: {
    name: '2xl',
    styles: {
      height: '1080px',
      width: '1920px',
    },
    type: 'desktop',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...customViewports,
    },
  },
};

// Based upon https://storybook.js.org/blog/get-started-with-storybook-and-next-js/
// 1. Serve the public directory in Storybook
// --> in package.json
// "scripts": {
//       -    "storybook": "start-storybook -p 6006",
//       -    "build-storybook": "build-storybook"
//       +    "storybook": "start-storybook -p 6006 -s ./public",
//       +    "build-storybook": "build-storybook -s public"
// }

// 2. Use the unoptimized prop for Next.js Images in Storybook
// --> preview.js
// import * as NextImage from 'next/image';
//
// const OriginalNextImage = NextImage.default;
//
// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// });
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
