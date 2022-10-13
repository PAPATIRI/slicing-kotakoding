import tw from "twin.macro";
import Footer from "../Footer";
import Navbar from "../Navbar";

const PageContainer = tw.div`
    w-full h-screen bg-white
`;

export default function PageLayout({ children }) {
  return (
    <PageContainer>
      <Navbar />
      {children}
      <Footer />
    </PageContainer>
  );
}
