import { ServicePageLayout } from "@/components/ServicePageLayout";
import networkingImg from "@/assets/services/networking-service.jpg";

const Networking = () => {
  return (
    <ServicePageLayout
      title="Networking"
      subtitle="IT Infrastructure"
      description="Enterprise networking design, implementation, and management for seamless connectivity."
      image={networkingImg}
      features={[
        { title: "Network Design", description: "Enterprise network architecture and design." },
        { title: "LAN/WAN Implementation", description: "Campus and wide-area network deployment." },
        { title: "SD-WAN", description: "Software-defined WAN solutions." },
        { title: "Network Security", description: "Firewall, VPN, and network segmentation." },
        { title: "Wireless Solutions", description: "Enterprise WiFi and mobility solutions." },
        { title: "Network Operations", description: "NOC services and network management." }
      ]}
      keyBenefits={["Reliable connectivity", "Security", "Performance", "Scalability", "Business agility"]}
      relatedServices={[
        { title: "Servers", slug: "servers" },
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default Networking;
