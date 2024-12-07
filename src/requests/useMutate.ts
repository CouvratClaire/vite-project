import type { UseMutationResult } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { mistral } from "../ApiService";
import {
  ChatCompletionResponse,
  ChatCompletionRequest,
} from "@mistralai/mistralai/models/components";

type useGetObjectsType = () => UseMutationResult<
  ChatCompletionResponse,
  AxiosError
>;

const useMutateDiscussion: useGetObjectsType = () => {
  const query = useMutation<
    ChatCompletionResponse,
    AxiosError,
    {
      discussion: ChatCompletionRequest["messages"];
    }
  >({
    // staleTime: Infinity,
    // retry: false,
    mutationFn: async ({
      discussion,
    }: {
      discussion: ChatCompletionRequest["messages"];
    }) => {
      console.debug("mutate", discussion);
      const result = await mistral.chat.complete({
        model: "mistral-small-latest",
        messages: discussion,
      });
      console.debug({ result });
      return result;
    },
  });

  return query;
};

export default useMutateDiscussion;
