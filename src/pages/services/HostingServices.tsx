import { ServicePageLayout } from "@/components/ServicePageLayout";
import hostingServicesImg from "@/assets/services/hosting-services.jpg";

const HostingServices = () => {
  return (
    <ServicePageLayout
      title="Hosting Services"
      subtitle="Infrastructure Services"
      description="Enterprise hosting solutions with managed infrastructure, high availability, and scalable performance."
      image={hostingServicesImg}
      features={[
        { title: "Managed Hosting", description: "Fully managed hosting with 24/7 support and monitoring." },
        { title: "Cloud Hosting", description: "Scalable cloud hosting on AWS, Azure, and GCP." },
        { title: "Dedicated Servers", description: "High-performance dedicated server solutions." },
        { title: "High Availability", description: "Multi-region deployment with failover protection." },
        { title: "Load Balancing", description: "Intelligent traffic distribution and optimization." },
        { title: "SSL & Security", description: "SSL certificates, DDoS protection, and WAF." }
      ]}
      keyBenefits={["99.99% uptime", "Scalable infrastructure", "Managed security", "Expert support", "Cost optimization"]}
      relatedServices={[
        { title: "Cloud Infrastructure", slug: "cloud-infrastructure" },
        { title: "Workload Deployment", slug: "workload-deployment" },
        { title: "Data Center", slug: "data-center" }
      ]}
    />
  );
};

export default HostingServices;
