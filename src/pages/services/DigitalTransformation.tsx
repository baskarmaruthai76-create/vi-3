import { ServicePageLayout } from "@/components/ServicePageLayout";
import digitalTransformationImg from "@/assets/images/digital-transformation.jpg";

const DigitalTransformation = () => {
  return (
    <ServicePageLayout
      title="Digital Transformation"
      subtitle="Enterprise Evolution"
      description="Digital transformation is the process of using digital technologies to fundamentally change how organizations operate and deliver value to customers. We help organizations become agile, intelligent, and resilient, ready to compete in a fast-changing digital world."
      image={digitalTransformationImg}
      features={[
        {
          title: "AI-First Transformation",
          description: "AI embedded across operations, decision-making, and customer experiences for intelligent enterprise operations."
        },
        {
          title: "End-to-End Automation",
          description: "Intelligent automation and agentic systems managing complex business workflows with minimal human intervention."
        },
        {
          title: "Data-Driven Enterprises",
          description: "Real-time analytics, AI-powered insights, and data products embedded into daily operations."
        },
        {
          title: "Cloud-to-Edge Ecosystems",
          description: "Seamless integration of cloud, edge, and on-premise platforms for speed and scalability."
        },
        {
          title: "Human-AI Collaboration",
          description: "AI augments employees, improving productivity and innovation rather than replacing roles."
        },
        {
          title: "Composable & Adaptive Organizations",
          description: "Modular systems that evolve rapidly with market and customer needs."
        }
      ]}
      keyBenefits={[
        "Accelerated business agility",
        "Enhanced customer experiences",
        "Operational efficiency gains",
        "Data-driven decision making",
        "Competitive market positioning",
        "Future-ready technology stack"
      ]}
      additionalSections={[
        {
          title: "Security, Trust & Governance by Design",
          content: "Built-in cybersecurity, privacy, and responsible AI frameworks ensure your digital transformation journey is secure, compliant, and trustworthy from day one."
        },
        {
          title: "Industry-Specific Solutions",
          content: "We deliver digital transformation solutions tailored to your industry, whether it's finance, healthcare, manufacturing, retail, or other sectors, ensuring maximum business impact."
        }
      ]}
      relatedServices={[
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "AI", slug: "artificial-intelligence" },
        { title: "DevSecOps", slug: "devsecops" }
      ]}
    />
  );
};

export default DigitalTransformation;
