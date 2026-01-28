import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, User, Loader2, Phone, Mail, ExternalLink, Building2, MapPin, Link2 } from "lucide-react";

// Import from serviceConfig - Single Source of Truth
import { servicesConfig, categoriesConfig } from "@/config/serviceConfig";

// Type definitions matching serviceConfig
interface Service {
  title: string;
  slug: string;
  category: string | string[];
  description: string;
  keywords?: string[];
}

interface Category {
  name: string;
  description: string;
  id: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp?: Date;
  serviceLinks?: string[];
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Vi-3 Welcomes you! How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // DYNAMIC SYSTEM PROMPT - Generated entirely from servicesConfig
  const systemPrompt = useMemo(() => {
    const services: Service[] = servicesConfig || [];
    const categories: Category[] = categoriesConfig || [];
    
    // Group services by category
    const servicesByCategory: Record<string, Service[]> = {};
    services.forEach(service => {
      const cats = Array.isArray(service.category) ? service.category : [service.category];
      cats.forEach(cat => {
        if (!servicesByCategory[cat]) servicesByCategory[cat] = [];
        servicesByCategory[cat].push(service);
      });
    });

    // Build service listing dynamically from servicesConfig
    let servicesList = "";
    categories.forEach((cat, idx) => {
      const categoryServices = servicesByCategory[cat.name] || [];
      if (categoryServices.length > 0) {
        servicesList += `\n**${cat.name.toUpperCase()}:**\n`;
        categoryServices.forEach((svc, sIdx) => {
          servicesList += `${idx * 10 + sIdx + 1}. ${svc.title} - ${svc.description}\n`;
        });
      }
    });

    return `You are a business consultant representing Vi-3 Technologies Private Limited, a premier enterprise IT solutions provider based in Chennai, India.

COMPANY IDENTITY:
- Founded: December 2025 
- Founders: 
  * Gajendrakumar GK: 30+ years IT experience (Former Senior Director at Cloud Kinetics, Director at HCL Technologies)
  * Baskar Maruthai: 28+ years global experience (PwC Czech Republic, HCL Technologies across USA, Switzerland, Czech Republic, Singapore)
- Location: Chennai, Tamil Nadu, India
- Contact: +91-7010351330 | contact@vi3technologies.com
- Website: vi3technologies.com

COMPREHENSIVE SERVICE PORTFOLIO (${services.length} Services across ${categories.length} Categories):
${servicesList}

INDUSTRIES SERVED:
Banking & Finance, Healthcare, Manufacturing, Telecommunications, Automotive (IT systems), Public Sector, Retail, Insurance, Energy, Oil & Gas, Life Sciences, Aerospace & Defense, Real Estate, Professional Services, and more.

KEY PARTNERS:
AWS, Microsoft Azure, Google Cloud, Redington, IBM, Nutanix, AccuKnox, CoreStack, Flexera, Databricks, ServiceNow, Workday, NetApp, Zoho, CrowdStrike

COMPANY VALUES:
• Security-First DNA: Security is foundational, not an add-on
• Intelligent Scalability: AI-powered systems that grow with your business
• Unwavering Support: 24/7 reliability and proactive optimization
• Hybrid Agility: Balance of On-Premises control with Cloud scale

OPERATIONAL MODEL (4 Phases):
1. Audit & Discover - Deep dive into existing infrastructure
2. Architecture - Designing secure, scalable blueprints
3. Engineering - Hands-on deployment and integration
4. Sustain (24/7) - Round-the-clock monitoring and optimization

RESPONSE GUIDELINES:
1. BE INFORMATIVE: Provide comprehensive information about Vi-3's services, experience, and capabilities
2. TONE: Professional, confident, consultative - speak as a senior enterprise advisor
3. STRUCTURE: Lead with direct value, then provide 2-5 bullet points using "•"
4. BREVITY: 1-2 sentences for simple queries, 3-4 for complex topics requiring detail
5. SERVICE MENTIONS: When discussing services:
   - Use EXACT service names from the list (e.g., "Agentic AI & AI Agents", not just "AI")
   - Mention specific services rather than generic categories
   - For example, say "Artificial Intelligence" or "Agentic AI & AI Agents" instead of just "AI services"
   - Say "Cloud Security" instead of just "security"
   - Be specific: "DevSecOps Engineering" not "DevOps"
6. EXAMPLES: Use concrete examples from relevant industries when helpful
7. CALL-TO-ACTION: End with helpful next steps or questions
8. RELEVANCE: Only mention services that directly relate to the user's question

FORMATTING:
- Use "•" for bullet points
- Keep paragraphs to 1-2 sentences
- When mentioning specific services, use their exact names from the list above

OUT-OF-SCOPE TOPICS:
For questions completely unrelated to business or technology (recipes, sports, entertainment, personal advice):
Politely redirect: "I'm focused on helping with enterprise technology needs. Let me share what Vi-3 Technologies can do for your organization..." then briefly list relevant services.

REMEMBER: You represent a B2B enterprise IT company with 58+ years of combined founder experience serving global enterprises. Be helpful, informative, and professional.`;
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleCall = () => {
    window.location.href = "tel:+917010351330";
  };

  const handleEmail = () => {
    window.location.href = "mailto:contact@vi3technologies.com?subject=Enterprise%20IT%20Inquiry%20from%20Vi-3%20Website&body=Hello%20Vi-3%20Technologies%20Team,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20your%20enterprise%20IT%20solutions.%0D%0A%0D%0A";
  };

  const handleWebsite = () => {
    window.open("http://vi3technologies.com", "_blank");
  };

  // Smart service link extraction with scoring and relevance ranking
 
  
  // Helper function to escape special regex characters
  const escapeRegex = (str: string): string => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

 const extractServiceLinks = (content: string): string[] => {
  const services: Service[] = servicesConfig || [];
  const contentLower = content.toLowerCase();

  const scoredServices = services.map(service => {
    let score = 0;
    const titleLower = service.title.toLowerCase();

    if (contentLower.includes(titleLower)) score += 1000;

    const titleWords = titleLower.split(/\s+/);
    if (
      titleWords.length > 1 &&
      titleWords.every(word =>
        new RegExp(`\\b${escapeRegex(word)}\\b`, 'i').test(contentLower)
      )
    ) {
      score += 800;
    }

    if (service.keywords) {
      service.keywords.forEach(keyword => {
        const kw = keyword.toLowerCase();
        if (new RegExp(`\\b${escapeRegex(kw)}\\b`, 'i').test(contentLower)) {
          score += 500;
        } else if (keyword.includes(" ") && contentLower.includes(kw)) {
          score += 100;
        }
      });
    }

    const slugWords = service.slug.split("-");
    if (
      slugWords.length > 1 &&
      slugWords.every(word =>
        new RegExp(`\\b${escapeRegex(word)}\\b`, 'i').test(contentLower)
      )
    ) {
      score += 300;
    }

    return { service, score };
  });

  return scoredServices
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(s => s.service.slug);
};


  const cleanResponse = (content: string): string => {
    let cleaned = content.trim();
    
    // Remove markdown formatting
    cleaned = cleaned.replace(/\*\*([^*]+)\*\*/g, '$1');
    cleaned = cleaned.replace(/\*([^*]+)\*/g, '$1');
    
    // Normalize bullet points
    cleaned = cleaned.replace(/^[\-\*]\s+/gm, '• ');
    cleaned = cleaned.replace(/^\d+\.\s+/gm, '• ');
    
    // Remove AI-specific phrases
    const aiPhrases = [
      /I'm (just )?an AI/gi,
      /As an AI/gi,
      /I don't have personal/gi,
      /I apologize for (any )?confusion/gi,
      /my knowledge cutoff/gi,
      /I'm a language model/gi,
      /I'm a chatbot/gi,
      /As a chatbot/gi
    ];
    
    aiPhrases.forEach(phrase => {
      cleaned = cleaned.replace(phrase, '');
    });
    
    // Clean up extra whitespace
    cleaned = cleaned.replace(/\n{3,}/g, '\n\n').trim();
    
    return cleaned;
  };

  const sendMessage = async (suggestedInput?: string) => {
    const messageText = suggestedInput || input.trim();
    if (!messageText || isLoading) return;

    const userMessage: Message = { 
      role: "user", 
      content: messageText,
      timestamp: new Date()
    };
    
    const conversationHistory = [...messages, userMessage];
    setMessages(conversationHistory);
    setInput("");
    setIsLoading(true);

    let assistantContent = "";

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: [
              {
                role: "system",
                content: systemPrompt
              },
              ...conversationHistory.slice(-8).map(msg => ({
                role: msg.role,
                content: msg.content
              }))
            ],
            temperature: 0.4,
            max_tokens: 600,
            top_p: 0.9,
            stream: true,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to get response");
      }

      if (!response.body) {
        throw new Error("No response body");
      }

      // Add placeholder message
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: "",
        timestamp: new Date()
      }]);

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      // Stream response
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          const trimmedLine = line.trim();
          if (!trimmedLine || trimmedLine.startsWith(":")) continue;

          if (trimmedLine.startsWith("data: ")) {
            const jsonStr = trimmedLine.slice(6);
            if (jsonStr === "[DONE]") break;

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content;

              if (content) {
                assistantContent += content;
                setMessages((prev) => {
                  const updated = [...prev];
                  updated[updated.length - 1] = {
                    role: "assistant",
                    content: assistantContent,
                    timestamp: new Date()
                  };
                  return updated;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      // Final cleanup and service link extraction
      if (assistantContent) {
        const cleanedContent = cleanResponse(assistantContent);
        const serviceLinks = extractServiceLinks(assistantContent);
        
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: cleanedContent,
            timestamp: new Date(),
            serviceLinks
          };
          return updated;
        });
      }

      if (!assistantContent) {
        setMessages((prev) => prev.slice(0, -1));
        throw new Error("No response received");
      }
    } catch (error) {
      console.error("Chat error:", error);
      
      if (!assistantContent) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          {
            role: "assistant",
            content: "I apologize for the technical difficulty. Please contact us directly:\n\n📧 contact@vi3technologies.com\n📞 +91-7010351330\n\nOur team will respond promptly to your inquiry.",
            timestamp: new Date()
          }
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleServiceLinkClick = (slug: string) => {
    const url = `/services/${slug}`;
    window.location.href = url;
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const formatMessage = (content: string) => {
    return content.split('\n').map((line, i) => {
      const trimmedLine = line.trim();
      
      if (trimmedLine.startsWith('•')) {
        return (
          <div key={i} className="flex gap-2.5 my-2 leading-relaxed">
            <span className="text-blue-600 dark:text-blue-400 mt-0.5 font-bold">•</span>
            <span className="flex-1 leading-relaxed">{trimmedLine.substring(1).trim()}</span>
          </div>
        );
      }
      
      if (trimmedLine.includes('📧') || trimmedLine.includes('📞') || trimmedLine.includes('🌐')) {
        return (
          <div key={i} className="font-semibold text-blue-700 dark:text-blue-300 my-2 text-sm">
            {trimmedLine}
          </div>
        );
      }
      
      if (trimmedLine) {
        return <div key={i} className="my-1.5 leading-relaxed">{trimmedLine}</div>;
      }
      
      return <div key={i} className="h-2" />;
    });
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <MessageCircle className="w-6 h-6" />
              <motion.span 
                className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[460px] max-w-[calc(100vw-3rem)] h-[680px] max-h-[85vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white p-4 flex items-start justify-between">
              <div className="flex items-start gap-3 flex-1">
                <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/20">
                  <Building2 className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-base leading-tight">Vi-3 Technologies</h3>
                  <p className="text-xs text-blue-100 mt-0.5">Enterprise IT Solutions</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <motion.span 
                      className="w-2 h-2 bg-emerald-400 rounded-full shadow-lg"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-xs text-emerald-300 font-medium">Online 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900 p-2.5 border-b border-slate-200 dark:border-slate-700 flex gap-2">
              <button
                onClick={handleCall}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-slate-700 hover:text-emerald-700 transition-all shadow-sm border border-slate-200 dark:border-slate-600"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </button>
              <button
                onClick={handleEmail}
                className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-700 transition-all shadow-sm border border-slate-200 dark:border-slate-600"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </button>
              <button
                onClick={handleWebsite}
                className="flex items-center justify-center gap-1.5 px-2 py-2 bg-white dark:bg-slate-800 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-purple-50 dark:hover:bg-slate-700 hover:text-purple-700 transition-all shadow-sm border border-slate-200 dark:border-slate-600"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-2.5 ${
                    message.role === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center shadow-md ${
                      message.role === "user"
                        ? "bg-gradient-to-br from-slate-700 to-slate-800 text-white"
                        : "bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-2 ring-blue-200 dark:ring-blue-900"
                    }`}
                  >
                    {message.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Building2 className="w-4 h-4" />
                    )}
                  </div>
                  <div className="flex-1 max-w-[85%]">
                    <div
                      className={`rounded-2xl px-3.5 py-2.5 shadow-md ${
                        message.role === "user"
                          ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-br-md"
                          : "bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-bl-md border border-slate-200 dark:border-slate-700"
                      }`}
                    >
                      <div className="text-sm leading-relaxed">
                        {formatMessage(message.content)}
                      </div>
                    </div>
                    
                    {/* Service Links - dynamically extracted from servicesConfig */}
                    {message.serviceLinks && message.serviceLinks.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {message.serviceLinks.slice(0, 4).map((slug, idx) => {
                          const service = servicesConfig.find(s => s.slug === slug);
                          return (
                            <button
                              key={idx}
                              onClick={() => handleServiceLinkClick(slug)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all border border-blue-200 dark:border-blue-800"
                            >
                              <Link2 className="w-3 h-3" />
                              <span>{service?.title || slug.replace(/-/g, ' ')}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                    
                    {message.timestamp && (
                      <div className={`text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1 ${
                        message.role === "user" ? "text-right" : "text-left"
                      }`}>
                        {formatTime(message.timestamp)}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white flex items-center justify-center shadow-md ring-2 ring-blue-200 dark:ring-blue-900">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 rounded-2xl rounded-bl-md px-3.5 py-2.5 border border-slate-200 dark:border-slate-700 shadow-md">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask about our services..."
                  disabled={isLoading}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 transition-all"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || isLoading}
                  className="rounded-xl px-5 h-11 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-300 disabled:to-slate-400 shadow-md hover:shadow-lg transition-all text-white font-semibold disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-2 text-[10px] text-slate-400 dark:text-slate-500">
                <span className="font-medium">© 2025 Vi-3 Technologies</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  Chennai, India
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;