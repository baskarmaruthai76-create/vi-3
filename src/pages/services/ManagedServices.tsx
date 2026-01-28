import { ServicePageLayout } from "@/components/ServicePageLayout";
import managedServicesImg from "@/assets/images/managed-services.jpg";

const ManagedServices = () => {
  return (
    <ServicePageLayout
      title="24×7 Managed Services"
      subtitle="Always-On IT Operations"
      description="Our Managed Services act as your 'Always-On' IT department, providing peace of mind through constant vigilance. We ensure your business never sleeps with round-the-clock monitoring, automated patch management, and SLA-driven resolution."
      image={managedServicesImg}
      features={[
        {
          title: "Proactive Infrastructure Monitoring",
          description: "We use advanced RMM (Remote Monitoring & Management) tools to track the health of your servers, networks, and endpoints in real-time, catching issues before they impact your business."
        },
        {
          title: "Automated Patch Management",
          description: "We handle the critical task of keeping your OS and software updated, scheduling deployments during off-peak hours to ensure zero business disruption."
        },
        {
          title: "Level 1-3 Technical Support",
          description: "A dedicated help desk available 24/7 to resolve everything from simple password resets to complex network failures with guaranteed response times."
        },
        {
          title: "Performance Optimization",
          description: "Monthly health checks and fine-tuning of your environment to ensure hardware and software are running at peak efficiency."
        },
        {
          title: "SLA-Driven Resolution",
          description: "Guaranteed response times for mission-critical incidents, ensuring your most important systems receive priority attention."
        },
        {
          title: "Help Desk & Technical Support",
          description: "Round-the-clock access to expert engineers for troubleshooting and application support across all your technology stack."
        }
      ]}
      keyBenefits={[
        "24/7 oversight of servers, networks, and cloud instances",
        "Zero downtime with proactive issue resolution",
        "Reduced operational costs through automation",
        "Expert engineers on-call around the clock",
        "Scalable support that grows with your business",
        "Compliance and security maintained continuously"
      ]}
      relatedServices={[
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" },
        { title: "DevSecOps", slug: "devsecops" }
      ]}
    />
  );
};

export default ManagedServices;
