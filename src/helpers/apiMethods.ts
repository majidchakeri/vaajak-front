import axios from "axios";

import { ENV } from "@/utils/const/main";
import { GetCookie } from "./manageCookie";
import { error } from "console";
import { string } from "yup";

const api = axios.create({
  baseURL: `${ENV.basePath}${process.env.REACT_APP_API_URL}`,
  headers: { accept: "application/json" },
});

axios.interceptors.request.use(
  async (config) => {
    let token = GetCookie("token");
    if (token && token !== '""') {
      const cleartoken = token.replace(/^"|"$/g, "");
      config.headers["Authorization"] = `Bearer ${cleartoken}`;
    } else {
      // config.headers["Authorization"] = "";
    }
    return config;
  },
  (error) => {
    console.error("Error in request interceptor:", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Handle successful responses if needed
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const get = async (url: string, params?: {}) => {
  return await api.get(url, { params });
};

const post = async (url: string, params = {}) => {
  	return await api.post(url, params);
};

const put = async (url: string, params = {}) => {
return await api.put(url, params);
};

const del = async (url: string, params = {}) => {
return await api.delete(url, params);
};

const Api = {
  admin: {
    auth: {},
    vocab: {
      getVocabList: async () => {
        const response = await get(`vocab/GetList`);
        return response.data;
      },
      GetListByUserId: async () => {
        const response = await get(`PollUser/GetListByUserId`);
        return response.data;
      },
      getPollById: async (id: string) => {
        const response = await get(`Poll/GetById?id=${id}`);
        return response.data;
      },

      addPoll: async (params: any) => {
        const response = await post("Poll/Post", params);
        return response.data;
      },
      updatePoll: async (params: any) => {
        const response = await put("Poll/Put", params);
        return response.data;
      },
      deletePoll: async (id: string | number | null) => {
        const response = await del(`Poll/Delete?id=${id}`);
        return response.data;
      },
    },
  },
};

export default Api;
