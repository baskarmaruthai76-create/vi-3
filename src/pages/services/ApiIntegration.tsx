import { ServicePageLayout } from "@/components/ServicePageLayout";
import apiIntegrationImg from "@/assets/services/api-integration.jpg";

const ApiIntegration = () => {
  return (
    <ServicePageLayout
      title="API Integration"
      subtitle="DevOps & Engineering"
      description="Enterprise API integration services connecting your applications, data, and third-party services through secure, scalable API architectures."
      image={apiIntegrationImg}
      features={[
        { title: "RESTful API Development", description: "Design and development of RESTful APIs following best practices and industry standards." },
        { title: "GraphQL Implementation", description: "Modern GraphQL API development for flexible, efficient data querying." },
        { title: "API Gateway Management", description: "Centralized API gateway setup with rate limiting, authentication, and monitoring." },
        { title: "Webhook Integration", description: "Event-driven webhook implementation for real-time data synchronization." },
        { title: "Third-Party API Integration", description: "Seamless integration with SaaS platforms, payment gateways, and cloud services." },
        { title: "API Security & Authentication", description: "OAuth 2.0, JWT, and API key management for secure API access." }
      ]}
      keyBenefits={["Seamless connectivity", "Real-time data sync", "Secure communication", "Scalable architecture", "Reduced development time"]}
      relatedServices={[
        { title: "Integration", slug: "integration" },
        { title: "CI/CD", slug: "cicd" },
        { title: "Application Services", slug: "application-services" }
      ]}
    />
  );
};

export default ApiIntegration;
