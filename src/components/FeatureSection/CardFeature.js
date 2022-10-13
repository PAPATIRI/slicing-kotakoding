import tw, { styled } from "twin.macro";
import Button from "../Button";

const CardContainer = styled.div(({ disabled, centered }) => [
  tw`relative bg-white rounded-2xl border shadow-lg py-6 pl-16 pr-4 max-w-md`,
  disabled ? tw`grayscale` : ``,
  centered ? tw`self-center` : ``,
]);
const CardTitle = tw.p`font-bold text-textBlack text-lg mb-4`;
const CardDesc = tw.p`text-sm leading-6 text-textBlack2 mb-4`;
const CardImageWrapper = tw.div`absolute border-4 border-greenPrimary rounded-full h-[100px] w-[100px] p-4 top-10 -left-16`;
const CardImage = tw.img`object-cover `;

export default function CardFeature(props) {
  const { cardTitle, cardDesc, cardImg, textBtn, disabled, centered } = props;

  return (
    <CardContainer disabled={disabled} centered={centered}>
      <CardTitle>{cardTitle}</CardTitle>
      <CardDesc>{cardDesc}</CardDesc>
      <Button fullBtn>{textBtn}</Button>
      <CardImageWrapper>
        <CardImage src={cardImg} alt="image card" height={70} width={70} />
      </CardImageWrapper>
    </CardContainer>
  );
}
