import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#3B1C32] to-[#6A1E55] opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-gray-200 mb-8">
            Get started today and discover how our AI solutions can drive
            innovation and growth for your organization.
          </p>
          <Button className="bg-[#6A1E55] hover:bg-[#A64D79] transition-all duration-300 text-white px-8 py-6 text-lg shadow-lg hover:shadow-[#A64D79]/20 hover:shadow-xl animate-pulse-slow">
            <Link
              href="mailto:shyambhushan@aiplanetech.in"
            >
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
