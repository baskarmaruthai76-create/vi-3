import { FadeIn } from "@/components/ui/FadeIn";
import { InfiniteScroll } from "@/components/ui/InfiniteScroll";
import { FadeInUp } from "./ui/motion";
import redington from "@/assets/partners/redington.jpeg";
import flexera from "@/assets/partners/flexera.jpeg";
import fortinet from "@/assets/partners/fortinet.jpeg";
import ibm from "@/assets/partners/ibm.jpeg";
import salesforce from "@/assets/partners/salesforce.jpeg";
import rsa from "@/assets/partners/rsa.jpeg";
import databricks from "@/assets/partners/databricks.jpeg";
import accunox from "@/assets/partners/accunox.jpeg";
import corporatestack from "@/assets/partners/corporatestack.jpeg";



const partners = [
  { 
    name: "IBM", 
    logo: ibm
  },
  { 
    name: "Salesforce", 
    logo: salesforce
  },
  { 
    name: "Fortinet", 
    logo: fortinet  },
    {name: "RSA", logo: rsa},
  { 
    name: "Nutanix", 
    logo: "https://logos-world.net/wp-content/uploads/2022/04/Nutanix-Logo.png"
  },
 
  { 
    name: "AccuKnox", 
    logo: accunox
  },
  { 
    name: "Google Cloud", 
    logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-ar21.svg"
  },
  { 
    name: "Microsoft Azure", 
    logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-ar21.svg"
  },
  { 
    name: "AWS", 
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
  },
  { 
    name: "CoreStack", 
    logo: corporatestack},
  { 
    name: "Databricks", 
    logo: databricks
  },
  { 
    name: "Flexera", 
    logo: flexera
  },
  { 
    name: "Zoho", 
    logo: "https://www.vectorlogo.zone/logos/zoho/zoho-ar21.svg"
  },
   { 
    name: "Redington", 
    logo: redington
  },
  { 
    name: "ServiceNow", 
    logo: "https://www.vectorlogo.zone/logos/servicenow/servicenow-ar21.svg"
  },
  { 
    name: "Workday", 
    logo: "https://www.vectorlogo.zone/logos/workday/workday-ar21.svg"
  },
  { 
    name: "CrowdStrike", 
    logo: "https://logos-world.net/wp-content/uploads/2021/10/CrowdStrike-Logo.png"
  },
  { 
    name: "NetApp", 
    logo: "https://logos-world.net/wp-content/uploads/2020/11/NetApp-Logo.png"
  },
  
];

export const PartnersSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-primary">Strategic Alliances:</span>
            <br />
            <span className="text-foreground">Our Technology Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            Through powerful industry alliances and partnerships, we give you access to 
            best-in-class services, infrastructure, tools, compliance and security for hybrid & multi-cloud operations.
          </p>
        </FadeInUp>

        <FadeIn delay={0.2}>
          <InfiniteScroll speed={35} direction="left">
            <div className="flex gap-12">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-48 h-24 bg-white dark:bg-gray-900 rounded-xl border border-border/50 px-6 shrink-0 hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-16 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = document.createElement('span');
                      fallback.textContent = partner.name;
                      fallback.className = 'font-bold text-lg text-gray-700 dark:text-gray-300';
                      e.currentTarget.parentElement?.appendChild(fallback);
                    }}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8">
            <InfiniteScroll speed={35} direction="right">
              <div className="flex gap-12">
                {[...partners].reverse().map((partner, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-48 h-24 bg-white dark:bg-gray-900 rounded-xl border border-border/50 px-6 shrink-0 hover:shadow-lg hover:border-primary/30 transition-all"
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-16 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = document.createElement('span');
                        fallback.textContent = partner.name;
                        fallback.className = 'font-bold text-lg text-gray-700 dark:text-gray-300';
                        e.currentTarget.parentElement?.appendChild(fallback);
                      }}
                    />
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};