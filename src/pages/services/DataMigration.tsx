import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataMigrationImg from "@/assets/services/data-migration.jpg";

const DataMigration = () => {
  return (
    <ServicePageLayout
      title="Data Migration"
      subtitle="Data & Analytics"
      description="Seamless data migration services ensuring data integrity, minimal downtime, and successful transformation."
      image={dataMigrationImg}
      features={[
        { title: "Migration Assessment", description: "Comprehensive source and target system analysis." },
        { title: "Data Mapping", description: "Schema mapping and data transformation planning." },
        { title: "ETL Development", description: "Custom ETL pipelines for data migration." },
        { title: "Data Validation", description: "Data quality checks and validation processes." },
        { title: "Cutover Planning", description: "Zero-downtime migration strategies and execution." },
        { title: "Post-Migration Support", description: "Hypercare and optimization after migration." }
      ]}
      keyBenefits={["Data integrity", "Minimal downtime", "Risk mitigation", "Successful transformation", "Validated results"]}
      relatedServices={[
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Data Warehouse", slug: "data-warehouse" },
        { title: "Database", slug: "database" }
      ]}
    />
  );
};

export default DataMigration;
