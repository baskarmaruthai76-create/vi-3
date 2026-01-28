import { ServicePageLayout } from "@/components/ServicePageLayout";
import serviceIprovementImg from "@/assets/services/service-improvement-service.jpg";

const ServiceImprovement = () => {
  return (
    <ServicePageLayout
      title="Service Improvement"
      subtitle="Deliver Better. Perform Stronger."
      description="Enhancing service quality, reliability, and customer satisfaction through structured service improvement practices."
      image={serviceIprovementImg}
      features={[
        {
          title: "Service Performance Review",
          description: "Analyze current service delivery and performance metrics."
        },
        {
          title: "Root Cause Analysis",
          description: "Identify underlying issues impacting service quality."
        },
        {
          title: "Service Optimization",
          description: "Improve reliability, availability, and responsiveness."
        },
        {
          title: "Customer Experience Enhancement",
          description: "Align services with customer needs and expectations."
        },
        {
          title: "Operational Resilience",
          description: "Reduce incidents and improve service stability."
        },
        {
          title: "Continuous Service Monitoring",
          description: "Proactive monitoring to prevent disruptions."
        }
      ]}
      keyBenefits={[
        "Improved service quality",
        "Higher customer satisfaction",
        "Reduced downtime",
        "Better SLA compliance",
        "Operational excellence"
      ]}
      relatedServices={[
        { title: "Continuous Improvement", slug: "continuous-improvement" },
        { title: "IT Service Management", slug: "itsm" },
        { title: "DevSecOps", slug: "devsecops" }
      ]}
    />
  );
};

export default ServiceImprovement;
