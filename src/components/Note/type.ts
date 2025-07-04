export type VariantType = "info" | "warning" | "success";

export interface NoteProps {
  variant: VariantType;
  content: string;
}
