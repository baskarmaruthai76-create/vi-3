import { ServicePageLayout } from "@/components/ServicePageLayout";
import mergerImg from "@/assets/services/merger-acquisition.jpg";

const MergerAcquisition = () => {
  return (
    <ServicePageLayout
      title="Merger & Acquisition"
      subtitle="Strategic IT Integration & Transformation"
      description="Merger & Acquisition IT services provide comprehensive support for technology due diligence, integration planning, and post-merger transformation. We ensure seamless technology integration, maximize synergies, and minimize disruption during critical business combinations and divestitures."
      image={mergerImg}
      features={[
        {
          title: "IT Due Diligence",
          description: "Comprehensive technology assessment covering infrastructure, applications, security, compliance, and technical debt evaluation. "
        },
        {
          title: "Integration Strategy & Planning",
          description: "Development of detailed integration roadmaps covering systems, applications, data, infrastructure, and organizational change."
        },
        {
          title: "Systems Integration & Migration",
          description: "Execution of complex integrations including ERP, CRM, financial systems, and custom applications with minimal business disruption."
        },
        {
          title: "Data Consolidation & Migration",
          description: "Secure data migration, consolidation, and harmonization across disparate systems with data quality assurance."
        },
        {
          title: "Cybersecurity Integration",
          description: "Security assessment and integration including identity management, access controls, network security, and compliance alignment."
        },
        {
          title: "Infrastructure Rationalization",
          description: "Consolidation and optimization of IT infrastructure, data centers, cloud environments, and network infrastructure."
        }
      ]}
      keyBenefits={[
        "Reduced integration risks",
        "Faster time to value",
        "Cost synergy realization",
        "Minimized business disruption",
        "Enhanced security posture",
        "Improved operational efficiency"
      ]}
      additionalSections={[
        {
          title: "Pre-Transaction Support",
          content: "Technical due diligence and assessment services supporting buy-side and sell-side transactions. Technology valuation, risk assessment, integration complexity analysis, and synergy identification."
        },
        {
          title: "Day One Readiness",
          content: "Comprehensive preparation for Day One operations including critical system access, communication platforms, security controls, and essential business functions. Contingency planning and rollback procedures."
        },
        {
          title: "Application Portfolio Rationalization",
          content: "Analysis and optimization of combined application portfolios. Identification of redundancies, retirement candidates, and consolidation opportunities with ROI analysis and migration planning."
        },
        {
          title: "Organizational Change Management",
          content: "Change management programs addressing technology transitions, new processes, and organizational integration. Training, communication, and adoption strategies for successful transformation."
        },
        {
          title: "Divestiture & Carve-Out Support",
          content: "Specialized services for business divestitures including TSA planning, system separation, data extraction, and standalone IT establishment. Clean-room implementations and transition services."
        },
        {
          title: "Post-Merger Optimization",
          content: "Continuous optimization following integration including performance monitoring, cost optimization, process improvement, and technology modernization initiatives."
        }
      ]}
      relatedServices={[
        { title: "Project & Program Management", slug: "project-management" },
        { title: "Cloud Services", slug: "cloud-infrastructure" },
        { title: "Cybersecurity & Resilience", slug: "cybersecurity" }
      ]}
    />
  );
};

export default MergerAcquisition;