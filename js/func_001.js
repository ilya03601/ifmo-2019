const concat = require('goss_concat');

function printRGB(r=255, g=255, b=255) {
	return concat('rgb(', r, ', ', g, ', ', b, ')');	
}

console.log(printRGB(50, 100, 110));