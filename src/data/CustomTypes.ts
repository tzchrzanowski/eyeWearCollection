interface GlassesMediaInterface {
    position: number;
    url: string;
}

interface GlassVariantsInterface {
    media: GlassesMediaInterface[];
}

export interface GlassesInterface {
    id: number;
    name: string;
    glass_variants: GlassVariantsInterface[];
}
