import { ServicePageLayout } from "@/components/ServicePageLayout";
import inclusiveComputingImg from "@/assets/services/inclusive-computing.jpg";

const InclusiveComputing = () => {
  return (
    <ServicePageLayout
      title="Inclusive Computing Support"
      subtitle="Management Services"
      description="Accessibility-focused IT support ensuring technology is usable by everyone, with assistive technology integration and universal design."
      image={inclusiveComputingImg}
      features={[
        { title: "Accessibility Assessment", description: "Comprehensive accessibility audits and compliance reviews." },
        { title: "Assistive Technology", description: "Screen readers, voice control, and adaptive device support." },
        { title: "Universal Design", description: "Inclusive UI/UX design principles and implementation." },
        { title: "WCAG Compliance", description: "Web Content Accessibility Guidelines compliance." },
        { title: "Training & Support", description: "User training for accessibility tools and features." },
        { title: "Adaptive Workstations", description: "Customized workstation setups for diverse needs." }
      ]}
      keyBenefits={["Inclusive technology", "Compliance ready", "Improved productivity", "Diverse workforce support", "Legal compliance"]}
      relatedServices={[
        { title: "Service Desk", slug: "service-desk" },
        { title: "Quality Assurance", slug: "quality-assurance" },
        { title: "Digital Transformation", slug: "digital-transformation" }
      ]}
    />
  );
};

export default InclusiveComputing;
