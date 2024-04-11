import { showError } from "@/common/utils";
import axios from "axios";

export const loginUser = (payload) => {
  return axios
    .post("/api/login", payload)
    .then(({ data }) => data)
    .catch(showError);
};
