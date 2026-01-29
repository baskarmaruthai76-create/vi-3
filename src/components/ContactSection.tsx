import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { FadeInUp, SlideInLeft, SlideInRight } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { servicesConfig } from "@/config/serviceConfig";

export const ContactSection = () => {
  // Generate service list from config
  const services = servicesConfig.map(s => s.title).sort();
  
  const [state, handleSubmit] = useForm("xkobrvpb");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName:"",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  // Reset form after successful submission
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        firstName: "",
        lastName:"",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  }, [state.succeeded]);

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
                  whileHover={{scale: 1.02, transition: { duration: 0.2 }}}
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
              className="gradient-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{scale: 1.02, transition: { duration: 0.2 }}}
            >
              <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-lg">
                {state.succeeded ? (
                  <div className="text-center py-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.5 }}
                    >
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Thank You!
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => window.location.reload()}
                      className="gradient-primary text-primary-foreground"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                            First Name *
                          </label>
                          <Input
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={(e) =>
                              setFormData({ ...formData, firstName: e.target.value })
                            }
                            placeholder="John"
                            className="bg-background"
                          />
                          <ValidationError 
                            prefix="First Name" 
                            field="firstName"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                            Last Name *
                          </label>
                          <Input
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={(e) =>
                              setFormData({ ...formData, lastName: e.target.value })
                            }
                            placeholder="Doe"
                            className="bg-background"
                          />
                          <ValidationError 
                            prefix="Last Name" 
                            field="lastName"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Business Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            placeholder="john@company.com"
                            className="bg-background"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className="text-red-500 text-sm mt-1"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company
                          </label>
                          <Input
                            id="company"
                            name="company"
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
                          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
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
                          <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                            Service of Interest
                          </label>
                          <Select
                            name="service"
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
                          {/* Hidden input to send service value to Formspree */}
                          <input type="hidden" name="service" value={formData.service} />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          placeholder="Tell us about your project or requirements..."
                          rows={5}
                          className="bg-background resize-none"
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        disabled={state.submitting}
                        className="w-full gap-2 gradient-primary text-primary-foreground font-semibold py-6"
                      >
                        {state.submitting ? (
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
                  </>
                )}
              </div>
            </motion.div>
          </SlideInRight>
        </div>
      </div>
    </section>
  );
};