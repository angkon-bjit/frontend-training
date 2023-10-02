import axios from "axios";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../utils/axiosInstance";
import { ProductContext } from "../App";

const useProductHook = () => {
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { fetchReload, setFetchReload } = useContext(ProductContext);

  useEffect(() => {
    console.log("Fetch API called");

    setLoading(true);
    axiosInstance
      .get(`/posts`)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Data : ", data);
        setProductData(data);
        setLoading(false);

        return data;
      })
      .catch((err) => {
        return "Some error";
      })
      .finally(() => {
        setLoading(false);
        setFetchReload(true);
      });
  }, [fetchReload]);

  const createPost = (formData) => {
    setLoading(true);
    console.log("The form data ", formData);
    axiosInstance
      .post("/posts", formData)
      .then((resp) => resp.data)
      .then((data) => {
        console.log("Successfully created", data);
        setFetchReload(true);
      })
      .finally(() => setLoading(false));
  };

  return { productData, loading, setLoading, createPost };
};

export default useProductHook;
