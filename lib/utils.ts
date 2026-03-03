import slugify from "slugify";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Generate consistent SEO-friendly slug
 */
export const generateSlug = (value: string): string => {
  return slugify(value, {
    replacement: '-',
    remove: undefined,
    lower: true,
    strict: true,
    locale: 'en',
    trim: true,
  });
};

export const generateSlugWithId = (
  title: string,
  id: string | number
): string => {
  return `${generateSlug(title)}-${id}`;
};