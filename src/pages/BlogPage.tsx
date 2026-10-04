import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSection from '@/components/BlogSection';
import { useAnimateOnLoad } from '@/hooks/useAnimateOnLoad';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BlogPage = () => {
  useAnimateOnLoad();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-screen-sm px-5 py-6 space-y-8">
          <div className="animate">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm jrzs-link text-neutral-600 dark:text-neutral-400"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to home</span>
            </Link>
          </div>

          <div className="animate space-y-2">
            <h1 className="font-semibold text-2xl md:text-3xl text-black dark:text-white">
              Articles & Perspectives
            </h1>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Thoughts on HR operations, people analytics, qualitative research, behavioral psychology, and structured talent acquisition.
            </p>
          </div>

          <BlogSection showLink={false} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
