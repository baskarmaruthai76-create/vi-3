import { ServicePageLayout } from "@/components/ServicePageLayout";
import agenticAIImg from "@/assets/images/agentic-ai.jpg";

const AgenticAI = () => {
  return (
    <ServicePageLayout
      title="Agentic AI & AI Agents"
      subtitle="Autonomous Intelligence"
      description="Agentic AI refers to artificial intelligence systems that can act autonomously to achieve goals. Unlike traditional AI that only responds to direct instructions, our agentic AI solutions can plan, make decisions, take actions, and adapt based on feedback from the environment."
      image={agenticAIImg}
      features={[
        {
          title: "Goal-Driven Autonomy",
          description: "Agents that can plan, prioritize, and execute multi-step objectives with minimal human guidance."
        },
        {
          title: "Multi-Agent Collaboration",
          description: "Specialized agents communicate and coordinate to solve complex problems efficiently."
        },
        {
          title: "Advanced Reasoning & Memory",
          description: "Long-term memory, reflection, and adaptive learning enable better decision-making over time."
        },
        {
          title: "Tool & System Integration",
          description: "Agents seamlessly use APIs, applications, databases, and cloud services to take real-world actions."
        },
        {
          title: "Context & Intent Awareness",
          description: "Deep understanding of user intent, business context, and real-time data for relevant responses."
        },
        {
          title: "Human-AI Collaboration",
          description: "Adjustable autonomy with human oversight, feedback, and explainability for safe deployment."
        }
      ]}
      keyBenefits={[
        "Autonomous task execution",
        "Complex problem solving",
        "Reduced manual intervention",
        "Scalable AI operations",
        "Cross-domain intelligence",
        "Enterprise-grade security"
      ]}
      additionalSections={[
        {
          title: "Multi-Agent Ecosystems",
          content: "Networks of specialized agents that collaborate, negotiate, and coordinate to achieve complex objectives. Our multi-agent systems enable collective intelligence for solving problems beyond the capability of single agents."
        },
        {
          title: "Cross-Platform & Edge Deployment",
          content: "Agents operate across cloud, on-premise, and edge environments for low-latency responses. This enables real-time decision-making across business, engineering, cybersecurity, and operations seamlessly."
        }
      ]}
      relatedServices={[
        { title: "AI", slug: "artificial-intelligence" },
        { title: "AI Governance", slug: "ai-governance" },
        { title: "Workflow Automation", slug: "workflow-automation" }
      ]}
    />
  );
};

export default AgenticAI;
