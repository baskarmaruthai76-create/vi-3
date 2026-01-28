
import { PolicyLayout } from "@/components/PolicyLayout";

const CookiePolicy = () => {
  return (
    <PolicyLayout title="Cookie Policy" lastUpdated="January 2, 2026">
      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-bold mb-4">What Are Cookies?</h2>
          <p>
            Cookies are small text files containing small amounts of information which are downloaded to your 
            computer or mobile device when you visit a website. Cookies allow a website to recognize your device 
            and remember information about your visit.
          </p>
          <p>
            Cookies managed by Vi-3 Technologies only are called "first party cookies" whereas cookies from 
            third parties are called "third party cookies."
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">How We Use Cookies</h2>
          <p>We use cookies to:</p>
          <ul>
            <li>Remember your preferences and settings</li>
            <li>Provide secure authentication and access control</li>
            <li>Analyze website traffic and user behavior</li>
            <li>Improve user experience and website performance</li>
            <li>Deliver relevant content and advertisements</li>
            <li>Enable social media features and integrations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Types of Cookies We Use</h2>
          
          <h3 className="text-2xl font-semibold mb-3">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core functionality 
            such as security, network management, and accessibility.
          </p>
          <ul>
            <li>Session management cookies</li>
            <li>Authentication tokens</li>
            <li>Security cookies</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Performance Cookies</h3>
          <p>
            These cookies collect information about how you use our website, helping us understand which pages 
            are most visited and identify any errors.
          </p>
          <ul>
            <li>Google Analytics</li>
            <li>Page load performance tracking</li>
            <li>Error logging and diagnostics</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Functional Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your language or region) 
            and provide enhanced features.
          </p>
          <ul>
            <li>Language preferences</li>
            <li>User interface customization</li>
            <li>Form auto-fill data</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Marketing Cookies</h3>
          <p>
            These cookies track your online activity to help deliver more relevant advertising and measure 
            the effectiveness of marketing campaigns.
          </p>
          <ul>
            <li>Google Ads and remarketing</li>
            <li>LinkedIn Insights</li>
            <li>Social media tracking pixels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Third-Party Cookies</h2>
          <p>We use services from trusted third parties that may set cookies on your device:</p>
          <ul>
            <li><strong>Google Analytics:</strong> To analyze website usage and performance</li>
            <li><strong>Google Tag Manager:</strong> To manage tracking codes</li>
            <li><strong>LinkedIn:</strong> For business analytics and advertising</li>
            <li><strong>YouTube:</strong> For embedded video content</li>
            <li><strong>Social Media Platforms:</strong> For sharing and engagement features</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Mobile Devices</h2>
          <p>
            Depending on your settings in our cookie consent manager on your mobile device, the following 
            information may be collected through cookies or similar technology:
          </p>
          <ul>
            <li>Your unique device identifier</li>
            <li>Mobile device IP address</li>
            <li>Information about your device's operating system</li>
            <li>Mobile carrier information</li>
            <li>Your location information (to the extent permissible under applicable law)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Managing Your Cookie Preferences</h2>
          <p>You have the right to control cookie usage. You can:</p>
          
          <h3 className="text-2xl font-semibold mb-3 mt-6">Browser Settings</h3>
          <p>Most web browsers allow you to control cookies through their settings:</p>
          <ul>
            <li>Block all cookies</li>
            <li>Accept only first-party cookies</li>
            <li>Delete cookies after each session</li>
            <li>Receive notifications when cookies are set</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Cookie Consent Manager</h3>
          <p>
            When you first visit our website, you can use our cookie consent manager to select your preferences. 
            You can change these settings at any time by clicking the "Cookie Settings" link in the footer.
          </p>

          <h3 className="text-2xl font-semibold mb-3 mt-6">Opt-Out Links</h3>
          <ul>
            <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">Google Analytics Opt-out</a></li>
            <li><a href="https://www.linkedin.com/psettings/guest-controls" className="text-primary hover:underline">LinkedIn Advertising Preferences</a></li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Impact of Disabling Cookies</h2>
          <p>
            If you choose to disable cookies, some features of our website may not function properly. 
            Essential cookies cannot be disabled as they are required for basic website functionality.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this page 
            with an updated revision date.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>If you have questions about our use of cookies, please contact us:</p>
          <div className="bg-card p-6 rounded-lg border border-border mt-4">
            <p><strong>Vi-3 Technologies Private Limited</strong></p>
            <p>Email: <a href="mailto:contact@vi3technologies.com" className="text-primary hover:underline">contact@vi3technologies.com</a></p>
            <p>Phone: +91-7010351330</p>
          </div>
        </section>
      </div>
    </PolicyLayout>
  );
};

export default CookiePolicy;

