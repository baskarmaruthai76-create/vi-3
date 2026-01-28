import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudCostImg from "@/assets/services/cloud-cost-service.jpg";

const CloudCostOptimization = () => {
  return (
    <ServicePageLayout
      title="Cloud Cost Optimization"
      subtitle="Cloud Services"
      description="FinOps practices and cloud cost management strategies. We help organizations optimize cloud spending through continuous cost monitoring, rightsizing, and financial governance."
      image={cloudCostImg}
      features={[
        { title: "Cost Analysis", description: "Comprehensive cloud cost analysis and spending visibility." },
        { title: "Rightsizing", description: "Resource rightsizing recommendations for optimal cost efficiency." },
        { title: "Reserved Capacity", description: "Reserved instance and savings plan optimization strategies." },
        { title: "FinOps Practice", description: "Establish FinOps practice for ongoing cost governance." },
        { title: "Waste Elimination", description: "Identify and eliminate unused resources and orphaned assets." },
        { title: "Budget Governance", description: "Cloud budget management and cost allocation frameworks." }
      ]}
      keyBenefits={["Reduced cloud spend", "Improved visibility", "Financial accountability", "Optimized resources", "Predictable costs"]}
      relatedServices={[
        { title: "Cloud Operations", slug: "cloud-operations" },
        { title: "Cloud Strategic", slug: "cloud-strategic" },
        { title: "Managed Services", slug: "managed-services" }
      ]}
    />
  );
};

export default CloudCostOptimization;
