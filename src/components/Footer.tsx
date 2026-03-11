import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-primary-navy text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 group mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <span className="text-2xl font-bold font-montserrat text-accent-goldBase tracking-tighter">OX</span>
              </div>
              <span className="text-xl font-bold font-montserrat tracking-wide text-white group-hover:text-accent-goldHighlight transition-colors">
                OsmanXMedia
              </span>
            </Link>
            <p className="text-gray-400 font-inter mb-6 leading-relaxed">
              Premium digital marketing agency specializing in high-impact video production and data-driven strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-6 text-accent-goldHighlight">Quick Links</h4>
            <ul className="space-y-4 font-inter text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-6 text-accent-goldHighlight">Services</h4>
            <ul className="space-y-4 font-inter text-gray-300">
              <li><Link href="/services#video" className="hover:text-white transition-colors">Video Production</Link></li>
              <li><Link href="/services#social" className="hover:text-white transition-colors">Social Media Management</Link></li>
              <li><Link href="/services#ads" className="hover:text-white transition-colors">Meta Ads Management</Link></li>
              <li><Link href="/services#content" className="hover:text-white transition-colors">Content Strategy</Link></li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h4 className="text-lg font-bold font-montserrat mb-6 text-accent-goldHighlight">Get in Touch</h4>
            <p className="text-gray-300 font-inter mb-4">
              hello@osmanxmedia.com
            </p>
            <p className="text-gray-300 font-inter mb-6">
              Los Angeles, CA
            </p>
            
            {/* Social Icons Placeholder */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-goldBase hover:text-primary-navy transition-all">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-goldBase hover:text-primary-navy transition-all">
                LI
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent-goldBase hover:text-primary-navy transition-all">
                YT
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 font-inter">
          <p>&copy; {new Date().getFullYear()} OsmanXMedia. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
