import tw from "twin.macro";
import CardFeature from "./CardFeature";

const FeatureContainer = tw.div`flex items-center px-24 py-16 h-screen`;
const RightSection = tw.div`flex-1 flex flex-col gap-8 items-end`;
const LeftSection = tw.div`flex-1 relative`;
const FeatureTitle = tw.h1`font-bold text-textBlack2 text-5xl leading-tight mb-12`;
const FeatureDesc = tw.p`text-xl text-textBlack mb-4 leading-8`;
const ImageDecoration = tw.img`absolute -top-8 left-0`;

export default function FeatureSection() {
  return (
    <FeatureContainer>
      <LeftSection>
        <FeatureTitle>
          Satu Platform,
          <br />
          Banyak Solusi
        </FeatureTitle>
        <FeatureDesc>
          Kotakode memfasilitasi dengan memberikan berbagai fitur yang menarik
          dan
          <br /> terbaik untuk mengembangkan ekosistem IT anak bangsa.
        </FeatureDesc>
        <ImageDecoration src="/images/greendot.svg" />
      </LeftSection>
      <RightSection>
        <CardFeature
          cardTitle="Online Forum"
          cardDesc="Kotakode dapat menjawab pertanyaan dan membantu programmer dalam memberikan jawaban yang berkualitas"
          cardImg="/images/online.svg"
          textBtn="tanya sekarang"
        />
        <CardFeature
          centered
          cardTitle="Microblogging"
          cardDesc="Kotakode menyediakan wadah bagi programmer untuk berbagi wawasan terkait info terkini di bidang IT"
          cardImg="/images/microblogging.svg"
          textBtn="tulis sekarang"
        />
        <CardFeature
          disabled
          cardTitle="Job Hiring (Coming Soon)"
          cardDesc="Kotakode membantu rekruiter dalam mencari talent terbaik yang memenuhi standar perusahaan"
          cardImg="/images/manflying.png"
          textBtn="cari kerja"
        />
      </RightSection>
    </FeatureContainer>
  );
}
