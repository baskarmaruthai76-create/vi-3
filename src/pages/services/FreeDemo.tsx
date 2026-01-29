import { ServicePageLayout } from "@/components/ServicePageLayout";
import freeDemoImg from "@/assets/services/free-demo.jpg";

const FreeDemo = () => {
  return (
    <ServicePageLayout
      title="Free Demo"
      subtitle="Value Add Services"
      description="Experience our solutions firsthand with complimentary live demonstrations. See how our technologies and services can transform your business operations and drive measurable outcomes."
      image={freeDemoImg}
      features={[
        { title: "Live Product Demo", description: "Interactive demonstration of solutions relevant to your needs." },
        { title: "Use Case Walkthrough", description: "Real-world use case scenarios and implementation examples." },
        { title: "Feature Exploration", description: "Deep dive into key features and capabilities." },
        { title: "Integration Overview", description: "How our solutions integrate with your existing systems." },
        { title: "ROI Discussion", description: "Expected benefits and return on investment analysis." },
        { title: "Implementation Preview", description: "Overview of implementation approach and timeline." }
      ]}
      keyBenefits={["Hands-on experience", "Informed decision making", "Risk-free evaluation", "Clear understanding", "Accelerated procurement"]}
      relatedServices={[
        { title: "Free Consultation", slug: "free-consultation" },
        { title: "Technology Advisory", slug: "technology-advisory" },
        { title: "Cloud Adoption", slug: "cloud-adoption" }
      ]}
    />
  );
};

export default FreeDemo;
