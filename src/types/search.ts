export interface SearchResult {
  gender: string;
  nationality: string;
}

export interface ListItemData extends SearchResult {
  name: string;
}

export interface SearchStateData {
  list: ListItemData[];
  current: SearchResult | null;
  loading: boolean;
}
