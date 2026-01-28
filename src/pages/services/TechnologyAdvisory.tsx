import { ServicePageLayout } from "@/components/ServicePageLayout";
import technologyAdvisoryImg from "@/assets/services/technology-advisory-service.jpg";

const TechnologyAdvisory = () => {
  return (
    <ServicePageLayout
      title="Technology Advisory"
      subtitle="Strategic Guidance. Smarter Technology Decisions."
      description="Expert technology guidance to help organizations align IT strategy with business goals, reduce risk, and accelerate digital transformation."
      image={technologyAdvisoryImg}
      features={[
        {
          title: "Technology Strategy & Roadmap",
          description: "Define a clear, scalable technology roadmap aligned with business objectives."
        },
        {
          title: "Architecture Assessment",
          description: "Evaluate current systems, platforms, and technical debt."
        },
        {
          title: "Digital Transformation Advisory",
          description: "Modernization strategies for cloud, applications, and infrastructure."
        },
        {
          title: "Vendor & Tool Evaluation",
          description: "Unbiased recommendations for platforms, tools, and vendors."
        },
        {
          title: "Security & Risk Advisory",
          description: "Identify risks, compliance gaps, and security improvement opportunities."
        },
        {
          title: "Cost Optimization",
          description: "Optimize IT spend while improving performance and scalability."
        }
      ]}
      keyBenefits={[
        "Clear technology direction",
        "Reduced risk and complexity",
        "Smarter investment decisions",
        "Improved scalability",
        "Business-aligned IT strategy"
      ]}
      relatedServices={[
        { title: "Cloud Strategy", slug: "cloud-strategy" },
        { title: "Digital Transformation", slug: "digital-transformation" },
        { title: "Security Consulting", slug: "security-consulting" }
      ]}
    />
  );
};

export default TechnologyAdvisory;
