import { ServicePageLayout } from "@/components/ServicePageLayout";
import integrationImg from "@/assets/services/integration.jpg";

const Integration = () => {
  return (
    <ServicePageLayout
      title="Integration"
      subtitle="System Integration"
      description="Seamless enterprise system integration connecting applications, data, and processes across your organization."
      image={integrationImg}
      features={[
        { title: "API Integration", description: "RESTful and GraphQL API development and integration." },
        { title: "iPaaS Solutions", description: "Integration Platform as a Service implementation." },
        { title: "Enterprise Integration", description: "EAI patterns and enterprise service bus." },
        { title: "Data Integration", description: "Real-time data synchronization across systems." },
        { title: "B2B Integration", description: "Partner and vendor system connectivity." },
        { title: "Legacy Integration", description: "Connect legacy systems with modern applications." }
      ]}
      keyBenefits={["Connected systems", "Data consistency", "Process automation", "Reduced silos", "Real-time sync"]}
      relatedServices={[
        { title: "CI/CD", slug: "cicd" },
        { title: "Application Services", slug: "application-services" },
        { title: "Cloud Orchestration", slug: "cloud-orchestration" }
      ]}
    />
  );
};

export default Integration;
