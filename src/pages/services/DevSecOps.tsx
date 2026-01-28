import { ServicePageLayout } from "@/components/ServicePageLayout";
import devsecopsImg from "@/assets/images/devsecops.jpg";

const DevSecOps = () => {
  return (
    <ServicePageLayout
      title="DevSecOps Engineering"
      subtitle="Modern Software Delivery"
      description="We enable faster and more reliable software delivery through DevOps practices such as CI/CD pipelines, infrastructure as code, automation, and continuous monitoring. DevSecOps focuses on intelligent automation, built-in security, and autonomous operations across the software lifecycle."
      image={devsecopsImg}
      features={[
        {
          title: "AI-driven DevOps (AIOps)",
          description: "Predictive monitoring, anomaly detection, and self-healing systems that reduce downtime and manual intervention through intelligent automation."
        },
        {
          title: "Security by Design",
          description: "Automated security checks, policy enforcement, and compliance integrated directly into CI/CD pipelines ensuring security from the start."
        },
        {
          title: "Platform Engineering",
          description: "Internal developer platforms that standardize tools, workflows, and infrastructure for faster and more consistent delivery across teams."
        },
        {
          title: "Cloud-native and GitOps Evolution",
          description: "Declarative infrastructure, continuous delivery, and version-controlled operations at scale using modern GitOps methodologies."
        },
        {
          title: "End-to-end Automation",
          description: "Automated testing, deployment, rollback, and incident response with minimal human input for maximum efficiency."
        },
        {
          title: "Zero Trust Supply Chain Security",
          description: "Strong focus on software supply chain integrity, access controls, and securing code, dependencies, and build pipelines against tampering."
        }
      ]}
      keyBenefits={[
        "Continuous integration and delivery",
        "Improved quality and faster response",
        "Built-in security at every stage",
        "Automated compliance and governance",
        "Self-healing infrastructure",
        "Shift-left and shift-right practices"
      ]}
      additionalSections={[
        {
          title: "Containerization",
          content: "We orchestrate workloads using Kubernetes and Docker, packaging your applications into containers that are portable, easy to scale, and faster to deploy. Our containerization strategy ensures consistent environments across development, testing, and production."
        },
        {
          title: "Automated CI/CD Pipelines",
          content: "Integrating security into the CI/CD pipeline to speed up safe software delivery. Our automated pipelines include testing, security scanning, deployment automation, and rollback capabilities for reliable releases."
        },
        {
          title: "Infrastructure as Code",
          content: "We implement infrastructure as code practices that enable version-controlled, reproducible, and auditable infrastructure deployments. This ensures consistency across environments and enables rapid scaling."
        }
      ]}
      relatedServices={[
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "AI", slug: "artificial-intelligence" }
      ]}
    />
  );
};

export default DevSecOps;
