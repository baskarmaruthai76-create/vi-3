import { ServicePageLayout } from "@/components/ServicePageLayout";
import securityAssessmentImg from "@/assets/services/security-assessment.jpg";

const SecurityAssessment = () => {
  return (
    <ServicePageLayout
      title="Security Assessment"
      subtitle="Security & Quality"
      description="Comprehensive security evaluations including penetration testing, risk analysis, and compliance assessments."
      image={securityAssessmentImg}
      features={[
        { title: "Security Audit", description: "Comprehensive security posture assessment." },
        { title: "Risk Analysis", description: "Threat modeling and risk assessment." },
        { title: "Compliance Assessment", description: "Regulatory and standards compliance evaluation." },
        { title: "Gap Analysis", description: "Security gap identification and remediation roadmap." },
        { title: "Architecture Review", description: "Security architecture review and recommendations." },
        { title: "Red Team Assessment", description: "Adversarial security testing and simulation." }
      ]}
      keyBenefits={["Risk visibility", "Compliance assurance", "Remediation roadmap", "Security posture", "Expert insights"]}
      relatedServices={[
        { title: "VAPT", slug: "vapt" },
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "GRC", slug: "grc" }
      ]}
    />
  );
};

export default SecurityAssessment;
