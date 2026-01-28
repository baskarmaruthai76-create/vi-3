import { ServicePageLayout } from "@/components/ServicePageLayout";
import serviceDeskImg from "@/assets/services/service-desk.jpg";

const ITServiceDesk = () => {
  return (
    <ServicePageLayout
      title="IT Service Desk"
      subtitle="Management Services"
      description="Dedicated IT service desk providing L1, L2, and L3 support with intelligent automation and proactive issue resolution."
      image={serviceDeskImg}
      features={[
        { title: "Tiered Support", description: "L1, L2, and L3 support with clear escalation paths." },
        { title: "24/7 Operations", description: "Round-the-clock support with global coverage." },
        { title: "AI Chatbots", description: "Intelligent virtual agents for instant assistance." },
        { title: "Remote Support", description: "Secure remote desktop and troubleshooting tools." },
        { title: "Asset Management", description: "IT asset tracking and lifecycle management." },
        { title: "User Onboarding", description: "Streamlined user provisioning and offboarding." }
      ]}
      keyBenefits={["Reduced wait times", "Higher first-call resolution", "Improved productivity", "Cost savings", "User satisfaction"]}
      relatedServices={[
        { title: "ITSM", slug: "itsm" },
        { title: "Service Desk", slug: "service-desk" },
        { title: "Managed Services", slug: "managed-services" }
      ]}
    />
  );
};

export default ITServiceDesk;
