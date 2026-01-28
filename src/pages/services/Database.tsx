import { ServicePageLayout } from "@/components/ServicePageLayout";
import databaseImg from "@/assets/services/database-service.jpg";

const Database = () => {
  return (
    <ServicePageLayout
      title="Database"
      subtitle="IT Infrastructure"
      description="Database administration, optimization, migration, and management services."
      image={databaseImg}
      features={[
        { title: "Database Administration", description: "DBA services for Oracle, SQL Server, and PostgreSQL." },
        { title: "Performance Tuning", description: "Query optimization and performance improvement." },
        { title: "Database Migration", description: "Database platform migrations and upgrades." },
        { title: "High Availability", description: "Clustering, replication, and HA solutions." },
        { title: "Database Security", description: "Access control, encryption, and audit." },
        { title: "Cloud Databases", description: "Cloud-native database management." }
      ]}
      keyBenefits={["Data integrity", "Performance", "Availability", "Security", "Expert management"]}
      relatedServices={[
        { title: "Data Migration", slug: "data-migration" },
        { title: "Data Warehouse", slug: "data-warehouse" },
        { title: "Storage", slug: "storage" }
      ]}
    />
  );
};

export default Database;
