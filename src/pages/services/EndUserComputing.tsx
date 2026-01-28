import { ServicePageLayout } from "@/components/ServicePageLayout";
import endUserComputingImg from "@/assets/services/end-user-computing.jpg";

const EndUserComputing = () => {
  return (
    <ServicePageLayout
      title="End-User Computing (EUC)"
      subtitle="Modern Digital Workspace Solutions"
      description="Comprehensive end-user computing solutions that enable seamless, secure, and productive digital workspaces across any device, anywhere."
      image={endUserComputingImg}
      features={[
        { title: "Virtual Desktop Infrastructure (VDI)", description: "Centralized desktop virtualization with secure access from any device, anywhere." },
        { title: "Desktop as a Service (DaaS)", description: "Cloud-hosted virtual desktops with flexible scaling and simplified management." },
        { title: "Device Lifecycle Management", description: "End-to-end management of endpoints from procurement to retirement." },
        { title: "Unified Endpoint Management (UEM)", description: "Centralized management of all endpoints including desktops, laptops, and mobile devices." },
        { title: "Application Virtualization", description: "Deliver applications on-demand without local installation for simplified updates." },
        { title: "Digital Workspace Security", description: "Zero-trust security models with endpoint protection and secure access." }
      ]}
      keyBenefits={["Enhanced productivity", "Work-from-anywhere flexibility", "Reduced IT costs", "Improved security", "Simplified management"]}
      relatedServices={[
        { title: "IT Service Desk", slug: "it-service-desk" },
        { title: "ITSM", slug: "itsm" },
        { title: "Service Desk", slug: "service-desk" }
      ]}
    />
  );
};

export default EndUserComputing;
