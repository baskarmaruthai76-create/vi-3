
import { PolicyLayout } from "@/components/PolicyLayout";
import { Shield, Lock, Eye, AlertTriangle, CheckCircle2 } from "lucide-react";

const SecurityPolicy = () => {
  return (
    <PolicyLayout title="Security Policy" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Security Commitment</h2>
          <p>
            At Vi-3 Technologies, security is not an add-on—it is the foundation of everything we do. 
            We implement a comprehensive Defense-in-Depth strategy to protect our clients' data, systems, 
            and operations against evolving cyber threats.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Security Framework</h2>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <Shield className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Zero Trust Architecture</h3>
              <p className="text-sm text-muted-foreground">
                Continuous verification of every user and device, with strict identity and access controls.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <Lock className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Encryption Standards</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption for data in transit and at rest using industry-leading protocols.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <Eye className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">24/7 Monitoring</h3>
              <p className="text-sm text-muted-foreground">
                Round-the-clock threat detection and incident response through our Security Operations Center.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <AlertTriangle className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2">Threat Intelligence</h3>
              <p className="text-sm text-muted-foreground">
                Proactive threat hunting using advanced AI and machine learning technologies.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Protection Measures</h2>
          <ul>
            <li><strong>Encryption:</strong> AES-256 encryption for data at rest, TLS 1.3 for data in transit</li>
            <li><strong>Access Controls:</strong> Role-based access control (RBAC) and multi-factor authentication (MFA)</li>
            <li><strong>Data Segregation:</strong> Logical separation of client data in multi-tenant environments</li>
            <li><strong>Backup & Recovery:</strong> Automated encrypted backups with regular restore testing</li>
            <li><strong>Data Residency:</strong> Compliance with data localization requirements</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Infrastructure Security</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Physical Security</h3>
          <ul>
            <li>Secure data centers with 24/7 surveillance</li>
            <li>Biometric access controls and visitor management</li>
            <li>Environmental controls (fire suppression, cooling, power backup)</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Network Security</h3>
          <ul>
            <li>Next-generation firewalls and intrusion prevention systems</li>
            <li>Network segmentation and micro-segmentation</li>
            <li>DDoS protection and traffic filtering</li>
            <li>VPN and secure remote access solutions</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Application Security</h3>
          <ul>
            <li>Secure software development lifecycle (SDLC)</li>
            <li>Regular security code reviews and penetration testing</li>
            <li>Web application firewalls (WAF)</li>
            <li>API security and rate limiting</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Compliance & Certifications</h2>
          <p>Vi-3 Technologies maintains compliance with:</p>
          <ul>
            <li>ISO 27001 Information Security Management</li>
            <li>GDPR (General Data Protection Regulation)</li>
            <li>Indian IT Act and CERT-In guidelines</li>
            <li>Industry-specific regulations (HIPAA, PCI-DSS where applicable)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Incident Response</h2>
          <p>Our incident response process includes:</p>
          <ol>
            <li><strong>Detection:</strong> Automated alerts and threat intelligence</li>
            <li><strong>Analysis:</strong> Rapid assessment of scope and impact</li>
            <li><strong>Containment:</strong> Isolation of affected systems</li>
            <li><strong>Eradication:</strong> Removal of threats and vulnerabilities</li>
            <li><strong>Recovery:</strong> Restoration of services and data</li>
            <li><strong>Post-Incident Review:</strong> Documentation and lessons learned</li>
          </ol>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Vulnerability Management</h2>
          <ul>
            <li>Regular vulnerability scanning and assessment</li>
            <li>Automated patch management with testing protocols</li>
            <li>Third-party security audits and penetration testing</li>
            <li>Bug bounty program for responsible disclosure</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Employee Security</h2>
          <ul>
            <li>Background verification for all employees</li>
            <li>Security awareness training and certification programs</li>
            <li>Confidentiality and non-disclosure agreements</li>
            <li>Secure access policies and least privilege principles</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Reporting Security Issues</h2>
          <p>
            If you discover a security vulnerability, please report it immediately to our security team:
          </p>
          <div className="bg-card p-6 rounded-lg border border-border mt-4">
            <p>Email: <a href="mailto:security@vi3technologies.com" className="text-primary hover:underline font-semibold">security@vi3technologies.com</a></p>
            <p className="mt-2 text-sm text-muted-foreground">
              We appreciate responsible disclosure and will acknowledge all reports within 24 hours.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p><strong>Vi-3 Technologies Private Limited</strong></p>
            <p>No 3, Sadhasivam Avenue, S Kolathur, Kovilambakkam</p>
            <p>Chennai - 600117, Tamil Nadu, India</p>
            <p className="mt-2">Email: <a href="mailto:contact@vi3technologies.com" className="text-primary hover:underline">contact@vi3technologies.com</a></p>
            <p>Phone: +91-7010351330</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default SecurityPolicy;

