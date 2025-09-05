const { TextEncoder, TextDecoder } = require('util');
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
const { JSDOM } = require('jsdom');
const { highlightCurrentDay } = require('../src/highlight');

test('highlights cells of given weekday', () => {
  const dom = new JSDOM(`
    <table>
      <tr><th>时间</th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th></tr>
      <tr><th>8:00</th><td></td><td></td><td></td><td></td><td></td></tr>
    </table>
  `);
  highlightCurrentDay(dom.window.document, 2); // 周二
  const rows = dom.window.document.querySelectorAll('tr');
  rows.forEach(row => {
    expect(row.children[2].classList.contains('today')).toBe(true);
  });
  // 其他列不应被高亮
  expect(rows[1].children[1].classList.contains('today')).toBe(false);
});
