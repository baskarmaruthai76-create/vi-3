import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudOrchestrationImg from "@/assets/services/cloud-orchestration-service.jpg";

const CloudOrchestration = () => {
  return (
    <ServicePageLayout
      title="Cloud Orchestration"
      subtitle="Cloud Services"
      description="Multi-cloud management and orchestration for seamless operations. We help you manage complex cloud environments across AWS, Azure, and GCP with unified control and automation."
      image={cloudOrchestrationImg}
      features={[
        { title: "Multi-Cloud Management", description: "Unified management of AWS, Azure, GCP, and private cloud environments." },
        { title: "Container Orchestration", description: "Kubernetes and Docker container orchestration at enterprise scale." },
        { title: "Infrastructure as Code", description: "Automated infrastructure provisioning with Terraform, Ansible, and CloudFormation." },
        { title: "Workload Automation", description: "Automated workload placement and resource optimization across clouds." },
        { title: "Policy Management", description: "Consistent policy enforcement across multi-cloud environments." },
        { title: "Monitoring & Observability", description: "Unified monitoring and observability across all cloud platforms." }
      ]}
      keyBenefits={["Unified cloud control", "Reduced complexity", "Improved efficiency", "Cost optimization", "Enhanced security"]}
      relatedServices={[
        { title: "Cloud Operations", slug: "cloud-operations" },
        { title: "Hybrid Cloud", slug: "hybrid-cloud" },
        { title: "Cloud Security", slug: "cloud-security" }
      ]}
    />
  );
};

export default CloudOrchestration;
