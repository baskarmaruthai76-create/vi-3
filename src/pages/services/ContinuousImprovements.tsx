import { ServicePageLayout } from "@/components/ServicePageLayout";
import continuousServiceImprovementImg from "@/assets/services/continuous-improvement-service.png";

const ContinuousImprovement = () => {
  return (
    <ServicePageLayout
      title="Continuous Improvement"
      subtitle="Optimize. Adapt. Evolve."
      description="A structured, data-driven approach to continuously enhance processes, systems, and performance across your organization."
      image={continuousServiceImprovementImg}
      features={[
        {
          title: "Process Assessment",
          description: "Identify inefficiencies, bottlenecks, and improvement opportunities."
        },
        {
          title: "Performance Metrics",
          description: "Define KPIs and measurable outcomes for continuous tracking."
        },
        {
          title: "Feedback Loops",
          description: "Continuous feedback from systems, teams, and users."
        },
        {
          title: "Incremental Optimization",
          description: "Small, iterative improvements with measurable impact."
        },
        {
          title: "Automation Enablement",
          description: "Automate repetitive tasks to improve efficiency and consistency."
        },
        {
          title: "Continuous Monitoring",
          description: "Real-time insights to ensure sustained improvement."
        }
      ]}
      keyBenefits={[
        "Operational efficiency",
        "Reduced costs",
        "Higher quality outcomes",
        "Faster adaptation to change",
        "Sustainable growth"
      ]}
      relatedServices={[
        { title: "Service Improvement", slug: "service-improvement" },
        { title: "DevOps", slug: "devops" },
        { title: "Cloud Optimization", slug: "cloud-optimization" }
      ]}
    />
  );
};

export default ContinuousImprovement;
