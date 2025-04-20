import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowRight, BarChart2, Zap, Shield } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transform Your Business with NimbleLaunch
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline operations, boost productivity, and drive growth with our powerful platform.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started Free</Button>
            <Button size="lg" variant="outline">
              Book a Demo
            </Button>
          </div>
          <div className="mt-16">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=630&fit=crop"
              alt="Dashboard Preview"
              width={1200}
              height={630}
              className="rounded-lg shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Features that Set Us Apart
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <BarChart2 className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Advanced Analytics</CardTitle>
                <CardDescription>
                  Get deep insights into your business performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Real-time metrics', 'Custom reports', 'Data visualization'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Zap className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Automation</CardTitle>
                <CardDescription>
                  Streamline your workflow with powerful automation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['Task automation', 'Workflow builder', 'Smart triggers'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 mb-4 text-primary" />
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Keep your data safe with advanced security features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {['End-to-end encryption', 'Role-based access', 'Audit logs'].map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of companies that trust NimbleLaunch to power their operations
          </p>
          <Button size="lg" variant="secondary">
            Start Your Free Trial <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}