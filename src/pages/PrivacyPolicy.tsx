
import { PolicyLayout } from "@/components/PolicyLayout";

const PrivacyPolicy = () => {
  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p>
            Vi-3 Technologies Private Limited ("Vi-3 Technologies," "we," "our," or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, store, share, and protect personal and business data of users, 
            customers, employees, and partners.
          </p>
          <p>
            By using our website, services, or products, you agree to the terms outlined in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Information We Collect</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Personal Information</h3>
          <ul>
            <li>Name, email address, phone number, and contact details</li>
            <li>Company name, job title, and business information</li>
            <li>Billing and payment information</li>
            <li>Login credentials and account information</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Technical Information</h3>
          <ul>
            <li>IP address, browser type, and device information</li>
            <li>Cookies and tracking technologies</li>
            <li>Usage data and analytics</li>
            <li>System logs and performance metrics</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Business Information</h3>
          <ul>
            <li>Project requirements and technical specifications</li>
            <li>Communication records and support tickets</li>
            <li>Service usage and transaction history</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">How We Use Your Information</h2>
          <ul>
            <li><strong>Service Delivery:</strong> To provide, maintain, and improve our IT solutions and services</li>
            <li><strong>Communication:</strong> To respond to inquiries, provide support, and send updates</li>
            <li><strong>Security:</strong> To protect against fraud, unauthorized access, and security threats</li>
            <li><strong>Analytics:</strong> To analyze usage patterns and improve user experience</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Sharing and Disclosure</h2>
          <p>We do not sell your personal information. We may share data with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in our operations (cloud providers, payment processors)</li>
            <li><strong>Business Partners:</strong> Technology partners such as AWS, Microsoft Azure, Google Cloud</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Security</h2>
          <p>We implement industry-standard security measures to protect your data:</p>
          <ul>
            <li>Encryption of data in transit and at rest</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>24/7 monitoring and incident response</li>
            <li>Secure data centers with physical and logical controls</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Correction:</strong> Update or correct inaccurate information</li>
            <li><strong>Deletion:</strong> Request deletion of your data (subject to legal requirements)</li>
            <li><strong>Portability:</strong> Receive your data in a structured format</li>
            <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
            <li><strong>Object:</strong> Object to certain processing activities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Retention</h2>
          <p>
            We retain your personal information only as long as necessary to fulfill the purposes outlined in this policy, 
            comply with legal obligations, resolve disputes, and enforce agreements.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries outside of India. We ensure appropriate safeguards 
            are in place to protect your information in accordance with applicable data protection laws.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>For privacy-related questions or requests, please contact us:</p>
          <div className="bg-card p-6 rounded-lg border border-border mt-4">
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

export default PrivacyPolicy;

