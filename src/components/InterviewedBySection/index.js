import tw from "twin.macro";

const InterviewedContainer = tw.div`flex flex-col gap-8 items-center h-64 py-12`;
const InterviewedTitle = tw.h3`font-bold text-5xl text-textBlack capitalize`;
const LogosWrapper = tw.div`flex items-center gap-32`;
const InterViewerLogoWrapper = tw.div`w-[200px] h-[64px] overflow-hidden flex items-center justify-center`;
const InterViewerLogo = tw.img`object-cover`;

export default function InterviewedBySection() {
  return (
    <InterviewedContainer>
      <InterviewedTitle>diliput oleh</InterviewedTitle>
      <LogosWrapper>
        <InterViewerLogoWrapper>
          <InterViewerLogo src="/images/dailysocial-logo.png" />
        </InterViewerLogoWrapper>
        <InterViewerLogoWrapper>
          <InterViewerLogo src="/images/liputan5-logo.png" />
        </InterViewerLogoWrapper>
        <InterViewerLogoWrapper>
          <InterViewerLogo src="/images/yaho-logo.png" />
        </InterViewerLogoWrapper>
        <InterViewerLogoWrapper>
          <InterViewerLogo src="/images/cnn-logo.png" height={64} width={64} />
        </InterViewerLogoWrapper>
        <InterViewerLogoWrapper>
          <InterViewerLogo src="/images/merdeka-logo.jpeg" />
        </InterViewerLogoWrapper>
      </LogosWrapper>
    </InterviewedContainer>
  );
}
