import type { Tool } from "@/lib/types";

export function ToolLogo({
  tool,
  size = "md",
}: {
  tool: Pick<Tool, "name" | "color">;
  size?: "sm" | "md" | "lg";
}) {
  const letter = tool.name.trim().charAt(0).toUpperCase() || "K";
  return (
    <span
      className={`tool-logo tool-logo-${size}`}
      style={{ backgroundColor: tool.color }}
      aria-hidden="true"
    >
      {letter}
    </span>
  );
}
