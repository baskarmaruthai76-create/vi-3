import { ServicePageLayout } from "@/components/ServicePageLayout";
import cicdImg from "@/assets/services/cicd.jpg";

const CICD = () => {
  return (
    <ServicePageLayout
      title="CI/CD"
      subtitle="Continuous Integration & Delivery"
      description="Automated build, test, and deployment pipelines for faster, reliable software delivery."
      image={cicdImg}
      features={[
        { title: "Pipeline Design", description: "Custom CI/CD pipeline architecture and design." },
        { title: "Build Automation", description: "Automated build processes with quality gates." },
        { title: "Automated Testing", description: "Integrated testing at every pipeline stage." },
        { title: "Deployment Automation", description: "Blue-green, canary, and rolling deployments." },
        { title: "Release Orchestration", description: "Multi-environment release management." },
        { title: "Pipeline Optimization", description: "Performance tuning and efficiency improvements." }
      ]}
      keyBenefits={["Faster delivery", "Reduced errors", "Consistent deployments", "Quality assurance", "Developer productivity"]}
      relatedServices={[
        { title: "DevOps", slug: "devops" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Integration", slug: "integration" }
      ]}
    />
  );
};

export default CICD;
