import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About PJSofonic</h3>
            <p className="text-muted-foreground">
              A leading technology organization dedicated to creating innovative solutions that empower businesses worldwide. Part of the PJSofonic Organization.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/pjsofonic" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com/pjsofonic" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com/pjsofonic" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://linkedin.com/company/pjsofonic" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/features" className="text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-muted-foreground hover:text-primary">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/documentation" className="text-muted-foreground hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-muted-foreground hover:text-primary">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/integrations" className="text-muted-foreground hover:text-primary">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                <a href="mailto:contact@pjsofonic.com" className="text-muted-foreground hover:text-primary">
                  contact@pjsofonic.com
                </a>
              </li>
              <li>
                <p className="text-muted-foreground">
                  PJSofonic Headquarters<br />
                  123 Innovation Drive<br />
                  San Francisco, CA 94105
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 PJSofonic Organization. All rights reserved.
            </p>
            <div className="flex space-x-4 md:justify-end">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover:text-primary">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}