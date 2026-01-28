import { ServicePageLayout } from "@/components/ServicePageLayout";
import cloudInfrastructureImg from "@/assets/images/cloud-infrastructure.jpg";

const CloudInfrastructure = () => {
  return (
    <ServicePageLayout
      title="Cloud & Infrastructure"
      subtitle="Modernization Excellence"
      description="We help you transition from aging legacy hardware to a flexible, high-performance hybrid environment. Our end-to-end cloud services include strategy, migration, optimization, and management across public, private, and hybrid environments."
      image={cloudInfrastructureImg}
      features={[
        {
          title: "On-Premises Refurbishment",
          description: "We modernize your physical data centre using Software-Defined Networking (SDN) and Hyper-Converged Infrastructure (HCI) for cloud-like agility on-site."
        },
        {
          title: "Secure Cloud Migration",
          description: "We manage 'Lift and Shift' or 'Re-platforming' migrations to AWS, Azure, or Google Cloud, ensuring zero data loss and minimal downtime during transition."
        },
        {
          title: "Cloud Cost Optimization",
          description: "We analyse your cloud consumption to eliminate 'waste,' ensuring you only pay for the resources you actually use through intelligent rightsizing and reserved capacity."
        },
        {
          title: "Containerization (Kubernetes/Docker)",
          description: "We package your applications into containers, making them portable, easy to scale, and faster to deploy across any environment."
        },
        {
          title: "Intelligent Cloud Platforms",
          description: "Deep integration of AI and machine learning for self-managing, predictive, and optimized cloud operations with autonomous management."
        },
        {
          title: "Edge and Distributed Cloud",
          description: "Computing and storage moved closer to users and devices, enabling real-time processing for IoT, 5G, and smart applications."
        }
      ]}
      keyBenefits={[
        "Seamless hybrid cloud transitions",
        "Zero downtime migrations",
        "Optimized cloud spending",
        "Scalable container orchestration",
        "AI-driven cloud optimization",
        "Edge computing capabilities"
      ]}
      additionalSections={[
        {
          title: "AWS Cloud",
          content: "Amazon Web Services (AWS) is a leading cloud computing platform that delivers on-demand access to computing power, storage, databases, networking, analytics, AI, and security. We help you build, deploy, and scale applications on AWS with high availability, fault tolerance, and low-latency performance worldwide."
        },
        {
          title: "Microsoft Azure Cloud",
          content: "Microsoft Azure provides on-demand access to computing, storage, databases, networking, AI, analytics, security, and DevOps tools. We leverage Azure's seamless integration with Microsoft products including Windows Server, Active Directory, and Microsoft 365 for enterprise-grade solutions."
        },
        {
          title: "Google Cloud Platform (GCP)",
          content: "Google Cloud Platform delivers high performance and scalability built on Google's global infrastructure. We help you leverage advanced data analytics with BigQuery, AI/ML leadership, Kubernetes leadership with GKE, and sustainable carbon-aware operations."
        }
      ]}
      relatedServices={[
        { title: "Managed Services", slug: "managed-services" },
        { title: "DevSecOps", slug: "devsecops" },
        { title: "Cybersecurity", slug: "cybersecurity" }
      ]}
    />
  );
};

export default CloudInfrastructure;
