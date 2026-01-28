import { ServicePageLayout } from "@/components/ServicePageLayout";
import workloadDeploymentImg from "@/assets/services/workload-deployment.jpg";

const WorkloadDeployment = () => {
  return (
    <ServicePageLayout
      title="Workload Deployment & Hosting Migration"
      subtitle="Infrastructure Services"
      description="Seamless workload deployment and hosting migration services with zero-downtime transitions and optimized performance."
      image={workloadDeploymentImg}
      features={[
        { title: "Migration Assessment", description: "Comprehensive workload analysis and migration planning." },
        { title: "Zero-Downtime Migration", description: "Live migration strategies for business continuity." },
        { title: "Container Deployment", description: "Docker and Kubernetes workload orchestration." },
        { title: "Multi-Cloud Deployment", description: "Deploy across AWS, Azure, GCP, and private clouds." },
        { title: "Performance Optimization", description: "Post-migration tuning and resource optimization." },
        { title: "Rollback Planning", description: "Comprehensive rollback strategies and disaster recovery." }
      ]}
      keyBenefits={["Zero downtime", "Optimized costs", "Faster deployment", "Multi-cloud flexibility", "Reduced risk"]}
      relatedServices={[
        { title: "Cloud Migration", slug: "cloud-migration" },
        { title: "Hosting Services", slug: "hosting-services" },
        { title: "Data Center", slug: "data-center" }
      ]}
    />
  );
};

export default WorkloadDeployment;
