export type WritingType = "reading" | "writing";

export interface WritingItem {
  title: string;
  type: WritingType;
  description: string;
  link: string;
}
