import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiRiskImg from "@/assets/services/ai-risk-mitigation.jpg";

const AIRiskMitigation = () => {
  return (
    <ServicePageLayout
      title="AI Risk Mitigation"
      subtitle="Safe & Responsible AI Deployment"
      description="AI Risk Mitigation focuses on identifying, assessing, and managing risks associated with artificial intelligence systems. We implement comprehensive strategies to ensure AI systems are safe, ethical, secure, and aligned with organizational values and regulatory requirements."
      image={aiRiskImg}
      features={[
        {
          title: "AI Risk Assessment & Modeling",
          description: "Systematic evaluation of AI systems for potential technical, ethical, security, and operational risks."
        },
        {
          title: "Bias Detection & Fairness Testing",
          description: "Advanced techniques to identify and mitigate algorithmic bias ensuring fair and equitable AI outcomes."
        },
        {
          title: "AI Security & Adversarial Defense",
          description: "Protection against adversarial attacks, data poisoning, and model extraction threats."
        },
        {
          title: "Explainability & Transparency",
          description: "Implementation of explainable AI (XAI) techniques to make AI decisions interpretable and accountable."
        },
        {
          title: "Regulatory Compliance Management",
          description: "Alignment with AI regulations including EU AI Act, NIST AI RMF, and industry-specific requirements."
        },
        {
          title: "Continuous Monitoring & Incident Response",
          description: "Real-time monitoring of AI systems with automated alerting and rapid incident response protocols."
        }
      ]}
      keyBenefits={[
        "Reduced liability and legal risks",
        "Enhanced trust and reputation",
        "Regulatory compliance assurance",
        "Improved model reliability",
        "Ethical AI deployment",
        "Proactive risk prevention"
      ]}
      additionalSections={[
        {
          title: "AI Safety Frameworks",
          content: "Implementation of robust AI safety frameworks including fail-safes, human oversight mechanisms, and rollback procedures. We ensure AI systems operate within defined safety boundaries with continuous validation."
        },
        {
          title: "Ethical AI Principles",
          content: "Development and enforcement of ethical AI principles covering privacy, fairness, accountability, and transparency. Our approach ensures AI systems align with human values and societal expectations."
        },
        {
          title: "Model Governance & Lifecycle Management",
          content: "End-to-end governance covering model development, validation, deployment, and retirement. Comprehensive documentation, version control, and audit trails for complete traceability."
        }
      ]}
      relatedServices={[
        { title: "AI Governance", slug: "ai-governance" },
        { title: "Cybersecurity & Resilience", slug: "cybersecurity" },
        { title: "Audit & Reporting", slug: "audit-reporting" }
      ]}
    />
  );
};

export default AIRiskMitigation;