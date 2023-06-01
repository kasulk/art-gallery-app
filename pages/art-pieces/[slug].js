import { useRouter } from "next/router";
import ArtPieceDetails from "../../components/ArtPieceDetails";

export default function DetailsPage({ pieces }) {
  const router = useRouter();
  const { slug } = router.query;

  // console.log("Slug: ", pieces);

  const selectedImage = pieces.find((piece) => piece.slug === slug);
  if (!selectedImage) {
    return;
  }

  return (
    <div>
      <ArtPieceDetails
        image={selectedImage.imageSource}
        title={selectedImage.name}
        artist={selectedImage.artist}
      />
    </div>
  );
}
