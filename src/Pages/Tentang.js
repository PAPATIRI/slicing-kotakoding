import tw from "twin.macro";

const TentangContainer = tw.div`h-screen flex items-center justify-center`;
const TentangTitle = tw.h1`font-bold text-3xl text-textBlack`;

export default function Tentang() {
  return (
    <TentangContainer>
      <TentangTitle>ini halaman tentang belum selesai kak 😄</TentangTitle>
    </TentangContainer>
  );
}
