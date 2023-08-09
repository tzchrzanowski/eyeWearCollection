interface CollectionApiProps {
    eyewear_type: string;
    gender: string;
    colour: string[];
    frame_type: string[];
    page_number: number;
}

export const getSimpleCollection = async ({colour, frame_type, gender, eyewear_type, page_number}: CollectionApiProps) => {
    let colours: string = "";
    colour.forEach(color => {
        color.toLowerCase();
        colours += `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${color.toLowerCase()}`;
    });

    let shapes: string = "";
    frame_type.forEach(shape =>{
        shape.toLowerCase();
        shapes += `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${shape.toLowerCase()}`
    });

    let fullUrl =
        `https://staging-api.bloobloom.com/user/v1/sales_channels/website/collections/${eyewear_type}-${gender}/` +
        'glasses?sort[type]=collection_relations_position' +
        '&sort[order]=asc' +
        '&filters[lens_variant_prescriptions][]=fashion' +
        '&filters[lens_variant_types][]=classic' +
        '&page[limit]=12' +
        `&page[number]=${page_number}` +
        colours +
        shapes +
        '&filters[frame_variant_home_trial_available]=false';
    try {
        const response = await fetch(fullUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("api call error: ", error);
        throw error;
    }
}

