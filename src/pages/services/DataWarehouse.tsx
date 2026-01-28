import { ServicePageLayout } from "@/components/ServicePageLayout";
import dataWarehouseImg from "@/assets/services/data-warehouse.jpg";

const DataWarehouse = () => {
  return (
    <ServicePageLayout
      title="Data Warehouse"
      subtitle="Data & Analytics"
      description="Enterprise data warehousing solutions for centralized analytics, reporting, and business intelligence."
      image={dataWarehouseImg}
      features={[
        { title: "Data Warehouse Design", description: "Enterprise data warehouse architecture and design." },
        { title: "ETL Development", description: "Extract, Transform, Load pipeline development and optimization." },
        { title: "Data Modeling", description: "Dimensional modeling and schema design for analytics." },
        { title: "BI Integration", description: "Integration with leading BI and analytics platforms." },
        { title: "Performance Tuning", description: "Query optimization and performance enhancement." },
        { title: "Cloud Data Warehouse", description: "Modern cloud-native data warehouse solutions." }
      ]}
      keyBenefits={["Centralized data", "Faster insights", "Improved reporting", "Data quality", "Scalable analytics"]}
      relatedServices={[
        { title: "Data Lake", slug: "data-lake" },
        { title: "Big Data", slug: "big-data" },
        { title: "Data Science", slug: "data-science" }
      ]}
    />
  );
};

export default DataWarehouse;
