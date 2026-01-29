import { ServicePageLayout } from "@/components/ServicePageLayout";
import freeConsultationImg from "@/assets/services/free-consultation.jpg";

const FreeConsultation = () => {
  return (
    <ServicePageLayout
      title="Free Consultation"
      subtitle="Value Add Services"
      description="Complimentary consultation sessions to understand your technology challenges and explore potential solutions. Our experts provide actionable insights and recommendations tailored to your business needs."
      image={freeConsultationImg}
      features={[
        { title: "Needs Assessment", description: "Comprehensive assessment of your technology requirements." },
        { title: "Solution Recommendations", description: "Expert recommendations for addressing your challenges." },
        { title: "Technology Roadmap", description: "High-level technology roadmap and prioritization guidance." },
        { title: "Cost Estimation", description: "Preliminary cost estimates for proposed solutions." },
        { title: "Best Practices", description: "Industry best practices and lessons learned." },
        { title: "Q&A Session", description: "Open discussion to address your specific questions." }
      ]}
      keyBenefits={["No obligation consultation", "Expert insights", "Customized recommendations", "Clear next steps", "Partnership foundation"]}
      relatedServices={[
        { title: "Free Demo", slug: "free-demo" },
        { title: "Technology Advisory", slug: "technology-advisory" },
        { title: "Digital Transformation", slug: "digital-transformation" }
      ]}
    />
  );
};

export default FreeConsultation;
