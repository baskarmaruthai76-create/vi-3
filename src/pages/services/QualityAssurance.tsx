import { ServicePageLayout } from "@/components/ServicePageLayout";
import qualityAssuranceImg from "@/assets/images/quality-assurance.jpg";

const QualityAssurance = () => {
  return (
    <ServicePageLayout
      title="Quality Assurance"
      subtitle="Excellence in Delivery"
      description="Quality Assurance (QA) and Audit in IT focus on ensuring that IT systems, processes, and services meet defined standards, requirements, and compliance obligations. We implement intelligent, automated, and continuous validation to ensure high-quality, secure, and compliant systems."
      image={qualityAssuranceImg}
      features={[
        {
          title: "AI-Driven Testing & Validation",
          description: "Automated identification of defects, performance bottlenecks, and security vulnerabilities."
        },
        {
          title: "Continuous Quality Assurance",
          description: "Integrated QA throughout the development lifecycle with real-time monitoring and feedback."
        },
        {
          title: "Automated Compliance Auditing",
          description: "Continuous checks for regulatory standards, policies, and industry best practices."
        },
        {
          title: "Predictive Quality Analytics",
          description: "Using data and AI to forecast potential system failures and quality risks."
        },
        {
          title: "Integrated DevOps & DevSecOps Alignment",
          description: "QA and audit embedded into CI/CD pipelines for faster, safer releases."
        },
        {
          title: "Digital Twins for Testing",
          description: "Virtual replicas of systems to simulate scenarios, detect issues, and optimize performance before deployment."
        }
      ]}
      keyBenefits={[
        "Reduced defect rates",
        "Faster time to market",
        "Regulatory compliance",
        "Improved system reliability",
        "Lower testing costs",
        "Enhanced customer satisfaction"
      ]}
      additionalSections={[
        {
          title: "Enhanced Reporting & Governance",
          content: "Real-time dashboards, traceability, and audit trails for transparency and accountability. Our QA and audit approach enables resilient, secure, and high-performing systems."
        },
        {
          title: "Security Testing",
          content: "Comprehensive security testing including penetration testing, vulnerability assessments, and code reviews to ensure your applications are protected against threats."
        }
      ]}
      relatedServices={[
        { title: "Application Security", slug: "application-security" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Project Management", slug: "project-management" }
      ]}
    />
  );
};

export default QualityAssurance;
