import { ServicePageLayout } from "@/components/ServicePageLayout";
import businessContinuityImg from "@/assets/services/business-continuity.jpg";

const BusinessContinuity = () => {
  return (
    <ServicePageLayout
      title="Business Continuity"
      subtitle="Enterprise Services"
      description="Comprehensive business continuity planning and disaster recovery services to ensure your organization can maintain operations during disruptions. We help build resilient IT infrastructure and recovery capabilities."
      image={businessContinuityImg}
      features={[
        { title: "BCP Development", description: "Business Continuity Plan development and documentation." },
        { title: "Risk Assessment", description: "Business impact analysis and risk assessment." },
        { title: "DR Strategy", description: "Disaster recovery strategy and architecture design." },
        { title: "Recovery Testing", description: "Regular DR testing and validation exercises." },
        { title: "Crisis Management", description: "Crisis communication and incident management procedures." },
        { title: "Resilience Planning", description: "IT resilience and high availability architecture." }
      ]}
      keyBenefits={["Operational resilience", "Minimized downtime", "Reduced financial impact", "Regulatory compliance", "Stakeholder confidence"]}
      relatedServices={[
        { title: "Disaster Recovery", slug: "disaster-recovery" },
        { title: "Backup & Restore", slug: "backup-restore" },
        { title: "Incident Response", slug: "incident-response" }
      ]}
    />
  );
};

export default BusinessContinuity;
