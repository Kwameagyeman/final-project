const BASE_URL = "https://fakestoreapi.com";

export const FetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.log("oh Trouble fetching a product", err);
  }
};

export const FetchAllProducts = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    const results = await response.json();
    console.log(results);
    return results;
  } catch (error) {
    console.log("oh Trouble fetching a product", err);
  }
};
