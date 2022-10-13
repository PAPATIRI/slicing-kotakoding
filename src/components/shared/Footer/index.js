import tw from "twin.macro";

const FooterContainer = tw.div`flex flex-col bg-blackPrimary px-32 py-16`;
const TopSection = tw.div`flex-auto flex items-start gap-48 mb-12`;
const BottomSection = tw.div`flex flex-col items-center gap-2`;
const LeftSection = tw.div`flex flex-col gap-2`;
const RightSection = tw.div`flex-auto flex `;
const ImagesContainer = tw.div`flex gap-8`;
const ImageWrapper = tw.div`flex items-center h-[100px] w-[250px] bg-gray-200 rounded-md px-4`;
const ImageCompany = tw.img`object-cover`;
const SubTitle = tw.p`text-lg font-bold text-textGray`;
const ProductMenu = tw.div`flex-1`;
const CompanyMenu = tw.div`flex-1`;
const ContactMenu = tw.div`flex-1`;
const MenuTitle = tw.p`font-bold text-sm text-textGray capitalize mb-4`;
const MenuItem = tw.a`text-base text-textGray capitalize leading-loose block cursor-pointer`;
const Copyright = tw.p`text-sm text-textGray leading-snug`;
const SosialWrapper = tw.div`flex gap-4 items-center mt-4`;
const SosialMenu = tw.a`h-12 w-12 block`;
const SosialItem = tw.img`object-cover`;

export default function Footer() {
  return (
    <FooterContainer>
      <TopSection>
        <LeftSection>
          <SubTitle>bagian dari: </SubTitle>
          <ImagesContainer>
            <ImageCompany src="/images/block71.svg" />
            <ImageWrapper>
              <ImageCompany src="/images/google.svg" />
            </ImageWrapper>
          </ImagesContainer>
        </LeftSection>
        <RightSection>
          <ProductMenu>
            <MenuTitle>product</MenuTitle>
            <MenuItem href="#">pertanyaan</MenuItem>
            <MenuItem href="#">blog</MenuItem>
            <MenuItem href="#">pengguna</MenuItem>
            <MenuItem href="#">events</MenuItem>
            <MenuItem href="#">partnership</MenuItem>
          </ProductMenu>
          <CompanyMenu>
            <MenuTitle>perusahaan</MenuTitle>
            <MenuItem href="#">about</MenuItem>
            <MenuItem href="#">faq</MenuItem>
            <MenuItem href="#">rules</MenuItem>
            <MenuItem href="#">legal</MenuItem>
          </CompanyMenu>
          <ContactMenu>
            <MenuTitle>hubungi kami</MenuTitle>
            <MenuItem>petertanugraha@kotakode.com</MenuItem>
            <SosialWrapper>
              <SosialMenu>
                <SosialItem src="/icons/logo-linkedin.png" />
              </SosialMenu>
              <SosialMenu>
                <SosialItem src="/icons/logo-instagram.png" />
              </SosialMenu>
              <SosialMenu>
                <SosialItem src="/icons/logo-twitter.png" />
              </SosialMenu>
              <SosialMenu>
                <SosialItem src="/icons/logo-facebook.png" />
              </SosialMenu>
            </SosialWrapper>
          </ContactMenu>
        </RightSection>
      </TopSection>
      <BottomSection>
        <Copyright>PT. Kota Digital Nusantara</Copyright>
        <Copyright>Copyright 2020 Kotakode. All rights reserved</Copyright>
        <Copyright>Made with ❤️ in 🇮🇩 </Copyright>
      </BottomSection>
    </FooterContainer>
  );
}
