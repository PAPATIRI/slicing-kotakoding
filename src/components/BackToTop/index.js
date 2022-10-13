import tw, { styled } from "twin.macro";
const BackToTopBtn = styled.a(({ position }) => [
  tw`absolute fixed bottom-4 right-4 bg-greenPrimary px-4 py-2 text-white rounded font-bold text-sm capitalize`,
  position > 80 ? tw`block` : tw`hidden`,
]);

export default function BackToTop(props) {
  const { position } = props;

  return (
    <BackToTopBtn position={position} href="#top">
      kembali ke atas
    </BackToTopBtn>
  );
}
