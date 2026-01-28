import { ServicePageLayout } from "@/components/ServicePageLayout";
import serviceDeliveryImg from "@/assets/services/service-delivery.jpg";

const ServiceDelivery = () => {
  return (
    <ServicePageLayout
      title="Service Delivery"
      subtitle="Digital Transformation"
      description="End-to-end IT service delivery excellence with ITIL frameworks, SLA management, and operational efficiency."
      image={serviceDeliveryImg}
      features={[
        { title: "Service Design", description: "IT service design aligned to business needs." },
        { title: "Service Transition", description: "Smooth service transition and change management." },
        { title: "Service Operations", description: "Day-to-day service operations and support." },
        { title: "SLA Management", description: "Service level agreement monitoring and compliance." },
        { title: "Performance Metrics", description: "KPI tracking and performance dashboards." },
        { title: "Continuous Improvement", description: "ITIL-based service improvement programs." }
      ]}
      keyBenefits={["Service excellence", "SLA compliance", "Operational efficiency", "Customer satisfaction", "Process maturity"]}
      relatedServices={[
        { title: "Managed Services", slug: "managed-services" },
        { title: "Service Improvement", slug: "service-improvement" },
        { title: "Quality Assurance", slug: "quality-assurance" }
      ]}
    />
  );
};

export default ServiceDelivery;
