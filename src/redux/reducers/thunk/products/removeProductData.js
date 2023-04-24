import { removeProduct } from "../../../actions/productAction";

const removeProductData = (id) => {
  console.log(id);
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/product/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.acknowledged) {
      dispatch(removeProduct());
    }
  };
};

export default removeProductData;
