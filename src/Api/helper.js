/**
|--------------------------------------------------
| Domain handler
|--------------------------------------------------
*/
export const apiDomain = "https://v3.shopview.net/sapi/v3/"; // site domain

/**
|--------------------------------------------------
| Method handler - [method comments](in components)
|--------------------------------------------------
*/
export const solarMethod = "solar-search"; // This method overcome cors error.
export const masterListMethod = "master-list"; // [Home]
export const selectMethod = "/select" // used to search with param

export const productMethod = "sv-products"; // [ProductList]
export const catalogMethod = "sv-catalog/"; // []
export const storeMethod = "sv-stores/"; // []

export const productDetailMethod = "product-detail"; //[ProductDetail]
export const loginMethod = "customer-reg"; // [Login]
export const logoutMethod = loginMethod; // [Header]
export const addAddressMethod = "customer-address"; // [OrderProcess]
export const listAddressMethod = addAddressMethod; // [OrderProcess]
export const orderPlaceMethod = "order-place"; // [OrderProcess]
export const orderAddressMethod = "order-place-checkout"; // [OrderProcess]
export const orderCheckoutMethod = orderAddressMethod; // [OrderProcess]

/**
|--------------------------------------------------
| Params handler 
|--------------------------------------------------
*/

export const searchAll = "*" // param value to search all 

export const searchParam = "q=";
export const filterParam = "fq=";
export const locationParam = "pt=";
export const dParam = "d=";
export const rowsParam = "rows=";
export const combineParam = "&";

export const storeParam = "store_id:";
export const businessParam = "business_type:";
export const mainCategoryParam = "main_category:";

/**
|--------------------------------------------------
| Folder Path
|--------------------------------------------------
*/
export const imagePath = "/images";

/**
|--------------------------------------------------
| Common routes default path 
|--------------------------------------------------
*/
export const storeIdDefault = 1;