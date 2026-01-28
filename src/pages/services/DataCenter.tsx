import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataCenterImg from "@/assets/services/data-center-service.jpg";

const DataCenter = () => {
  return (
    <ServicePageLayout
      title="Data Center"
      subtitle="IT Infrastructure"
      description="Data center design, build, management, and optimization services for enterprise operations."
      image={dataCenterImg}
      features={[
        { title: "Data Center Design", description: "Tier III/IV data center architecture." },
        { title: "Build Services", description: "Data center construction and fit-out." },
        { title: "Facility Management", description: "DCIM and facility operations management." },
        { title: "Colocation Services", description: "Colocation hosting and managed colo." },
        { title: "Power & Cooling", description: "Power and thermal management solutions." },
        { title: "Compliance", description: "Data center compliance and certification." }
      ]}
      keyBenefits={["Reliability", "Scalability", "Efficiency", "Security", "Compliance"]}
      relatedServices={[
        { title: "Data Center Consolidation", slug: "datacenter-consolidation" },
        { title: "Servers", slug: "servers" },
        { title: "Storage", slug: "storage" }
      ]}
    />
  );
};

export default DataCenter;
