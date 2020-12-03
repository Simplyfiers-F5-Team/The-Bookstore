const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');
const sass = require('sass');

exports.style = function(fileName, options) {
    const UUID = uuid();
    const cssPath = path.join(__dirname, '..', 'views', 'partials', fileName + '.scss');
    const cssFile = fs.readFileSync(cssPath, (err, date) => {});
    const scssStyle = `[data-uuid="${UUID}"]{` + cssFile + `}`;
    const scss = sass.renderSync({ data: scssStyle, outputStyle: "compressed" });
    return `<style>${scss.css.toString()}</style><div data-uuid="${UUID}">${options.fn(this)}</div>`;
}