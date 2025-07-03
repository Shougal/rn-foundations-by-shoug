export const LIST_VARIANTS = ["ordered", "unordered"] as const;
export type VariantType = (typeof LIST_VARIANTS)[number];

export interface ListProps {
  variant: VariantType;
  items: string[];
}
