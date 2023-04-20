import { TOOGLE_BRAND, TOOGLE_STOCK } from "../actionTypes/actionTypes";

export const toogleBrand = (brandName) => {
  return {
    type: TOOGLE_BRAND,
    payload: brandName,
  };
};

export const toogleStock = () => {
  return {
    type: TOOGLE_STOCK,
  };
};
