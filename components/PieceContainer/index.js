import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "../FavoriteButton";
import styled from "styled-components";

export default function PieceContainer({ title, image, slug, artist }) {
  return (
    <>
      <StyledContainer>
        <Link href={`art-pieces/${slug}`}>
          <Image src={image} alt={title} width={359} height={240} />
        </Link>
        <FavoriteButton />
      </StyledContainer>
      <h4>@{artist}</h4>
    </>
  );
}

const StyledContainer = styled.div`
  position: relative;
  width: 360px;
  height: 240px;
`;