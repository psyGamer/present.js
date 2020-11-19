/**
 * The present.js Instance
 */
const PresentJS = {
    /**
     * The width of the window in pixels
     */
    windowX: 0,
    /**
     * The height of the window in pixels
     */
    windowY: 0,

    /**
     * @param test is good
     */
    createSlider: (): Slide => {
        return new Slide();
    },
};

class Slide {
    elements = [];
}

/**
 * Transform a string to upper-case.
 * @param {string} value The string to be transformed.
 * @returns {string} The upper-cased string.
 */
function upper1(value) {
    return value.toUpperCase();
}

/*class Element {
    constructor(parent, position, content);
}*/

class Position {
    relativePosition = [];
    pixelPosition = [];

    constructor(
        relativeXPosition,
        relativeYPosition,
        pixelXPosition = 0,
        pixelYPosition = 0
    ) {
        this.relativePosition[0] = relativeXPosition;
        this.relativePosition[1] = relativeYPosition;

        this.pixelPosition[0] = pixelXPosition;
        this.pixelPosition[1] = pixelYPosition;
    }

    getPosition = (asArray = false) => {
        if (asArray) {
        } else {
            return (
                this.relativePosition[0] * windowX + pixelXPosition[0],
                this.relativePosition[1] * windowY + pixelXPosition[1]
            );
        }
    };
}

class Content {}
