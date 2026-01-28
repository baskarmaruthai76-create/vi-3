import { ServicePageLayout } from "@/components/ServicePageLayout";
import storageImg from "@/assets/services/storage-service.jpg";

const Storage = () => {
  return (
    <ServicePageLayout
      title="Storage"
      subtitle="IT Infrastructure"
      description="Enterprise storage solutions for data management, performance, and protection."
      image={storageImg}
      features={[
        { title: "SAN/NAS Solutions", description: "Block and file storage infrastructure." },
        { title: "Storage Virtualization", description: "Software-defined storage solutions." },
        { title: "Storage Tiering", description: "Intelligent data tiering and optimization." },
        { title: "Data Protection", description: "Snapshot, replication, and backup integration." },
        { title: "Storage Migration", description: "Non-disruptive storage migrations." },
        { title: "Capacity Management", description: "Storage capacity planning and optimization." }
      ]}
      keyBenefits={["Data availability", "Performance", "Scalability", "Data protection", "Cost optimization"]}
      relatedServices={[
        { title: "Servers", slug: "servers" },
        { title: "Backup & Restore", slug: "backup-restore" },
        { title: "Data Center", slug: "data-center" }
      ]}
    />
  );
};

export default Storage;
