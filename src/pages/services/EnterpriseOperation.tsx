import { ServicePageLayout } from "@/components/ServicePageLayout";
import enterpriseOperationImg from "@/assets/services/enterprise-operation.jpg";

const EnterpriseOperation = () => {
  return (
    <ServicePageLayout
      title="Enterprise Operation"
      subtitle="Management Services"
      description="End-to-end enterprise operations management with 24/7 monitoring, incident management, and proactive infrastructure optimization."
      image={enterpriseOperationImg}
      features={[
        { title: "NOC Operations", description: "24/7 Network Operations Center for continuous monitoring and incident response." },
        { title: "Event Management", description: "Automated event correlation and intelligent alerting systems." },
        { title: "Performance Monitoring", description: "Real-time infrastructure performance tracking and optimization." },
        { title: "Capacity Planning", description: "Proactive capacity management and resource forecasting." },
        { title: "Change Management", description: "ITIL-aligned change management processes and automation." },
        { title: "Reporting & Analytics", description: "Comprehensive operational dashboards and executive reporting." }
      ]}
      keyBenefits={["24/7 operations coverage", "Reduced downtime", "Proactive issue resolution", "Cost optimization", "Scalable operations"]}
      relatedServices={[
        { title: "ITSM", slug: "itsm" },
        { title: "ITOM", slug: "itom" },
        { title: "Managed Services", slug: "managed-services" }
      ]}
    />
  );
};

export default EnterpriseOperation;
