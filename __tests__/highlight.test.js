const { highlight } = require('../src/highlight');

test('adds highlight class to element', () => {
  document.body.innerHTML = '<div id="item"></div>';
  const element = document.getElementById('item');
  highlight(element);
  expect(element.classList.contains('highlight')).toBe(true);
});
