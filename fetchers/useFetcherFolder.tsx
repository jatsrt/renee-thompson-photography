import axios from "axios";
import useSWR, { Fetcher } from "swr";

export interface Folder {
  prefix: string;
  isAdmin: boolean;
  subFolders: string[];
  items: Item[];
}

export interface Item {
  name: string;
  preview: string;
  source: string;
  modified: Date;
  size: string;
  orientation?: string;
}

const fetcher: Fetcher<Folder, string> = async (path) => {
  const res = await axios.get<Folder>(path);
  return res.data;
};

export function useFetcherFolder(prefix?: string) {
  const { data, error, isLoading } = useSWR(
    prefix ? `/api/gallery/list?prefix=${prefix}` : "/api/gallery/list",
    fetcher
  );
  return { data, error, isLoading };
}
