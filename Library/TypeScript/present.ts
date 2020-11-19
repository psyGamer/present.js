export { PresentJS };

/**
 * * The present.js Instance
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
     * @return {Slide} A new Slide object
     */
    createSlider: (): Slide => {
        return new Slide();
    },
};

/**
 * * The Position Class
 */
class Position {
    relativePosition: number[] = [];
    pixelPosition: number[] = [];

    constructor(
        relativeXPosition: number,
        relativeYPosition: number,
        pixelXPosition: number = 0,
        pixelYPosition: number = 0
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
                this.relativePosition[0] * PresentJS.windowX +
                    this.pixelPosition[0],
                this.relativePosition[1] * PresentJS.windowY +
                    this.pixelPosition[1]
            );
        }
    };
}

/**
 * * The Slide Class
 */
class Slide {
    elements: Element[] = [];
}

/**
 * * The Element Class
 */
class SlideElement {
    parent: Slide;
    position: Position;
    content: Content;

    constructor(parent: Slide, position: Position, content: Content) {
        this.parent = parent;
        this.position = position;
        this.content = content;
    }
}

/**
 * * The ContentType Enum
 */
enum ContentType {
    TEXT,
    IMAGE,
    VIDEO,
    HTML_ELEMENT,
}

/**
 * * The Content Class
 */
class Content {
    type: ContentType;

    constructor(type: ContentType) {
        this.type = type;
    }
}
