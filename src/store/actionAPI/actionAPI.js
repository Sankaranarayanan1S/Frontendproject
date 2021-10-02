import axios from "axios";

export const getAllCourses = () => {
  return axios.get(
    "https://iit-madras-e9252-default-rtdb.asia-southeast1.firebasedatabase.app/allCourses.json"
  );
};

export const getAllCategories = () => {
  return axios.get(
    "https://iit-madras-e9252-default-rtdb.asia-southeast1.firebasedatabase.app/allCategories.json"
  );
};
