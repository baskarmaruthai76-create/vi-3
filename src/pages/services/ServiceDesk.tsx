import { ServicePageLayout } from "@/components/ServicePageLayout";
import serviceDeskImg from "@/assets/services/service-desk.jpg";

const ServiceDesk = () => {
  return (
    <ServicePageLayout
      title="Service Desk"
      subtitle="Management Services"
      description="Enterprise IT service desk with multi-channel support, AI-powered ticket routing, and 24/7 user assistance."
      image={serviceDeskImg}
      features={[
        { title: "Multi-Channel Support", description: "Phone, email, chat, and self-service portal support." },
        { title: "AI-Powered Routing", description: "Intelligent ticket classification and auto-assignment." },
        { title: "Self-Service Portal", description: "User-friendly portal with knowledge base integration." },
        { title: "SLA Management", description: "Automated SLA tracking and escalation workflows." },
        { title: "Ticket Analytics", description: "Comprehensive reporting and trend analysis." },
        { title: "Integration Hub", description: "Seamless integration with ITSM and monitoring tools." }
      ]}
      keyBenefits={["24/7 availability", "Faster resolution", "Improved user satisfaction", "Cost efficiency", "Scalable support"]}
      relatedServices={[
        { title: "ITSM", slug: "itsm" },
        { title: "IT Service Desk", slug: "it-service-desk" },
        { title: "Enterprise Operation", slug: "enterprise-operation" }
      ]}
    />
  );
};

export default ServiceDesk;
