require('impress.js/js/impress');
var mermaid = require('mermaid/dist/mermaid.min.js');
var markdown = require('markdown/lib/markdown.js');
require('highlight.js/lib/highlight.js');
require('./style/devopsy.css');
// require('highlight.js/styles/github.css');
require('./style/effetcs.css');
require('./style/markdown_slides.css');
require('./style/impress_demo.css');
window.markdown = markdown;
const impressAPI = impress('impress').init();
mermaid.initialize({
  theme: 'forest',
  // themeCSS: '.node rect { fill: red; }',
  logLevel: 3,
  flowchart: {
    curve: 'linear'
  },
  gantt: {
    axisFormat: '%m/%d/%Y'
  },
  sequence: {
    actorMargin: 50
  },
  // sequenceDiagram: { actorMargin: 300 } // deprecated
});
