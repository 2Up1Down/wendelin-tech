import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
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
