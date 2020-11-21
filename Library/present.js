// * Constants * //
// * Classes * //
var PresentationWindow = /** @class */ (function () {
    function PresentationWindow(id) {
        var _a, _b, _c, _d;
        this.obj = document.querySelector("presentation#" + id);
        (_a = this.obj) === null || _a === void 0 ? void 0 : _a.setAttribute("style", "width: 100vw; height: 100vh; margin: 0; padding: 0; display: inline-block");
        this.x = ((_b = this.obj) === null || _b === void 0 ? void 0 : _b.offsetWidth) ? this.obj.offsetWidth : 0;
        this.y = ((_c = this.obj) === null || _c === void 0 ? void 0 : _c.offsetHeight) ? this.obj.offsetHeight : 0;
        this.id = id;
        this.scenes = Scene.getScenes(this);
        if (this.scenes.length == 0) {
            this.startAt = "";
            this.currentScene = null;
            return;
        }
        var startAtAttr = (_d = this.obj) === null || _d === void 0 ? void 0 : _d.getAttribute("start-at");
        this.startAt = startAtAttr ? startAtAttr : this.scenes[0].title;
        this.currentScene = Scene.getSceneByName(this, this.startAt);
    }
    PresentationWindow.prototype.switchToScene = function (sceneTitle) {
        return false;
    };
    PresentationWindow.prototype.nextScene = function () {
        return false;
    };
    PresentationWindow.prototype.previousScene = function () {
        return false;
    };
    PresentationWindow.getWindows = function () {
        var presentationElements = document.querySelectorAll("presentation");
        var presentations = [];
        for (var i = 0; i < presentationElements.length; i++) {
            presentations.push(new PresentationWindow(presentationElements[i].id));
        }
        return presentations;
    };
    PresentationWindow.getWindowByID = function (windowID) {
        PresentJS.windows.forEach(function (window) {
            if (window.id == windowID) {
                return window;
            }
        });
        return null;
    };
    return PresentationWindow;
}());
var Scene = /** @class */ (function () {
    function Scene(parent, sceneTitle) {
        this.elements = [];
        this.parent = parent;
        this.title = sceneTitle;
    }
    Scene.getSceneByName = function (window, sceneTitle) {
        window.scenes.forEach(function (scene) {
            if (scene.title == sceneTitle) {
                return scene;
            }
        });
        return null;
    };
    Scene.doesNameExist = function (window, sceneTitle) {
        return Scene.getSceneByName(window, sceneTitle) ? true : false;
    };
    Scene.getScenes = function (window) {
        var sceneElements = document.querySelectorAll("presentation#" + window.id + " scene");
        var scenes = [];
        for (var i = 0; i < sceneElements.length; i++) {
            var sceneTitle = (sceneElements[i]).getAttribute("title");
            if (sceneTitle) {
                scenes.push(new Scene(window, sceneTitle));
            }
        }
        return scenes;
    };
    return Scene;
}());
var SceneElement = /** @class */ (function () {
    function SceneElement() {
    }
    return SceneElement;
}());
// * PresentJS Instance * //
var PresentJS = {
    windows: PresentationWindow.getWindows()
};
// * Testing * //
