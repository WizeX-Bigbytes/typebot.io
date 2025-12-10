import type { AgentHandoffBlock } from "@typebot.io/blocks-logic/agentHandoff/schema";
import type { SessionState } from "@typebot.io/chat-session/schemas";
import type { SessionStore } from "@typebot.io/runtime-session-store";
import type { ExecuteLogicResponse } from "../../../types";

export const executeAgentHandoff = (
  block: AgentHandoffBlock,
  { state }: { state: SessionState; sessionStore: SessionStore },
): ExecuteLogicResponse => {
  // Create a special message that the backend will intercept
  const handoffMessage = block.options?.message || "Agent handoff requested by customer";
  
  // Use special marker that backend can detect
  const messageWithMarker = `__AGENT_HANDOFF__:${handoffMessage}`;

  return {
    outgoingEdgeId: block.outgoingEdgeId,
    messages: [
      {
        id: block.id,
        type: "text" as const,
        content: {
          type: "richText" as const,
          richText: [
            {
              type: "p" as const,
              children: [
                {
                  text: messageWithMarker,
                },
              ],
            },
          ],
        },
      },
    ],
  };
};
