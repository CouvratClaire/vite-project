import styled from "@emotion/styled";

import useMutateDiscussion from "../requests/useMutate";
import { ChatCompletionRequest } from "@mistralai/mistralai/models/components";
import { useState } from "react";
import { css } from "@emotion/react";

const WelcomeContainer = styled("div")`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: #d7f8fe;
  gap: 20px;
  width: 700px;
`;

const Flex = styled("div")`
  display: flex;
  gap: 12px;
`;

const Message = styled("div")(
  ({ role }: { role: string }) => css`
    width: 100%;
    display: flex;
    justify-content: ${role === "assistant" ? "start" : "end"};

    div {
      border-radius: 12px;
      background: white;
      max-width: 70%;
    }
  `
);

export const Welcome = () => {
  const { mutateAsync: discuss } = useMutateDiscussion();
  const [discussion, setDiscussion] = useState<
    ChatCompletionRequest["messages"]
  >([]);
  const [search, setSearch] = useState("");

  console.debug(discussion);
  return (
    <WelcomeContainer>
      <div>Mon Chat</div>
      {discussion.map((phrase) => {
        return (
          <Message role={phrase.role}>
            {/* <div>{phrase.role === "assistant" ? "Mon chat : " : "moi : "}</div> */}
            <div>{phrase.content}</div>
          </Message>
        );
      })}
      <Flex>
        <div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
        <button
          onClick={async () => {
            if (search !== "") {
              const newDiscussion = [
                ...discussion,
                { content: search, role: "user" },
              ] as ChatCompletionRequest["messages"];

              await setDiscussion(newDiscussion);

              setSearch("");
              const returnData = await discuss({ discussion: newDiscussion });
              setDiscussion(
                (formerDiscussion) =>
                  [
                    ...formerDiscussion,
                    returnData.choices?.[0]?.message,
                  ] as ChatCompletionRequest["messages"]
              );
            }
          }}
        >
          Click me
        </button>
      </Flex>
    </WelcomeContainer>
  );
};
