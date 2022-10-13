import tw from "twin.macro";
import Button from "../Button";

const ContactContainer = tw.div`flex flex-col items-center justify-end gap-4 h-[36rem]`;
const IconContact = tw.img`object-cover`;
const ContactTitle = tw.h2`font-bold text-3xl text-textBlack`;
const ContactDesc = tw.p`text-lg text-textBlack`;

export default function ContactSection() {
  return (
    <ContactContainer className="contact-wrapper">
      <IconContact src="/icons/telegram-icon.svg" width={200} height={200} />
      <ContactTitle>Gabung Komunitas Telegram Kotakode</ContactTitle>
      <ContactDesc>
        Kotakode berkolaborasi dengan berbagai pioneer yang inovatif untuk
        bersama mencapai tujuan yang besar
      </ContactDesc>
      <Button>ikutan telegram!</Button>
    </ContactContainer>
  );
}
