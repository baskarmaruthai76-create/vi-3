import { ServicePageLayout } from "@/components/ServicePageLayout";
import securityAssesmentImg from "@/assets/services/security-assessment.jpg";

const SecurityAssessment = () => {
  return (
    <ServicePageLayout
      title="Security Assessment"
      subtitle="Comprehensive Security Evaluation"
      description="Security Assessment services provide in-depth evaluation of your organization's security posture through systematic testing, analysis, and validation. We identify vulnerabilities, assess risks, and provide actionable recommendations to strengthen your defenses against evolving cyber threats."
      image={securityAssesmentImg}
      features={[
        {
          title: "Penetration Testing",
          description: "Ethical hacking simulations targeting networks, applications, cloud infrastructure, and APIs to identify exploitable vulnerabilities."
        },
        {
          title: "Vulnerability Assessment",
          description: "Automated and manual scanning of systems, applications, and networks to discover security weaknesses."
        },
        {
          title: "Security Posture Analysis",
          description: "Comprehensive evaluation of security controls, policies, and configurations against industry standards and best practices."
        },
        {
          title: "Risk Analysis & Prioritization",
          description: "Quantitative and qualitative risk assessment with prioritized remediation roadmaps based on business impact."
        },
        {
          title: "Compliance Assessment",
          description: "Evaluation against regulatory frameworks including ISO 27001, SOC 2, NIST, PCI DSS, HIPAA, and GDPR."
        },
        {
          title: "Cloud Security Assessment",
          description: "Specialized evaluation of cloud environments including AWS, Azure, and GCP for misconfigurations and vulnerabilities."
        }
      ]}
      keyBenefits={[
        "Proactive threat identification",
        "Regulatory compliance validation",
        "Reduced security incidents",
        "Enhanced security awareness",
        "Prioritized remediation plans",
        "Third-party risk management"
      ]}
      additionalSections={[
        {
          title: "Red Team Operations",
          content: "Advanced adversary simulation exercises mimicking real-world attack scenarios. Our red team operations test detection and response capabilities while identifying gaps in your security strategy."
        },
        {
          title: "Social Engineering Testing",
          content: "Evaluation of human factors in security through phishing simulations, physical security testing, and social engineering campaigns. Comprehensive training recommendations to strengthen the human firewall."
        },
        {
          title: "Security Architecture Review",
          content: "In-depth analysis of security architecture design, segmentation strategies, access controls, and defense-in-depth implementation. Recommendations for security optimization and resilience enhancement."
        },
        {
          title: "Continuous Security Validation",
          content: "Ongoing security testing programs with scheduled assessments, continuous monitoring, and breach simulation exercises. Real-time reporting dashboards and executive briefings for complete visibility."
        }
      ]}
      relatedServices={[
        { title: "Vulnerability Scanning", slug: "vulnerability-scanning" },
        { title: "Cybersecurity & Resilience", slug: "cybersecurity" },
        { title: "Audit & Reporting", slug: "audit-reporting" }
      ]}
    />
  );
};

export default SecurityAssessment;