
import { PolicyLayout } from "@/components/PolicyLayout";

const TermsConditions = () => {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Introduction</h2>
          <p>
            These Terms and Conditions ("Terms") govern your use of Vi-3 Technologies Private Limited's 
            website, services, and products. By accessing or using our services, you agree to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Definitions</h2>
          <ul>
            <li><strong>"Company," "we," "our," or "us"</strong> refers to Vi-3 Technologies Private Limited</li>
            <li><strong>"Client," "you," or "your"</strong> refers to the individual or entity using our services</li>
            <li><strong>"Services"</strong> refers to all IT solutions, consulting, and support provided by Vi-3 Technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Services Offered</h2>
          <p>Vi-3 Technologies provides the following services:</p>
          <ul>
            <li>24×7 Managed IT Services</li>
            <li>Cybersecurity & Resilience Solutions</li>
            <li>AI & Data Science Implementation</li>
            <li>Cloud Infrastructure & Migration</li>
            <li>DevSecOps Engineering</li>
            <li>Quantum Computing Consulting</li>
            <li>Digital Transformation Services</li>
            <li>And other IT solutions as described on our website</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Use of Services</h2>
          <h3 className="text-2xl font-semibold mb-3">Acceptable Use</h3>
          <p>You agree to use our services only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul>
            <li>Violate any applicable laws or regulations</li>
            <li>Infringe on intellectual property rights</li>
            <li>Transmit malicious code or harmful content</li>
            <li>Attempt unauthorized access to our systems</li>
            <li>Interfere with the proper functioning of our services</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Account Responsibilities</h3>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your account credentials</li>
            <li>You must notify us immediately of any unauthorized access</li>
            <li>You are liable for all activities conducted under your account</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Service Level Agreements (SLAs)</h2>
          <p>
            Our managed services are subject to specific SLAs as outlined in your service agreement. 
            SLAs define uptime guarantees, response times, and resolution procedures.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Payment Terms</h2>
          <ul>
            <li>Payment terms are specified in individual service agreements</li>
            <li>All fees are quoted in Indian Rupees (INR) unless otherwise stated</li>
            <li>Late payments may incur additional charges</li>
            <li>We reserve the right to suspend services for non-payment</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Intellectual Property</h2>
          <p>
            All content, software, designs, and materials provided by Vi-3 Technologies are protected by 
            intellectual property laws. Unless otherwise specified in writing:
          </p>
          <ul>
            <li>Vi-3 Technologies retains ownership of all proprietary tools and methodologies</li>
            <li>Custom solutions developed for clients are subject to separate licensing agreements</li>
            <li>Clients retain ownership of their data and business information</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Confidentiality</h2>
          <p>Both parties agree to:</p>
          <ul>
            <li>Keep confidential information secure and protected</li>
            <li>Use confidential information only for authorized purposes</li>
            <li>Not disclose confidential information without prior written consent</li>
            <li>Return or destroy confidential information upon request</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Vi-3 Technologies shall not be liable for any indirect, 
            incidental, special, consequential, or punitive damages arising from the use of our services.
          </p>
          <p>
            Our total liability shall not exceed the amount paid by the client for the specific service 
            giving rise to the claim during the preceding 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Termination</h2>
          <p>Either party may terminate services:</p>
          <ul>
            <li>With written notice as specified in the service agreement</li>
            <li>Immediately for material breach of these Terms</li>
            <li>Immediately for non-payment (by Vi-3 Technologies)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Governing Law</h2>
          <p>
            These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive 
            jurisdiction of the courts in Chennai, Tamil Nadu.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting 
            to our website. Continued use of our services constitutes acceptance of modified Terms.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p><strong>Vi-3 Technologies Private Limited</strong></p>
            <p>CIN: U62090TN2025PTC186734</p>
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

export default TermsConditions;
