export type Response<T> = {
    data: {
        count: number,
        values: T[]
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
    product_id?: number;
    offset?: number;
    flag?: boolean;
    orderby?: string;
    classification_list: ClassificationList[];

};



export const Classification_name = ['First classification', 'Second Classification', ''];
export const Classification_number = ['1.0121', '1.0122', '1.0123', ''];

export class ClassificationList{
    classification_name= '';    
    classification_number= ''; 
    classification_type= '';  


}

export type SalesInputFields = {
    sales_upc: string,
    sales_description: string,
    sales_source: string,
    sales_year: number,
    nielsen_category: string, 
    sales_comment: string,
    collection_date_from: string,
    collection_date_to: string,
    product_id: number,
    offset: number,
    flag: boolean,
    orderby: string
};

export type SalesData = {
    sales_upc: string,
    sales_description: string,
    sales_source: string,
    sales_year: number,
    nielsen_category: string, 
    dollar_volume: number,
    kilo_volume: number,
    product_id: number
};

export type LabelInputFields ={
    label_upc: string,
    label_description: string,
    label_source: string, 
    label_ingredients: string,
    collection_date_from: string,
    collection_date_to: string,
    product_id: number,
    offset: number,
    flag: boolean,
    orderby: string
};

export type LabelData = {
    label_upc: string,
    label_description: string,
    label_source: string,
    label_collection_date: string,
    label_creation_date: string,
    label_last_edited: string, 
    label_edited_by: string

}