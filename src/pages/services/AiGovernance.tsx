import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiGovernanceImg from "@/assets/images/ai-governance.jpg";

const AIGovernance = () => {
  return (
    <ServicePageLayout
      title="AI Governance"
      subtitle="Responsible AI Development"
      description="AI Governance refers to the framework of policies, rules, and practices that guide the responsible development, deployment, and use of artificial intelligence. It ensures that AI systems are ethical, transparent, accountable, and aligned with legal and societal standards."
      image={aiGovernanceImg}
      features={[
        {
          title: "Built-in Governance by Design",
          description: "Ethics, safety, privacy, and compliance embedded directly into AI models, agents, and workflows from the start."
        },
        {
          title: "Continuous Risk Monitoring",
          description: "Real-time detection of bias, drift, misuse, and emerging risks using AI-driven oversight systems."
        },
        {
          title: "Automated Compliance & Auditability",
          description: "Machine-readable policies, automated controls, and continuous audit trails across the AI lifecycle."
        },
        {
          title: "Human-in-the-Loop Controls",
          description: "Adjustable autonomy, escalation mechanisms, and explainability for accountable decision-making."
        },
        {
          title: "Agent Governance & Orchestration",
          description: "Identity, access control, and behavior management for single and multi-agent systems."
        },
        {
          title: "Model Transparency & Explainability",
          description: "Advanced techniques to interpret decisions, reasoning paths, and outcomes for stakeholder trust."
        }
      ]}
      keyBenefits={[
        "Ethical AI deployment",
        "Regulatory compliance alignment",
        "Reduced bias and drift risks",
        "Transparent decision-making",
        "Secure and resilient AI systems",
        "Global regulatory alignment"
      ]}
      additionalSections={[
        {
          title: "Global Regulatory Alignment",
          content: "Adaptive governance frameworks that align with evolving international AI regulations and standards, ensuring your AI systems meet requirements across different jurisdictions."
        },
        {
          title: "Secure & Resilient AI Systems",
          content: "Protection against model theft, data poisoning, prompt injection, and adversarial attacks through comprehensive security measures integrated into your AI governance framework."
        }
      ]}
      relatedServices={[
        { title: "AI", slug: "artificial-intelligence" },
        { title: "Agentic AI", slug: "agentic-ai" },
        { title: "Cybersecurity", slug: "cybersecurity" }
      ]}
    />
  );
};

export default AIGovernance;
