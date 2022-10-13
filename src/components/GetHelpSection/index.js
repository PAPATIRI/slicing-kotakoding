import tw from "twin.macro";
import CardTech from "./CardTech";
import { technology } from "../../data/technology";
import Button from "../Button";

const HelpContainer = tw.div`h-screen flex flex-col items-center justify-center gap-12`;
const HelpTitle = tw.h3`text-center px-96 font-bold text-5xl text-textBlack leading-snug`;
const HelpDesc = tw.p`text-center text-xl text-textBlack leading-6`;
const CardTechWrapper = tw.div`flex flex-wrap items-center justify-center gap-4 px-24`;

export default function GetHelpSection() {
  return (
    <HelpContainer>
      <HelpTitle>
        Dapatkan Bantuan dari Ribuan Ahli dan Professional Programmer di Seluruh
        <br />
        Indonesia
      </HelpTitle>
      <HelpDesc>
        Dari Berbagai Bahasa Pemrograman, Framework, Tools Coding, dan Contoh
        Pengembangan Proyek
      </HelpDesc>
      <CardTechWrapper>
        {technology.map((data, index) => (
          <CardTech key={index} cardImg={data.img} cardTitle={data.title} />
        ))}
      </CardTechWrapper>
      <Button>ajukan pertanyaan</Button>
    </HelpContainer>
  );
}
