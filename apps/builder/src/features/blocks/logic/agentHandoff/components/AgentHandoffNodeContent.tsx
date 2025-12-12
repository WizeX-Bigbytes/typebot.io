import { CustomerSupportIcon } from "@typebot.io/ui/icons/CustomerSupportIcon";
import { cx } from "@typebot.io/ui/lib/cva";

export const AgentHandoffNodeContent = () => (
    <div className={cx("flex items-center gap-2 text-red-10")}>
        <div className="flex items-center gap-1 font-semibold">
            <CustomerSupportIcon className="w-4 h-4" /> Agent Handoff
        </div>
    </div>
);
