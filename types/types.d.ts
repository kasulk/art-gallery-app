import { Dispatch, SetStateAction } from "react";

export interface IPiece {
  slug: string;
  artist: string;
  name: string;
  imageSource: string;
  year: string;
  genre: string;
  colors: string[];
  dimensions: {
    height: number;
    width: number;
    type: string;
  };
}

export type ArtPiecesInfoType = string[];

export interface IArtPiecesProps {
  pieces: IPiece[];
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: ArtPiecesInfoType;
  isLoading?: boolean;
}

export interface IApiError {
  message: string;
}
