import type { UseQueryResult } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { mistral } from "../ApiService";
import { ChatCompletionResponse } from "@mistralai/mistralai/models/components";

type useGetObjectsType = () => UseQueryResult<
  ChatCompletionResponse,
  AxiosError
>;

const useGetObjects: useGetObjectsType = () => {
  const query = useQuery<ChatCompletionResponse, AxiosError>({
    queryKey: ["objects", "list"],
    staleTime: Infinity,
    retry: false,
    queryFn: async () => {
      const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: [
          {
            content:
              "Who is the best French painter? Answer in one short sentence.",
            role: "user",
          },
        ],
      });
      return result;
    },
  });

  return query;
};

export default useGetObjects;
