// * Constants * //

// * Classes * //

class PresentationWindow {
    obj: HTMLElement | null;

    readonly x: number;
    readonly y: number;

    id: string;

    scenes: Scene[];

    constructor(id: string) {
        this.obj = document.querySelector(`presentation#${id}`);

        this.obj?.setAttribute(
            "style",
            "width: 100vw; height: 100vh; margin: 0; padding: 0; display: inline-block"
        );

        this.x = this.obj?.offsetWidth ? this.obj.offsetWidth : 0;
        this.y = this.obj?.offsetHeight ? this.obj.offsetHeight : 0;

        this.id = id;

        this.scenes = Scene.getScenes(this);
    }

    static getWindows(): PresentationWindow[] {
        const presentationElements: NodeList = document.querySelectorAll(
            "presentation"
        );

        const presentations: PresentationWindow[] = [];

        for (let i = 0; i < presentationElements.length; i++) {
            presentations.push(
                new PresentationWindow(
                    (<HTMLElement>presentationElements[i]).id
                )
            );
        }

        return presentations;
    }

    static getWindowByID(windowID: string): PresentationWindow | null {
        PresentJS.windows.forEach((window: PresentationWindow) => {
            if (window.id == windowID) {
                return window;
            }
        });

        return null;
    }
}

class Scene {
    elements: SceneElement[] = [];
    parent: PresentationWindow | null;
    title: string;

    constructor(parent: PresentationWindow, sceneTitle: string) {
        this.parent = parent;
        this.title = sceneTitle;
    }

    static doesNameExist(windowID: string, sceneTitle: string): boolean {
        const window: PresentationWindow | null = PresentationWindow.getWindowByID(
            windowID
        );

        window?.scenes.forEach((scene: Scene) => {
            if (scene.title == sceneTitle) {
                return true;
            }
        });

        return false;
    }

    static getScenes(window: PresentationWindow): Scene[] {
        const sceneElements: NodeList = document.querySelectorAll(
            `presentation#${window.id} scene`
        );

        const scenes: Scene[] = [];

        for (let i = 0; i < sceneElements.length; i++) {
            const sceneTitle: any = (<HTMLElement>(
                sceneElements[i]
            )).getAttribute("title");

            if (sceneTitle) {
                scenes.push(new Scene(window, sceneTitle));
            }
        }

        return scenes;
    }
}

class SceneElement {}

// * PresentJS Instance * //

const PresentJS = {
    windows: PresentationWindow.getWindows(),
};

// * Testing * //
