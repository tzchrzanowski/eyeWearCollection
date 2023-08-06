import {Colours, Shapes, Gender, EyewearType} from "./CustomTypes";

interface CollectionApiProps {
    eyewear_type: keyof EyewearType,
    gender: keyof Gender,
    colour: keyof Colours,
    frame_type: keyof Shapes
}

export const getSpectaclesMen = async ({colour, frame_type, gender, eyewear_type}: CollectionApiProps) => {
    const data = await (
        await fetch('https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-men/' +
            'glasses?sort[type]=collection_relations_position' +
            '&sort[order]=asc' +
            '&filters[lens_variant_prescriptions][]=fashion' +
            '&filters[lens_variant_types][]=classic' +
            '&page[limit]=12' +
            '&page[number]=1' +
            '&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=coloured' +
            `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${colour}` +
            `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${frame_type}` +
            '&filters[frame_variant_home_trial_available]=false')
    ).json();
    return data.record;
}
