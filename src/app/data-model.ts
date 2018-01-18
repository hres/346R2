export type Response<T> = {
    data: {
        count?: number,
        dataList?: T[],
        values?: T[]
    },
    status?: number,
    message?: string
};

export type Params = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    product_manufacturer: string;
    product_brand: string;
    cnf_code: number;
    cluster_number: number;
    product_description: string;
    product_comment: string;
    restaurant_type?: string;
    type?: string;
    product_id?: number;
    offset?: number;
    flag?: boolean;
    orderby?: string;
    classification_list: ClassificationList[];

};

export type createProductFields = {
    classification_name: string;
    classification_number: number | string;
    classification_type: string;
    product_manufacturer: string;
    product_brand: string;
    cnf_code: number | string;
    cluster_number: number | string;
    product_description: string;
    product_comment: string;
    restaurant_type: string;
    type: string;


};

export type productParams = {
    classificationName: string;
    classificationNumber: string;
    classificationType: string;
    productManufacturer: string;
    productBrand: string;
    cnfCode: number;
    clusterNumber: number;
    productDescription: string;
    productComment: string;
    productId?: number;
    classification_list: ClassificationList[];

};


export class addClass {
    classificationName = '';
    classificationNumber = '';
    classificationType = '';
    classificationId?: number;
    productId?: number;
}

export class classificationList {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    classificationId?: number;
    productId?: number;
}

export class salesYearList {
    salesYear = '';

}

export const Classification_name = ['First classification', 'Second Classification', ''];
export const Classification_number = ['1.0121', '1.0122', '1.0123', ''];

export class ClassificationList {
    classification_name: string;
    classification_number: string;
    classification_type: string;


}



export type SalesInputFields = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string,
    salesComment: string,
    collectionDateFrom: string,
    collectionDateTo: string,
    productId: number,
    offset: number,
    flag: boolean,
    orderBy: string
};

export type SalesData = {
    salesUpc: string,
    salesDescription: string,
    salesSource: string,
    salesYear: number,
    nielsenCategory: string,
    dollarVolume: number,
    kiloVolume: number,
    productId: number
};

export type LabelInputFields = {
    labelUpc: string,
    labelDescription: string,
    labelSource: string,
    labelIngredients: string,
    collectionDateFrom: string,
    collectionDateTo: string,
    productId: number,
    offset: number,
    flag: boolean,
    orderBy: string
};

export type LabelData = {
    labelUpc: string,
    labelDescription: string,
    labelSource: string,
    labelCollectionDate: string,
    labelLastEditDate: string,
    labelLastEditedDate: string,
    labelLastEditedBy: string,
    productId: number

}

export type InsertDataMessage = {

    status: number,
    message: string
}

export type SearchAllInputFields = {
    //Produt Fields    
    product_description: string,
    product_manufacturer: string,
    product_brand: string,
    classification_name: string,
    classification_number: string,
    classification_type: string,
    cnf_code: number,
    cluster_number: number,
    product_comment: string,

    restaurant_type?: string,
    type?: string,
    //Market Share Fields

    sales_upc: string,
    sales_description: string,
    sales_year: number,
    nielsen_category: string,
    sales_source: string,
    sales_collection_date_from: string,
    sales_collection_date_to: string,
    dollar_rank_from: number,
    dollar_rank_to: number,
    sales_comment: string,

    //Labels Fields


    label_upc: string,
    label_description: string,
    label_source: string,
    label_ingredients: string,
    label_collection_date_from: string,
    label_collection_date_to: string,
    label_comment: string,


    product_id?: number,
    offset?: number,
    flag?: boolean,
    orderby?: string,


};



export type productAllFields = {
    classification_name: string;
    classification_number: string;
    classification_type: string;
    cluster_number: string;
    cnf_code: number;
    creation_date: string;
    edited_by: string;
    product_comment: string;
    product_brand?: string;
    last_edit_date: string;
    product_description: string;
    product_id: number;
    product_manufacturer: string;
    restaurant_type: string;
    type: string;

};



export type salesFieldsView = {
    sales_id: number,
    dollar_volume: string;
    nielsen_category: string;
    sales_source: string;
    sales_upc: string;
    sales_year: number;
};

export type labelFieldsView = {
    label_id: number;
    label_upc: string;
    label_description: string;
    label_collection_date: string;
    label_source: string;
    label_creation_date: string;
    label_last_edited_by: string;
    label_last_edit_date: string;
};




export type salesFieldsCreate = {
    product_id: number,
    sales_description: string,
    sales_upc: string,
    sales_brand: string,
    sales_manufacturer: string,
    dollar_rank: number | string,
    dollar_volume: number | string,
    dollar_share: number | string,
    dollar_volume_percentage_change: number | string,
    kilo_volume: number | string,
    kilo_share: number | string,
    kilo_rank: number | string,
    kilo_volume_percentage_change: number | string,
    average_ac_dist: number | string,
    average_retail_price: number | string,
    sales_source: string,
    nielsen_category: string,
    sales_year: number | string,
    control_label_flag: boolean,
    kilo_volume_total: number | string,
    kilo_volume_rank: number | string,
    dollar_volume_total: number | string,
    cluster_number: number | string,
    product_grouping: number | string,
    sales_product_description: string,
    classification_number:  string,
    classification_type: string | string,
    sales_comment: string,
    sales_collection_date: string,
    number_of_units: number | string,
    edited_by: string


}

export type AllSalesFieldsView = {
    product_id?: number,
    sales_id?: number,
    sales_description: string,
    sales_upc: string,
    sales_brand: string,
    sales_manufacturer: string,
    dollar_rank: number | string,
    dollar_volume: number | string,
    dollar_share:  string,
    dollar_volume_percentage_change: number | string,
    kilo_volume: number | string,
    kilo_share: number | string,
    kilo_rank: number | string,
    kilo_volume_percentage_change: number | string,
    average_ac_dist: number | string,
    average_retail_price: number | string,
    sales_source: string,
    nielsen_category: string,
    sales_year: number | string,
    control_label_flag: boolean | string,
    kilo_volume_total: number | string,
    kilo_volume_rank: number | string,
    dollar_volume_total: number | string,
    cluster_number: number | string,
    product_grouping: number | string,
    sales_product_description: string,
    classification_number:  string,
    classification_type: string,
    sales_comment: string,
    sales_collection_date: string,
    number_of_units: number | string,
    edited_by?: string,
    creation_date?: string,
    last_edit_date?: string;

}
export type SearchAllResponse = {

    classification_name: string,
    classification_number: number,
    classification_type: string,
    cluster_number: number,
    cnf_code: number,
    dollar_rank: number,
    label_collection_date: string,
    label_comment: string,
    label_description: string,
    label_ingredients: string,
    label_source: string,
    label_upc: string,
    nielsen_category: string,
    product_brand: string,
    product_comment: string,
    product_description: string,
    product_id: number,
    product_manufacturer: string,
    sales_collection_date: string,
    sales_comment: string,
    sales_description: string,
    sales_source: string,
    sales_upc: string,
    sales_year: number
}
export type UpdateResponse = {
    message: string;
    status: number
}

export type productCreateResponse = {
    id: {
        value: number;
        type: number;
    };
    message: string;
    status: number;

}
export type DeleteResponse = {
    message: string;
    status: number
}

export type labelCreateFields = {
    product_id: number;
    package_description: string;
    package_upc: string;
    package_brand: string;
    package_manufacturer: string;
    package_country: string;
    package_size: number | string;
    package_size_unit_of_measure: string;
    storage_type: string;
    storage_statements: string;
    health_claims: string;
    other_package_statements: string;
    suggested_directions: string;
    ingredients: string;
    multi_part_flag: boolean| string;
    nutrition_fact_table: string;
    as_prepared_per_serving_amount: number| string;
    as_prepared_unit_of_measure: string;
    as_sold_per_serving_amount: number| string;
    as_sold_unit_of_measure: string;
    as_prepared_per_serving_amount_in_grams: number| string;
    as_sold_per_serving_amount_in_grams: number| string;
    package_comment: string;
    package_source: string;
    package_product_description: string;
    package_collection_date: string;
    number_of_units: number | string;
    edited_by: string;
    informed_dining_program: string;
    nft_last_update_date: string;
    product_grouping: number | string;
    child_item: boolean | string;
    classification_number:  string;
    classification_name: string;
    nielsen_item_rank: string;
    nutrient_claims: string,
    package_nielsen_category: string;
    common_household_measure: string;
    calculated: boolean | string;

}

export type labelNft = {
    amount: number | string;
    unit_of_measure: string;
    flag: boolean;
    daily_value_amount: number | string;
    labelId?: number;
}

export type labelViewFields = {
    product_id: number;
    package_id: number;
    package_description: string;
    package_upc: string;
    package_brand: string;
    package_manufacturer: string;
    package_country: string;
    package_size: number | string;
    package_size_unit_of_measure: string;
    storage_type: string;
    storage_statements: string;
    health_claims: string;
    other_package_statements: string;
    suggested_directions: string;
    ingredients: string;
    multi_part_flag: boolean| string;
    nutrition_fact_table: string;
    as_prepared_per_serving_amount: number| string;
    as_prepared_unit_of_measure: string;
    as_sold_per_serving_amount: number| string;
    as_sold_unit_of_measure: string;
    as_prepared_per_serving_amount_in_grams: number| string;
    as_sold_per_serving_amount_in_grams: number| string;
    package_comment: string;
    package_source: string;
    package_product_description: string;
    package_collection_date: string;
    number_of_units: number | string;
    edited_by: string;
    informed_dining_program: string;
    nft_last_update_date: string;
    product_grouping: number | string;
    child_item: boolean | string;
    classification_number: string;
    classification_name: string;
    nielsen_item_rank: string;
    nutrient_claims: string,
    package_nielsen_category: string;
    common_household_measure: string;
    calculated: boolean | string;
    creation_date: string;
    last_edit_date: string; 

}

export class nftFields {
    name = '';
    amount = '';
    unit_of_measure = '';
    daily_value = '';

}

export const UofM = ['mg', 'g', 'kj', 'kcal'];

export class nftList {
    nft: nftFields[];
    flag: boolean ;
    package_id: number;
}

export const nftFieldsList : nftFields[] = [
    {name: 'Energy', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Energy KJ', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Fat', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Saturated Fat', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Trans Fat', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Omega-6 Polyunsaturated Fat', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Omega-3 Polyunsaturated Fat', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Carbohydrates', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Fibre', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Soluble Fibre', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Insoluble Fibre', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Sugar', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Sugar Alcohols', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Starch', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Protein', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Cholesterol', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Sodium', amount: '', unit_of_measure: '', daily_value:''},
    {name: 'Saturated + Trans Fat', amount: '', unit_of_measure: '', daily_value:''}
   
   
]
export const nftFieldsListAsPrepared : nftFields[] = [
    {name: 'Energy', amount: '', unit_of_measure: '', daily_value:''}

   
   
]


export type ResponseComponentName = {

        // dataList: {
        //     component_name: string
        // }[],
        dataList: Components[]
};
export type Components = {
    component_name: string;
}

export type componentView = {

    name: string;
    amount: number;
    unit_of_measure: string;
    daily_value: string; 
    amount_per100g: number;
} 
export type NftAsSold = {

    nft:  componentView[],
    status: number;
}
export type NftAsPrepared = {

    nft:  componentView[],
    status: number;
}

export type GenericList = {
    name: string;
}