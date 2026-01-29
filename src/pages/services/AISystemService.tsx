import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiSystemServiceImg from "@/assets/services/ai-system-service.jpg";

const AISystemService = () => {
  return (
    <ServicePageLayout
      title="AI System Service"
      subtitle="AI Automation"
      description="Enterprise AI system design, deployment, and management services. We help organizations build and maintain robust AI systems that integrate seamlessly with existing infrastructure and deliver measurable business outcomes."
      image={aiSystemServiceImg}
      features={[
        { title: "AI Architecture Design", description: "Custom AI system architecture tailored to your business needs." },
        { title: "Model Deployment", description: "Seamless deployment of ML models to production environments." },
        { title: "System Integration", description: "Integration of AI systems with existing enterprise applications." },
        { title: "Performance Optimization", description: "Continuous optimization of AI system performance and efficiency." },
        { title: "Monitoring & Maintenance", description: "24/7 monitoring and proactive maintenance of AI systems." },
        { title: "Scalability Planning", description: "Future-proof AI infrastructure that scales with your growth." }
      ]}
      keyBenefits={["Accelerated AI adoption", "Reduced operational complexity", "Improved model performance", "Enterprise-grade reliability", "Cost-effective scaling"]}
      relatedServices={[
        { title: "Agentic AI", slug: "agentic-ai" },
        { title: "AI Workflow Automation", slug: "workflow-automation" },
        { title: "AIOps", slug: "aiops" }
      ]}
    />
  );
};

export default AISystemService;
