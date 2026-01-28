import { ServicePageLayout } from "@/components/ServicePageLayout";
import staffManagementImg from "@/assets/images/staff-management.jpg";

const StaffManagement = () => {
  return (
    <ServicePageLayout
      title="Staff Management"
      subtitle="IT Workforce Solutions"
      description="Staff management in IT involves organizing, leading, and supporting IT professionals to ensure effective delivery of technology services and projects. We focus on intelligent, flexible, and data-driven workforce planning to meet the demands of modern technology environments."
      image={staffManagementImg}
      features={[
        {
          title: "AI-Driven Talent Acquisition",
          description: "Automated candidate sourcing, screening, and matching based on skills, experience, and cultural fit."
        },
        {
          title: "Dynamic Workforce Planning",
          description: "Predictive models for staffing needs based on project demand, skill gaps, and business growth."
        },
        {
          title: "Skill Development & Continuous Learning",
          description: "Personalized learning paths and upskilling programs powered by AI analytics."
        },
        {
          title: "Remote & Hybrid Workforce Management",
          description: "Tools to manage distributed teams effectively, ensuring collaboration and productivity."
        },
        {
          title: "Performance Monitoring & Analytics",
          description: "Data-driven insights into employee productivity, engagement, and skill utilization."
        },
        {
          title: "Diversity, Equity & Inclusion (DEI)",
          description: "AI-assisted recruitment and management to ensure fair and inclusive staffing practices."
        }
      ]}
      keyBenefits={[
        "Optimized talent acquisition",
        "Improved workforce productivity",
        "Reduced hiring costs",
        "Better skill utilization",
        "Enhanced employee engagement",
        "Flexible staffing models"
      ]}
      additionalSections={[
        {
          title: "Flexible Staffing Models",
          content: "Integration of full-time employees, contractors, freelancers, and gig talent to meet evolving business needs. We help you build agile teams that can scale with project requirements."
        },
        {
          title: "IT Staff Augmentation",
          content: "Access to specialized IT professionals for short-term projects or long-term engagements. Our staff augmentation services help you fill skill gaps quickly without the overhead of permanent hiring."
        }
      ]}
      relatedServices={[
        { title: "Project Management", slug: "project-management" },
        { title: "Digital Transformation", slug: "digital-transformation" },
        { title: "Managed Services", slug: "managed-services" }
      ]}
    />
  );
};

export default StaffManagement;
