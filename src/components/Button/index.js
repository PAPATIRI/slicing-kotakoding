import tw, { styled } from "twin.macro";

const ButtonGreen = tw.button`bg-greenPrimary text-white px-10 py-2 rounded capitalize font-medium`;
const ButtonWhite = tw.button`bg-white text-greenPrimary border border-greenPrimary px-10 py-2 rounded capitalize font-medium`;
const ButtonOrange = styled.button(({ fullBtn }) => [
  tw`bg-orangePrimary text-white px-6 py-3 rounded capitalize font-bold`,
  fullBtn ? tw`w-full` : ``,
]);

export default function Button(props) {
  const { typeButton, children, fullBtn } = props;

  if (typeButton === "success") {
    return <ButtonGreen fullBtn={fullBtn}>{children}</ButtonGreen>;
  } else if (typeButton === "secondary") {
    return <ButtonWhite fullBtn={fullBtn}>{children}</ButtonWhite>;
  }

  return <ButtonOrange fullBtn={fullBtn}>{children}</ButtonOrange>;
}
