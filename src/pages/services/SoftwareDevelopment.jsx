import { ServicePageLayout } from "@/components/ServicePageLayout";
import softwareDevelopmentImg from "@/assets/services/software-development.jpg";

const SoftwareDevelopment = () => {
  return (
    <ServicePageLayout
      title="Software Development"
      subtitle="Custom Solutions"
      description="Custom software solutions with modern frameworks, agile methodologies, and full-stack development expertise."
      image={softwareDevelopmentImg}
      features={[
        { title: "Full-Stack Development", description: "End-to-end application development using modern tech stacks." },
        { title: "Web Applications", description: "Responsive web applications with React, Angular, and Vue.js." },
        { title: "Mobile Development", description: "Native and cross-platform mobile app development." },
        { title: "API Development", description: "RESTful and GraphQL API design and implementation." },
        { title: "Cloud-Native Apps", description: "Microservices and serverless application development." },
        { title: "Legacy Modernization", description: "Transform legacy systems into modern applications." }
      ]}
      keyBenefits={["Custom solutions", "Agile delivery", "Scalable architecture", "Modern tech stack", "Quality assurance"]}
      relatedServices={[
        { title: "Application Services", slug: "application-services" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Architecture", slug: "architecture" }
      ]}
    />
  );
};

export default SoftwareDevelopment;
