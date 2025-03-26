export interface menuType {
  seq: number;
  parentSeq: number | null;
  menu: string;
  url: string;
  site: string;
  title: string;
  tag: string[];
  hasChild: boolean;
  depth: number;
  sort: number;
}
