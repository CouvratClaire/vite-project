import axios, { AxiosError, AxiosHeaders, ResponseType } from "axios";

import { Mistral } from "@mistralai/mistralai";

/**
 * Axios configuration
 */
axios.defaults.baseURL = "https://api.restful-api.dev";

export const mistral = new Mistral({
  apiKey: "virQcjVo1nIIMSh6YHdP1z2ktLxBlKCm",
});

type OptionType = {
  responseType?: ResponseType;
  headers?: AxiosHeaders;
  params?: object;
  data?: object;
};

/**
 * ApiService implementation
 */
export default class ApiService {
  static call(method: string, url: string, options: OptionType = {}) {
    return axios
      .request({
        method,
        url,
        responseType: options.responseType ?? "json",
        ...options,
        headers: options.headers,
      })
      .catch((err) => {
        throw new AxiosError(err.message, err.response, err.request, err);
      });
  }

  static get(
    path: string,
    params: object = {},
    options: Partial<OptionType> = {}
  ) {
    return this.call("GET", path, { params, ...options });
  }

  static post(path: string, data: object, options: Partial<OptionType> = {}) {
    return this.call("POST", path, { data, ...options });
  }

  static put(path: string, data: object, options: Partial<OptionType> = {}) {
    return this.call("PUT", path, { data, ...options });
  }

  static patch(path: string, data: object, options: Partial<OptionType> = {}) {
    return this.call("PATCH", path, {
      data,
      ...options,
      // @ts-expect-error: just for test
      headers: {
        "Content-Type": "application/merge-patch+json",
        ...options.headers,
      },
    });
  }

  static delete(path: string, options: Partial<OptionType> = {}) {
    return this.call("DELETE", path, options);
  }
}
