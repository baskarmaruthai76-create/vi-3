import { ServicePageLayout } from "@/components/ServicePageLayout";
import web3Img from "@/assets/images/web3.jpg";

const Web3 = () => {
  return (
    <ServicePageLayout
      title="Web 3.0 Solutions"
      subtitle="Decentralized Future"
      description="Web 3.0 is the next generation of the internet that focuses on decentralization, user ownership, and trustless interactions. We help you leverage blockchain, smart contracts, and decentralized applications to create a more transparent, secure, and open digital ecosystem."
      image={web3Img}
      features={[
        {
          title: "Decentralized Identity (DID)",
          description: "Users fully control their digital identities and personal data without relying on centralized authorities."
        },
        {
          title: "Interoperable Blockchains",
          description: "Seamless interaction and data exchange across multiple blockchain networks for unified operations."
        },
        {
          title: "AI-Integrated Web3",
          description: "Combining AI with decentralized systems for smarter dApps, autonomous agents, and advanced analytics."
        },
        {
          title: "Tokenized Digital Economies",
          description: "Wider adoption of digital assets, NFTs, and decentralized finance (DeFi) in real-world use cases."
        },
        {
          title: "Decentralized Governance (DAO 2.0)",
          description: "More efficient, transparent, and participatory decision-making models for organizations."
        },
        {
          title: "Privacy-First Architecture",
          description: "Advanced cryptography and zero-knowledge proofs for secure and private interactions."
        }
      ]}
      keyBenefits={[
        "User data ownership",
        "Transparent transactions",
        "Reduced intermediary costs",
        "Enhanced security",
        "Community governance",
        "Future-proof technology"
      ]}
      additionalSections={[
        {
          title: "Scalable & Energy-Efficient Protocols",
          content: "We implement improved blockchain protocols with lower transaction costs and reduced environmental impact, making your Web3 solutions sustainable and cost-effective."
        },
        {
          title: "Smart Contract Development",
          content: "Our team develops secure, audited smart contracts for various use cases including DeFi, NFT marketplaces, supply chain tracking, and governance systems."
        }
      ]}
      relatedServices={[
        { title: "Cybersecurity", slug: "cybersecurity" },
        { title: "AI", slug: "" },
        { title: "Cloud & Infrastructure", slug: "cloud-infrastructure" }
      ]}
    />
  );
};

export default Web3;
