import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudStrategicImg from "@/assets/services/cloud-strategic-service.jpg";

const CloudStrategic = () => {
  return (
    <ServicePageLayout
      title="Cloud Strategic"
      subtitle="Cloud Services"
      description="Strategic cloud planning and roadmap development for enterprise transformation. We help organizations develop comprehensive cloud strategies that align with business objectives and drive digital innovation."
      image={cloudStrategicImg}
      features={[
        { title: "Cloud Readiness Assessment", description: "Evaluate your organization's readiness for cloud adoption with comprehensive assessments." },
        { title: "Cloud Strategy Development", description: "Create tailored cloud strategies aligned with your business goals and industry requirements." },
        { title: "Roadmap Planning", description: "Develop phased implementation roadmaps for successful cloud transformation." },
        { title: "Vendor Selection", description: "Objective cloud platform evaluation and vendor selection guidance." },
        { title: "Business Case Development", description: "Build compelling business cases with ROI analysis and TCO projections." },
        { title: "Change Management", description: "Plan organizational change management for cloud adoption success." }
      ]}
      keyBenefits={["Strategic cloud alignment", "Reduced transformation risk", "Optimized cloud investments", "Faster time-to-value", "Clear implementation roadmap"]}
      relatedServices={[
        { title: "Cloud Adoption", slug: "cloud-adoption" },
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Cloud Cost Optimization", slug: "cloud-cost-optimization" }
      ]}
    />
  );
};

export default CloudStrategic;
