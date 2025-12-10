import type { AgentHandoffBlock } from "@typebot.io/blocks-logic/agentHandoff/schema";
import type { SessionState } from "@typebot.io/chat-session/schemas";
import type { SessionStore } from "@typebot.io/runtime-session-store";
import type { ExecuteLogicResponse } from "../../../types";

export const executeAgentHandoff = (
  block: AgentHandoffBlock,
  { state }: { state: SessionState; sessionStore: SessionStore },
): ExecuteLogicResponse => {
  const handoffMessage = block.options?.message || "Agent handoff requested by customer";

  return {
    outgoingEdgeId: block.outgoingEdgeId,
    clientSideActions: [
      {
        type: "agentHandoff" as const,
        agentHandoff: {
          message: handoffMessage,
        },
      },
    ],
  };
};
