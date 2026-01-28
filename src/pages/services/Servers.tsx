import { ServicePageLayout } from "@/components/ServicePageLayout";
import serversImg from "@/assets/services/servers-service.jpg";

const Servers = () => {
  return (
    <ServicePageLayout
      title="Servers"
      subtitle="IT Infrastructure"
      description="Enterprise server infrastructure design, deployment, and management for reliable computing."
      image={serversImg}
      features={[
        { title: "Server Design", description: "Enterprise server architecture and sizing." },
        { title: "Server Deployment", description: "Physical and virtual server deployment." },
        { title: "Virtualization", description: "VMware, Hyper-V, and KVM virtualization." },
        { title: "Performance Tuning", description: "Server optimization and capacity planning." },
        { title: "Hardware Refresh", description: "Server lifecycle and hardware refresh planning." },
        { title: "Server Support", description: "24/7 server monitoring and support." }
      ]}
      keyBenefits={["Reliable compute", "Optimal performance", "High availability", "Cost efficiency", "Expert management"]}
      relatedServices={[
        { title: "Storage", slug: "storage" },
        { title: "Data Center", slug: "data-center" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default Servers;
