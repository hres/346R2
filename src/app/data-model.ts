export type Response = {
    data: {
        count: number,
        values: Params[]
    },
    status: number,
    message: string
};

export type  Params = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    product_manufacturer: string;
    product_brand: string;
    cnf_code: number;
    cluster_number: number;
    product_description: string;
    product_comment: string;
    product_id: number,
    offset: number, 
    flag: boolean,
    orderby: string

};



export const Classification_name = ['First classification', 'Second Classification', ''];
export const Classification_number = ['1.0121', '1.0122', '1.0123', ''];