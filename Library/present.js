"use strict";
exports.__esModule = true;
exports.PresentJS = void 0;
/**
 * * The present.js Instance
 */
var PresentJS = {
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
    createSlider: function () {
        return new Slide();
    }
};
exports.PresentJS = PresentJS;
/**
 * * The Position Class
 */
var Position = /** @class */ (function () {
    function Position(relativeXPosition, relativeYPosition, pixelXPosition, pixelYPosition) {
        var _this = this;
        if (pixelXPosition === void 0) { pixelXPosition = 0; }
        if (pixelYPosition === void 0) { pixelYPosition = 0; }
        this.relativePosition = [];
        this.pixelPosition = [];
        this.getPosition = function (asArray) {
            if (asArray === void 0) { asArray = false; }
            if (asArray) {
            }
            else {
                return (_this.relativePosition[0] * PresentJS.windowX +
                    _this.pixelPosition[0],
                    _this.relativePosition[1] * PresentJS.windowY +
                        _this.pixelPosition[1]);
            }
        };
        this.relativePosition[0] = relativeXPosition;
        this.relativePosition[1] = relativeYPosition;
        this.pixelPosition[0] = pixelXPosition;
        this.pixelPosition[1] = pixelYPosition;
    }
    return Position;
}());
/**
 * * The Slide Class
 */
var Slide = /** @class */ (function () {
    function Slide() {
        this.elements = [];
    }
    return Slide;
}());
/**
 * * The Element Class
 */
var SlideElement = /** @class */ (function () {
    function SlideElement(parent, position, content) {
        this.parent = parent;
        this.position = position;
        this.content = content;
    }
    return SlideElement;
}());
/**
 * * The ContentType Enum
 */
var ContentType;
(function (ContentType) {
    ContentType[ContentType["TEXT"] = 0] = "TEXT";
    ContentType[ContentType["IMAGE"] = 1] = "IMAGE";
    ContentType[ContentType["VIDEO"] = 2] = "VIDEO";
    ContentType[ContentType["HTML_ELEMENT"] = 3] = "HTML_ELEMENT";
})(ContentType || (ContentType = {}));
/**
 * * The Content Class
 */
var Content = /** @class */ (function () {
    function Content(type) {
        this.type = type;
    }
    return Content;
}());
