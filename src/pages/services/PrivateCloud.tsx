import { ServicePageLayout } from "@/components/ServicePageLayout";
import privateCloudImg from "@/assets/services/private-cloud-service.jpg";

const PrivateCloud = () => {
  return (
    <ServicePageLayout
      title="Private Cloud"
      subtitle="Cloud Services"
      description="Private cloud design, deployment, and management solutions. We help organizations build secure, dedicated cloud environments that meet stringent compliance and performance requirements."
      image={privateCloudImg}
      features={[
        { title: "Private Cloud Design", description: "Custom private cloud architecture tailored to your requirements." },
        { title: "VMware Solutions", description: "VMware-based private cloud implementation and management." },
        { title: "OpenStack Deployment", description: "Open-source private cloud using OpenStack technologies." },
        { title: "Hyper-Converged Infrastructure", description: "HCI solutions for simplified private cloud operations." },
        { title: "Self-Service Portal", description: "Cloud management portal for self-service provisioning." },
        { title: "Resource Management", description: "Capacity planning and resource optimization." }
      ]}
      keyBenefits={["Complete control", "Data sovereignty", "Customized security", "Predictable performance", "Compliance alignment"]}
      relatedServices={[
        { title: "Hybrid Cloud", slug: "hybrid-cloud" },
        { title: "Data Center", slug: "data-center" },
        { title: "IT Infrastructure", slug: "it-infrastructure" }
      ]}
    />
  );
};

export default PrivateCloud;
