import type { AgentHandoffBlock } from "@typebot.io/blocks-logic/agentHandoff/schema";
import type { SessionState } from "@typebot.io/chat-session/schemas";
import type { SessionStore } from "@typebot.io/runtime-session-store";
import type { ExecuteLogicResponse } from "../../../types";

export const executeAgentHandoff = (
  block: AgentHandoffBlock,
  { state }: { state: SessionState; sessionStore: SessionStore },
): ExecuteLogicResponse => {
  // For WhatsApp context, return clientSideAction for middleware to handle
  if (state.whatsApp) {
    return {
      outgoingEdgeId: block.outgoingEdgeId,
      clientSideActions: [
        {
          type: "agentHandoff",
          agentHandoff: {
            message: block.options?.message || "Agent handoff requested by customer",
          },
        },
      ],
    };
  }

  // For web context, this could trigger Chatwoot widget or similar
  return {
    outgoingEdgeId: block.outgoingEdgeId,
    logs: [
      {
        status: "info",
        description: "Agent handoff is only supported in WhatsApp context",
      },
    ],
  };
};
