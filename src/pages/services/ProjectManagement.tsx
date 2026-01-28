import { ServicePageLayout } from "@/components/ServicePageLayout";
import projectManagementImg from "@/assets/images/project-management.jpg";

const ProjectManagement = () => {
  return (
    <ServicePageLayout
      title="Project Management"
      subtitle="Intelligent Delivery"
      description="Project management is the practice of planning, organizing, executing, and controlling tasks to achieve specific goals within defined time, cost, and scope constraints. We leverage intelligent tools, automation, and data-driven decision-making to deliver projects faster, smarter, and more efficiently."
      image={projectManagementImg}
      features={[
        {
          title: "AI & Predictive Analytics",
          description: "Forecasting project risks, timelines, and resource needs with data-driven insights."
        },
        {
          title: "Automated Task Management",
          description: "Intelligent workflows, notifications, and prioritization to reduce manual tracking."
        },
        {
          title: "Collaboration & Virtual Workspaces",
          description: "Real-time coordination across distributed teams and stakeholders."
        },
        {
          title: "Agile & Hybrid Methodologies",
          description: "Flexible frameworks that combine traditional and modern approaches for faster delivery."
        },
        {
          title: "Integrated Portfolio Management",
          description: "Unified oversight of multiple projects with performance metrics and KPIs."
        },
        {
          title: "Resource Optimization",
          description: "AI-driven allocation and monitoring of human, financial, and technological resources."
        }
      ]}
      keyBenefits={[
        "On-time project delivery",
        "Optimized resource allocation",
        "Reduced project risks",
        "Improved stakeholder visibility",
        "Enhanced team collaboration",
        "Data-driven decisions"
      ]}
      additionalSections={[
        {
          title: "Continuous Improvement & Learning",
          content: "Automated post-project analytics to identify lessons learned and optimize future projects. Our approach enables smarter, more adaptive, and outcome-focused project management aligned with organizational goals."
        },
        {
          title: "Multi-Framework Expertise",
          content: "Whether you use Agile, Waterfall, Scrum, or hybrid methodologies, our project management services adapt to your organization's preferred approach while introducing best practices for efficiency."
        }
      ]}
      relatedServices={[
        { title: "Staff Management", slug: "staff-management" },
        { title: "Digital Transformation", slug: "digital-transformation" },
        { title: "Quality Assurance", slug: "quality-assurance" }
      ]}
    />
  );
};

export default ProjectManagement;
