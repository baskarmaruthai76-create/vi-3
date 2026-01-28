import { ServicePageLayout } from "@/components/ServicePageLayout";
import cybersecurityImg from "@/assets/images/cybersecurity.jpg";

const Cybersecurity = () => {
  return (
    <ServicePageLayout
      title="Cybersecurity & Resilience"
      subtitle="Defense-in-Depth Protection"
      description="We implement a 'Defense-in-Depth' strategy, ensuring that security is a foundation, not an afterthought. From Zero Trust architecture to quantum-safe encryption, we provide complete protection for your digital assets."
      image={cybersecurityImg}
      features={[
        {
          title: "Zero Trust Implementation",
          description: "We move your business away from perimeter-based security to a model where every user and device must be continuously verified, implementing strict identity verification for every access request."
        },
        {
          title: "CNAPP (Cloud-Native Application Protection)",
          description: "We provide a unified 'Code-to-Cloud' security approach with continuous monitoring of cloud configurations to fix misconfigurations and compliance drifts."
        },
        {
          title: "CSPM (Cloud Security Posture Management)",
          description: "Continuous monitoring of cloud configurations to identify and fix misconfigurations, compliance drifts, and security vulnerabilities across your cloud environment."
        },
        {
          title: "CWPP (Cloud Workload Protection)",
          description: "Protecting workloads across VMs, containers, and serverless functions during runtime with real-time threat detection and response."
        },
        {
          title: "CIEM (Cloud Identity Entitlement Management)",
          description: "Managing cloud identities and permissions to enforce the principle of least privilege across all cloud services and resources."
        },
        {
          title: "Managed Detection & Response (MDR)",
          description: "24/7 threat hunting and incident response to identify, isolate, and neutralize cyberattacks like ransomware before they spread through your organization."
        },
        {
          title: "Quantum-Safe Cryptography",
          description: "We audit your current encryption and help you migrate to 'Post-Quantum' standards to protect your data against future quantum-enabled hacks."
        },
        {
          title: "Security Operations Center (SOC)",
          description: "AI-powered threat detection with machine learning analyzing massive data streams to identify anomalies, zero-day threats, and advanced persistent attacks."
        }
      ]}
      keyBenefits={[
        "AI-driven threat detection and real-time response",
        "Continuous identity verification with Zero Trust",
        "Automated security compliance and governance",
        "Protection against current and future threats",
        "24/7 security monitoring and incident response",
        "Quantum-resilient encryption strategies"
      ]}
      additionalSections={[
        {
          title: "Extended Detection and Response (XDR)",
          content: "Unified visibility and correlation across endpoints, networks, cloud, and applications. Our XDR solution provides comprehensive threat intelligence, automated remediation, and real-time security orchestration to protect your entire digital ecosystem."
        },
        {
          title: "Security Governance and Compliance",
          content: "Continuous risk assessment, policy enforcement, and audit readiness. We help you maintain compliance with industry standards and regulations while implementing robust security governance frameworks that scale with your organization."
        }
      ]}
      relatedServices={[
        { title: "Managed Services", slug: "managed-services" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "Quantum Computing", slug: "quantum-computing" }
      ]}
    />
  );
};

export default Cybersecurity;
