import { ServicePageLayout } from "@/components/ServicePageLayout";
import devopsImg from "@/assets/services/devops-service.jpg";

const DevOps = () => {
  return (
    <ServicePageLayout
      title="DevOps"
      subtitle="Development Operations"
      description="Continuous integration and delivery pipelines with infrastructure as code and automated deployment workflows."
      image={devopsImg}
      features={[
        { title: "CI/CD Pipelines", description: "Automated build, test, and deployment pipelines." },
        { title: "Infrastructure as Code", description: "Terraform, Ansible, and CloudFormation automation." },
        { title: "Containerization", description: "Docker and Kubernetes container orchestration." },
        { title: "GitOps", description: "Git-based infrastructure and application management." },
        { title: "Monitoring & Observability", description: "Full-stack monitoring and logging solutions." },
        { title: "Release Management", description: "Automated release and rollback strategies." }
      ]}
      keyBenefits={["Faster releases", "Improved quality", "Reduced errors", "Team collaboration", "Continuous improvement"]}
      relatedServices={[
        { title: "CI/CD", slug: "cicd" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Cloud Operations", slug: "cloud-operations" }
      ]}
    />
  );
};

export default DevOps;
