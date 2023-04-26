function generateSvg(char, shape, color) {
    let svgMarkup;
    switch (shape) {
        case "circle":
            svgMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="150" cy="100" r="80" fill="${color}" />
                        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${char}</text>
                        </svg>`;
            break;
        case "square":
            svgMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <rect x="90" y="40" width="120" height="120" fill="${color}" />
                        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${char}</text>
                        </svg>`;
            break;
        case "triangle":
            svgMarkup = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="150, 18 244, 182 56, 182" fill="${color}" />
                        <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">${char}</text>
                        </svg>`;            
            break;
    }
                        return svgMarkup;
    }

    module.exports = generateSvg;
