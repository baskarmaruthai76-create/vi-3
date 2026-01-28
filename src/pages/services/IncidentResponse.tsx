import { ServicePageLayout } from "@/components/ServicePageLayout";
import incidentResponseImg from "@/assets/images/services/incident-response.jpg";

const IncidentResponse = () => {
  return (
    <ServicePageLayout
      title="Incident Response & Recovery"
      subtitle="Cybersecurity"
      description="24/7 incident response and business continuity planning. We provide rapid incident response capabilities and help organizations build resilience against cyber threats."
      image={incidentResponseImg}
      features={[
        { title: "Incident Response Planning", description: "Develop comprehensive IR plans and playbooks." },
        { title: "24/7 Response Team", description: "On-call incident response team for rapid containment." },
        { title: "Forensic Analysis", description: "Digital forensics and root cause analysis." },
        { title: "Business Continuity", description: "BCP development and testing programs." },
        { title: "Crisis Management", description: "Crisis communication and management support." },
        { title: "Recovery Services", description: "System recovery and restoration services." }
      ]}
      keyBenefits={["Rapid response", "Minimized impact", "Expert support", "Recovery assurance", "Lessons learned"]}
      relatedServices={[
        { title: "Threat Detection", slug: "threat-detection" },
        { title: "Disaster Recovery", slug: "disaster-recovery" },
        { title: "Enterprise Security", slug: "enterprise-security" }
      ]}
    />
  );
};

export default IncidentResponse;
