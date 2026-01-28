import { ServicePageLayout } from "@/components/ServicePageLayout";
import auditImg from "@/assets/services/audit-reporting.jpg";

const AuditReporting = () => {
  return (
    <ServicePageLayout
      title="Audit & Reporting"
      subtitle="Compliance & Accountability"
      description="Audit & Reporting services provide comprehensive compliance auditing, security reporting, and regulatory alignment capabilities. We deliver automated, continuous audit processes with detailed reporting to ensure transparency, accountability, and regulatory compliance across your IT operations."
      image={auditImg}
      features={[
        {
          title: "Automated Compliance Auditing",
          description: "Continuous monitoring and validation of compliance with SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, and other regulatory frameworks."
        },
        {
          title: "Security Audit & Assessment",
          description: "Comprehensive security audits covering infrastructure, applications, data, and processes with detailed findings and remediation plans."
        },
        {
          title: "Real-Time Reporting Dashboards",
          description: "Interactive dashboards providing real-time visibility into compliance status, security posture, and audit findings."
        },
        {
          title: "Audit Trail & Evidence Management",
          description: "Automated collection, storage, and management of audit evidence with complete traceability and tamper-proof logging."
        },
        {
          title: "Regulatory Change Management",
          description: "Continuous monitoring of regulatory changes with automated gap analysis and compliance impact assessment."
        },
        {
          title: "Executive Reporting & Analytics",
          description: "High-level executive reports with KPIs, trends, and strategic recommendations for governance and decision-making."
        }
      ]}
      keyBenefits={[
        "Simplified compliance management",
        "Reduced audit preparation time",
        "Enhanced transparency",
        "Risk-based prioritization",
        "Automated evidence collection",
        "Continuous compliance validation"
      ]}
      additionalSections={[
        {
          title: "Third-Party & Vendor Audits",
          content: "Comprehensive audit programs for third-party vendors and service providers. Assessment of vendor security controls, compliance status, and risk management practices with detailed scorecards and recommendations."
        },
        {
          title: "Internal Audit Programs",
          content: "Structured internal audit programs covering IT controls, change management, access controls, and operational procedures. Risk-based audit planning with automated control testing and exception management."
        },
        {
          title: "Certification Support",
          content: "End-to-end support for security certifications including ISO 27001, SOC 2, PCI DSS, and HITRUST. Gap analysis, remediation planning, documentation support, and audit readiness assessment."
        },
        {
          title: "Custom Reporting & Analytics",
          content: "Tailored reporting solutions aligned with organizational needs. Custom KPIs, metrics, and analytics frameworks with integration to existing BI and GRC platforms."
        }
      ]}
      relatedServices={[
        { title: "Quality Assurance & Testing", slug: "quality-assurance" },
        { title: "AI Governance", slug: "ai-governance" },
        { title: "Security Assessment", slug: "security-assessment" }
      ]}
    />
  );
};

export default AuditReporting;