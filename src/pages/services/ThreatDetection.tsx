import { ServicePageLayout } from "@/components/ServicePageLayout";
import threatDetectionImg from "@/assets/services/threat-detection-service.jpg";

const ThreatDetection = () => {
  return (
    <ServicePageLayout
      title="Threat Detection & Response"
      subtitle="Cybersecurity"
      description="Advanced threat detection, SOC, and MDR services. We provide 24/7 threat monitoring and rapid response capabilities to protect your organization from cyber threats."
      image={threatDetectionImg}
      features={[
        { title: "Security Operations Center", description: "24/7 SOC services with expert analysts." },
        { title: "Managed Detection & Response", description: "MDR services for proactive threat hunting." },
        { title: "SIEM Implementation", description: "SIEM deployment and log management." },
        { title: "Threat Intelligence", description: "Actionable threat intelligence and analysis." },
        { title: "XDR Deployment", description: "Extended Detection and Response implementation." },
        { title: "Threat Hunting", description: "Proactive threat hunting and investigation." }
      ]}
      keyBenefits={["24/7 monitoring", "Rapid detection", "Expert analysis", "Threat intelligence", "Reduced dwell time"]}
      relatedServices={[
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "Incident Response", slug: "incident-response" },
        { title: "VAPT", slug: "vapt" }
      ]}
    />
  );
};

export default ThreatDetection;
