const fs = require('fs');
const path = require('path');
const dirs = ['posters', 'thumbnail', 'logos'];
let html = '<html><body>';
dirs.forEach(d => {
  const files = fs.readdirSync(path.join('public/works', d));
  files.forEach(f => {
    html += `<div><h2>${d}/${f}</h2><img src='./public/works/${d}/${f}' width='400' /></div>\n`;
  });
});
html += '</body></html>';
fs.writeFileSync('gallery.html', html);
