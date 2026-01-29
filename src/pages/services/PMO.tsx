import { ServicePageLayout } from "@/components/ServicePageLayout";
import pmoServiceImg from "@/assets/services/pmo-service.jpg";

const PMO = () => {
  return (
    <ServicePageLayout
      title="PMO Services"
      subtitle="Business Services"
      description="Project Management Office (PMO) services to establish governance, standardize processes, and drive project success across your organization. We help build and optimize PMO capabilities for consistent project delivery."
      image={pmoServiceImg}
      features={[
        { title: "PMO Setup & Design", description: "Establish PMO structure, governance, and operating model." },
        { title: "Methodology Implementation", description: "Deploy project management methodologies (Agile, Waterfall, Hybrid)." },
        { title: "Portfolio Management", description: "Strategic project portfolio prioritization and optimization." },
        { title: "Resource Management", description: "Centralized resource planning and capacity management." },
        { title: "Reporting & Dashboards", description: "Executive dashboards and performance reporting frameworks." },
        { title: "Process Standardization", description: "Standardized templates, tools, and best practices." }
      ]}
      keyBenefits={["Improved project success rates", "Better resource utilization", "Strategic alignment", "Reduced project risks", "Enhanced visibility"]}
      relatedServices={[
        { title: "Project & Program Service", slug: "project-program-service" },
        { title: "Process Improvement", slug: "process-improvement" },
        { title: "Digital Transformation", slug: "digital-transformation" }
      ]}
    />
  );
};

export default PMO;
