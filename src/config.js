export const config = {
  url: 'https://t3000.uber.space',
  api: (typeof location !== 'undefined' && location.hostname === 'localhost') ? 'http://localhost:3000/api/posts' : 'https://t3000.uber.space/api/posts',
  title: '| T3000',
  twitter: '@_thurti'
}