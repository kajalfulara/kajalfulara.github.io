import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { GraduationCap, Mail, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      
      <main className="flex-grow">
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-3xl mx-auto space-y-6">
              <span className="text-sm font-medium tracking-wider uppercase text-neutral-500">About Me</span>
              <h1 className="text-3xl md:text-4xl font-semibold">
                I'm <span className="text-black dark:text-white">Kajal Fulara</span>, HR Operations & People Strategy Professional
              </h1>
              
              <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed text-base">
                <p>
                  I currently lead end-to-end HR operations and lifecycle management for a 120+ workforce at Hobfit Technologies. My responsibilities span the complete employee journey—from talent acquisition and pre-boarding to HR documentation, payroll inputs coordination, performance reviews, and exit workflows.
                </p>
                <p>
                  I hold an <strong>MA in Psychology from Panjab University</strong> and have conducted clinical and developmental research at premier institutes including the <strong>Department of Neurology at AIIMS Delhi</strong>, <strong>THSTI (Civil Hospital Gurugram)</strong>, and <strong>PGIMER Chandigarh</strong>.
                </p>
                <p>
                  This unique background allows me to bring empirical rigor, psychometric acumen, and empathetic conflict resolution to People Operations.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="rounded-full px-6" asChild>
                  <a href="https://scholar.google.com/citations?hl=en&user=bPq2beMAAAAJ" target="_blank" rel="noopener noreferrer">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Google Scholar
                  </a>
                </Button>
                <Button variant="outline" className="rounded-full px-6" asChild>
                  <Link to="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
