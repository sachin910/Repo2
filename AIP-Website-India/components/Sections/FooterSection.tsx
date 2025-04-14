import { Zap } from "lucide-react";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-[#1A1A1D] border-t border-[#3B1C32]/30 py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-[#A64D79]" />
              <span className="font-bold text-xl">AIPlaneTech</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering organizations with cutting-edge AI solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Predictive Analytics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Natural Language Processing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Custom AI Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="#about"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  About Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Careers
                </Link>
              </li> */}
              {/* <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Blog
                </Link>
              </li> */}
              <li>
                <Link
                  href="mailto:shyambhushan@aiplanetech.in"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    href="mailto:shyambhushan@aiplanetech.in"
                    className="hover:text-[#A64D79] transition-colors"
                  >
                    E-Mail
                  </Link>
                </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/aiplanetech-inc"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="http://github.com/aiPlaneTechIndia"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  GitHub
                </Link>
              </li>
              {/* <li>
                <Link
                  href="#"
                  className="hover:text-[#A64D79] transition-colors"
                >
                  YouTube
                </Link>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3B1C32]/30 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} AIPlaneTech - AIM Jai Ho. All rights
            reserved.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10">
        <div className="wave-animation"></div>
      </div>
    </footer>
  );
}
