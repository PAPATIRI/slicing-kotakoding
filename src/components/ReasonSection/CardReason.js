import tw, { styled } from "twin.macro";

const CardWrapper = styled.div(({ bigCard }) => [
  tw`flex gap-4 bg-white p-8 rounded-2xl h-full`,
  bigCard ? tw`flex-col items-center text-center` : tw`flex-row`,
]);
const CardImage = tw.img`object-cover`;
const CardTitle = tw.p`text-xl font-bold text-textBlack2 mb-4`;
const CardDesc = tw.p`text-sm text-textBlack2`;

export default function CardReason(props) {
  const { cardDesc, cardImg, cardTitle, bigCard } = props;

  return (
    <CardWrapper bigCard={bigCard}>
      <CardImage src={cardImg} height="80" width="86" />
      <div>
        <CardTitle>{cardTitle}</CardTitle>
        <CardDesc>{cardDesc}</CardDesc>
      </div>
    </CardWrapper>
  );
}
