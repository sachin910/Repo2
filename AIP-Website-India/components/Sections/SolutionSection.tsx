import { Database, LineChart, MessageSquare } from "lucide-react"
import SolutionCard from "@/components/solution-card"

export default function SolutionSection() {
    return (
        <section id="solutions" className="py-20 bg-[#1A1A1D]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Explore our cutting-edge AI solutions designed to transform your business operations and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SolutionCard
                title="Predictive Analytics"
                description="Leverage historical data to forecast trends and make data-driven decisions."
                icon={<LineChart className="h-12 w-12" />}
              />
              <SolutionCard
                title="Natural Language Processing"
                description="Extract insights from text data and automate communication processes."
                icon={<MessageSquare className="h-12 w-12" />}
              />
              <SolutionCard
                title="Computer Vision"
                description="Analyze visual data to automate inspection, recognition, and classification tasks."
                icon={<Database className="h-12 w-12" />}
              />
            </div>
          </div>
        </section>
    )
}