import { ServicePageLayout } from "@/components/ServicePageLayout";
import vaptImg from "@/assets/services/vapt-service.jpg";

const VAPT = () => {
  return (
    <ServicePageLayout
      title="VAPT"
      subtitle="Cybersecurity"
      description="Vulnerability Assessment and Penetration Testing services. We identify security weaknesses in your systems before attackers can exploit them."
      image={vaptImg}
      features={[
        { title: "Vulnerability Assessment", description: "Comprehensive vulnerability scanning and assessment." },
        { title: "Penetration Testing", description: "Ethical hacking to test security defenses." },
        { title: "Web Application Testing", description: "OWASP-based web application security testing." },
        { title: "Network Penetration", description: "Internal and external network penetration testing." },
        { title: "API Security Testing", description: "REST and GraphQL API security assessment." },
        { title: "Red Team Exercises", description: "Advanced adversary simulation exercises." }
      ]}
      keyBenefits={["Vulnerability visibility", "Risk prioritization", "Compliance evidence", "Security validation", "Remediation guidance"]}
      relatedServices={[
        { title: "Enterprise Security", slug: "enterprise-security" },
        { title: "Application Security", slug: "application-security" },
        { title: "Threat Detection", slug: "threat-detection" }
      ]}
    />
  );
};

export default VAPT;
