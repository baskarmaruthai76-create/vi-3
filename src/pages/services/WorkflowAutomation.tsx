import { ServicePageLayout } from "@/components/ServicePageLayout";
import workflowAutomationImg from "@/assets/images/workflow-automation.jpg";

const WorkflowAutomation = () => {
  return (
    <ServicePageLayout
      title="AI Workflow Automation"
      subtitle="Intelligent Process Automation"
      description="AI workflow automation uses artificial intelligence to automate and optimize business processes and tasks. We combine AI technologies such as machine learning, natural language processing, and intelligent agents to analyze data, make decisions, and perform actions with minimal human intervention."
      image={workflowAutomationImg}
      features={[
        {
          title: "Agentic & Multi-Agent Systems",
          description: "AI agents that collaborate, delegate tasks, and achieve goals with minimal human input."
        },
        {
          title: "Context-Aware Automation",
          description: "Workflows that understand intent, data context, and business rules in real time."
        },
        {
          title: "Self-Learning Processes",
          description: "Continuous learning from outcomes to optimize workflows automatically over time."
        },
        {
          title: "Human-in-the-Loop Automation",
          description: "Balanced collaboration where AI handles routine tasks while humans provide oversight when needed."
        },
        {
          title: "End-to-End Orchestration",
          description: "Seamless integration across applications, cloud platforms, APIs, and data sources."
        },
        {
          title: "Built-in Governance & Security",
          description: "Automated compliance, auditability, and ethical AI controls throughout all workflows."
        }
      ]}
      keyBenefits={[
        "Reduced manual effort",
        "Faster process execution",
        "Fewer errors and exceptions",
        "Improved operational efficiency",
        "Scalable automation",
        "Better resource utilization"
      ]}
      additionalSections={[
        {
          title: "Event-Driven Automation",
          content: "Automated responses triggered by real-time events across applications, infrastructure, and networks. Our event-driven approach enables immediate action based on changing conditions."
        },
        {
          title: "Cross-Platform Orchestration",
          content: "Unified automation across cloud, edge, on-premise, and hybrid environments. We help you create cohesive automated workflows regardless of where your systems reside."
        }
      ]}
      relatedServices={[
        { title: "Agentic AI", slug: "agentic-ai" },
        { title: "AIOps", slug: "aiops" },
        { title: "Digital Transformation", slug: "digital-transformation" }
      ]}
    />
  );
};

export default WorkflowAutomation;
