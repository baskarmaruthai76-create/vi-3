import { ServicePageLayout } from "@/components/ServicePageLayout";
import serviceAssuranceImg from "@/assets/services/service-assurance-service.jpg";

const ServiceAssurance = () => {
  return (
    <ServicePageLayout
      title="Service Assurance"
      subtitle="Reliability. Performance. Trust."
      description="Ensure consistent service performance, availability, and quality through proactive monitoring, analytics, and continuous assurance practices."
      image={serviceAssuranceImg}
      features={[
        {
          title: "Service Performance Monitoring",
          description: "Real-time monitoring of service health and key performance indicators."
        },
        {
          title: "Incident Prevention",
          description: "Identify and resolve issues before they impact users."
        },
        {
          title: "Root Cause Analysis",
          description: "Rapid identification of underlying service failures."
        },
        {
          title: "SLA & Experience Management",
          description: "Ensure SLA compliance and superior user experience."
        },
        {
          title: "Predictive Analytics",
          description: "Use insights to anticipate service disruptions."
        },
        {
          title: "Continuous Service Optimization",
          description: "Ongoing improvements for stability and performance."
        }
      ]}
      keyBenefits={[
        "Improved service availability",
        "Reduced downtime and outages",
        "Better SLA compliance",
        "Enhanced end-user experience",
        "Proactive issue detection",
        "Operational resilience and stability"
      ]}
      relatedServices={[
        { title: "Service Improvement", slug: "service-improvement" },
        { title: "Continuous Improvement", slug: "continuous-improvement" },
        { title: "IT Service Management", slug: "itsm" }
      ]}
    />
  );
};

export default ServiceAssurance;
