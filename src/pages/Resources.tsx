import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FadeInUp, HoverScale, StaggerContainer } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Tag, Search, X, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Resource {
  id: number;
  title: string;
  image: string;
  tags: string[];
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  readTime: string;
}

const allResources: Resource[] = [
  {
    id: 1,
    title: "What Is Agentic AI: Redefining Enterprise Intelligence & Decision Making",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    tags: ["Agentic AI", "GenAI", "Artificial Intelligence"],
    date: "Dec 2025",
    category: "AI",
    excerpt: "Explore how agentic AI is transforming enterprise decision-making with autonomous agents that can reason, plan, and execute complex tasks.",
    author: "Dr. Sarah Chen",
    readTime: "8 min read",
    content: `Agentic AI represents a paradigm shift in how enterprises leverage artificial intelligence. Unlike traditional AI systems that respond to queries, agentic AI can autonomously plan, reason, and execute complex multi-step tasks.

## What Makes AI "Agentic"?

Agentic AI systems possess several key characteristics that distinguish them from conventional AI:

- **Autonomous Decision Making**: These systems can make decisions independently based on their understanding of goals and context.
- **Multi-Step Planning**: They can break down complex objectives into actionable steps and execute them sequentially.
- **Tool Use**: Agentic AI can leverage external tools, APIs, and databases to accomplish tasks.
- **Self-Correction**: When encountering errors, these systems can recognize failures and adjust their approach.

## Enterprise Applications

Organizations are deploying agentic AI across various domains:

1. **Customer Service**: AI agents that handle end-to-end customer inquiries, from understanding the issue to resolving it.
2. **Software Development**: Autonomous coding assistants that can write, test, and debug code.
3. **Data Analysis**: Agents that can explore datasets, generate insights, and create reports without human intervention.
4. **Process Automation**: Complex workflow automation that adapts to changing conditions.

## Implementation Considerations

When implementing agentic AI, enterprises should consider:

- **Guardrails**: Establishing boundaries for autonomous decision-making
- **Human Oversight**: Maintaining appropriate human-in-the-loop checkpoints
- **Security**: Ensuring agents can't be manipulated or exploited
- **Scalability**: Building infrastructure that supports growing agent workloads

The future of enterprise AI is agentic, and organizations that embrace this technology will gain significant competitive advantages in efficiency, innovation, and customer experience.`
  },
  {
    id: 2,
    title: "The Modern CISO's Cybersecurity Playbook: Balancing Security, Risk & Business",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["Cloud Security", "Cybersecurity", "GRC"],
    date: "Nov 2025",
    category: "Security",
    excerpt: "A comprehensive guide for CISOs on building a security strategy that protects assets while enabling business growth.",
    author: "Michael Torres",
    readTime: "12 min read",
    content: `In today's rapidly evolving threat landscape, the role of the Chief Information Security Officer (CISO) has transformed from a purely technical function to a strategic business enabler.

## The Modern CISO's Mandate

Today's CISO must balance three critical imperatives:

1. **Protecting the Organization**: Defending against increasingly sophisticated cyber threats
2. **Managing Risk**: Quantifying and communicating risk in business terms
3. **Enabling Business**: Ensuring security doesn't impede innovation and growth

## Building a Risk-Based Security Program

### Step 1: Asset Inventory and Classification

Begin by understanding what you're protecting. Create a comprehensive inventory of:
- Critical business applications
- Data assets and their sensitivity levels
- Infrastructure components
- Third-party integrations

### Step 2: Threat Landscape Analysis

Map your threat landscape by considering:
- Industry-specific threats
- Geopolitical factors
- Insider threat potential
- Supply chain risks

### Step 3: Security Control Framework

Implement controls based on risk priority:
- **Critical**: Zero-trust architecture, MFA, encryption
- **High**: SIEM, EDR, vulnerability management
- **Medium**: Security awareness training, access reviews
- **Low**: Policy documentation, compliance monitoring

## Governance, Risk & Compliance (GRC)

An effective GRC program integrates:
- **Governance**: Clear policies, roles, and accountability
- **Risk Management**: Continuous assessment and mitigation
- **Compliance**: Adherence to regulations (GDPR, HIPAA, SOC 2)

## Metrics That Matter

Track security posture with meaningful KPIs:
- Mean Time to Detect (MTTD)
- Mean Time to Respond (MTTR)
- Vulnerability remediation rates
- Security awareness test scores
- Compliance audit findings

The successful modern CISO bridges the gap between technical security and business strategy, speaking the language of risk and value rather than fear and complexity.`
  },
  {
    id: 3,
    title: "IT Service Management 101: Streamlining Operations & Service Delivery",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    tags: ["ITSM", "Enterprise Applications", "Cloud"],
    date: "Oct 2025",
    category: "Cloud",
    excerpt: "Learn the fundamentals of ITSM and how to implement best practices for efficient service delivery.",
    author: "Jennifer Walsh",
    readTime: "10 min read",
    content: `IT Service Management (ITSM) is the discipline of designing, delivering, managing, and improving IT services to meet business needs. A mature ITSM practice can dramatically improve operational efficiency and user satisfaction.

## Core ITSM Processes

### Incident Management

Restore normal service operation as quickly as possible:
- Establish clear incident categorization
- Define priority matrices based on impact and urgency
- Create escalation procedures
- Implement automated routing and assignment

### Problem Management

Identify and resolve the root cause of incidents:
- Conduct root cause analysis (RCA)
- Maintain a known error database
- Track problem resolution progress
- Implement permanent fixes

### Change Management

Control the lifecycle of all changes:
- Standard, normal, and emergency change types
- Change Advisory Board (CAB) reviews
- Risk assessment and rollback planning
- Post-implementation reviews

### Service Request Management

Fulfill user requests efficiently:
- Self-service portal implementation
- Service catalog design
- SLA management
- Automation of common requests

## ITIL 4 Framework

ITIL 4 introduces the Service Value System (SVS):

- **Guiding Principles**: Focus on value, start where you are, progress iteratively
- **Governance**: Direction and control of the organization
- **Service Value Chain**: Activities that transform demand into value
- **Practices**: Resources for performing work
- **Continual Improvement**: Ongoing enhancement of services

## Tools and Automation

Modern ITSM platforms offer:
- AI-powered ticket routing
- Virtual agents for common issues
- Integration with monitoring tools
- Automated workflow execution
- Advanced analytics and reporting

Implementing robust ITSM practices enables organizations to deliver consistent, high-quality IT services that drive business success.`
  },
  {
    id: 4,
    title: "Kubernetes Best Practices: Scaling Microservices in Production",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    tags: ["Kubernetes", "Containerization", "DevOps"],
    date: "Oct 2025",
    category: "DevOps",
    excerpt: "Master Kubernetes deployment strategies and learn how to scale microservices effectively in production environments.",
    author: "Alex Rodriguez",
    readTime: "15 min read",
    content: `Kubernetes has become the de facto standard for container orchestration. Mastering Kubernetes best practices is essential for running reliable, scalable microservices in production.

## Resource Management

### Requests and Limits

Always define resource requests and limits:

\`\`\`yaml
resources:
  requests:
    memory: "256Mi"
    cpu: "250m"
  limits:
    memory: "512Mi"
    cpu: "500m"
\`\`\`

### Horizontal Pod Autoscaler (HPA)

Configure HPA for automatic scaling:
- Set appropriate CPU/memory thresholds
- Consider custom metrics for application-specific scaling
- Define min/max replica counts

## High Availability

### Pod Disruption Budgets

Ensure availability during updates:
- Define minimum available pods
- Protect critical workloads from voluntary disruptions

### Anti-Affinity Rules

Spread pods across nodes:
- Use pod anti-affinity for critical services
- Consider topology spread constraints

## Security Best Practices

### Pod Security Standards

Implement pod security:
- Run as non-root user
- Use read-only file systems
- Drop all capabilities, add only required ones
- Enable network policies

### Secrets Management

Secure sensitive data:
- Use external secrets operators
- Integrate with HashiCorp Vault or cloud KMS
- Enable encryption at rest

## Observability

### Logging

Implement centralized logging:
- Use structured logging (JSON format)
- Deploy log aggregators (EFK, Loki)
- Implement log rotation

### Monitoring

Deploy comprehensive monitoring:
- Prometheus for metrics collection
- Grafana for visualization
- Alert manager for notifications

### Tracing

Implement distributed tracing:
- OpenTelemetry instrumentation
- Jaeger or Zipkin for trace visualization

Following these best practices ensures your Kubernetes deployments are production-ready, scalable, and maintainable.`
  },
  {
    id: 5,
    title: "Data Analytics Trends 2025: From Insights to Action",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["Data Analytics", "Business Intelligence", "AI"],
    date: "Sep 2025",
    category: "Data",
    excerpt: "Discover the latest trends in data analytics and how organizations are leveraging data for competitive advantage.",
    author: "Dr. Emily Park",
    readTime: "9 min read",
    content: `The data analytics landscape is evolving rapidly. In 2025, organizations that effectively leverage analytics will gain significant competitive advantages in decision-making, customer experience, and operational efficiency.

## Key Trends Shaping Data Analytics

### 1. Augmented Analytics

AI is democratizing data analysis:
- Natural language querying
- Automated insight generation
- Smart data preparation
- Predictive recommendations

### 2. Real-Time Analytics

The shift from batch to streaming:
- Event-driven architectures
- Real-time dashboards
- Immediate anomaly detection
- Dynamic personalization

### 3. Data Mesh Architecture

Decentralizing data ownership:
- Domain-oriented data products
- Self-serve data infrastructure
- Federated computational governance
- Interoperability standards

### 4. AI-Powered Analytics

Beyond traditional BI:
- Large language models for analysis
- Automated machine learning (AutoML)
- Prescriptive analytics
- Causal inference engines

## Building a Modern Analytics Stack

### Data Ingestion Layer
- Apache Kafka for streaming
- Fivetran/Airbyte for batch ETL
- Change data capture (CDC)

### Storage Layer
- Cloud data warehouses (Snowflake, BigQuery)
- Data lakehouses (Databricks)
- Real-time databases (ClickHouse)

### Analytics Layer
- dbt for transformation
- Modern BI tools (Looker, Tableau)
- Notebook environments (Jupyter, Hex)

### Governance Layer
- Data catalogs (Atlan, Alation)
- Quality monitoring (Monte Carlo)
- Access control and lineage

## From Insights to Action

The ultimate goal is operationalizing insights:
- Embedded analytics in applications
- Automated decision systems
- Closed-loop feedback mechanisms
- Measurable business outcomes

Organizations that build robust analytics capabilities will be best positioned to thrive in an increasingly data-driven world.`
  },
  {
    id: 6,
    title: "Cloud Migration Strategies: A Step-by-Step Enterprise Guide",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    tags: ["Cloud Migration", "AWS", "Azure"],
    date: "Sep 2025",
    category: "Cloud",
    excerpt: "Plan and execute a successful cloud migration with our comprehensive enterprise guide covering AWS, Azure, and GCP.",
    author: "David Kim",
    readTime: "14 min read",
    content: `Cloud migration is a complex undertaking that requires careful planning, execution, and optimization. This guide provides a structured approach to migrating enterprise workloads to the cloud.

## Migration Strategies: The 7 R's

### 1. Rehost (Lift and Shift)
Move applications as-is to the cloud:
- Fastest migration path
- Minimal code changes
- Good for legacy applications
- Consider for initial migration

### 2. Replatform (Lift and Optimize)
Make minor optimizations during migration:
- Managed databases instead of self-managed
- Container deployment
- Moderate effort, good returns

### 3. Refactor (Re-architect)
Redesign for cloud-native:
- Microservices architecture
- Serverless components
- Maximum cloud benefits
- Highest effort

### 4. Repurchase
Replace with SaaS alternatives:
- CRM, ERP, HR systems
- Reduced maintenance burden
- Subscription cost model

### 5. Retire
Decommission unused applications:
- Cost savings
- Reduced complexity
- Security improvement

### 6. Retain
Keep on-premises:
- Compliance requirements
- Latency constraints
- Recent investments

### 7. Relocate
Move to different cloud region:
- Disaster recovery
- Data sovereignty
- Performance optimization

## Migration Phases

### Phase 1: Assessment
- Application inventory
- Dependency mapping
- TCO analysis
- Risk assessment

### Phase 2: Planning
- Migration strategy per workload
- Timeline and milestones
- Resource requirements
- Rollback procedures

### Phase 3: Migration
- Environment setup
- Data migration
- Application deployment
- Testing and validation

### Phase 4: Optimization
- Cost optimization
- Performance tuning
- Security hardening
- Operational readiness

## Multi-Cloud Considerations

When operating across AWS, Azure, and GCP:
- Establish cloud-agnostic practices
- Implement consistent governance
- Use abstraction layers where appropriate
- Monitor costs across providers

A well-executed cloud migration delivers improved scalability, cost efficiency, and innovation capability for the enterprise.`
  },
  {
    id: 7,
    title: "Zero Trust Architecture: Building Security for the Modern Enterprise",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    tags: ["Zero Trust", "Security", "Identity"],
    date: "Aug 2025",
    category: "Security",
    excerpt: "Implement zero trust security principles to protect your organization in an increasingly perimeter-less world.",
    author: "Lisa Chen",
    readTime: "11 min read",
    content: `Zero Trust is a security framework based on the principle of "never trust, always verify." In a world where the traditional network perimeter has dissolved, Zero Trust provides a robust approach to protecting enterprise resources.

## Core Principles of Zero Trust

### 1. Verify Explicitly
Always authenticate and authorize based on all available data points:
- User identity
- Device health
- Location
- Service or workload
- Data classification
- Anomalies

### 2. Use Least Privilege Access
Limit user access with:
- Just-in-time access (JIT)
- Just-enough-access (JEA)
- Risk-based adaptive policies
- Data protection

### 3. Assume Breach
Minimize blast radius and segment access:
- Verify end-to-end encryption
- Use analytics for visibility
- Threat detection and response
- Improve defenses continuously

## Zero Trust Architecture Components

### Identity
- Strong authentication (MFA)
- Conditional access policies
- Identity governance
- Privileged access management

### Devices
- Device inventory
- Compliance checking
- Endpoint protection
- Mobile device management

### Network
- Micro-segmentation
- Software-defined perimeter
- Encrypted connections
- Network monitoring

### Applications
- Single sign-on (SSO)
- Application proxy
- API security
- Cloud access security broker (CASB)

### Data
- Classification
- Encryption
- Data loss prevention (DLP)
- Rights management

## Implementation Roadmap

### Stage 1: Foundation
- Deploy MFA for all users
- Implement device compliance
- Establish identity governance

### Stage 2: Intermediate
- Micro-segment networks
- Deploy CASB
- Implement DLP

### Stage 3: Advanced
- Continuous monitoring
- Automated response
- AI-driven analytics

Zero Trust is a journey, not a destination. Start with quick wins and progressively mature your implementation.`
  },
  {
    id: 8,
    title: "MLOps: Operationalizing Machine Learning at Scale",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop",
    tags: ["MLOps", "Machine Learning", "DevOps"],
    date: "Aug 2025",
    category: "AI",
    excerpt: "Learn how to build robust ML pipelines and deploy models to production with confidence using MLOps practices.",
    author: "Dr. James Wilson",
    readTime: "13 min read",
    content: `MLOps is the practice of applying DevOps principles to machine learning systems. It bridges the gap between model development and production deployment, ensuring ML systems are reliable, scalable, and maintainable.

## The ML Lifecycle

### 1. Data Management
- Data collection and storage
- Data versioning
- Data quality monitoring
- Feature engineering

### 2. Model Development
- Experiment tracking
- Hyperparameter tuning
- Model validation
- Reproducibility

### 3. Model Deployment
- Packaging and containerization
- Serving infrastructure
- A/B testing
- Gradual rollouts

### 4. Monitoring and Governance
- Performance monitoring
- Drift detection
- Model governance
- Audit trails

## Key MLOps Practices

### Version Control Everything
- Code (Git)
- Data (DVC, LakeFS)
- Models (MLflow, Weights & Biases)
- Configurations

### Automate Pipelines
- Training pipelines (Kubeflow, Airflow)
- Deployment pipelines (CI/CD)
- Testing pipelines
- Monitoring pipelines

### Implement Testing
- Data validation tests
- Model performance tests
- Integration tests
- A/B tests

### Monitor Continuously
- Model performance metrics
- Data distribution changes
- Prediction latency
- Resource utilization

## MLOps Maturity Model

### Level 0: Manual
- Jupyter notebooks
- Manual deployments
- No version control

### Level 1: Automated Training
- Automated training pipelines
- Experiment tracking
- Model registry

### Level 2: CI/CD for ML
- Automated testing
- Continuous training
- Automated deployment

### Level 3: Full MLOps
- Feature stores
- Continuous monitoring
- Automated retraining
- A/B testing infrastructure

## Tools and Platforms

| Category | Tools |
|----------|-------|
| Experiment Tracking | MLflow, W&B, Neptune |
| Feature Store | Feast, Tecton, Hopsworks |
| Model Serving | Seldon, BentoML, TorchServe |
| Pipeline Orchestration | Kubeflow, Airflow, Prefect |
| Monitoring | Evidently, Fiddler, Arize |

Implementing MLOps practices enables organizations to deploy ML models faster, with higher quality, and with confidence in their production reliability.`
  },
  {
    id: 9,
    title: "Quantum Computing for Business: Preparing for the Quantum Advantage",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
    tags: ["Quantum Computing", "Innovation", "Technology"],
    date: "Jul 2025",
    category: "Innovation",
    excerpt: "Understand quantum computing fundamentals and identify use cases where quantum can provide business value.",
    author: "Dr. Robert Chang",
    readTime: "10 min read",
    content: `Quantum computing promises to solve problems that are intractable for classical computers. While the technology is still maturing, forward-thinking organizations are already preparing for the quantum advantage.

## Quantum Computing Fundamentals

### Qubits vs. Classical Bits
- Classical bits: 0 or 1
- Qubits: Superposition of 0 and 1
- Exponential scaling of computational space

### Key Quantum Properties
- **Superposition**: Existing in multiple states simultaneously
- **Entanglement**: Correlated quantum states
- **Interference**: Amplifying correct answers, canceling wrong ones

### Types of Quantum Systems
- Superconducting qubits (IBM, Google)
- Trapped ions (IonQ, Quantinuum)
- Neutral atoms (QuEra)
- Photonic systems (Xanadu)

## Business Use Cases

### Optimization Problems
- Supply chain optimization
- Portfolio optimization
- Route planning
- Resource scheduling

### Machine Learning
- Quantum neural networks
- Feature mapping
- Clustering and classification
- Generative models

### Simulation
- Drug discovery
- Materials science
- Climate modeling
- Financial modeling

### Cryptography
- Quantum key distribution
- Post-quantum cryptography
- Secure communications

## Current Limitations

### NISQ Era
We're in the Noisy Intermediate-Scale Quantum (NISQ) era:
- Limited qubit counts (100-1000)
- High error rates
- Short coherence times
- Need for error mitigation

### When Will Quantum Be Useful?
- Near-term: Hybrid quantum-classical algorithms
- Medium-term: Error-corrected quantum advantage for specific problems
- Long-term: General-purpose fault-tolerant quantum computing

## Preparing Your Organization

### 1. Build Quantum Literacy
- Executive education
- Technical training
- Partnerships with quantum providers

### 2. Identify Use Cases
- Audit computational challenges
- Assess quantum readiness
- Prioritize high-value opportunities

### 3. Experiment and Learn
- Cloud quantum access
- Proof-of-concept projects
- Collaborate with research institutions

### 4. Prepare for Quantum Security
- Inventory cryptographic assets
- Plan post-quantum migration
- Implement crypto-agility

The quantum future is coming. Organizations that prepare now will be best positioned to capture the quantum advantage when it arrives.`
  }
];

const categories = ["All", "AI", "Cloud", "Security", "DevOps", "Data", "Innovation"];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const filteredResources = allResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 network-pattern opacity-30" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Insights & <span className="text-gradient">Resources</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stay ahead with the latest technology insights, industry trends, and best practices from our experts.
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No resources found matching your criteria.</p>
            </div>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.article
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <HoverScale>
                    <button
                      onClick={() => setSelectedResource(resource)}
                      className="group border border-border block glass rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 h-full text-left w-full"
                    >
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={resource.image}
                          alt={resource.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                           <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                            {resource.category}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            {resource.date}
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {resource.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {resource.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {resource.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                          {resource.tags.length > 2 && (
                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                              +{resource.tags.length - 2}
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </button>
                  </HoverScale>
                </motion.article>
              ))}
            </StaggerContainer>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <FadeInUp>
            <div className="glass rounded-3xl p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to our newsletter for the latest insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="gradient-primary glow-primary">
                  Subscribe
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />

      {/* Resource Detail Modal */}
      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="max-w-4xl h-[80vh] xl:h-[90vh] overflow-y-auto">
          {selectedResource && (
            <>
              <DialogHeader>
                <div className="relative h-64 -mx-6 -mt-6 mb-6 overflow-hidden rounded-t-lg">
                  <img
                    src={selectedResource.image}
                    alt={selectedResource.title}
                    className="w-full h-full object-cover"
                  />
<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
                     <div className="absolute bottom-4 left-6 right-6">
                    <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                      {selectedResource.category}
                    </span>
                  </div>
                </div>
                <DialogTitle className="text-2xl md:text-3xl font-bold leading-tight">
                  {selectedResource.title}
                </DialogTitle>
                <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <User className="w-4 h-4" />
                    {selectedResource.author}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {selectedResource.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {selectedResource.readTime}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedResource.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>
              <div className="prose prose-invert max-w-none mt-6">
                {selectedResource.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-xl font-bold mt-8 mb-4 text-foreground">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-lg font-semibold mt-6 mb-3 text-foreground">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 text-muted-foreground">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i}>{item.replace('- ', '')}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.startsWith('1. ')) {
                    return (
                      <ol key={index} className="list-decimal list-inside space-y-2 text-muted-foreground">
                        {paragraph.split('\n').map((item, i) => (
                          <li key={i}>{item.replace(/^\d+\. /, '')}</li>
                        ))}
                      </ol>
                    );
                  }
                  if (paragraph.includes('```')) {
                    const code = paragraph.replace(/```\w*\n?/g, '');
                    return (
                      <pre key={index} className="bg-secondary/50 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{code}</code>
                      </pre>
                    );
                  }
                  if (paragraph.includes('|')) {
                    return (
                      <div key={index} className="overflow-x-auto my-4">
                        <table className="w-full border-collapse">
                          <tbody>
                            {paragraph.split('\n').filter(row => !row.includes('---')).map((row, i) => (
                              <tr key={i} className="border-b border-border">
                                {row.split('|').filter(Boolean).map((cell, j) => (
                                  <td key={j} className="px-4 py-2 text-muted-foreground">
                                    {cell.trim()}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources;
