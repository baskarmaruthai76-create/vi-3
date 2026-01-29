import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, CheckCircle } from "lucide-react";
import { SlideInLeft } from "@/components/ui/motion";
import { servicesConfig } from "@/config/serviceConfig";

// Generate service list from config
const services = servicesConfig.map(s => s.title).sort();

const Contact = () => {
  const [state, handleSubmit] = useForm("xkobrvpb");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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
        lastName: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden" 
        style={{ 
          background: 'linear-gradient(135deg, hsl(220 30% 6%) 0%, hsl(225 45% 18%) 50%, hsl(240 40% 15%) 100%)' 
        }}>
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-[10%] w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 left-[15%] w-80 h-80 bg-accent/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
              Contact Us
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground mb-6">
              Let's Start a <span className="text-gradient">Conversation</span>
            </h1>
            <p className="text-hero-muted text-xl">
              Ready to transform your business with cutting-edge technology? Get in touch with our team of experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-32 max-w-10xl mx-auto">
           
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
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
                  </div>
                </div>
              </SlideInLeft>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-2xl text-white">
                  <h3 className="text-lg font-bold mb-2">Need Urgent Support?</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Our 24/7 managed services team is ready to assist you with immediate technical support.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-primary hover:bg-white/90 gap-2"
                    onClick={() => window.location.href = 'tel:+917010351330'}
                  >
                    Call Support Line
                    <ArrowRight size={16} />
                  </Button>
                </div>
              </motion.div>
            </div>
           
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                className="gradient-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{scale: 1.02, transition: { duration: 0.2 }}}
              >
                <div className="bg-card p-8 md:p-10 rounded-2xl border border-border shadow-2xl">
                  {state.succeeded ? (
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.5 }}
                      >
                        <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                      </motion.div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">
                        Message Sent Successfully!
                      </h2>
                      <p className="text-muted-foreground text-lg mb-8">
                        Thank you for reaching out. We'll get back to you within 24 hours.
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;