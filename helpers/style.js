const fs = require('fs');
const path = require('path');

exports.style = function(fileName, options) {
    const cssPath = path.join(__dirname, '..', 'views', 'partials', fileName);
    const cssFile = fs.readFileSync(cssPath, (err, date) => {});
    return `
		<style>
			${cssFile}
		</style>
		${options.fn(this)}
	`;
}