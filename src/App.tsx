import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import { servicesConfig } from "@/config/serviceConfig";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

// Lazy load main pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Resources = lazy(() => import("./pages/Resources"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy load policy pages
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsConditions = lazy(() => import("./pages/TermsCondition"));
const SecurityPolicy = lazy(() => import("./pages/SecurityPolicy"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const GDPRCompliance = lazy(() => import("./pages/GDPRCompliance"));
const DataProtectionPolicy = lazy(() => import("./pages/DataProtectionPolicy"));

// Service page mapping - maps slugs to component imports
const servicePageMap: Record<string, () => Promise<any>> = {
  "managed-services": () => import("./pages/services/ManagedServices"),
  "cybersecurity": () => import("./pages/services/CyberSecurity"),
  "artificial-intelligence": () => import("./pages/services/AiDataScience"),
  "cloud-infrastructure": () => import("./pages/services/CloudInfrastructure"),
  "devsecops": () => import("./pages/services/DevSecOps"),
  "quantum-computing": () => import("./pages/services/QuantumComputing"),
  "ai-governance": () => import("./pages/services/AiGovernance"),
  "digital-transformation": () => import("./pages/services/DigitalTransformation"),
  "web3": () => import("./pages/services/Web3"),
  "agentic-ai": () => import("./pages/services/AgenticAi"),
  "aiops": () => import("./pages/services/AIOps"),
  "application-security": () => import("./pages/services/ApplicationSecurity"),
  "hr-staffing": () => import("./pages/services/StaffManagement"),
  "project-management": () => import("./pages/services/ProjectManagement"),
  "quality-assurance": () => import("./pages/services/QualityAssurance"),
  "workflow-automation": () => import("./pages/services/WorkflowAutomation"),
  "it-infrastructure": () => import("./pages/services/ITInfrastructure"),
  "architecture": () => import("./pages/services/Architecture"),
  "data-science": () => import("./pages/services/DataScience"),
  "application-services": () => import("./pages/services/ApplicationServices"),
  "ai-risk-mitigation": () => import("./pages/services/AIRiskMitigation"),
  "audit-reporting": () => import("./pages/services/AuditReporting"),
  "vulnerability-scanning": () => import("./pages/services/VulnerabilityScanning"),
  "merger-acquisition": () => import("./pages/services/MergerAcquisition"),
  "cloud-operations": () => import("./pages/services/CloudOperations"),
  "cloud-migration": () => import("./pages/services/CloudMigration"),
  "cloud-adoption": () => import("./pages/services/CloudAdoption"),
  "software-development": () => import("./pages/services/SoftwareDevelopment"),
  "data-warehouse": () => import("./pages/services/DataWarehouse"),
  "cloud-cost-optimization": () => import("./pages/services/CloudCostOptimization"),
  "cloud-modernization": () => import("./pages/services/CloudModernization"),
  "cloud-orchestration": () => import("./pages/services/CloudOrchestration"),
  "cloud-security": () => import("./pages/services/CloudSecurity"),
  "cloud-strategic": () => import("./pages/services/CloudStrategic"),
  "hybrid-cloud": () => import("./pages/services/HybridCloud"),
  "private-cloud": () => import("./pages/services/PrivateCloud"),
  "big-data": () => import("./pages/services/BigData"),
  "data-lake": () => import("./pages/services/DataLake"),
  "data-migration": () => import("./pages/services/DataMigration"),
  "data-backup-restoration": () => import("./pages/services/BackupRestore"),
  "devops": () => import("./pages/services/DevOps"),
  "cicd-pipelines": () => import("./pages/services/CICD"),
  "integration-deployment": () => import("./pages/services/Integration"),
  "erp": () => import("./pages/services/ERP"),
  "gcc-services": () => import("./pages/services/GCCServices"),
  "iot-services": () => import("./pages/services/IOT"),
  "blockchain-services": () => import("./pages/services/BlockChain"),
  "deployment-migration": () => import("./pages/services/DeploymentMigration"),
  "service-improvement": () => import("./pages/services/ServiceImprovement"),
  "continuous-improvement": () => import("./pages/services/ContinuousImprovements"),
  "database": () => import("./pages/services/Database"),
  "datacenter-consolidation": () => import("./pages/services/DatacenterConsolidation"),
  "backup-restore": () => import("./pages/services/BackupRestore"),
  "networking": () => import("./pages/services/Networking"),
  "storage": () => import("./pages/services/Storage"),
  "servers": () => import("./pages/services/Servers"),
  "technology-advisory": () => import("./pages/services/TechnologyAdvisory"),
  "disaster-recovery": () => import("./pages/services/DisasterRecovery"),
  "data-center": () => import("./pages/services/DataCenter"),
  "service-delivery": () => import("./pages/services/ServiceDelivery"),
  "digital-identity": () => import("./pages/services/DigitalIdentity"),
  "enterprise-security": () => import("./pages/services/EnterpriseSecurity"),
  "grc": () => import("./pages/services/GRC"),
  "threat-detection": () => import("./pages/services/ThreatDetection"),
  "vapt": () => import("./pages/services/VAPT"),
  "secure-cloud": () => import("./pages/services/SecureCloud"),
  "service-assurance": () => import("./pages/services/ServiceAssurance"),
  "pki": () => import("./pages/services/PKI"),
  
  "enterprise-operation": () => import("./pages/services/EnterpriseOperation"),
  "itsm": () => import("./pages/services/ITSM"),
  "itom": () => import("./pages/services/ITOM"),
  "apm":  () => import("./pages/services/APM"),
  "service-desk":  () => import("./pages/services/ServiceDesk"),
  "it-service-desk": () => import("./pages/services/ITServiceDesk"),
  "inclusive-computing": () => import("./pages/services/InclusiveComputing"),

  "workload-deployment" : () => import("./pages/services/WorkloadDeployment"),
  "datacenter-support" : () => import("./pages/services/DatacenterSupport"),
  "hosting-services" : () => import("./pages/services/HostingServices"),
  "api-integration" : () => import("./pages/services/ApiIntegration"),
  "end-user-computing": () => import("./pages/services/EndUserComputing"),
   "vpn-services" : () => import("./pages/services/VPNServices"),
   "firewall-services" : () => import("./pages/services/FirewallServices"),
};

// Create lazy-loaded service components
const serviceRoutes = Object.entries(servicePageMap).map(([slug, importFn]) => ({
  slug,
  Component: lazy(importFn),
}));

const queryClient = new QueryClient();

// Loading fallback component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />

            {/* Policy Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/security-policy" element={<SecurityPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/gdpr" element={<GDPRCompliance />} />
            <Route path="/data-protection" element={<DataProtectionPolicy />} />

            {/* Dynamic Service Routes */}
            {serviceRoutes.map(({ slug, Component }) => (
              <Route
                key={slug}
                path={`/services/${slug}`}
                element={<Component />}
              />
            ))}

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;