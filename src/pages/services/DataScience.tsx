import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiDataScienceImg from "@/assets/images/ai-data-science.jpg";

const DataScience = () => {
  return (
    <ServicePageLayout
      title="Data Science"
      subtitle="Insights from Data"
      description="Data science is an interdisciplinary field that focuses on extracting insights and knowledge from data using statistical analysis, machine learning, and computational techniques. We deliver intelligent, automated, and real-time insights at scale."
      image={aiDataScienceImg}
      features={[
        {
          title: "Automated Data Science (AutoML)",
          description: "Reduced manual effort in model building, feature engineering, and tuning through automation."
        },
        {
          title: "AI-Augmented Analytics",
          description: "Natural language queries and AI-assisted insight generation for faster decision-making."
        },
        {
          title: "Real-Time & Streaming Analytics",
          description: "Instant insights from live data sources such as IoT, sensors, and digital platforms."
        },
        {
          title: "Agentic & Autonomous Analytics",
          description: "AI agents that explore data, detect patterns, and recommend actions independently."
        },
        {
          title: "Data-Centric AI",
          description: "Greater focus on data quality, governance, and observability rather than only model complexity."
        },
        {
          title: "Federated & Privacy-Preserving Analytics",
          description: "Secure analysis across distributed and sensitive data sources without compromising privacy."
        }
      ]}
      keyBenefits={[
        "Actionable business insights",
        "Faster decision making",
        "Improved data quality",
        "Competitive intelligence",
        "Predictive capabilities",
        "Data-driven strategy"
      ]}
      additionalSections={[
        {
          title: "Integration with Business Workflows",
          content: "Insights embedded directly into applications and operational systems, enabling data-driven decisions at every level of your organization without requiring specialized tools."
        },
        {
          title: "Data Engineering & Pipelines",
          content: "We build secure data lakes and processing engines that help you collect, clean, and transform data for advanced analytics and machine learning applications."
        }
      ]}
      relatedServices={[
        { title: "AI", slug: "artificial-intelligence" },
        { title: "Agentic AI", slug: "agentic-ai" },
        { title: "AI Governance", slug: "ai-governance" }
      ]}
    />
  );
};

export default DataScience;
