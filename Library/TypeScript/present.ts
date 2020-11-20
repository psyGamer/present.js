// * Constants * //

const presentationWindowID = "presentation-window";

// * Classes * //

class PresentationWindow {
    obj: HTMLElement | null;
    body: HTMLElement | null;

    x: number;
    y: number;

    constructor() {
        this.obj = document.getElementById(presentationWindowID);

        this.obj?.setAttribute(
            "style",
            "width: 100vw; height: 100vh; margin: 0; padding: 0; display: inline-block"
        );

        this.x = this.obj?.offsetWidth ? this.obj.offsetWidth : 0;
        this.y = this.obj?.offsetHeight ? this.obj.offsetHeight : 0;
    }
}

// * PresentJS Instance * //

const PresentJS = {
    window: new PresentationWindow(),
};
