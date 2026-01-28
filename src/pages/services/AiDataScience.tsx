import { ServicePageLayout } from "@/components/ServicePageLayout";
import aiDataScienceImg from "@/assets/images/ai-data-science.jpg";

const AIDataScience = () => {
  return (
    <ServicePageLayout
      title="AI "
      subtitle="artificial-intelligence"
      description="We build the high-performance pipelines that turn raw data into competitive intelligence. From enterprise AI stacks to predictive analytics, we help you harness the power of artificial intelligence to transform your business."
      image={aiDataScienceImg}
      features={[
        {
          title: "AI Stack Engineering",
          description: "We design and deploy the specialized infrastructure (GPU orchestration, Vector Databases) required to run Large Language Models (LLMs) and custom AI applications at enterprise scale."
        },
        {
          title: "Machine Learning Operations (MLOps)",
          description: "We automate the lifecycle of your AI models—from training and testing to deployment and version control—ensuring reproducibility and scalability."
        },
        {
          title: "Predictive Analytics Pipelines",
          description: "We build data lakes and processing engines that help you forecast market trends, customer behaviour, and operational risks with high accuracy."
        },
        {
          title: "Secure Data Science Workbenches",
          description: "Providing your data scientists with isolated, secure, and high-performance environments to experiment without risking production data."
        },
        {
          title: "Agentic AI Systems",
          description: "Autonomous AI agents that can plan, reason, use tools, and achieve goals with minimal human supervision, enabling intelligent automation at scale."
        },
        {
          title: "Multi-Agent Collaboration",
          description: "Multiple AI agents collaborating, negotiating, and coordinating to solve complex problems through collective intelligence."
        },
        {
          title: "Multimodal Intelligence",
          description: "AI that seamlessly understands and generates text, images, audio, video, and structured data together for comprehensive insights."
        },
        {
          title: "AI Governance Framework",
          description: "Built-in ethics, transparency, explainability, and compliance by design ensuring trustworthy and governed AI systems."
        }
      ]}
      keyBenefits={[
        "End-to-end AI infrastructure deployment",
        "Automated ML model lifecycle management",
        "Real-time predictive analytics capabilities",
        "Secure experimentation environments",
        "Human-AI collaboration frameworks",
        "Trustworthy and governed AI systems"
      ]}
      additionalSections={[
        {
          title: "Agentic AI",
          content: "Agentic AI refers to artificial intelligence systems that can act autonomously to achieve goals. Unlike traditional AI that only responds to direct instructions, agentic AI can plan, make decisions, take actions, and adapt based on feedback from its environment. These systems combine reasoning, memory, and tools to perform multi-step tasks, enabling intelligent automation across your organization."
        },
        {
          title: "AI Agents",
          content: "An AI agent is a software system that can perceive its environment, make decisions, and take actions to achieve specific goals. Our AI agents feature goal-driven autonomy, advanced reasoning with memory, tool and system integration, context awareness, and security governance—enabling scalable, intelligent, and trustworthy automation across industries."
        },
        {
          title: "Prompt Engineering",
          content: "We implement dynamic and self-optimizing prompts that automatically adapt based on user intent, task complexity, and model feedback. Our prompt engineering includes agent-driven prompt generation, contextual and memory-based prompting, multi-modal prompting, and embedded governance for reliable and powerful AI systems."
        }
      ]}
      relatedServices={[
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Quantum Computing", slug: "quantum-computing" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }
      ]}
    />
  );
};

export default AIDataScience;
