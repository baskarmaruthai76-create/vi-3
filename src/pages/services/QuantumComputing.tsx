import { ServicePageLayout } from "@/components/ServicePageLayout";
import quantumComputingImg from "@/assets/images/quantum-computing.jpg";

const QuantumComputing = () => {
  return (
    <ServicePageLayout
      title="Quantum Computing Solutions"
      subtitle="Future-Ready Technology"
      description="We provide the strategic roadmap to ensure your business is ready for the next leap in computing power. Our quantum solutions help you identify opportunities, protect against future threats, and prepare for the quantum era."
      image={quantumComputingImg}
      features={[
        {
          title: "Quantum Readiness Consulting",
          description: "We help you identify which parts of your business (e.g., complex logistics, financial modelling, or chemistry) will benefit most from quantum speed-ups and develop a roadmap for adoption."
        },
        {
          title: "Quantum-Safe Cryptography",
          description: "We audit your current encryption and help you migrate to 'Post-Quantum' standards to protect your data against future quantum-enabled decryption attacks."
        },
        {
          title: "Hybrid Quantum-Classical Workflows",
          description: "We develop systems that use classical computers for standard tasks while offloading massive optimization problems to quantum processors for maximum efficiency."
        },
        {
          title: "Fault-tolerant and Scalable Qubits",
          description: "Improved qubit stability and error correction strategies for reliable large-scale quantum computations in enterprise applications."
        },
        {
          title: "Quantum Cloud Services",
          description: "On-demand access to quantum hardware and software via cloud platforms for research and enterprise applications without massive infrastructure investment."
        },
        {
          title: "Quantum Algorithms Development",
          description: "Advanced algorithms for optimization, cryptography, materials science, and AI that leverage quantum computing advantages."
        }
      ]}
      keyBenefits={[
        "Strategic quantum adoption roadmap",
        "Protection against future quantum threats",
        "Optimized hybrid computing workflows",
        "Access to quantum cloud resources",
        "Industry-specific quantum applications",
        "Future-proof technology investments"
      ]}
      additionalSections={[
        {
          title: "Integration with AI and Machine Learning",
          content: "We leverage quantum computing to accelerate model training, data analysis, and problem-solving using quantum-enhanced computations. This hybrid approach combines the best of classical AI with quantum speedups for complex optimization problems."
        },
        {
          title: "Industry-Specific Solutions",
          content: "We develop quantum applications tailored for finance (portfolio optimization, risk analysis), logistics (route optimization), healthcare (drug discovery), energy (grid optimization), and other sectors where quantum advantages are most impactful."
        }
      ]}
      relatedServices={[
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "AI", slug: "artificial-intelligence" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }
      ]}
    />
  );
};

export default QuantumComputing;
