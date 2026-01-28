import { ServicePageLayout } from "@/components/ServicePageLayout";
import firewallServiceImg from "@/assets/services/firewall-service.jpg";

const FirewallServices = () => {
  return (
    <ServicePageLayout
      title="Firewall Services"
      subtitle="Advanced Network Protection"
      description="Next-generation firewall solutions that provide comprehensive network security with deep packet inspection, intrusion prevention, and advanced threat protection capabilities."
      image={firewallServiceImg}
      features={[
        { title: "Next-Generation Firewall (NGFW)", description: "Advanced threat protection with application awareness, IPS, and malware prevention." },
        { title: "Web Application Firewall (WAF)", description: "Protection for web applications against OWASP Top 10 and zero-day exploits." },
        { title: "Cloud Firewall", description: "Cloud-native firewall solutions for AWS, Azure, and multi-cloud environments." },
        { title: "Firewall Policy Management", description: "Centralized policy management, optimization, and compliance reporting." },
        { title: "Intrusion Prevention System", description: "Real-time threat detection and automated blocking of malicious traffic." },
        { title: "Managed Firewall Services", description: "24/7 firewall monitoring, management, and incident response by security experts." }
      ]}
      keyBenefits={["Network perimeter protection", "Advanced threat blocking", "Regulatory compliance", "Reduced security incidents", "Expert management"]}
      relatedServices={[
        { title: "VPN Services", slug: "vpn-services" },
        { title: "Threat Detection", slug: "threat-detection" },
        { title: "Enterprise Security", slug: "enterprise-security" }
      ]}
    />
  );
};

export default FirewallServices;
