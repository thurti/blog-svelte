export const config = {
  url: 'https://t3000.uber.space',
  api: (typeof location !== 'undefined' && location.hostname === 'localhost') ? 'http://localhost:3000/api' : 'https://t3000.uber.space/api',
  title: '| T3000',
  twitter: '@_thurti',
  img_sizes: [
    1940,
    1200,
    970,
    640,
    320
  ],
}