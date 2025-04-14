import { Code, MessageSquare, Zap } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-[#1A1A1D]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About AIPlaneTech
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            AIPlaneTech - AIM Jai Ho is a pioneering AI/ML solutions company
            dedicated to transforming businesses through innovative artificial
            intelligence technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Our Mission",
              description:
                "To democratize AI technology and make it accessible to organizations of all sizes.",
              icon: <Zap className="h-10 w-10 text-[#A64D79]" />,
            },
            {
              title: "Our Expertise",
              description:
                "Specialized in developing custom AI solutions tailored to your unique business challenges.",
              icon: <Code className="h-10 w-10 text-[#A64D79]" />,
            },
            {
              title: "Our Approach",
              description:
                "Collaborative partnership focused on delivering measurable results and continuous innovation.",
              icon: <MessageSquare className="h-10 w-10 text-[#A64D79]" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-[#3B1C32]/20 rounded-xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(166,77,121,0.1)] transition-all duration-300 hover:translate-y-[-5px] neumorphic-card"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
