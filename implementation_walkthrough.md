# Agent Handoff Implementation Walkthrough

## Overview
This walkthrough details the implementation of the "Agent Handoff" node in the Typebot builder. This node allows the bot flow to be paused and hands control over to a human agent, optionally sending a notification message.

## Changes

### 1. Data Model & Schema
- **`packages/blocks/logic/src/constants.ts`**: Added `AGENT = "Agent"` to the `LogicBlockType` enum.
- **`packages/blocks/logic/src/agentHandoff/schema.ts`**: Created the Zod schema for the Agent Handoff block.
- **`packages/blocks/logic/src/schema.ts`**: Registered the new schema in `logicBlockV6Schema` and exported `defaultAgentHandoffOptions`.

### 2. Builder UI
- **`apps/builder/src/features/blocks/logic/agentHandoff/components/AgentHandoffIcon.tsx`**: Created the icon component using `CustomerSupportIcon`.
- **`apps/builder/src/features/blocks/logic/agentHandoff/components/AgentHandoffNodeContent.tsx`**: Created the node content component with a distinct red style (`text-red-10`) to signify an alert/stop action.
- **`apps/builder/src/features/editor/components/BlockIcon.tsx`**: Mapped `LogicBlockType.AGENT` to the new icon.
- **`apps/builder/src/features/editor/components/BlockLabel.tsx`**: Add "Agent Handoff" label.
- **`apps/builder/src/features/graph/components/nodes/block/BlockNodeContent.tsx`**: Rendered the new node content.

### 3. Logic Engine
- **`packages/bot-engine/src/continueBotFlow.ts`**: Implemented the runtime logic for `LogicBlockType.AGENT`.
    - The flow stops when this node is encountered.
    - A message is sent to the user (configured in the block or default).
    - No further blocks are executed automatically, effectively handing off control.

### 4. Configuration
- **`apps/builder/src/features/typebot/helpers/parseNewBlock.ts`**: Configured default options (e.g., default message) when a new Agent Handoff block is created.

## Verification
- The code has been updated to use consistent styling (`text-red-10`) and appropriate icons (`CustomerSupportIcon`).
- Lint checks were initiated to ensure type safety.

## Next Steps
- Verify the feature in the Typebot Builder UI.
- Test the handoff flow in the previewer/simulartor.
