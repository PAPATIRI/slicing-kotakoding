import tw from "twin.macro";
import Button from "../Button";
import StatisticCounter from "./StatisticCounter";

const HeroContainer = tw.div`flex items-center h-4/5 px-24 py-16`;
const LeftSection = tw.div`flex-1 bg-white`;
const RightSection = tw.div`flex-1 pl-20 bg-white overflow-hidden`;
const ImageHero = tw.img`object-fill scale-125 `;
const HeroTitle = tw.h1`font-bold text-textBlack2 text-5xl leading-tight mb-4`;
const HeroDesc = tw.p`text-base text-textBlack mb-4`;
const FormGroup = tw.form`flex gap-4 mb-16`;
const FormEmail = tw.input`px-8 py-3.5 border border-gray-400 rounded text-sm capitalize`;
const StatisticContainer = tw.div`flex items-center gap-8`;

export default function Hero() {
  return (
    <HeroContainer>
      <LeftSection>
        <HeroTitle>
          Jadilah Bagian dari
          <br /> Komunitas Tech Terbesar
          <br /> di Indonesia
        </HeroTitle>
        <HeroDesc>
          Ikutan diskusi forum tanya jawab, tulis blog dan
          <br /> Membangun portofolio semua di Kotakode
        </HeroDesc>
        <FormGroup>
          <FormEmail type="text" placeholder="masukkan email kamu" />
          <Button children="daftar" />
        </FormGroup>
        <StatisticContainer>
          <StatisticCounter counterNum="29128" counterDesc="user bergabung" />
          <StatisticCounter counterNum="1032" counterDesc="blog ditulis" />
          <StatisticCounter
            counterNum="19352"
            counterDesc="total pertanyaan dan jawaban"
          />
        </StatisticContainer>
      </LeftSection>
      <RightSection>
        <ImageHero src="/images/banner.gif" />
      </RightSection>
    </HeroContainer>
  );
}
