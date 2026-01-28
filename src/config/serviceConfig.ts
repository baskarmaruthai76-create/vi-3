// src/config/servicesConfig.ts - Complete Services Configuration File
// This file centralizes all service definitions for easy management

import {
  Accessibility,
  Box,
  HeadphonesIcon,
  LucideIcon,
  MonitorIcon,
} from "lucide-react";
import {
  Shield,
  Brain,
  Cloud,
  Code,
  Atom,
  Headphones,
  Scale,
  Rocket,
  Globe,
  Bot,
  Activity,
  Lock,
  Users,
  ClipboardCheck,
  CheckCircle,
  Workflow,
  Server,
  Layers,
  BarChart3,
  Monitor,
  UserCog,
  Warehouse,
  Link2,
  Settings,
  Gauge,
  CloudCog,
  ArrowUpCircle,
  RefreshCw,
  DollarSign,
  CloudOff,
  Combine,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  FileText,
  Radar,
  Search,
  KeyRound,
  Database,
  Building,
  HardDrive,
  Network,
  DatabaseBackup,
  ArchiveRestore,
  Truck,
  Wrench,
  AppWindow,
  Sparkles,
  RefreshCcw,
} from "lucide-react";

// Import all service images
import managedServicesImg from "@/assets/services/cloud-managed.jpg";
import cybersecurityImg from "@/assets/services/cybersecurity.jpg";
import aiDataScienceImg from "@/assets/services/ai-services.jpg";
import cloudInfrastructureImg from "@/assets/services/cloud-solutions.jpg";
import quantumComputingImg from "@/assets/services/quantum.jpg";
import aiGovernanceImg from "@/assets/services/ai-governance.jpg";
import digitalTransformationImg from "@/assets/services/digital-transformation.jpg";
import web3Img from "@/assets/services/web3.jpg";
import agenticAIImg from "@/assets/services/agentic-ai.jpg";
import aiopsImg from "@/assets/services/aiops.jpg";
import applicationSecurityImg from "@/assets/services/application-security.jpg";
import projectManagementImg from "@/assets/services/project-management.jpg";
import qualityAssuranceImg from "@/assets/services/quality-assurance.jpg";
import workflowAutomationImg from "@/assets/services/workflow-automation.jpg";
import itInfrastructureImg from "@/assets/services/it-infrastructure.jpg";
import architectureImg from "@/assets/services/architecture.jpg";
import airRiskImg from "@/assets/services/ai-risk-mitigation.jpg";
import securityAssesmentImg from "@/assets/services/security-assessment.jpg";
import applicationServiceImg from "@/assets/services/application-services.jpg";
import auditImg from "@/assets/services/audit-reporting.jpg";
import mergerImg from "@/assets/services/merger-acquisition.jpg";
import datascience from "@/assets/services/data-science.jpg";
import bigData from "@/assets/services/big-data-service.jpg";
import softwareDevelopmentImg from "@/assets/services/software-development.jpg";
import hrStaffingImg from "@/assets/services/staff-management.jpg";
import devsecopsImg from "@/assets/services/devsecops.jpg";
import devopsImg from "@/assets/services/devops-service.jpg";
import dataWarehouseImg from "@/assets/services/data-warehouse.jpg";
import dataLakeImg from "@/assets/services/data-lake-service.jpg";
import erpImg from "@/assets/services/erp-service.jpg";
import gccImg from "@/assets/services/gcc-service.jpg";
import cloudOrchestrationImg from "@/assets/services/cloud-orchestration-service.jpg";
import cloudAdoptionImg from "@/assets/services/cloud-adoption-service.jpg";
import cloudSecureImg from "@/assets/services/cloud-migration-service.jpg";
import cloudModernizationImg from "@/assets/services/cloud-modernization-service.jpg";
import cloudCostOptimizationImg from "@/assets/services/cloud-cost-service.jpg";
import cloudSecurityImg from "@/assets/services/cloud-security-service.jpg";
import cloudOperationImg from "@/assets/services/cloud-operations-service.jpg";
import privateCloudImg from "@/assets/services/private-cloud-service.jpg";
import hybridCloudImg from "@/assets/services/hybrid-cloud-service.jpg";
import EnterpriseSecurityImg from "@/assets/services/enterprise-security-service.jpg";
import digitalIdentityImg from "@/assets/services/digital-identity-service.jpg";
import grcImg from "@/assets/services/grc-service.jpg";
import incidentResponseImg from "@/assets/services/incident-response-service.jpg";
import pdpImg from "@/assets/services/data-protection-service.jpg";
import secureAiAdoptionImg from "@/assets/services/secure-ai-service.jpg";
import threadDetectionImg from "@/assets/services/threat-detection-service.jpg";
import vaptImg from "@/assets/services/vapt-service.jpg";
import serviceAssuranceImg from "@/assets/services/service-assurance-service.jpg";
import pkimg from "@/assets/services/pki-service.jpg";
import technologyAdvisoryImg from "@/assets/services/technology-advisory-service.jpg";
import serversImg from "@/assets/services/servers-service.jpg";
import storageImg from "@/assets/services/storage-service.jpg";
import dataCenterImg from "@/assets/services/datacenter-consolidation-service.jpg";
import networkingImg from "@/assets/services/networking-service.jpg";
import databaseImg from "@/assets/services/database-service.jpg";
import backupRestoreImg from "@/assets/services/backup-restore-service.jpg";
import disasterRecoveryImg from "@/assets/services/disaster-recovery-service.jpg";
import deploymentImg from "@/assets/services/deployment-migration-service.jpg";
import dataCenterConsolidationImg from "@/assets/services/datacenter-consolidation-service.jpg";
import serviceIprovementImg from "@/assets/services/service-improvement-service.jpg";
import continuousServiceImprovementImg from "@/assets/services/continuous-improvement-service.png";
import secureCloudImg from "@/assets/services/secure-cloud-service.jpg";
import cicdImg from "@/assets/services/cicd.jpg";
import integrationImg from "@/assets/services/integration.jpg";
import blockchainImg from "@/assets/services/blockchain.jpg";
import iotImg from "@/assets/services/iot.jpg";
import serviceDeliveryImg from "@/assets/services/service-delivery.jpg";
import dataMigrationImg from "@/assets/services/data-migration.jpg";
import dataBackupIMg from "@/assets/services/backup-restore-service.jpg";
import itsmImg from "@/assets/services/itsm.jpg";
import itomImg from "@/assets/services/itom.jpg";
import apmImg from "@/assets/services/apm.jpg";
import itServiceDeskImg from "@/assets/services/it-service-desk.jpg";
// import inclusiveComputingImg from "@/assets/services/inclusive-computing.jpg";
import enterpriseOperationImg from "@/assets/services/enterprise-operation.jpg";
import workloadDeploymentImg from "@/assets/services/workload-deployment.jpg";
import hostingImg from "@/assets/services/hosting-services.jpg";
import dataCenterSupportImg from "@/assets/services/datacenter-support.jpg";
import apiIntegrationImg from "@/assets/services/api-integration.jpg";
import eucImg from "@/assets/services/end-user-computing.jpg";
import firewallImg from "@/assets/services/firewall-service.jpg";
import vpnImg from "@/assets/services/vpn-service.jpg";
// Type Definitions
export interface Service {
  icon: LucideIcon;
  title: string;
  slug: string;
  description: string;
  image: string;
  gradient: string;
  category: string | string[];
  keywords?: string[];
}

export interface Category {
  name: string;
  description: string;
  id: string;
}

// All Services Configuration
export const servicesConfig: Service[] = [
  // Core Services
  {
    icon: Brain,
    title: "Artificial Intelligence",
    slug: "artificial-intelligence",
    description:
      "Production-grade AI systems leveraging LLMs, agents, and automation to drive intelligent decision-making and real business outcomes.",
    image: aiDataScienceImg,
    gradient: "from-accent/20 to-purple-500/5",
    category: "Core",
    keywords: [
      "AI",
      "artificial intelligence",
      "machine learning",
      "ML",
      "deep learning",
      "neural networks",
      "LLM",
      "large language models",
      "GPT",
      "AI agents",
      "intelligent automation",
      "cognitive computing",
      "AI systems",
      "natural language processing",
      "NLP",
      "computer vision",
      "predictive AI",
      "generative AI",
      "AI models",
      "AI deployment",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Science",
    slug: "data-science",
    description:
      "Scalable data platforms transforming raw data into actionable insights through analytics, modeling, and decision intelligence.",
    image: datascience,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "Core",
    keywords: [
      "data science",
      "analytics",
      "data analytics",
      "business intelligence",
      "BI",
      "data modeling",
      "statistical analysis",
      "predictive analytics",
      "data insights",
      "data visualization",
      "decision intelligence",
      "data platform",
      "data engineering",
      "ETL",
      "data pipeline",
      "data analysis",
      "reporting",
      "dashboards",
      "KPI",
      "metrics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    slug: "cloud-infrastructure",
    description:
      "Seamless hybrid cloud transitions with On-Prem modernization, secure migrations, and cost optimization.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Core",
    keywords: [
      "cloud",
      "cloud services",
      "cloud computing",
      "AWS",
      "Azure",
      "GCP",
      "Google Cloud",
      "hybrid cloud",
      "multi-cloud",
      "cloud migration",
      "cloud infrastructure",
      "on-premise",
      "on-prem",
      "cloud modernization",
      "cloud optimization",
      "cost optimization",
      "FinOps",
      "cloud native",
      "IaaS",
      "PaaS",
      "SaaS",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity & Resilience",
    slug: "cybersecurity",
    description:
      "Defense-in-Depth strategy with Zero Trust architecture, MDR, and Quantum-Safe encryption for complete protection.",
    image: cybersecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Core",
    keywords: [
      "cybersecurity",
      "security",
      "information security",
      "infosec",
      "cyber defense",
      "zero trust",
      "ZTA",
      "defense in depth",
      "MDR",
      "managed detection",
      "threat protection",
      "encryption",
      "quantum safe",
      "cyber resilience",
      "security architecture",
      "network security",
      "endpoint protection",
      "security monitoring",
      "SIEM",
      "SOC",
    ],
  },
  {
    image: devopsImg,
    icon: Settings,
    title: "DevOps",
    description:
      "Continuous integration and delivery pipelines with infrastructure as code and automated deployment workflows.",
    gradient: "from-emerald-500/20 to-green-500/5",
    slug: "devops",
    category: ["Core", "DevOps & Engineering"],
    keywords: [
      "DevOps",
      "CI/CD",
      "continuous integration",
      "continuous delivery",
      "continuous deployment",
      "infrastructure as code",
      "IaC",
      "automation",
      "deployment automation",
      "configuration management",
      "Ansible",
      "Terraform",
      "Jenkins",
      "GitLab",
      "GitHub Actions",
      "pipeline",
      "release management",
      "version control",
      "agile",
      "DevOps culture",
    ],
  },
  {
    icon: Code,
    title: "DevSecOps",
    slug: "devsecops",
    description:
      "Modern engineering practices with containerization, Kubernetes orchestration, and security-integrated CI/CD pipelines.",
    image: devsecopsImg,
    gradient: "from-emerald-500/20 to-green-500/5",
    category: "Core",
    keywords: [
      "DevSecOps",
      "security automation",
      "secure DevOps",
      "shift left security",
      "container security",
      "Kubernetes",
      "K8s",
      "Docker",
      "containerization",
      "orchestration",
      "secure CI/CD",
      "security pipeline",
      "SAST",
      "DAST",
      "security testing",
      "secure coding",
      "vulnerability management",
      "container scanning",
      "cloud native security",
    ],
  },
  {
    icon: Server,
    title: "Enterprise IT Infrastructure",
    slug: "it-infrastructure",
    description:
      "Robust and scalable infrastructure foundations covering compute, storage, networking, and enterprise systems reliability.",
    image: itInfrastructureImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "Core",
    keywords: [
      "IT infrastructure",
      "infrastructure",
      "servers",
      "storage",
      "networking",
      "compute",
      "data center",
      "enterprise infrastructure",
      "hardware",
      "infrastructure management",
      "systems",
      "IT operations",
      "infrastructure reliability",
      "scalability",
      "network infrastructure",
      "server management",
      "infrastructure services",
      "IT systems",
      "infrastructure design",
    ],
  },
  {
    icon: Headphones,
    title: "24×7 Managed Services",
    slug: "managed-services",
    description:
      "Your 'Always-On' IT department with proactive monitoring, automated patch management, and SLA-driven resolution.",
    image: managedServicesImg,
    gradient: "from-primary/20 to-primary/5",
    category: "Core",
    keywords: [
      "managed services",
      "24/7 support",
      "IT support",
      "monitoring",
      "proactive monitoring",
      "patch management",
      "SLA",
      "service level agreement",
      "helpdesk",
      "IT management",
      "managed IT",
      "always on",
      "NOC",
      "network operations",
      "incident management",
      "service desk",
      "remote monitoring",
      "maintenance",
      "IT outsourcing",
      "MSP",
    ],
  },
  {
    icon: Layers,
    title: "Application Services",
    slug: "application-services",
    description:
      "End-to-end application development, modernization, and lifecycle management aligned to business outcomes.",
    image: applicationServiceImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "Core",
    keywords: [
      "application services",
      "app development",
      "application modernization",
      "legacy modernization",
      "application management",
      "application lifecycle",
      "ALM",
      "app maintenance",
      "application support",
      "custom applications",
      "enterprise applications",
      "application portfolio",
      "app migration",
      "application integration",
      "application optimization",
    ],
  },
  {
    icon: Monitor,
    title: "Software Lifecycle Development",
    slug: "software-development",
    description:
      "Custom software solutions with modern frameworks, agile methodologies, and full-stack development expertise.",
    image: softwareDevelopmentImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "Core",
    keywords: [
      "software development",
      "custom software",
      "software engineering",
      "lifecycle",
      "full stack",
      "frontend",
      "backend",
      "web development",
      "mobile development",
      "agile",
      "scrum",
      "software design",
      "coding",
      "programming",
      "React",
      "Angular",
      "Node.js",
      "Python",
      "Java",
      "development team",
      "SDLC",
    ],
  },

  // AI & Automation
  {
    icon: Bot,
    title: "Agentic AI & AI Agents",
    slug: "agentic-ai",
    description:
      "Autonomous AI systems that plan, decide, and act to achieve complex goals with minimal supervision.",
    image: agenticAIImg,
    gradient: "from-violet-500/20 to-purple-500/5",
    category: "AI & Automation",
    keywords: [
      "agentic AI",
      "AI agents",
      "autonomous AI",
      "intelligent agents",
      "AI automation",
      "multi-agent systems",
      "agent orchestration",
      "autonomous systems",
      "goal-oriented AI",
      "AI planning",
      "decision making AI",
      "self-learning agents",
      "cognitive agents",
      "agent frameworks",
      "LangChain",
      "AutoGPT",
    ],
  },
  {
    icon: Workflow,
    title: "AI Workflow Automation",
    slug: "workflow-automation",
    description:
      "Intelligent process automation with AI agents, context-aware workflows, and end-to-end orchestration.",
    image: workflowAutomationImg,
    gradient: "from-fuchsia-500/20 to-pink-500/5",
    category: "AI & Automation",
    keywords: [
      "workflow automation",
      "process automation",
      "RPA",
      "robotic process automation",
      "intelligent automation",
      "business process automation",
      "BPA",
      "workflow orchestration",
      "process optimization",
      "automation platform",
      "no-code automation",
      "low-code",
      "hyperautomation",
      "digital workers",
      "task automation",
      "AI workflows",
    ],
  },
  {
    icon: Scale,
    title: "AI Governance",
    slug: "ai-governance",
    description:
      "Framework of policies and practices for responsible AI development, deployment, and compliance.",
    image: aiGovernanceImg,
    gradient: "from-amber-500/20 to-yellow-500/5",
    category: "AI & Automation",
    keywords: [
      "AI governance",
      "responsible AI",
      "AI ethics",
      "AI compliance",
      "AI policy",
      "AI frameworks",
      "AI accountability",
      "ethical AI",
      "AI regulations",
      "AI standards",
      "AI transparency",
      "explainable AI",
      "XAI",
      "AI fairness",
      "bias detection",
      "AI audit",
      "AI risk management",
      "trustworthy AI",
    ],
  },
  {
    icon: Shield,
    title: "AI Risk Mitigation",
    slug: "ai-risk-mitigation",
    description:
      "Comprehensive strategies to identify, assess, and mitigate risks in AI systems ensuring safe and ethical deployment.",
    image: airRiskImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "AI & Automation",
    keywords: [
      "AI risk",
      "AI safety",
      "risk mitigation",
      "AI security",
      "model risk",
      "AI vulnerabilities",
      "adversarial AI",
      "AI threats",
      "risk assessment",
      "AI testing",
      "model validation",
      "AI monitoring",
      "risk management",
      "AI controls",
      "model governance",
      "AI assurance",
      "safe AI deployment",
    ],
  },

  // Data & Analytics
  {
    icon: Warehouse,
    title: "Data Warehouse",
    slug: "data-warehouse",
    description:
      "Enterprise data warehousing solutions for centralized analytics, reporting, and business intelligence.",
    image: dataWarehouseImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Data & Analytics",
    keywords: [
      "data warehouse",
      "DWH",
      "data warehousing",
      "enterprise data",
      "Snowflake",
      "Redshift",
      "BigQuery",
      "data mart",
      "OLAP",
      "dimensional modeling",
      "star schema",
      "data integration",
      "EDW",
      "centralized data",
      "analytics platform",
      "BI platform",
      "data repository",
    ],
  },
  {
    icon: Link2,
    title: "Data Lake",
    slug: "data-lake",
    description:
      "Scalable data lake architecture for storing and processing structured and unstructured data at any scale.",
    image: dataLakeImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "Data & Analytics",
    keywords: [
      "data lake",
      "data lakehouse",
      "big data storage",
      "unstructured data",
      "structured data",
      "data storage",
      "Hadoop",
      "S3",
      "ADLS",
      "data platform",
      "data ingestion",
      "data processing",
      "Spark",
      "data mesh",
      "Delta Lake",
      "Iceberg",
      "scalable storage",
    ],
  },
  {
    icon: Database,
    title: "Data Migration",
    slug: "data-migration",
    description:
      "Seamless data migration services ensuring data integrity, minimal downtime, and successful transformation.",
    image: dataMigrationImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "Data & Analytics",
    keywords: [
      "data migration",
      "database migration",
      "cloud migration",
      "data transfer",
      "ETL migration",
      "legacy data migration",
      "data modernization",
      "migration services",
      "data transition",
      "zero downtime migration",
      "data integrity",
      "migration planning",
      "data consolidation",
      "system migration",
    ],
  },
  {
    icon: BarChart3,
    title: "Big Data",
    slug: "big-data",
    description:
      "Big data analytics and processing solutions for extracting insights from massive datasets.",
    image: bigData,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "Data & Analytics",
    keywords: [
      "big data",
      "big data analytics",
      "Hadoop",
      "Spark",
      "distributed computing",
      "data processing",
      "MapReduce",
      "NoSQL",
      "data science",
      "large scale data",
      "real-time analytics",
      "streaming data",
      "Kafka",
      "Flink",
      "data velocity",
      "data volume",
      "petabyte scale",
    ],
  },
  {
    icon: BarChart3,
    title: "Data Backup & Restoration",
    slug: "data-backup-restoration",
    description:
      "Comprehensive data backup and restoration services ensuring business continuity and data protection.",
    image: dataBackupIMg,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "Data & Analytics",
    keywords: [
      "data backup",
      "backup services",
      "data restoration",
      "data recovery",
      "backup and restore",
      "disaster recovery",
      "business continuity",
      "data protection",
      "backup solutions",
      "incremental backup",
      "full backup",
      "snapshot",
      "backup automation",
      "recovery point objective",
      "RPO",
      "RTO",
      "data archiving",
    ],
  },

  {
    icon: Layers,
    title: "Architecture & Engineering",
    slug: "architecture",
    description:
      "System design with cloud-native, event-driven, and security-first architectures.",
    image: architectureImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "DevOps & Engineering",
    keywords: [
      "system architecture",
      "solution architecture",
      "enterprise architecture",
      "cloud architecture",
      "cloud native",
      "microservices",
      "event-driven architecture",
      "EDA",
      "architecture design",
      "technical architecture",
      "security architecture",
      "scalable architecture",
      "distributed systems",
      "API design",
      "architectural patterns",
    ],
  },
  {
    icon: Wrench,
    title: "CI/CD Pipelines",
    slug: "cicd-pipelines",
    description:
      "Automated CI/CD pipelines for rapid, reliable, and secure software delivery.",
    image: cicdImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "DevOps & Engineering",
    keywords: [
      "CI/CD pipeline",
      "continuous integration",
      "continuous deployment",
      "build automation",
      "test automation",
      "deployment pipeline",
      "release pipeline",
      "automated testing",
      "Jenkins pipeline",
      "GitHub Actions",
      "GitLab CI",
      "CircleCI",
      "pipeline orchestration",
      "build and deploy",
      "delivery automation",
    ],
  },
  {
    icon: AppWindow,
    title: "Integration & Deployment",
    slug: "integration-deployment",
    description:
      "Seamless integration and deployment services for modern applications and infrastructure.",
    image: integrationImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "DevOps & Engineering",
    keywords: [
      "integration",
      "deployment",
      "system integration",
      "API integration",
      "application deployment",
      "service integration",
      "integration platform",
      "iPaaS",
      "deployment automation",
      "continuous deployment",
      "blue-green deployment",
      "canary deployment",
      "rolling deployment",
      "integration services",
      "deployment strategies",
    ],
  },

  // High-Tech Solutions
  {
    icon: Atom,
    title: "Quantum Computing",
    slug: "quantum-computing",
    description:
      "Strategic roadmap for quantum readiness including consulting, quantum-safe cryptography, and hybrid workflows.",
    image: quantumComputingImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "quantum computing",
      "quantum",
      "quantum algorithms",
      "quantum cryptography",
      "post-quantum",
      "quantum safe",
      "quantum readiness",
      "quantum consulting",
      "qubit",
      "quantum supremacy",
      "quantum simulation",
      "quantum machine learning",
      "QML",
      "quantum encryption",
      "quantum security",
    ],
  },
  {
    icon: Globe,
    title: "Web 3.0 Solutions",
    slug: "web3",
    description:
      "Decentralized solutions with blockchain, smart contracts, and tokenized digital economies.",
    image: web3Img,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "Web3",
      "Web 3.0",
      "blockchain",
      "decentralized",
      "DeFi",
      "NFT",
      "smart contracts",
      "cryptocurrency",
      "crypto",
      "dApp",
      "decentralized applications",
      "tokenization",
      "digital assets",
      "distributed ledger",
      "Ethereum",
      "Solidity",
      "metaverse",
      "DAO",
    ],
  },
  {
    icon: Building,
    title: "ERP",
    slug: "erp",
    description:
      "Enterprise Resource Planning implementation and optimization.",
    image: erpImg,
    gradient: "from-amber-500/20 to-orange-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "ERP",
      "enterprise resource planning",
      "SAP",
      "Oracle",
      "ERP implementation",
      "ERP integration",
      "business management",
      "ERP systems",
      "enterprise software",
      "ERP optimization",
      "ERP modernization",
      "financial management",
      "supply chain",
      "CRM",
      "ERP consulting",
    ],
  },
  {
    icon: Globe,
    title: "GCC",
    slug: "gcc-services",
    description: "Global Capability Center setup and management services.",
    image: gccImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "GCC",
      "Global Capability Center",
      "captive center",
      "offshore center",
      "delivery center",
      "shared services",
      "global delivery",
      "center of excellence",
      "COE",
      "offshore development",
      "global operations",
      "GIC",
      "Global In-house Center",
      "captive setup",
    ],
  },
  {
    icon: Globe,
    title: "Blockchain",
    slug: "blockchain-services",
    description: "Blockchain development and integration services.",
    image: blockchainImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "blockchain",
      "distributed ledger",
      "DLT",
      "blockchain development",
      "hyperledger",
      "private blockchain",
      "public blockchain",
      "blockchain integration",
      "cryptocurrency",
      "smart contracts",
      "consensus mechanism",
      "blockchain security",
      "blockchain consulting",
      "enterprise blockchain",
      "permissioned blockchain",
    ],
  },
  {
    icon: Globe,
    title: "Internet of Things (IoT)",
    slug: "iot-services",
    description: "IoT solutions for connected devices and smart systems.",
    image: iotImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "High-Tech Industry 4.0",
    keywords: [
      "IoT",
      "Internet of Things",
      "connected devices",
      "smart devices",
      "IoT platform",
      "edge computing",
      "sensors",
      "IoT analytics",
      "industrial IoT",
      "IIoT",
      "smart city",
      "smart home",
      "IoT security",
      "device management",
      "IoT gateway",
      "M2M",
      "machine to machine",
      "IoT integration",
    ],
  },

  // Security & Quality
  {
    icon: Shield,
    title: "Security Assessment",
    slug: "security-assessment",
    description:
      "Comprehensive security evaluations including penetration testing, risk analysis, and compliance assessments.",
    image: securityAssesmentImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Security & Quality",
    keywords: [
      "security assessment",
      "security audit",
      "penetration testing",
      "pen test",
      "security evaluation",
      "vulnerability assessment",
      "risk analysis",
      "security testing",
      "compliance assessment",
      "security review",
      "threat assessment",
      "security posture",
      "ethical hacking",
      "red team",
      "blue team",
    ],
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance & Testing",
    slug: "quality-assurance",
    description:
      "Automated testing and quality engineering for high-quality, secure, and reliable software systems.",
    image: qualityAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Security & Quality",
    keywords: [
      "QA",
      "quality assurance",
      "testing",
      "test automation",
      "automated testing",
      "quality engineering",
      "software testing",
      "test strategy",
      "functional testing",
      "performance testing",
      "load testing",
      "regression testing",
      "UAT",
      "unit testing",
      "integration testing",
      "Selenium",
      "test frameworks",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Audit & Reporting",
    slug: "audit-reporting",
    description:
      "Comprehensive compliance auditing, security reporting, and regulatory alignment services.",
    image: auditImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Security & Quality",
    keywords: [
      "audit",
      "compliance audit",
      "security audit",
      "IT audit",
      "reporting",
      "compliance reporting",
      "regulatory compliance",
      "SOC 2",
      "ISO 27001",
      "HIPAA",
      "GDPR",
      "PCI DSS",
      "audit services",
      "internal audit",
      "external audit",
      "audit framework",
      "compliance management",
    ],
  },
  {
    icon: Lock,
    title: "Vulnerability Scanning",
    slug: "vulnerability-scanning",
    description:
      "Continuous vulnerability detection and remediation with automated scanning and threat intelligence.",
    image: applicationSecurityImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "Security & Quality",
    keywords: [
      "vulnerability scanning",
      "vulnerability management",
      "security scanning",
      "vulnerability assessment",
      "automated scanning",
      "continuous scanning",
      "threat detection",
      "security vulnerabilities",
      "CVE",
      "vulnerability remediation",
      "patch management",
      "security monitoring",
      "Nessus",
      "Qualys",
      "vulnerability testing",
    ],
  },

  // Business Services
  {
    icon: UserCog,
    title: "HR & Staffing Services",
    slug: "hr-staffing",
    description:
      "IT workforce solutions with AI-driven talent acquisition, team augmentation, and dynamic workforce planning.",
    image: hrStaffingImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Business",
    keywords: [
      "hr",
      "human resources",
      "staffing",
      "recruitment",
      "talent acquisition",
      "hiring",
      "team augmentation",
      "staff augmentation",
      "workforce planning",
      "IT staffing",
      "contract staffing",
      "recruitment services",
      "talent management",
      "resource planning",
      "manpower",
      "IT recruitment",
      "technical hiring",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Project & Program Management",
    slug: "project-management",
    description:
      "Intelligent project delivery with AI analytics, automated workflows, and agile methodologies.",
    image: projectManagementImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Business",
    keywords: [
      "project management",
      "program management",
      "PMO",
      "project delivery",
      "agile project management",
      "scrum",
      "project planning",
      "PMP",
      "PRINCE2",
      "project execution",
      "project governance",
      "portfolio management",
      "project tracking",
      "delivery management",
      "project methodology",
      "project coordination",
    ],
  },
  {
    icon: Rocket,
    title: "Merger & Acquisition",
    slug: "merger-acquisition",
    description:
      "Strategic IT integration and transformation services for successful mergers, acquisitions, and divestitures.",
    image: mergerImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Business",
    keywords: [
      "M&A",
      "mergers and acquisitions",
      "IT integration",
      "post-merger integration",
      "PMI",
      "divestiture",
      "carve-out",
      "IT due diligence",
      "system integration",
      "business integration",
      "merger support",
      "acquisition integration",
      "IT consolidation",
      "integration strategy",
    ],
  },

  // digital Transformation
  {
    icon: Rocket,
    title: "Digital Transformation",
    slug: "digital-transformation",
    description:
      "End-to-end digital transformation using AI, automation, and cloud technologies for business agility.",
    image: digitalTransformationImg,
    gradient: "from-pink-500/20 to-rose-500/5",
    category: "Digital Transformation",
    keywords: [
      "digital transformation",
      "business transformation",
      "digital strategy",
      "transformation services",
      "modernization",
      "digital innovation",
      "enterprise transformation",
      "business agility",
      "digital enablement",
      "transformation roadmap",
      "change management",
      "digitalization",
      "digital adoption",
      "transformation consulting",
    ],
  },
  {
    icon: Activity,
    title: "AIOps",
    slug: "aiops",
    description:
      "AI-powered IT operations with automated monitoring, anomaly detection, and self-healing systems.",
    image: aiopsImg,
    gradient: "from-lime-500/20 to-green-500/5",
    category: "Digital Transformation",
    keywords: [
      "AIOps",
      "AI operations",
      "IT operations",
      "automated monitoring",
      "anomaly detection",
      "predictive analytics",
      "intelligent monitoring",
      "self-healing",
      "ML ops",
      "observability",
      "log analysis",
      "event correlation",
      "root cause analysis",
      "performance monitoring",
      "ITOps automation",
    ],
  },
  {
    icon: Activity,
    title: "Service Delivery",
    slug: "service-delivery",
    description:
      "Service delivery optimization using AI-driven insights and process automation.",
    image: serviceDeliveryImg,
    gradient: "from-lime-500/20 to-green-500/5",
    category: "Digital Transformation",
    keywords: [
      "service delivery",
      "IT service delivery",
      "service management",
      "ITIL",
      "service optimization",
      "delivery optimization",
      "service excellence",
      "operational excellence",
      "service performance",
      "delivery metrics",
      "service improvement",
      "delivery management",
      "SLA management",
      "service operations",
    ],
  },

  // Cloud Services Category
  {
    icon: Gauge,
    title: "Cloud Strategic",
    slug: "cloud-strategic",
    description:
      "Strategic cloud planning and roadmap development for enterprise transformation.",
    image: cloudInfrastructureImg,
    gradient: "from-blue-500/20 to-sky-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud strategy",
      "cloud planning",
      "cloud roadmap",
      "cloud transformation",
      "cloud consulting",
      "cloud advisory",
      "strategic planning",
      "cloud vision",
      "cloud architecture strategy",
      "multi-cloud strategy",
      "cloud adoption strategy",
      "cloud governance",
      "cloud framework",
    ],
  },
  {
    icon: CloudCog,
    title: "Cloud Orchestration",
    slug: "cloud-orchestration",
    description:
      "Multi-cloud management and orchestration for seamless operations.",
    image: cloudOrchestrationImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud orchestration",
      "multi-cloud",
      "cloud management",
      "orchestration platform",
      "cloud automation",
      "infrastructure orchestration",
      "workload orchestration",
      "cloud coordination",
      "hybrid cloud management",
      "cloud integration",
      "resource orchestration",
      "Kubernetes orchestration",
    ],
  },
  {
    icon: Rocket,
    title: "Cloud Adoption",
    slug: "cloud-adoption",
    description:
      "End-to-end cloud adoption frameworks and implementation strategies.",
    image: cloudAdoptionImg,
    gradient: "from-sky-500/20 to-cyan-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud adoption",
      "cloud onboarding",
      "cloud implementation",
      "cloud transition",
      "cloud journey",
      "adoption framework",
      "cloud readiness",
      "cloud enablement",
      "cloud first",
      "cloud transformation",
      "cloud deployment",
      "cloud setup",
      "AWS adoption",
      "Azure adoption",
    ],
  },
  {
    icon: ArrowUpCircle,
    title: "Cloud Secure Migration",
    slug: "cloud-migration",
    description:
      "Secure and seamless migration to cloud platforms with zero downtime.",
    image: cloudSecureImg,
    gradient: "from-indigo-500/20 to-blue-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud migration",
      "migration services",
      "lift and shift",
      "re-platforming",
      "cloud transition",
      "workload migration",
      "application migration",
      "data migration",
      "zero downtime migration",
      "secure migration",
      "migration strategy",
      "migration planning",
      "AWS migration",
      "Azure migration",
      "GCP migration",
    ],
  },
  {
    icon: RefreshCw,
    title: "Cloud Modernization",
    slug: "cloud-modernization",
    description: "Legacy system modernization using cloud-native technologies.",
    image: cloudModernizationImg,
    gradient: "from-violet-500/20 to-indigo-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud modernization",
      "application modernization",
      "legacy modernization",
      "cloud native",
      "refactoring",
      "re-architecting",
      "containerization",
      "microservices migration",
      "serverless",
      "modernization services",
      "platform modernization",
      "infrastructure modernization",
      "12-factor apps",
    ],
  },
  {
    icon: DollarSign,
    title: "Cloud Cost Optimization",
    slug: "cloud-cost-optimization",
    description: "FinOps practices and cloud cost management strategies.",
    image: cloudCostOptimizationImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud cost",
      "cost optimization",
      "FinOps",
      "cloud economics",
      "cost management",
      "cloud spending",
      "cost reduction",
      "resource optimization",
      "reserved instances",
      "spot instances",
      "right-sizing",
      "cost allocation",
      "cloud billing",
      "cost monitoring",
      "budget management",
      "cloud savings",
    ],
  },
  {
    icon: Lock,
    title: "Cloud Security",
    slug: "cloud-security",
    description:
      "Comprehensive cloud security posture management and protection.",
    image: cloudSecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud security",
      "CSPM",
      "cloud security posture",
      "cloud protection",
      "security in cloud",
      "AWS security",
      "Azure security",
      "GCP security",
      "cloud compliance",
      "identity and access",
      "IAM",
      "cloud encryption",
      "security monitoring",
      "threat detection",
      "CASB",
      "cloud firewall",
    ],
  },
  {
    icon: Settings,
    title: "Cloud Operations",
    slug: "cloud-operations",
    description: "24/7 cloud operations, monitoring, and management services.",
    image: cloudOperationImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "Cloud 3.0",
    keywords: [
      "cloud operations",
      "CloudOps",
      "cloud management",
      "cloud monitoring",
      "cloud maintenance",
      "operational support",
      "24/7 support",
      "cloud administration",
      "cloud performance",
      "cloud reliability",
      "incident management",
      "change management",
      "cloud observability",
      "managed cloud",
    ],
  },
  {
    icon: CloudOff,
    title: "Private Cloud",
    slug: "private-cloud",
    description: "Private cloud design, deployment, and management solutions.",
    image: privateCloudImg,
    gradient: "from-purple-500/20 to-violet-500/5",
    category: "Cloud 3.0",
    keywords: [
      "private cloud",
      "on-premise cloud",
      "dedicated cloud",
      "enterprise cloud",
      "VMware",
      "OpenStack",
      "private infrastructure",
      "hosted private cloud",
      "cloud hosting",
      "isolated cloud",
      "internal cloud",
      "single-tenant",
      "private cloud services",
      "cloud deployment",
    ],
  },
  {
    icon: Combine,
    title: "Hybrid Cloud",
    slug: "hybrid-cloud",
    description:
      "Hybrid cloud architecture connecting on-premise and cloud environments.",
    image: hybridCloudImg,
    gradient: "from-blue-500/20 to-purple-500/5",
    category: "Cloud 3.0",
    keywords: [
      "hybrid cloud",
      "hybrid infrastructure",
      "multi-cloud",
      "cloud hybrid",
      "on-prem and cloud",
      "hybrid architecture",
      "cloud bursting",
      "hybrid deployment",
      "hybrid integration",
      "edge to cloud",
      "distributed cloud",
      "hybrid connectivity",
      "hybrid management",
      "Azure Stack",
      "AWS Outposts",
    ],
  },

  // Cybersecurity Category
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    slug: "enterprise-security",
    description:
      "Comprehensive enterprise security architecture and implementation.",
    image: EnterpriseSecurityImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "Cybersecurity",
    keywords: [
      "enterprise security",
      "security architecture",
      "corporate security",
      "organization security",
      "security framework",
      "security strategy",
      "perimeter security",
      "endpoint security",
      "network security",
      "application security",
      "security infrastructure",
      "enterprise protection",
      "security solutions",
      "comprehensive security",
    ],
  },
  {
    icon: UserCheck,
    title: "Digital Identity Management",
    slug: "digital-identity",
    description: "IAM solutions, SSO, and identity governance frameworks.",
    image: digitalIdentityImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "Cybersecurity",
    keywords: [
      "identity management",
      "IAM",
      "identity and access",
      "SSO",
      "single sign-on",
      "identity governance",
      "access management",
      "authentication",
      "authorization",
      "MFA",
      "multi-factor authentication",
      "identity security",
      "privileged access",
      "PAM",
      "identity lifecycle",
      "federated identity",
      "Okta",
      "Active Directory",
    ],
  },
  {
    icon: Scale,
    title: "GRC",
    slug: "grc",
    description: "Governance, Risk, and Compliance management solutions.",
    image: grcImg,
    gradient: "from-amber-500/20 to-yellow-500/5",
    category: "Cybersecurity",
    keywords: [
      "GRC",
      "governance",
      "risk management",
      "compliance",
      "regulatory compliance",
      "compliance management",
      "risk assessment",
      "compliance framework",
      "policy management",
      "audit management",
      "risk mitigation",
      "compliance monitoring",
      "governance framework",
      "enterprise risk",
      "compliance reporting",
    ],
  },
  {
  icon: Lock,
  title: "VPN Services",
  slug: "vpn-services",
  description: "Secure and encrypted remote access solutions enabling safe connectivity for employees, partners, and distributed teams.",
  image: vpnImg,
  gradient: "from-indigo-500/20 to-blue-500/5",
  category: "Cybersecurity",
  keywords: [
    "VPN services",
    "virtual private network",
    "remote access VPN",
    "site-to-site VPN",
    "enterprise VPN",
    "secure connectivity",
    "encrypted network access",
    "remote workforce security",
    "zero trust access",
    "cloud VPN",
    "business VPN",
    "network encryption",
    "secure tunneling"
  ]
},
{
  icon: Shield,
  title: "Firewall Services",
  slug: "firewall-services",
  description: "Advanced firewall solutions designed to monitor, control, and protect enterprise networks from internal and external threats.",
  image: firewallImg,
  gradient: "from-red-500/20 to-orange-500/5",
  category: "Cybersecurity",
  keywords: [
    "firewall services",
    "network firewall",
    "next generation firewall",
    "NGFW",
    "perimeter security",
    "intrusion prevention",
    "IDS/IPS",
    "network traffic filtering",
    "threat detection",
    "cybersecurity",
    "cloud firewall",
    "enterprise security",
    "network protection"
  ]
},


  {
    icon: AlertTriangle,
    title: "Incident Response & Recovery",
    slug: "incident-response",
    description: "24/7 incident response and business continuity planning.",
    image: incidentResponseImg,
    gradient: "from-orange-500/20 to-red-500/5",
    category: "Cybersecurity",
    keywords: [
      "incident response",
      "IR",
      "incident management",
      "security incident",
      "breach response",
      "cyber incident",
      "incident handling",
      "forensics",
      "digital forensics",
      "disaster recovery",
      "business continuity",
      "BCDR",
      "recovery planning",
      "incident investigation",
      "emergency response",
      "crisis management",
    ],
  },
  {
    icon: FileText,
    title: "Privacy & Data Protection",
    slug: "data-protection",
    description: "Data privacy compliance and protection strategies.",
    image: pdpImg,
    gradient: "from-green-500/20 to-teal-500/5",
    category: "Cybersecurity",
    keywords: [
      "data privacy",
      "data protection",
      "privacy compliance",
      "GDPR",
      "CCPA",
      "privacy law",
      "PII protection",
      "personal data",
      "privacy framework",
      "data governance",
      "privacy by design",
      "consent management",
      "data security",
      "privacy policy",
      "data rights",
      "privacy management",
    ],
  },
  {
    icon: Brain,
    title: "Secure AI Adoption",
    slug: "secure-ai",
    description: "AI security frameworks and responsible AI implementation.",
    image: secureAiAdoptionImg,
    gradient: "from-purple-500/20 to-violet-500/5",
    category: "Cybersecurity",
    keywords: [
      "AI security",
      "secure AI",
      "AI safety",
      "responsible AI",
      "AI risk",
      "ML security",
      "model security",
      "AI governance",
      "AI compliance",
      "secure machine learning",
      "AI threat",
      "adversarial ML",
      "AI privacy",
      "AI protection",
      "trustworthy AI",
      "AI assurance",
    ],
  },
  {
    icon: Radar,
    title: "Threat Detection & Response",
    slug: "threat-detection",
    description: "Advanced threat detection, SOC, and MDR services.",
    image: threadDetectionImg,
    gradient: "from-red-500/20 to-pink-500/5",
    category: "Cybersecurity",
    keywords: [
      "threat detection",
      "threat hunting",
      "MDR",
      "managed detection",
      "SOC",
      "security operations center",
      "threat intelligence",
      "threat response",
      "EDR",
      "endpoint detection",
      "XDR",
      "SIEM",
      "security monitoring",
      "threat analysis",
      "cyber threat",
      "threat management",
      "security alerts",
    ],
  },
  {
    icon: Search,
    title: "VAPT",
    slug: "vapt",
    description: "Vulnerability Assessment and Penetration Testing services.",
    image: vaptImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "Cybersecurity",
    keywords: [
      "VAPT",
      "vulnerability assessment",
      "penetration testing",
      "pen test",
      "security testing",
      "ethical hacking",
      "vulnerability scan",
      "security assessment",
      "penetration test",
      "security audit",
      "web app testing",
      "network testing",
      "API testing",
      "mobile app testing",
      "red team",
      "white hat",
    ],
  },
  {
    icon: Cloud,
    title: "Secure Cloud Transformation",
    slug: "secure-cloud",
    description: "Security-first cloud migration and transformation.",
    image: secureCloudImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Cybersecurity",
    keywords: [
      "secure cloud",
      "cloud security",
      "secure migration",
      "secure transformation",
      "cloud security architecture",
      "security in cloud",
      "cloud protection",
      "secure cloud adoption",
      "zero trust cloud",
      "cloud security strategy",
      "secure workloads",
      "cloud hardening",
      "security controls",
    ],
  },
  {
    icon: Layers,
    title: "Service Assurance",
    slug: "service-assurance",
    description:
      "Security service quality assurance and compliance monitoring.",
    image: serviceAssuranceImg,
    gradient: "from-teal-500/20 to-emerald-500/5",
    category: "Cybersecurity",
    keywords: [
      "service assurance",
      "security assurance",
      "quality assurance",
      "compliance monitoring",
      "service validation",
      "security validation",
      "assurance services",
      "service quality",
      "security compliance",
      "continuous compliance",
      "assurance testing",
      "service reliability",
      "security metrics",
    ],
  },
  {
    icon: KeyRound,
    title: "PKI",
    slug: "pki",
    description: "Public Key Infrastructure design and management.",
    image: pkimg,
    gradient: "from-indigo-500/20 to-purple-500/5",
    category: "Cybersecurity",
    keywords: [
      "PKI",
      "public key infrastructure",
      "certificate management",
      "digital certificates",
      "SSL/TLS",
      "encryption",
      "cryptography",
      "certificate authority",
      "CA",
      "key management",
      "digital signature",
      "certificate lifecycle",
      "PKI services",
      "certificate issuance",
      "encryption keys",
    ],
  },

  // IT Infrastructure Category
  {
    icon: Gauge,
    title: "Technology Advisory",
    slug: "technology-advisory",
    description: "Strategic technology consulting and advisory services.",
    image: technologyAdvisoryImg,
    gradient: "from-blue-500/20 to-indigo-500/5",
    category: "IT Infrastructure",
    keywords: [
      "technology advisory",
      "IT consulting",
      "technology consulting",
      "strategic advisory",
      "IT strategy",
      "technology roadmap",
      "digital advisory",
      "technology guidance",
      "IT planning",
      "technology assessment",
      "advisory services",
      "technology recommendations",
      "CTO advisory",
      "IT advisor",
    ],
  },
  {
    icon: Server,
    title: "Servers",
    slug: "servers",
    description: "Server infrastructure design, deployment, and management.",
    image: serversImg,
    gradient: "from-slate-500/20 to-gray-500/5",
    category: "IT Infrastructure",
    keywords: [
      "servers",
      "server management",
      "server infrastructure",
      "physical servers",
      "virtual servers",
      "server deployment",
      "server configuration",
      "bare metal",
      "server administration",
      "server maintenance",
      "Dell servers",
      "HP servers",
      "blade servers",
      "rack servers",
      "server hosting",
    ],
  },
  {
    icon: HardDrive,
    title: "Storage",
    slug: "storage",
    description: "Enterprise storage solutions and data management.",
    image: storageImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "IT Infrastructure",
    keywords: [
      "storage",
      "data storage",
      "storage solutions",
      "SAN",
      "NAS",
      "storage area network",
      "network attached storage",
      "storage management",
      "disk storage",
      "flash storage",
      "cloud storage",
      "object storage",
      "block storage",
      "file storage",
      "storage architecture",
      "NetApp",
      "EMC",
    ],
  },
  {
    icon: Building,
    title: "Data Center Consolidation",
    slug: "datacenter-consolidation",
    description: "Data center optimization and consolidation strategies.",
    image: dataCenterImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "IT Infrastructure",
    keywords: [
      "data center consolidation",
      "DC consolidation",
      "infrastructure consolidation",
      "data center optimization",
      "server consolidation",
      "facility consolidation",
      "consolidation strategy",
      "data center migration",
      "infrastructure rationalization",
      "consolidation planning",
      "DC modernization",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    slug: "networking",
    description: "Enterprise networking design and implementation.",
    image: networkingImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "IT Infrastructure",
    keywords: [
      "networking",
      "network infrastructure",
      "network design",
      "network implementation",
      "LAN",
      "WAN",
      "SD-WAN",
      "network architecture",
      "switches",
      "routers",
      "firewalls",
      "network security",
      "Cisco",
      "network configuration",
      "network management",
      "wireless networking",
      "WiFi",
    ],
  },
  {
    icon: Database,
    title: "Database",
    slug: "database",
    description: "Database administration, optimization, and migration.",
    image: databaseImg,
    gradient: "from-purple-500/20 to-indigo-500/5",
    category: "IT Infrastructure",
    keywords: [
      "database",
      "database management",
      "DBA",
      "database administration",
      "SQL",
      "NoSQL",
      "database optimization",
      "database migration",
      "Oracle",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "database design",
      "database performance",
      "database backup",
      "RDBMS",
    ],
  },
  {
    icon: DatabaseBackup,
    title: "Backup & Restore",
    slug: "backup-restore",
    description: "Enterprise backup solutions and recovery services.",
    image: backupRestoreImg,
    gradient: "from-teal-500/20 to-cyan-500/5",
    category: "IT Infrastructure",
    keywords: [
      "backup",
      "restore",
      "backup and recovery",
      "data backup",
      "backup solutions",
      "disaster recovery backup",
      "backup services",
      "backup management",
      "incremental backup",
      "differential backup",
      "full backup",
      "backup automation",
      "Veeam",
      "Commvault",
      "backup strategy",
      "data recovery",
    ],
  },
  {
    icon: ArchiveRestore,
    title: "Disaster Recovery",
    slug: "disaster-recovery",
    description: "DR planning, implementation, and testing.",
    image: disasterRecoveryImg,
    gradient: "from-red-500/20 to-orange-500/5",
    category: "IT Infrastructure",
    keywords: [
      "disaster recovery",
      "DR",
      "business continuity",
      "DR planning",
      "DR testing",
      "failover",
      "recovery planning",
      "DRaaS",
      "disaster recovery as a service",
      "DR site",
      "hot site",
      "cold site",
      "warm site",
      "recovery strategy",
      "DR solution",
      "continuity planning",
    ],
  },
  {
    icon: Truck,
    title: "Deployment, Upgradation & Migration",
    slug: "deployment-migration",
    description: "Infrastructure deployment and migration services.",
    image: deploymentImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "IT Infrastructure",
    keywords: [
      "deployment",
      "upgradation",
      "migration",
      "infrastructure deployment",
      "system deployment",
      "upgrade services",
      "migration services",
      "technology upgrade",
      "infrastructure migration",
      "deployment planning",
      "rollout",
      "implementation",
      "system upgrade",
      "platform migration",
    ],
  },
  {
    icon: Server,
    title: "Data Center",
    slug: "data-center",
    description: "Data center design, build, and management.",
    image: dataCenterConsolidationImg,
    gradient: "from-blue-500/20 to-sky-500/5",
    category: "IT Infrastructure",
    keywords: [
      "data center",
      "datacenter",
      "DC",
      "data center design",
      "data center management",
      "colocation",
      "colo",
      "data center operations",
      "facility management",
      "data center infrastructure",
      "DC services",
      "tier 3",
      "tier 4",
      "data center build",
      "modular data center",
      "edge data center",
    ],
  },
  {
    icon: Box,
    title: "Workload Deployment",
    slug: "workload-deployment",
    description:
      "End-to-end workload deployment across on-prem, cloud, and hybrid environments ensuring scalability, reliability, and performance optimization.",
    image: workloadDeploymentImg,
    gradient: "from-indigo-500/20 to-violet-500/5",
    category: "IT Infrastructure",
    keywords: [
      "workload deployment",
      "application deployment",
      "cloud workload",
      "hybrid workload",
      "on-prem deployment",
      "infrastructure deployment",
      "workload migration",
      "enterprise workloads",
      "compute deployment",
    ],
  },
  {
    icon: Wrench,
    title: "Data Center Support",
    slug: "datacenter-support",
    description:
      "Comprehensive data center support services covering operations, maintenance, monitoring, and infrastructure lifecycle management.",
    image: dataCenterSupportImg,
    gradient: "from-orange-500/20 to-amber-500/5",
    category: "IT Infrastructure",
    keywords: [
      "data center support",
      "datacenter operations",
      "DC support",
      "infrastructure maintenance",
      "facility management",
      "data center monitoring",
      "hardware support",
      "enterprise data center",
    ],
  },
  {
    icon: Cloud,
    title: "Hosting Services",
    slug: "hosting-services",
    description:
      "Secure and scalable managed hosting and cloud hosting solutions designed for high availability, performance, and cost efficiency.",
    image: hostingImg,
    gradient: "from-cyan-500/20 to-blue-500/5",
    category: "IT Infrastructure",
    keywords: [
      "hosting services",
      "managed hosting",
      "cloud hosting",
      "enterprise hosting",
      "application hosting",
      "infrastructure hosting",
      "secure hosting",
      "high availability hosting",
    ],
  },
  {
    icon: Layers,
    title: "API Integration",
    slug: "api-integration",
    description:
      "Secure and scalable API integration services enabling seamless system connectivity, data exchange, and platform interoperability.",
    image: apiIntegrationImg,
    gradient: "from-sky-500/20 to-blue-500/5",
    category: "IT Infrastructure",
    keywords: [
      "API integration",
      "system integration",
      "REST API",
      "third-party integration",
      "enterprise integration",
      "microservices integration",
      "platform interoperability",
      "data integration",
    ],
  },

  // management services

  {
    icon: Building,
    title: "Enterprise Operation",
    slug: "enterprise-operation",
    description:
      "End-to-end enterprise operations management and NOC services.",
    image: enterpriseOperationImg,
    gradient: "from-purple-500/20 to-violet-500/5",
    category: "Management",
    keywords: [
      "enterprise operations",
      "NOC",
      "network operations center",
      "enterprise management",
      "24/7 monitoring",
      "operations center",
      "incident management",
      "managed operations",
      "enterprise IT operations",
      "operations management",
      "business operations",
      "IT operations",
      "NOC services",
      "enterprise monitoring",
      "operations support",
      "managed NOC",
    ],
  },
  {
    icon: Settings,
    title: "ITSM",
    slug: "itsm",
    description: "IT Service Management with ITIL best practices.",
    image: itsmImg,
    gradient: "from-indigo-500/20 to-blue-500/5",
    category: "Management",
    keywords: [
      "ITSM",
      "IT service management",
      "ITIL",
      "service desk",
      "incident management",
      "change management",
      "problem management",
      "service catalog",
      "service lifecycle",
      "ITIL framework",
      "service management",
      "IT governance",
      "ITIL v3",
      "ITIL v4",
      "service strategy",
      "ITSM platform",
    ],
  },
  {
    icon: Activity,
    title: "ITOM",
    slug: "itom",
    description: "IT Operations Management with AIOps and unified monitoring.",
    image: itomImg,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "Management",
    keywords: [
      "ITOM",
      "IT operations management",
      "AIOps",
      "monitoring",
      "observability",
      "infrastructure monitoring",
      "performance monitoring",
      "unified monitoring",
      "operations analytics",
      "IT automation",
      "predictive analytics",
      "event management",
      "log management",
      "ITOM platform",
      "operational intelligence",
      "IT ops",
    ],
  },
  {
    icon: Monitor,
    title: "APM",
    slug: "apm",
    description: "Application Performance Management and real-time analytics.",
    image: apmImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "Management",
    keywords: [
      "APM",
      "application performance monitoring",
      "performance management",
      "real-time analytics",
      "application monitoring",
      "performance metrics",
      "user experience monitoring",
      "transaction monitoring",
      "app performance",
      "performance analytics",
      "end-user monitoring",
      "APM tools",
      "application analytics",
      "performance optimization",
      "real-time APM",
      "distributed tracing",
    ],
  },
  {
    icon: Monitor,
    title: "End-User Computing",
    slug: "end-user-computing",
    description:
      "VDI, DaaS, and secure digital workspace solutions that enable seamless access, productivity, and collaboration for modern enterprises.",
    image: eucImg,
    gradient: "from-blue-500/20 to-cyan-500/5",
    category: "Management",
    keywords: [
      "end-user computing",
      "EUC",
      "VDI",
      "virtual desktop infrastructure",
      "DaaS",
      "desktop as a service",
      "digital workspace",
      "remote work solutions",
      "secure workspace",
      "enterprise mobility",
      "endpoint management",
      "user experience",
      "workspace virtualization",
      "modern workplace",
      "cloud desktops",
    ],
  },

  {
    icon: HeadphonesIcon,
    title: "IT Service Desk",
    slug: "it-service-desk",
    description: "Tiered IT support with L1, L2, L3 coverage.",
    image: itServiceDeskImg,
    gradient: "from-rose-500/20 to-pink-500/5",
    category: "Management",
    keywords: [
      "IT service desk",
      "L1 support",
      "L2 support",
      "L3 support",
      "tiered support",
      "technical support",
      "IT assistance",
      "escalation management",
      "help desk services",
      "IT helpdesk",
      "support tiers",
      "multi-tier support",
      "level 1 support",
      "level 2 support",
      "level 3 support",
      "IT support levels",
    ],
  },
  // {
  //   icon: Accessibility,
  //   title: "Inclusive Computing",
  //   slug: "inclusive-computing",
  //   description: "Accessibility-focused IT support and assistive technology.",
  //   image: inclusiveComputingImg,
  //   gradient: "from-sky-500/20 to-blue-500/5",
  //   category: "Management",
  //   keywords: [
  //     "inclusive computing",
  //     "accessibility",
  //     "assistive technology",
  //     "accessible IT",
  //     "inclusive technology",
  //     "disability support",
  //     "screen readers",
  //     "adaptive technology",
  //     "WCAG",
  //     "ADA compliance",
  //     "digital accessibility",
  //     "accessible computing",
  //     "accessibility services",
  //     "inclusive design",
  //     "assistive devices",
  //     "accessibility support",
  //   ],
  // },

  // Value Add Services Category
  {
    icon: Sparkles,
    title: "Service Improvement",
    slug: "service-improvement",
    description: "IT service improvement and optimization initiatives.",
    image: serviceIprovementImg,
    gradient: "from-cyan-500/20 to-teal-500/5",
    category: "Value Add",
    keywords: [
      "service improvement",
      "IT improvement",
      "process improvement",
      "service optimization",
      "continuous improvement",
      "service enhancement",
      "operational improvement",
      "efficiency improvement",
      "improvement initiatives",
      "service quality",
      "optimization",
      "performance improvement",
      "service excellence",
    ],
  },
  {
    icon: RefreshCcw,
    title: "Continuous Service Improvement",
    slug: "continuous-improvement",
    description: "ITIL-based continuous service improvement programs.",
    image: continuousServiceImprovementImg,
    gradient: "from-green-500/20 to-emerald-500/5",
    category: "Value Add",
    keywords: [
      "continuous service improvement",
      "CSI",
      "ITIL",
      "continual improvement",
      "service management",
      "ITSM",
      "improvement program",
      "service lifecycle",
      "ITIL framework",
      "process optimization",
      "service metrics",
      "KPI improvement",
      "lean IT",
      "service maturity",
      "improvement cycle",
    ],
  },
];

// Categories Configuration
export const categoriesConfig: Category[] = [
  {
    name: "Core",
    description: "Our flagship technology services",
    id: "core",
  },
  {
    name: "AI & Automation",
    description: "Intelligent solutions for the future",
    id: "ai-automation",
  },
  {
    name: "Data & Analytics",
    description: "Data-driven insights and intelligence",
    id: "data-analytics",
  },
  {
    name: "DevOps & Engineering",
    description: "Modern development and operations",
    id: "devops-engineering",
  },
  {
    name: "High-Tech Industry 4.0",
    description: "Advanced emerging technologies",
    id: "hightech-solutions",
  },
  {
    name: "Management",
    description:
      "Leadership-driven strategies, governance frameworks, and operational excellence to align technology, processes, and business goals.",
    id: "management",
  },
  {
    name: "Security & Quality",
    description: "Protection, compliance, and quality",
    id: "security-quality",
  },
  {
    name: "Business",
    description: "People and project delivery",
    id: "business-services",
  },
  {
    name: "Digital Transformation",
    description: "Transform your organization",
    id: "digital-transformation",
  },
  {
    name: "Cloud 3.0",
    description: "Comprehensive cloud solutions and services",
    id: "cloud-services",
  },
  {
    name: "Cybersecurity",
    description: "Advanced security and resilience services",
    id: "cybersecurity",
  },
  {
    name: "IT Infrastructure",
    description: "Enterprise infrastructure solutions",
    id: "it-infrastructure",
  },
  {
    name: "Value Add",
    description: "Continuous improvement and optimization",
    id: "value-add-services",
  },
];

// Category ID Mapping
export const categoryIdMap: Record<string, string> = {
  Core: "core",
  "AI & Automation": "ai-automation",
  "Data & Analytics": "data-analytics",
  "DevOps & Engineering": "devops-engineering",
  "High-Tech Industry 4.0": "hightech-solutions",
  "Security & Quality": "security-quality",
  Business: "business-services",
  "Digital Transformation": "digital-transformation",
  "Cloud 3.0": "cloud-services",
  Management: "management",
  Cybersecurity: "cybersecurity",
  "IT Infrastructure": "it-infrastructure",
  "Value Add": "value-add-services",
};

// Utility Functions

// Get all services
export const getAllServices = (): Service[] => servicesConfig;

// Get services by category
export const getServicesByCategory = (category: string): Service[] => {
  return servicesConfig.filter((service) => {
    // Handle both string and array categories
    if (Array.isArray(service.category)) {
      return service.category.includes(category);
    }
    return service.category === category;
  });
};

export const getServiceCategories = (slug: string): string[] => {
  const service = getServiceBySlug(slug);
  if (!service) return [];

  return Array.isArray(service.category)
    ? service.category
    : [service.category];
};

export const serviceHasCategory = (
  service: Service,
  category: string,
): boolean => {
  if (Array.isArray(service.category)) {
    return service.category.includes(category);
  }
  return service.category === category;
};

// Get service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return servicesConfig.find((service) => service.slug === slug);
};

// Search services by keyword
export const searchServices = (query: string): Service[] => {
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return servicesConfig;

  const scoredServices = servicesConfig.map((service) => {
    let score = 0;

    const lowerTitle = service.title.toLowerCase();
    const lowerDesc = service.description.toLowerCase();
    const lowerSlug = service.slug.toLowerCase();

    // Handle categories as array
    const categories = Array.isArray(service.category)
      ? service.category
      : [service.category];

    // Title matching (unchanged)
    if (lowerTitle === lowerQuery) {
      score += 1000;
    } else if (lowerTitle.startsWith(lowerQuery)) {
      score += 500;
    } else if (
      new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(lowerTitle)
    ) {
      score += 300;
    } else if (lowerTitle.includes(lowerQuery)) {
      score += 150;
    }

    // Keyword matching (unchanged)
    if (service.keywords) {
      const exactKeywordMatch = service.keywords.some(
        (keyword) => keyword.toLowerCase() === lowerQuery,
      );
      if (exactKeywordMatch) score += 800;

      const keywordStartsMatch = service.keywords.some((keyword) =>
        keyword.toLowerCase().startsWith(lowerQuery),
      );
      if (keywordStartsMatch) score += 200;

      const keywordWordMatch = service.keywords.some((keyword) =>
        new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(
          keyword.toLowerCase(),
        ),
      );
      if (keywordWordMatch) score += 100;

      const keywordPartialMatch = service.keywords.some((keyword) =>
        keyword.toLowerCase().includes(lowerQuery),
      );
      if (keywordPartialMatch) score += 50;
    }

    // Slug matching (unchanged)
    if (lowerSlug === lowerQuery) {
      score += 250;
    } else if (lowerSlug.startsWith(lowerQuery)) {
      score += 120;
    } else if (lowerSlug.includes(lowerQuery)) {
      score += 60;
    }

    // Category matching - UPDATED to handle arrays
    const categoryMatch = categories.some((cat) => {
      const lowerCat = cat.toLowerCase();
      return lowerCat === lowerQuery || lowerCat.includes(lowerQuery);
    });

    if (categoryMatch) {
      const exactMatch = categories.some(
        (cat) => cat.toLowerCase() === lowerQuery,
      );
      score += exactMatch ? 80 : 40;
    }

    // Description matching (unchanged)
    if (new RegExp(`\\b${escapeRegex(lowerQuery)}\\b`).test(lowerDesc)) {
      score += 30;
    } else if (lowerDesc.includes(lowerQuery)) {
      score += 15;
    }

    // Bonuses (unchanged)
    if (score > 0 && lowerTitle.length < 20) {
      score += 20;
    }

    const queryWords = lowerQuery.split(/\s+/);
    if (queryWords.length > 1) {
      const allWordsInTitle = queryWords.every((word) =>
        lowerTitle.includes(word),
      );
      const allWordsInKeywords =
        service.keywords &&
        queryWords.every((word) =>
          service.keywords!.some((keyword) =>
            keyword.toLowerCase().includes(word),
          ),
        );

      if (allWordsInTitle) score += 100;
      if (allWordsInKeywords) score += 50;
    }

    return { service, score };
  });

  return scoredServices
    .filter((item) => item.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.service.title.length - b.service.title.length;
    })
    .map((item) => item.service);
};

// Helper function to escape special regex characters
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/* 
SCORING BREAKDOWN:
==================
Title exact match:        1000 points
Title starts with:         500 points
Title whole word:          300 points
Title contains:            150 points

Keyword exact match:       400 points
Keyword starts with:       200 points
Keyword whole word:        100 points
Keyword contains:           50 points

Slug exact match:          250 points
Slug starts with:          120 points
Slug contains:              60 points

Category exact:             80 points
Category contains:          40 points

Description whole word:     30 points
Description contains:       15 points

Short title bonus:          20 points
Multi-word match bonus:    100 points (title) / 50 points (keywords)

EXAMPLES:
=========
Search "hr" → "HR & Staffing Services" scores 1000+ (exact keyword match + title contains)
Search "HR" → Same result (case-insensitive)
Search "data" → "Data Science" scores higher than others due to title position
Search "ai" → "Artificial Intelligence" scores highest, "Agentic AI" second
Search "cloud security" → Multi-word bonus ensures best matches come first
*/

// Get all categories
export const getAllCategories = (): Category[] => categoriesConfig;

// Get category by ID
export const getCategoryById = (id: string): Category | undefined => {
  return categoriesConfig.find((cat) => cat.id === id);
};

// Get service count by category
export const getServiceCountByCategory = (category: string): number => {
  return servicesConfig.filter((service) => {
    if (Array.isArray(service.category)) {
      return service.category.includes(category);
    }
    return service.category === category;
  }).length;
};

// Get featured services (first N services from Core category)
export const getFeaturedServices = (count: number = 6): Service[] => {
  return servicesConfig
    .filter((s) => {
      if (Array.isArray(s.category)) {
        return s.category.includes("Core");
      }
      return s.category === "Core";
    })
    .slice(0, count);
};

// Get related services (same category, excluding current)
export const getRelatedServices = (
  slug: string,
  count: number = 3,
): Service[] => {
  const current = getServiceBySlug(slug);
  if (!current) return [];

  const currentCategories = Array.isArray(current.category)
    ? current.category
    : [current.category];

  return servicesConfig
    .filter((s) => {
      if (s.slug === slug) return false;

      const serviceCategories = Array.isArray(s.category)
        ? s.category
        : [s.category];

      // Check if any category matches
      return serviceCategories.some((cat) => currentCategories.includes(cat));
    })
    .slice(0, count);
};

// Export default object
export default {
  services: servicesConfig,
  categories: categoriesConfig,
  categoryIdMap,
  getAllServices,
  serviceHasCategory,
  getServicesByCategory,
  getServiceBySlug,
  searchServices,
  getAllCategories,
  getCategoryById,
  getServiceCountByCategory,
  getFeaturedServices,
  getRelatedServices,
};
