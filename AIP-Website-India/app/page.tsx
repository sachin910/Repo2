import Navbar from "@/components/Sections/navbar";
import FooterSection from "@/components/Sections/FooterSection";
import MainLandingPage from "@/components/pages/MainLandingPage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#1A1A1D] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Uncomment MainLandingPage if needed */}
        <MainLandingPage />

        {/* Workshops Section */}
        {/* <Workshops /> */}
      </main>

      {/* Footer */}
      <FooterSection />
    </div>
  );
}