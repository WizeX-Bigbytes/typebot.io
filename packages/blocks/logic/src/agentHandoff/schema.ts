import { blockBaseSchema } from "@typebot.io/blocks-base/schemas";
import { z } from "@typebot.io/zod";
import { LogicBlockType } from "../constants";

export const agentHandoffOptionsSchema = z.object({
  message: z.string().optional(),
});

export const agentHandoffBlockSchema = blockBaseSchema
  .merge(
    z.object({
      type: z.enum([LogicBlockType.AGENT_HANDOFF]),
      options: agentHandoffOptionsSchema.optional(),
    }),
  )
  .openapi({
    title: "Agent Handoff",
    ref: "agentHandoffLogic",
  });

export type AgentHandoffBlock = z.infer<typeof agentHandoffBlockSchema>;
