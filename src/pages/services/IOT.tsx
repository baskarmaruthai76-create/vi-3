import { ServicePageLayout } from "@/components/ServicePageLayout";
import iotImg from "@/assets/services/iot.jpg";

const IoT = () => {
  return (
    <ServicePageLayout
      title="IoT Solutions"
      subtitle="Internet of Things"
      description="End-to-end IoT solutions connecting devices, sensors, and systems for intelligent automation and insights."
      image={iotImg}
      features={[
        { title: "IoT Architecture", description: "Scalable IoT platform design and implementation." },
        { title: "Device Management", description: "Device provisioning, monitoring, and lifecycle management." },
        { title: "Edge Computing", description: "Edge processing for real-time analytics and reduced latency." },
        { title: "Data Analytics", description: "IoT data analytics and predictive maintenance." },
        { title: "Industrial IoT", description: "IIoT solutions for manufacturing and operations." },
        { title: "Smart Solutions", description: "Smart building, city, and infrastructure solutions." }
      ]}
      keyBenefits={["Connected operations", "Real-time insights", "Predictive maintenance", "Automation", "Cost reduction"]}
      relatedServices={[
        { title: "Big Data", slug: "big-data" },
        { title: "AI & Data Science", slug: "ai-data-science" },
        { title: "Cloud Infrastructure", slug: "cloud-infrastructure" }
      ]}
    />
  );
};

export default IoT;
