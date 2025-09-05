function highlightCurrentDay(doc = document, day = new Date().getDay()) {
  if (day >= 1 && day <= 5) {
    doc.querySelectorAll('table tr').forEach(row => {
      const cell = row.children[day];
      if (cell) cell.classList.add('today');
    });
  }
}

if (typeof module !== 'undefined') {
  module.exports = { highlightCurrentDay };
}
