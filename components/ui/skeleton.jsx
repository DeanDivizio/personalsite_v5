import { cn } from "../../lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (
    (<div
      className={cn("animate-pulse rounded-md bg-neutral-950", className)}
      {...props} />)
  );
}

export { Skeleton }
