import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudModernizationImg from "@/assets/services/cloud-modernization-service.jpg";

const CloudModernization = () => {
  return (
    <ServicePageLayout
      title="Cloud Modernization"
      subtitle="Cloud Services"
      description="Legacy system modernization using cloud-native technologies. We transform aging applications and infrastructure into modern, scalable, and efficient cloud solutions."
      image={cloudModernizationImg}
      features={[
        { title: "Application Modernization", description: "Transform legacy applications to cloud-native architectures." },
        { title: "Containerization", description: "Containerize applications using Docker and Kubernetes for portability." },
        { title: "Microservices Architecture", description: "Decompose monoliths into scalable microservices." },
        { title: "Serverless Transformation", description: "Leverage serverless computing for reduced operational overhead." },
        { title: "API-First Design", description: "Modern API-first architecture for integration and extensibility." },
        { title: "Data Modernization", description: "Modernize data platforms with cloud-native data services." }
      ]}
      keyBenefits={["Improved scalability", "Reduced technical debt", "Enhanced agility", "Lower operational costs", "Faster innovation"]}
      relatedServices={[
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Application Services", slug: "application-services" }
      ]}
    />
  );
};

export default CloudModernization;
