import { ServicePageLayout } from "@/components/ServicePageLayout";
import vpnServiceImg from "@/assets/services/vpn-service.jpg";

const VPNServices = () => {
  return (
    <ServicePageLayout
      title="VPN Services"
      subtitle="Secure Remote Connectivity"
      description="Enterprise-grade VPN solutions that provide secure, encrypted connections for remote workforce and site-to-site communications, ensuring data protection across all network boundaries."
      image={vpnServiceImg}
      features={[
        { title: "Site-to-Site VPN", description: "Secure connectivity between branch offices, data centers, and cloud environments." },
        { title: "Remote Access VPN", description: "Secure remote worker access with multi-factor authentication and endpoint compliance." },
        { title: "SSL/TLS VPN", description: "Browser-based secure access for applications without client software requirements." },
        { title: "Zero Trust Network Access", description: "Modern ZTNA solutions replacing traditional VPN with identity-based access." },
        { title: "VPN Monitoring & Management", description: "24/7 monitoring, performance optimization, and incident response for VPN infrastructure." },
        { title: "Split Tunneling Configuration", description: "Optimized routing policies balancing security with performance for remote users." }
      ]}
      keyBenefits={["Secure remote access", "Encrypted communications", "Compliance enablement", "Workforce flexibility", "Reduced attack surface"]}
      relatedServices={[
        { title: "Firewall Services", slug: "firewall-services" },
        { title: "Digital Identity", slug: "digital-identity" },
        { title: "Enterprise Security", slug: "enterprise-security" }
      ]}
    />
  );
};

export default VPNServices;
