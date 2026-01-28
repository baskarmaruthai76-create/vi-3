
import { PolicyLayout } from "@/components/PolicyLayout";
import { Database, Shield, Lock, Eye, UserCheck, FileCheck } from "lucide-react";

const DataProtectionPolicy = () => {
  return (
    <PolicyLayout title="Data Protection Policy" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p>
            This Data Protection Policy defines how Vi-3 Technologies Private Limited collects, processes, stores, 
            shares, and safeguards data, especially personal and sensitive information. It establishes clear rules 
            and responsibilities to ensure data is handled securely, ethically, and in compliance with legal and 
            regulatory requirements.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Policy Scope</h2>
          <p>This policy applies to:</p>
          <ul>
            <li>All employees, contractors, and third-party vendors of Vi-3 Technologies</li>
            <li>All personal, business, and sensitive data processed by the organization</li>
            <li>All systems, applications, and infrastructure used to process data</li>
            <li>All data processing activities, whether automated or manual</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Protection Framework</h2>
          
          <div className="grid md:grid-cols-3 gap-6 my-6">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Database className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Data Classification</h3>
              <p className="text-sm text-muted-foreground">
                Categorizing data based on sensitivity and criticality
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Access Control</h3>
              <p className="text-sm text-muted-foreground">
                Role-based permissions and least privilege principles
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Lock className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Encryption</h3>
              <p className="text-sm text-muted-foreground">
                Strong encryption for data at rest and in transit
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <Eye className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Continuous monitoring of data access and usage
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <UserCheck className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Training</h3>
              <p className="text-sm text-muted-foreground">
                Regular data protection training for all personnel
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <FileCheck className="w-12 h-12 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Compliance</h3>
              <p className="text-sm text-muted-foreground">
                Adherence to regulatory requirements and standards
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Classification</h2>
          <p>We classify data into the following categories:</p>
          
          <div className="space-y-4 mt-6">
            <div className="bg-red-50 dark:bg-red-950/20 p-6 rounded-lg border-2 border-red-200 dark:border-red-900">
              <h3 className="text-xl font-semibold mb-2 text-red-900 dark:text-red-100">
                Critical/Highly Sensitive
              </h3>
              <p className="text-red-800 dark:text-red-200 mb-2">
                Data that requires the highest level of protection:
              </p>
              <ul className="text-red-700 dark:text-red-300">
                <li>Personal identifiable information (PII)</li>
                <li>Financial records and payment information</li>
                <li>Health and medical data</li>
                <li>Authentication credentials and encryption keys</li>
                <li>Trade secrets and proprietary information</li>
              </ul>
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 p-6 rounded-lg border-2 border-orange-200 dark:border-orange-900">
              <h3 className="text-xl font-semibold mb-2 text-orange-900 dark:text-orange-100">
                Confidential
              </h3>
              <p className="text-orange-800 dark:text-orange-200 mb-2">
                Data intended for internal use only:
              </p>
              <ul className="text-orange-700 dark:text-orange-300">
                <li>Business strategies and plans</li>
                <li>Employee records</li>
                <li>Internal communications</li>
                <li>Customer contracts and agreements</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-900">
              <h3 className="text-xl font-semibold mb-2 text-blue-900 dark:text-blue-100">
                Internal
              </h3>
              <p className="text-blue-800 dark:text-blue-200 mb-2">
                Data for internal use with standard protection:
              </p>
              <ul className="text-blue-700 dark:text-blue-300">
                <li>Internal reports and documentation</li>
                <li>Project information</li>
                <li>Training materials</li>
              </ul>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg border-2 border-green-200 dark:border-green-900">
              <h3 className="text-xl font-semibold mb-2 text-green-900 dark:text-green-100">
                Public
              </h3>
              <p className="text-green-800 dark:text-green-200 mb-2">
                Information intended for public access:
              </p>
              <ul className="text-green-700 dark:text-green-300">
                <li>Marketing materials</li>
                <li>Published content</li>
                <li>Public website information</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Collection Principles</h2>
          <ul>
            <li><strong>Lawfulness:</strong> Data collected only through lawful means</li>
            <li><strong>Purpose Limitation:</strong> Data collected for specific, legitimate purposes</li>
            <li><strong>Transparency:</strong> Clear communication about data collection practices</li>
            <li><strong>Consent:</strong> Explicit consent obtained where required</li>
            <li><strong>Minimization:</strong> Only necessary data is collected</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Technical Security Controls</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Encryption</h3>
          <ul>
            <li>AES-256 encryption for data at rest</li>
            <li>TLS 1.3 for data in transit</li>
            <li>End-to-end encryption for sensitive communications</li>
            <li>Secure key management and rotation</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Access Controls</h3>
          <ul>
            <li>Role-Based Access Control (RBAC)</li>
            <li>Multi-Factor Authentication (MFA) for all systems</li>
            <li>Least privilege principle enforcement</li>
            <li>Regular access reviews and audits</li>
            <li>Automatic session timeout</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Network Security</h3>
          <ul>
            <li>Firewall protection and intrusion detection</li>
            <li>Network segmentation and isolation</li>
            <li>VPN for remote access</li>
            <li>DDoS protection</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Monitoring and Logging</h3>
          <ul>
            <li>24/7 security monitoring</li>
            <li>Comprehensive audit logs</li>
            <li>Anomaly detection and alerting</li>
            <li>Regular log reviews and analysis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Organizational Security Controls</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Roles and Responsibilities</h3>
          <ul>
            <li><strong>Data Protection Officer:</strong> Oversees compliance and governance</li>
            <li><strong>Data Owners:</strong> Responsible for data accuracy and classification</li>
            <li><strong>Data Processors:</strong> Handle data according to instructions</li>
            <li><strong>IT Security Team:</strong> Implements and maintains security controls</li>
            <li><strong>All Employees:</strong> Comply with data protection policies</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Training and Awareness</h3>
          <ul>
            <li>Mandatory data protection training for all employees</li>
            <li>Regular security awareness campaigns</li>
            <li>Phishing simulation exercises</li>
            <li>Annual refresher training</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Vendor Management</h3>
          <ul>
            <li>Due diligence assessments for third-party vendors</li>
            <li>Data Processing Agreements (DPAs) with all processors</li>
            <li>Regular vendor security audits</li>
            <li>Clear data handling requirements in contracts</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Retention and Disposal</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Retention Periods</h3>
          <ul>
            <li>Personal data: Retained only as long as necessary for intended purpose</li>
            <li>Financial records: 7 years (as per Indian regulations)</li>
            <li>Employee records: Duration of employment + 7 years</li>
            <li>Customer contracts: Duration of contract + 7 years</li>
            <li>System logs: 1 year minimum</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Secure Disposal</h3>
          <ul>
            <li>Secure deletion of electronic data using certified methods</li>
            <li>Physical destruction of hardware storage devices</li>
            <li>Shredding of physical documents</li>
            <li>Documentation of disposal activities</li>
            <li>Verification of complete data removal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Breach Prevention and Response</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Prevention Measures</h3>
          <ul>
            <li>Regular vulnerability assessments</li>
            <li>Penetration testing</li>
            <li>Security patch management</li>
            <li>Employee background verification</li>
            <li>Incident response planning</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Breach Response Protocol</h3>
          <ol>
            <li><strong>Detection:</strong> Identify and verify the breach</li>
            <li><strong>Containment:</strong> Isolate affected systems immediately</li>
            <li><strong>Assessment:</strong> Determine scope, impact, and affected data</li>
            <li><strong>Notification:</strong> Inform authorities and affected individuals (within 72 hours)</li>
            <li><strong>Remediation:</strong> Fix vulnerabilities and restore systems</li>
            <li><strong>Documentation:</strong> Record all actions and lessons learned</li>
            <li><strong>Review:</strong> Update policies and procedures</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Subject Rights</h2>
          <p>We respect and facilitate the following data subject rights:</p>
          <ul>
            <li><strong>Right to Access:</strong> Request copies of personal data</li>
            <li><strong>Right to Rectification:</strong> Correct inaccurate information</li>
            <li><strong>Right to Erasure:</strong> Request deletion of data</li>
            <li><strong>Right to Restriction:</strong> Limit processing of data</li>
            <li><strong>Right to Portability:</strong> Receive data in portable format</li>
            <li><strong>Right to Object:</strong> Object to certain processing activities</li>
          </ul>
          <p className="mt-4">
            Requests will be processed within 30 days of receipt.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Compliance and Auditing</h2>
          <ul>
            <li>Regular internal audits of data protection practices</li>
            <li>Annual third-party security assessments</li>
            <li>Compliance with GDPR, Indian IT Act, and industry standards</li>
            <li>ISO 27001 certification maintenance</li>
            <li>Continuous improvement of policies and procedures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Policy Review and Updates</h2>
          <p>
            This Data Protection Policy is reviewed and updated annually or whenever there are significant 
            changes in:
          </p>
          <ul>
            <li>Applicable laws and regulations</li>
            <li>Business operations and data processing activities</li>
            <li>Technology and security threats</li>
            <li>Industry best practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p>For questions about data protection or to exercise your rights:</p>
          <div className="bg-card p-6 rounded-lg border border-border mt-4">
            <p><strong>Data Protection Officer</strong></p>
            <p>Vi-3 Technologies Private Limited</p>
            <p>No 3, Sadhasivam Avenue, S Kolathur, Kovilambakkam</p>
            <p>Chennai - 600117, Tamil Nadu, India</p>
            <p className="mt-2">Email: <a href="mailto:dpo@vi3technologies.com" className="text-primary hover:underline">dpo@vi3technologies.com</a></p>
            <p>Privacy Email: <a href="mailto:privacy@vi3technologies.com" className="text-primary hover:underline">privacy@vi3technologies.com</a></p>
            <p>Phone: +91-7010351330</p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Acknowledgment</h2>
          <p>
            By accessing Vi-3 Technologies services, you acknowledge that you have read, understood, and 
            agree to this Data Protection Policy.
          </p>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default DataProtectionPolicy;

