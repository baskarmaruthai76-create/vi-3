import { ServicePageLayout } from "@/components/ServicePageLayout";
import apmImg from "@/assets/services/apm.jpg";

const APM = () => {
  return (
    <ServicePageLayout
      title="Application Performance Management"
      subtitle="Management Services"
      description="End-to-end application performance monitoring with real-time analytics, distributed tracing, and user experience insights."
      image={apmImg}
      features={[
        { title: "Real-Time Monitoring", description: "Live application performance metrics and health dashboards." },
        { title: "Distributed Tracing", description: "End-to-end transaction tracing across microservices." },
        { title: "Error Analytics", description: "Automatic error detection, grouping, and root cause analysis." },
        { title: "User Experience", description: "Real user monitoring (RUM) and synthetic transaction testing." },
        { title: "Code-Level Insights", description: "Deep code profiling and performance bottleneck identification." },
        { title: "Alerting & Automation", description: "Intelligent alerting with automated response workflows." }
      ]}
      keyBenefits={["Faster troubleshooting", "Improved user experience", "Proactive optimization", "Reduced downtime", "Full-stack visibility"]}
      relatedServices={[
        { title: "ITOM", slug: "itom" },
        { title: "AIOps", slug: "aiops" },
        { title: "Quality Assurance", slug: "quality-assurance" }
      ]}
    />
  );
};

export default APM;
