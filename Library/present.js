// * Constants * //
var presentationWindowID = "presentation-window";
// * Classes * //
var PresentationWindow = /** @class */ (function () {
    function PresentationWindow() {
        var _a, _b, _c;
        this.obj = document.getElementById(presentationWindowID);
        (_a = this.obj) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "width: 100vw; height: 100vh; margin: 0; padding: 0; display: inline-block");
        this.x = ((_b = this.obj) === null || _b === void 0 ? void 0 : _b.offsetWidth) ? this.obj.offsetWidth : 0;
        this.y = ((_c = this.obj) === null || _c === void 0 ? void 0 : _c.offsetHeight) ? this.obj.offsetHeight : 0;
    }
    return PresentationWindow;
}());
// * PresentJS Instance * //
var PresentJS = {
    window: new PresentationWindow()
};
