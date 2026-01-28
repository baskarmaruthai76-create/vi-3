import { ServicePageLayout } from "@/components/ServicePageLayout";
import bigDataImg from "@/assets/services/big-data-service.jpg";

const BigData = () => {
  return (
    <ServicePageLayout
      title="Big Data"
      subtitle="Data & Analytics"
      description="Big data analytics and processing solutions for extracting insights from massive datasets."
      image={bigDataImg}
      features={[
        { title: "Distributed Computing", description: "Hadoop, Spark, and distributed processing frameworks." },
        { title: "Real-Time Processing", description: "Stream processing with Kafka, Flink, and Spark Streaming." },
        { title: "Data Processing", description: "Large-scale data transformation and processing pipelines." },
        { title: "Analytics Platforms", description: "Enterprise analytics platforms for big data insights." },
        { title: "Machine Learning", description: "ML at scale with big data infrastructure." },
        { title: "Visualization", description: "Big data visualization and dashboarding solutions." }
      ]}
      keyBenefits={["Process any scale", "Real-time insights", "Cost-effective storage", "Advanced analytics", "Actionable intelligence"]}
      relatedServices={[
        { title: "Data Lake", slug: "data-lake" },
        { title: "Data Warehouse", slug: "data-warehouse" },
        { title: "Data Science", slug: "data-science" }
      ]}
    />
  );
};

export default BigData;
