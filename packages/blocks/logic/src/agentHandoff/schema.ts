import { z } from "@typebot.io/zod";
import { blockBaseSchema } from "@typebot.io/blocks-core/schemas/blockBaseSchema";
import { LogicBlockType } from "../constants";

export const agentHandoffBlockSchema = blockBaseSchema.merge(
  z.object({
    type: z.enum([LogicBlockType.AGENT]),
  }),
);

export type AgentHandoffBlock = z.infer<typeof agentHandoffBlockSchema>;
