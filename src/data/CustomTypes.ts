export interface Colours {
    black: "black",
    tortoise: "tortoise",
    coloured: "colorued",
    crystal: "crystal",
    dark: "dark",
    bright: "bright"
}

export interface Shapes {
    square: "square",
    rectangle: "rectangle",
    round: "round",
    catEye: "cat-eye"
}

export interface Gender {
    women: "women",
    men: "men"
}

export interface EyewearType {
    spectacles: "spectacles",
    sunglasses: "sunglasses"
}

interface GlassesMediaInterface {
    position: number;
    url: string;
}

interface GlassVariantsInterface {
    media: GlassesMediaInterface[];
}

export interface GlassesInterface {
    name: string;
    glass_variants: GlassVariantsInterface[];
}

