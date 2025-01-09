import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"



export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export async function delayedClassChange() {
  setTimeout(() => {
    return "opacity-0 fadeUp"
  }, 200)
}

