import { ServicePageLayout } from "@/components/ServicePageLayout";
import erpImg from "@/assets/services/erp-service.jpg";

const ERP = () => {
  return (
    <ServicePageLayout
      title="ERP"
      subtitle="Enterprise Resource Planning"
      description="Enterprise Resource Planning implementation, optimization, and support for streamlined business operations."
      image={erpImg}
      features={[
        { title: "ERP Implementation", description: "End-to-end ERP deployment and configuration." },
        { title: "ERP Migration", description: "Legacy ERP to modern platform migrations." },
        { title: "Custom Development", description: "ERP customization and extension development." },
        { title: "Integration Services", description: "ERP integration with third-party systems." },
        { title: "Support & Maintenance", description: "Ongoing ERP support and enhancement services." },
        { title: "Process Optimization", description: "Business process optimization within ERP." }
      ]}
      keyBenefits={["Streamlined operations", "Data visibility", "Process efficiency", "Cost reduction", "Informed decisions"]}
      relatedServices={[
        { title: "Digital Transformation", slug: "digital-transformation" },
        { title: "Application Services", slug: "application-services" },
        { title: "Data Integration", slug: "integration" }
      ]}
    />
  );
};

export default ERP;
