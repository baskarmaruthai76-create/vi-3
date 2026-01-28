import { ServicePageLayout } from "@/components/ServicePageLayout";
import applicationSecurityImg from "@/assets/images/application-security.jpg";

const ApplicationSecurity = () => {
  return (
    <ServicePageLayout
      title="Application Security"
      subtitle="Secure Software Development"
      description="Application security is the practice of protecting software applications from threats, vulnerabilities, and cyberattacks throughout their development and usage. We implement proactive, intelligent, and continuous security embedded across the application lifecycle."
      image={applicationSecurityImg}
      features={[
        {
          title: "Security by Design (DevSecOps)",
          description: "Automated security testing, policy enforcement, and compliance integrated into CI/CD pipelines."
        },
        {
          title: "AI-Driven Threat Detection",
          description: "Machine learning to identify vulnerabilities, anomalies, and zero-day attacks in real time."
        },
        {
          title: "Runtime Application Self-Protection (RASP)",
          description: "Applications that detect and block attacks while running, providing real-time protection."
        },
        {
          title: "Zero Trust Application Security",
          description: "Continuous identity verification and least-privilege access controls for all application components."
        },
        {
          title: "API & Microservices Security",
          description: "Advanced protection for APIs, containers, and service-to-service communication."
        },
        {
          title: "Software Supply Chain Security",
          description: "Securing code, dependencies, and build pipelines against tampering and vulnerabilities."
        }
      ]}
      keyBenefits={[
        "Reduced vulnerability exposure",
        "Faster security issue resolution",
        "Compliance with security standards",
        "Protected customer data",
        "Secure development practices",
        "Continuous security monitoring"
      ]}
      additionalSections={[
        {
          title: "Automated Compliance & Governance",
          content: "Continuous auditing, risk scoring, and policy enforcement ensure your applications meet industry standards and regulatory requirements throughout their lifecycle."
        },
        {
          title: "Secure Coding Practices",
          content: "We implement measures such as secure coding, authentication, encryption, and regular testing to prevent unauthorized access, data breaches, and other security risks."
        }
      ]}
      relatedServices={[
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Quality Assurance", slug: "quality-assurance" }
      ]}
    />
  );
};

export default ApplicationSecurity;
