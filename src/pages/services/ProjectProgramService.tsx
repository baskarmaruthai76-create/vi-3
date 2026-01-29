import { ServicePageLayout } from "@/components/ServicePageLayout";
import projectProgramServiceImg from "@/assets/services/project-program-service.jpg";

const ProjectProgramService = () => {
  return (
    <ServicePageLayout
      title="Project & Program Service"
      subtitle="Business Services"
      description="Comprehensive project and program management services to deliver complex initiatives on time, within budget, and aligned with strategic objectives. We provide experienced project managers and proven methodologies."
      image={projectProgramServiceImg}
      features={[
        { title: "Project Management", description: "End-to-end project management for technology initiatives." },
        { title: "Program Management", description: "Coordination of multiple related projects for strategic goals." },
        { title: "Agile Delivery", description: "Agile and Scrum-based delivery for iterative development." },
        { title: "Risk Management", description: "Proactive risk identification, assessment, and mitigation." },
        { title: "Stakeholder Management", description: "Effective communication and stakeholder engagement." },
        { title: "Change Management", description: "Organizational change management for smooth transitions." }
      ]}
      keyBenefits={["On-time delivery", "Budget adherence", "Quality outcomes", "Risk mitigation", "Stakeholder satisfaction"]}
      relatedServices={[
        { title: "PMO", slug: "pmo" },
        { title: "Digital Transformation", slug: "digital-transformation" },
        { title: "Process Improvement", slug: "process-improvement" }
      ]}
    />
  );
};

export default ProjectProgramService;
