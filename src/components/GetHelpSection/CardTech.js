import tw from "twin.macro";

const CardWrapper = tw.div`flex flex-col items-center gap-2`;
const ImageWrapper = tw.div`flex items-center justify-center border-2 border-greenPrimary rounded-md p-4 h-[100px] w-[100px]`;
const CardImage = tw.img`object-cover`;
const CardTitle = tw.p`text-lg text-textBlack`;

export default function CardTech(props) {
  const { cardImg, cardTitle } = props;

  return (
    <CardWrapper>
      <ImageWrapper>
        <CardImage src={cardImg} width={64} height={64} />
      </ImageWrapper>
      <CardTitle>{cardTitle}</CardTitle>
    </CardWrapper>
  );
}
