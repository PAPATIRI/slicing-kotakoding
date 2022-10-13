import tw from "twin.macro";
import CardReason from "./CardReason";

const Container = tw.div`px-24`;
const ReasonContainer = tw.div`flex gap-8 items-center bg-greenSecondary rounded-2xl p-10`;
const LeftSection = tw.div`flex-1 flex gap-8`;
const RightSection = tw.div`flex-initial relative`;
const ReasonTitle = tw.h2`font-bold text-white text-5xl leading-tight mb-8`;
const ReasonDesc = tw.p`text-xl text-white leading-8`;
const ImageDecorWrapper = tw.div`absolute bottom-0 right-0`;
const ImageDecoration = tw.img`object-cover`;

export default function ReasonSection() {
  return (
    <Container>
      <ReasonContainer>
        <LeftSection>
          <div className="flex-1 flex flex-col gap-8">
            <CardReason
              cardImg="/images/jawaban.png"
              cardTitle="Jawaban cepat, tepat & gratis"
              cardDesc="Dapatkan jawaban dalam hitungan menit dari ribuan programmer lainnya."
            />
            <CardReason
              cardImg="/images/konsep.png"
              cardTitle="Konsep Gamifikasi"
              cardDesc="Dapatkan badge menarik yang akan meningkatkan personal branding kamu sebagai seorang programmer."
            />
          </div>
          <div className="flex-1">
            <CardReason
              bigCard
              cardImg="/images/portofolio.png"
              cardTitle="Bangun Online Portofolio"
              cardDesc="Portofolio ibaratkan sebuah aset yang berharga bagi setiap orang. Semakin kamu aktif di dalam forum, semakin membuktikan bahwa kamu adalah programmer yang berkualitas."
            />
          </div>
        </LeftSection>
        <RightSection>
          <ReasonTitle>
            Mengapa perlu
            <br /> menggunakan
            <br /> Kotakode?
          </ReasonTitle>
          <ReasonDesc>
            Ibaratkan sebuah kota dengan penduduk para
            <br /> programmer, Kotakode memberikan fasilitas guna
            <br /> mensejahterakan kehidupan penduduknya.
          </ReasonDesc>
          <ImageDecorWrapper>
            <ImageDecoration src="/images/orangedot.svg" />
          </ImageDecorWrapper>
        </RightSection>
      </ReasonContainer>
    </Container>
  );
}
