import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudAdoptionImg from "@/assets/services/cloud-solutions.jpg";

const CloudAdoption = () => {
  return (
    <ServicePageLayout
      title="Cloud Adoption"
      subtitle="Cloud Services"
      description="End-to-end cloud adoption frameworks and implementation strategies. We guide organizations through the complete cloud adoption journey from assessment to optimization."
      image={cloudAdoptionImg}
      features={[
        { title: "Cloud Adoption Framework", description: "Structured approach to cloud adoption using industry-proven frameworks." },
        { title: "Proof of Concept", description: "Rapid POC development to validate cloud solutions before full implementation." },
        { title: "Landing Zone Setup", description: "Secure and scalable cloud landing zone architecture and implementation." },
        { title: "Governance Framework", description: "Cloud governance policies, standards, and compliance frameworks." },
        { title: "Skills Development", description: "Cloud training and certification programs for your teams." },
        { title: "Adoption Acceleration", description: "Accelerated adoption programs for rapid cloud transformation." }
      ]}
      keyBenefits={["Structured adoption", "Reduced risk", "Faster transformation", "Skills enablement", "Governance compliance"]}
      relatedServices={[
        { title: "Cloud Strategic", slug: "cloud-strategic" },
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Cloud Modernization", slug: "cloud-modernization" }
      ]}
    />
  );
};

export default CloudAdoption;
