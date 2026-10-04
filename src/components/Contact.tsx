import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, GraduationCap, MapPin, Phone, FileText } from 'lucide-react';

const RESUME_URL = 'https://drive.google.com/file/d/1TD-lXjK8c7MbJz_dHCdVu_ecqZ-1Wetq/view?usp=drive_link';
const EMAIL = 'kajal.fulara19@gmail.com';
const PHONE = '+91 7838728912';
const LINKEDIN_URL = 'https://www.linkedin.com/in/kajal-f/';
const GOOGLE_SCHOLAR_URL = 'https://scholar.google.com/citations?hl=en&user=bPq2beMAAAAJ';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 text-gradient">Get in Touch</h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
            Open to HR Operations, People Operations, Talent Acquisition, HR Analyst, and Qualitative Analyst roles
          </p>

          <Card className="glass-card border-none">
            <CardContent className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8 text-left">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">Location</h3>
                      <p className="text-gray-400">Delhi NCR, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">Email</h3>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {EMAIL}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-blue-500/10 text-blue-400">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-1">Phone</h3>
                      <a
                        href={`tel:${PHONE.replace(/\s+/g, '')}`}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {PHONE}
                      </a>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-start gap-4 h-14 bg-white/5 border-white/10 text-gray-300"
                    asChild
                  >
                    <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                      <FileText className="h-5 w-5" />
                      View Resume
                    </a>
                  </Button>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Linkedin, label: "Connect on LinkedIn", href: LINKEDIN_URL },
                    { icon: GraduationCap, label: "Google Scholar Profile", href: GOOGLE_SCHOLAR_URL },
                    { icon: Mail, label: "Send an Email", href: `mailto:${EMAIL}` },
                    { icon: Phone, label: "Call / WhatsApp", href: `tel:${PHONE.replace(/\s+/g, '')}` }
                  ].map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-start gap-4 h-14 bg-white/5 border-white/10 text-gray-300"
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <social.icon className="h-5 w-5" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
