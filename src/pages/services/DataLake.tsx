import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataLakeImg from "@/assets/services/data-lake-service.jpg";

const DataLake = () => {
  return (
    <ServicePageLayout
      title="Data Lake"
      subtitle="Data & Analytics"
      description="Scalable data lake architecture for storing and processing structured and unstructured data at any scale."
      image={dataLakeImg}
      features={[
        { title: "Data Lake Architecture", description: "Design and implement enterprise-scale data lakes." },
        { title: "Data Ingestion", description: "Real-time and batch data ingestion pipelines." },
        { title: "Schema Management", description: "Flexible schema-on-read data management." },
        { title: "Data Catalog", description: "Metadata management and data discovery." },
        { title: "Data Governance", description: "Data quality, lineage, and access control." },
        { title: "Analytics Integration", description: "Seamless integration with analytics and ML platforms." }
      ]}
      keyBenefits={["Scalable storage", "Data flexibility", "Cost efficiency", "Advanced analytics", "Future-proof architecture"]}
      relatedServices={[
        { title: "Data Warehouse", slug: "data-warehouse" },
        { title: "Big Data", slug: "big-data" },
        { title: "Data Migration", slug: "data-migration" }
      ]}
    />
  );
};

export default DataLake;
