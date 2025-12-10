import type { AgentHandoffBlock } from "./schema";

export const defaultAgentHandoffOptions = {
  message: "Agent handoff requested by customer",
} as const satisfies AgentHandoffBlock["options"];
