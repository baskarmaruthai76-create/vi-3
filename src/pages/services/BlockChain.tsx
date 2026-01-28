import { ServicePageLayout } from "@/components/ServicePageLayout";
import blockchainImg from "@/assets/services/blockchain.jpg";

const Blockchain = () => {
  return (
    <ServicePageLayout
      title="Blockchain"
      subtitle="Distributed Ledger"
      description="Enterprise blockchain solutions for secure, transparent, and decentralized business operations."
      image={blockchainImg}
      features={[
        { title: "Blockchain Development", description: "Custom blockchain application development." },
        { title: "Smart Contracts", description: "Smart contract design, development, and audit." },
        { title: "DeFi Solutions", description: "Decentralized finance platform development." },
        { title: "NFT Platforms", description: "NFT marketplace and token development." },
        { title: "Enterprise Blockchain", description: "Private and consortium blockchain solutions." },
        { title: "Blockchain Integration", description: "Integration with existing enterprise systems." }
      ]}
      keyBenefits={["Transparency", "Immutability", "Security", "Decentralization", "Trust"]}
      relatedServices={[
        { title: "Web 3.0", slug: "web3" },
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "Application Services", slug: "application-services" }
      ]}
    />
  );
};

export default Blockchain;
