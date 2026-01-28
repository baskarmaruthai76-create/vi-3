import { ServicePageLayout } from "@/components/ServicePageLayout";
import gccImg from "@/assets/services/gcc-service.jpg";

const GCCServices = () => {
  return (
    <ServicePageLayout
      title="GCC Services"
      subtitle="Global Capability Center"
      description="Global Capability Center setup, management, and optimization services for enterprise global operations."
      image={gccImg}
      features={[
        { title: "GCC Setup", description: "End-to-end Global Capability Center establishment." },
        { title: "Operations Management", description: "GCC operations management and optimization." },
        { title: "Talent Acquisition", description: "Technical talent sourcing and team building." },
        { title: "Technology Integration", description: "Technology infrastructure and platform setup." },
        { title: "Process Excellence", description: "Process standardization and improvement programs." },
        { title: "Governance Framework", description: "GCC governance and compliance frameworks." }
      ]}
      keyBenefits={["Global reach", "Cost efficiency", "Talent access", "Operational excellence", "Scalability"]}
      relatedServices={[
        { title: "HR & Staffing", slug: "hr-staffing" },
        { title: "Project Management", slug: "project-management" },
        { title: "Digital Transformation", slug: "digital-transformation" }
      ]}
    />
  );
};

export default GCCServices;
