import { Dispatch, SetStateAction } from "react";
import { IPiece } from "../../types/types";

export type ArtPiecePreviewProps = {
  piece: IPiece;
  handleToggleFavorite: (slug: string) => void;
  artPiecesInfo: string[];
};
