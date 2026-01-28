import { useState } from "react";
import { motion } from "framer-motion";
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { servicesConfig } from "@/config/serviceConfig";
export const ContactSection = () => {
  


// Generate service list from config
const services = servicesConfig.map(s => s.title).sort();
 const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      firstName: "",
      lastName:"",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-12 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="text-primary">transform</span>
            <br />
            your business?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We simplify digital transformation through expert engineering, Security-First design, 
            and 24/7 operational excellence. Let us show you how!
          </p>
        </FadeInUp>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <SlideInLeft>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Get in touch
                </h3>
                <p className="text-black/90 mb-8">
                  Ready to transform your business with cutting-edge IT solutions? 
                  Our team of experts is here to help you every step of the way.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Registered Office</h4>
                    <p className="text-muted-foreground">
                      No 3, Sadhasivam Avenue, S Kolathur<br />
                      Kovilambakkam, Chennai – 600117
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">+91-7010351330</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">contact@vi3technologies.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Support</h4>
                    <p className="text-muted-foreground">24/7 Managed Services Available</p>
                  </div>
                </div>
                 <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                                                       whileHover={{scale: 1.02, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}

                transition={{ duration: 0.6, delay: 0.4 }}
              >

                <div className="bg-card mt-12 p-6 rounded-2xl border border-border">
                  <h3 className="text-lg font-bold text-foreground mb-4">
                    Registered Office
                  </h3>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="text-primary" size={18} />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        Vi-3 Technologies Private Limited
                      </p>
                      <p className="text-sm text-muted-foreground">
                        No 3, Sadhasivam Avenue, S Kolathur<br />
                        Kovilambakkam, Chennai – 600117<br />
                        Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </SlideInLeft>

          {/* Contact Form */}
          <SlideInRight>
           
                         <motion.div
                          className="gradient-border "
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.6, delay: 0.2 }}
                                       whileHover={{scale: 1.02, transition: { duration: 0.2 }, transitionBehavior: "startToEnd"}}

                         >
                           <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
                             <h2 className="text-2xl font-bold text-foreground mb-6">
                               Send Us a Message
                             </h2>
                             <form onSubmit={handleSubmit} className="space-y-6">
                               <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     First Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.firstName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, firstName: e.target.value })
                                     }
                                     placeholder="John"
                                     className="bg-background"
                                   />
                                 </div>
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Last Name *
                                   </label>
                                   <Input
                                     required
                                     value={formData.lastName}
                                     onChange={(e) =>
                                       setFormData({ ...formData, lastName: e.target.value })
                                     }
                                     placeholder="Doe"
                                     className="bg-background"
                                   />
                                 </div>
                                 
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                    Business Email Address *
                                   </label>
                                   <Input
                                     required
                                     type="email"
                                     value={formData.email}
                                     onChange={(e) =>
                                       setFormData({ ...formData, email: e.target.value })
                                     }
                                     placeholder="john@company.com"
                                     className="bg-background"
                                   />
                                 </div>
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Company
                                   </label>
                                   <Input
                                     value={formData.company}
                                     onChange={(e) =>
                                       setFormData({ ...formData, company: e.target.value })
                                     }
                                     placeholder="Your Company"
                                     className="bg-background"
                                   />
                                 </div>
                                
                               </div>
                               <div className="grid md:grid-cols-2 gap-6">
                                 <div>
                                   <label className="block text-sm font-medium text-foreground mb-2">
                                     Phone Number
                                   </label>
                                   <Input
                                     type="tel"
                                     value={formData.phone}
                                     onChange={(e) =>
                                       setFormData({ ...formData, phone: e.target.value })
                                     }
                                     placeholder="+91 98765 43210"
                                     className="bg-background"
                                   />
                                 </div>
                                 <div>
                                 <label className="block text-sm font-medium text-foreground mb-2">
                                   Service of Interest
                                 </label>
                                 <Select
                                   value={formData.service}
                                   onValueChange={(value) =>
                                     setFormData({ ...formData, service: value })
                                   }
                                 >
                                   <SelectTrigger className="bg-background">
                                     <SelectValue placeholder="Select a service" />
                                   </SelectTrigger>
                                   <SelectContent>
                                     {services.map((service) => (
                                       <SelectItem key={service} value={service}>
                                         {service}
                                       </SelectItem>
                                     ))}
                                   </SelectContent>
                                 </Select>
                               </div>
                               </div>
                               
                               <div>
                                 <label className="block text-sm font-medium text-foreground mb-2">
                                   Message *
                                 </label>
                                 <Textarea
                                   required
                                   value={formData.message}
                                   onChange={(e) =>
                                     setFormData({ ...formData, message: e.target.value })
                                   }
                                   placeholder="Tell us about your project or requirements..."
                                   rows={5}
                                   className="bg-background resize-none"
                                 />
                               </div>
                               <Button 
                                 type="submit" 
                                 disabled={isSubmitting}
                                 className="w-full gap-2 gradient-primary text-primary-foreground font-semibold py-6"
                               >
                                 {isSubmitting ? (
                                   <motion.div
                                     animate={{ rotate: 360 }}
                                     transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                     className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                                   />
                                 ) : (
                                   <>
                                     <Send size={18} />
                                     Send Message
                                   </>
                                 )}
                               </Button>
                               <p className="text-xs text-muted-foreground text-center">
                                 By submitting this form, you agree to our{" "}
                                 <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a>
                               </p>
                             </form>
                           </div>
                         </motion.div>
                     
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};


















