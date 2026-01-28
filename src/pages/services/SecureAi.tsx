import { ServicePageLayout } from "@/components/ServicePageLayout";
import secureAIImg from "@/assets/images/services/secure-ai.jpg";

const SecureAI = () => {
  return (
    <ServicePageLayout
      title="Secure AI Adoption"
      subtitle="Cybersecurity"
      description="AI security frameworks and responsible AI implementation. We help organizations adopt AI technologies securely while managing risks and ensuring ethical AI practices."
      image={secureAIImg}
      features={[
        { title: "AI Security Assessment", description: "Security assessment of AI/ML systems and models." },
        { title: "Responsible AI Framework", description: "Implement ethical AI guidelines and governance." },
        { title: "AI Model Security", description: "Protect AI models from adversarial attacks." },
        { title: "Data Privacy for AI", description: "Privacy-preserving AI and federated learning." },
        { title: "AI Compliance", description: "AI regulatory compliance and audit support." },
        { title: "Secure AI Operations", description: "Secure MLOps pipeline implementation." }
      ]}
      keyBenefits={["Secure AI adoption", "Risk management", "Ethical compliance", "Model protection", "Trust building"]}
      relatedServices={[
        { title: "AI Governance", slug: "ai-governance" },
        { title: "AI & Data Science", slug: "ai-data-science" },
        { title: "Enterprise Security", slug: "enterprise-security" }
      ]}
    />
  );
};

export default SecureAI;
