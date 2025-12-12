import { createId } from "@paralleldrive/cuid2";
import { blockTypeHasItems } from "@typebot.io/blocks-core/helpers";
import type { ItemV6 } from "@typebot.io/blocks-core/schemas/items/schema";
import type {
  BlockV6,
  BlockWithItems,
} from "@typebot.io/blocks-core/schemas/schema";
import { InputBlockType } from "@typebot.io/blocks-inputs/constants";
import { LogicBlockType } from "@typebot.io/blocks-logic/constants";
import { defaultAgentHandoffOptions } from "@typebot.io/blocks-logic/schema";

const parseDefaultItems = (type: BlockWithItems["type"]): ItemV6[] => {
  switch (type) {
    case InputBlockType.CHOICE:
    case InputBlockType.PICTURE_CHOICE:
    case LogicBlockType.CONDITION:
      return [{ id: createId() }];
    case InputBlockType.CARDS:
      return [
        {
          id: createId(),
          paths: [{ id: createId() }],
        },
      ];
      return [
        { id: createId(), path: "a" },
        { id: createId(), path: "b" },
      ];
    default:
      return [];
  }
};

export const parseNewBlock = (type: BlockV6["type"]) =>
  ({
    id: createId(),
    type,

    ...(blockTypeHasItems(type)
      ? { items: parseDefaultItems(type) }
      : undefined),
    ...(type === LogicBlockType.AGENT
      ? { options: defaultAgentHandoffOptions }
      : undefined),
  }) as BlockV6;
