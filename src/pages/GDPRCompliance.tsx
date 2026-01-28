
import { PolicyLayout } from "@/components/PolicyLayout";
import { Shield, CheckCircle2 } from "lucide-react";

const GDPRCompliance = () => {
  return (
    <PolicyLayout title="GDPR Compliance" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">Our Commitment to GDPR</h2>
          <p>
            Vi-3 Technologies is committed to protecting the personal data of individuals in the European Union (EU) 
            and European Economic Area (EEA) in accordance with the General Data Protection Regulation (GDPR).
          </p>
          <p>
            This page outlines how we comply with GDPR requirements and what rights you have regarding your personal data.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">GDPR Principles</h2>
          <p>We process personal data in accordance with the following GDPR principles:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Lawfulness, Fairness & Transparency</h3>
                <p className="text-sm text-muted-foreground">We process data lawfully, fairly, and transparently</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Purpose Limitation</h3>
                <p className="text-sm text-muted-foreground">Data collected for specific, legitimate purposes</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Data Minimization</h3>
                <p className="text-sm text-muted-foreground">Only necessary data is collected and processed</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Accuracy</h3>
                <p className="text-sm text-muted-foreground">Data is kept accurate and up to date</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Storage Limitation</h3>
                <p className="text-sm text-muted-foreground">Data retained only as long as necessary</p>
              </div>
            </div>

            <div className="flex gap-3 p-4 bg-card rounded-lg border border-border">
              <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Integrity & Confidentiality</h3>
                <p className="text-sm text-muted-foreground">Data protected with appropriate security</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Legal Basis for Processing</h2>
          <p>We process personal data under the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> You have given explicit consent for specific purposes</li>
            <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you</li>
            <li><strong>Legal Obligation:</strong> We must comply with legal requirements</li>
            <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Your GDPR Rights</h2>
          <p>Under GDPR, you have the following rights:</p>
          
          <div className="space-y-4 mt-6">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Access</h3>
              <p className="text-muted-foreground">
                You can request a copy of the personal data we hold about you and information about how we process it.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Rectification</h3>
              <p className="text-muted-foreground">
                You can request correction of inaccurate or incomplete personal data.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Erasure (Right to be Forgotten)</h3>
              <p className="text-muted-foreground">
                You can request deletion of your personal data under certain circumstances.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Restriction of Processing</h3>
              <p className="text-muted-foreground">
                You can request that we limit how we use your personal data in specific situations.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Data Portability</h3>
              <p className="text-muted-foreground">
                You can request your data in a structured, commonly used format for transfer to another controller.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Right to Object</h3>
              <p className="text-muted-foreground">
                You can object to processing based on legitimate interests or for direct marketing purposes.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">Rights Related to Automated Decision Making</h3>
              <p className="text-muted-foreground">
                You have rights regarding automated decisions that significantly affect you.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Protection Officer</h2>
          <p>
            Vi-3 Technologies has appointed a Data Protection Officer (DPO) to oversee GDPR compliance. 
            You can contact our DPO for any data protection inquiries:
          </p>
          <div className="bg-card p-6 rounded-lg border border-border mt-4">
            <p><strong>Data Protection Officer</strong></p>
            <p>Vi-3 Technologies Private Limited</p>
            <p>Email: <a href="mailto:dpo@vi3technologies.com" className="text-primary hover:underline">dpo@vi3technologies.com</a></p>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">International Data Transfers</h2>
          <p>
            When we transfer personal data outside the EU/EEA, we ensure appropriate safeguards are in place:
          </p>
          <ul>
            <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
            <li>Adequacy decisions recognizing equivalent data protection standards</li>
            <li>Binding Corporate Rules for intra-group transfers</li>
            <li>Explicit consent where required</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Data Breach Notification</h2>
          <p>
            In the event of a data breach that poses a risk to your rights and freedoms, we will:
          </p>
          <ul>
            <li>Notify the relevant supervisory authority within 72 hours</li>
            <li>Inform affected individuals without undue delay if there is a high risk</li>
            <li>Document all breaches and our response measures</li>
            <li>Take immediate steps to mitigate harm and prevent future breaches</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Exercising Your Rights</h2>
          <p>To exercise any of your GDPR rights, please:</p>
          <ol>
            <li>Submit a request via email to <a href="mailto:privacy@vi3technologies.com" className="text-primary hover:underline">privacy@vi3technologies.com</a></li>
            <li>Provide sufficient information to verify your identity</li>
            <li>Specify which right(s) you wish to exercise</li>
          </ol>
          <p className="mt-4">
            We will respond to your request within one month. In complex cases, we may extend this period 
            by two additional months and will inform you of any such extension.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Right to Lodge a Complaint</h2>
          <p>
            If you believe we have not handled your personal data in accordance with GDPR, you have the right 
            to lodge a complaint with your local supervisory authority.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <div className="bg-card p-6 rounded-lg border border-border">
            <p><strong>Vi-3 Technologies Private Limited</strong></p>
            <p>No 3, Sadhasivam Avenue, S Kolathur, Kovilambakkam</p>
            <p>Chennai - 600117, Tamil Nadu, India</p>
            <p className="mt-2">General: <a href="mailto:contact@vi3technologies.com" className="text-primary hover:underline">contact@vi3technologies.com</a></p>
            <p>Privacy: <a href="mailto:privacy@vi3technologies.com" className="text-primary hover:underline">privacy@vi3technologies.com</a></p>
            <p>DPO: <a href="mailto:dpo@vi3technologies.com" className="text-primary hover:underline">dpo@vi3technologies.com</a></p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default GDPRCompliance;

