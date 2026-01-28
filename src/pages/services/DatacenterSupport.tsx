import { ServicePageLayout } from "@/components/ServicePageLayout";
import datacenterSupportImg from "@/assets/services/datacenter-support.jpg";

const DatacenterSupport = () => {
  return (
    <ServicePageLayout
      title="Data Center Support"
      subtitle="Infrastructure Services"
      description="Comprehensive data center support services including facility management, hardware maintenance, and 24/7 operations."
      image={datacenterSupportImg}
      features={[
        { title: "Facility Management", description: "Complete data center facility operations and maintenance." },
        { title: "Hardware Support", description: "Server, storage, and network hardware maintenance." },
        { title: "Environmental Monitoring", description: "Temperature, humidity, and power monitoring systems." },
        { title: "Physical Security", description: "Access control, surveillance, and security protocols." },
        { title: "Cable Management", description: "Structured cabling and documentation services." },
        { title: "Capacity Planning", description: "Power, cooling, and space capacity management." }
      ]}
      keyBenefits={["24/7 support coverage", "Reduced downtime", "Extended hardware life", "Optimized efficiency", "Compliance ready"]}
      relatedServices={[
        { title: "Data Center", slug: "data-center" },
        { title: "Servers", slug: "servers" },
        { title: "Disaster Recovery", slug: "disaster-recovery" }
      ]}
    />
  );
};

export default DatacenterSupport;
