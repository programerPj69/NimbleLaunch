'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Cookie, Lock } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground text-lg">Understanding how we use cookies to improve your experience</p>
        </div>

        <div className="grid gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Cookie className="h-5 w-5 text-primary" />
                <CardTitle>What Are Cookies?</CardTitle>
              </div>
              <CardDescription>
                Cookies are small text files stored on your device when you visit our website
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Cookies help us remember your preferences, understand how you use our website, 
                and provide you with a more personalized experience. They are essential for 
                certain features of our website to work properly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <CardTitle>How We Use Cookies</CardTitle>
              </div>
              <CardDescription>
                We use different types of cookies for various purposes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[200px] rounded-md border p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Essential Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Required for basic website functionality. These cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Performance Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website by collecting 
                      and reporting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Functional Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Remember your preferences to provide enhanced, more personal features.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Marketing Cookies</h3>
                    <p className="text-sm text-muted-foreground">
                      Track your activity across websites to deliver more relevant advertising.
                    </p>
                  </div>
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <CardTitle>Your Privacy Rights</CardTitle>
              </div>
              <CardDescription>
                You can control and manage cookies in your browser settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Most web browsers allow you to manage your cookie preferences. You can set your 
                browser to refuse cookies, or to alert you when cookies are being sent. However, 
                please note that disabling cookies might affect the functionality of this website.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}