import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 export function cn(...imputs){
    return twMerge(clsx(imputs));

}