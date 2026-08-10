const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.join(__dirname, '..', 'authors.html'), 'utf8');
const required = [
  '<h2>投稿方式</h2>',
  '欢迎遵守这些规则的朋友们向我们投来你们的稿件。',
  '<a href="mailto:Notrue_@outlook.com">Notrue_@outlook.com</a>',
  '稿件以PDF在附件中发来，并留下作者的简介，和你的联系方式。',
  '在审核通过以后，你的稿件就会在下一期的内容中呈现。',
];

for (const text of required) {
  if (!content.includes(text)) {
    throw new Error(`Missing author-guide content: ${text}`);
  }
}

if (content.includes('投稿入口仍在筹备，')) {
  throw new Error('Outdated subtitle copy remains');
}

console.log('Author submission guidance: PASS');
