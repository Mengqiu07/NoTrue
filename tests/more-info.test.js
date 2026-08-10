const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const pages = ['index.html', 'current-issue.html', 'archive.html', 'about.html', 'authors.html', 'more-info.html'];
const expectedLinks = [
  {
    address: 'Notrue_@outlook.com',
    subject: 'Notrue违规内容举报',
    body: '你好，我发现《 ——》存在——的问题。',
  },
  {
    address: 'lyr_0807@163.com',
    subject: 'Notrue违规内容举报',
    body: '你好，我发现《 ——》存在——的问题。',
  },
  {
    address: 'Notrue_@outlook.com',
    subject: 'Notrue学术不端线索',
    body: '你好，我发现《 ——》存在——的问题。',
  },
  {
    address: 'lyr_0807@163.com',
    subject: 'Notrue学术不端线索',
    body: '你好，我发现《 ——》存在——的问题。',
  },
  {
    address: 'Notrue_@outlook.com',
    subject: '文章内容引用',
    body: '我想在我的文章《——》中引用本期刊作者为——的《——》文章。',
  },
  {
    address: 'lyr_0807@163.com',
    subject: '文章内容引用',
    body: '我想在我的文章《——》中引用本期刊作者为——的《——》文章。',
  },
];

for (const page of pages) {
  const content = fs.readFileSync(path.join(root, page), 'utf8');
  if (!content.includes('href="more-info.html"')) {
    throw new Error(`Missing more-info navigation link in ${page}`);
  }
}

const content = fs.readFileSync(path.join(root, 'more-info.html'), 'utf8');
for (const heading of ['违规举报', '学术不端', '文章引用']) {
  if (!content.includes(`<h2>${heading}</h2>`)) {
    throw new Error(`Missing more-info card: ${heading}`);
  }
}

const mailtoLinks = [...content.matchAll(/href="(mailto:[^"]+)"/g)].map((match) => match[1]);
for (const expected of expectedLinks) {
  const found = mailtoLinks.some((href) => {
    const [address, query = ''] = href.replace(/&amp;/g, '&').slice('mailto:'.length).split('?');
    const params = new URLSearchParams(query);
    return address === expected.address
      && params.get('subject') === expected.subject
      && params.get('body') === expected.body;
  });
  if (!found) {
    throw new Error(`Missing mailto template for ${expected.address}: ${expected.subject}`);
  }
}

console.log('More-information page and mail templates: PASS');
