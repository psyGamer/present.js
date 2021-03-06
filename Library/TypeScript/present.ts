// * Constants * //

// * Classes * //

class PresentationWindow {
    readonly obj: HTMLElement | null;

    readonly x: number;
    readonly y: number;

    readonly id: string;
    readonly startAt: string;

    scenes: Scene[];
    currentScene: Scene | null;

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

        if (this.scenes.length == 0) {
            this.startAt = "";
            this.currentScene = null;

            return;
        }

        const startAtAttr: string | null | undefined = this.obj?.getAttribute(
            "start-at"
        );

        this.startAt = startAtAttr ? startAtAttr : this.scenes[0].title;

        this.currentScene = Scene.getSceneByName(this, this.startAt);
    }

    switchToScene(sceneTitle: string): boolean {
        return false;
    }

    nextScene(): boolean {
        return false;
    }

    previousScene(): boolean {
        return false;
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
    readonly parent: PresentationWindow | null;
    readonly title: string;
    hidden: boolean = true;

    constructor(parent: PresentationWindow, sceneTitle: string) {
        this.parent = parent;
        this.title = sceneTitle;
    }

    setVisible(visible: boolean): void {
        this.hidden = visible;
    }

    static getSceneByName(
        window: PresentationWindow,
        sceneTitle: string
    ): Scene | null {
        window.scenes.forEach((scene) => {
            if (scene.title == sceneTitle) {
                return scene;
            }
        });

        return null;
    }

    static doesNameExist(
        window: PresentationWindow,
        sceneTitle: string
    ): boolean {
        return Scene.getSceneByName(window, sceneTitle) ? true : false;
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

// * PresentJS Instance * //

const PresentJS = {
    windows: PresentationWindow.getWindows(),
};

// * Testing * //
