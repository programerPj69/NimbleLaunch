"use client";

import { Card } from "components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "components/ui/tabs";
import { BookOpen, Code, FileText, Lightbulb } from "lucide-react";

export default function DocumentationPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about using our platform.
          </p>
        </div>

        <Tabs defaultValue="getting-started" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="getting-started" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              API Reference
            </TabsTrigger>
            <TabsTrigger value="guides" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Guides
            </TabsTrigger>
            <TabsTrigger value="examples" className="flex items-center gap-2">
              <Lightbulb className="h-4 w-4" />
              Examples
            </TabsTrigger>
          </TabsList>

          <TabsContent value="getting-started">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
              <div className="space-y-4">
                <section>
                  <h3 className="text-xl font-medium mb-2">Quick Start</h3>
                  <p className="text-muted-foreground">
                    Learn how to get up and running with our platform in minutes.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Installation</h3>
                  <p className="text-muted-foreground">
                    Follow our step-by-step installation guide to set up your environment.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Basic Concepts</h3>
                  <p className="text-muted-foreground">
                    Understand the core concepts and architecture of our platform.
                  </p>
                </section>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <div className="space-y-4">
                <section>
                  <h3 className="text-xl font-medium mb-2">Authentication</h3>
                  <p className="text-muted-foreground">
                    Learn about our authentication methods and security features.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Endpoints</h3>
                  <p className="text-muted-foreground">
                    Explore our comprehensive API endpoint documentation.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Rate Limits</h3>
                  <p className="text-muted-foreground">
                    Understand our API rate limits and best practices.
                  </p>
                </section>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="guides">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Guides</h2>
              <div className="space-y-4">
                <section>
                  <h3 className="text-xl font-medium mb-2">Integration Guide</h3>
                  <p className="text-muted-foreground">
                    Step-by-step guides for integrating our platform with your application.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Best Practices</h3>
                  <p className="text-muted-foreground">
                    Learn about recommended patterns and practices.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Troubleshooting</h3>
                  <p className="text-muted-foreground">
                    Common issues and their solutions.
                  </p>
                </section>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="examples">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Examples</h2>
              <div className="space-y-4">
                <section>
                  <h3 className="text-xl font-medium mb-2">Code Samples</h3>
                  <p className="text-muted-foreground">
                    Browse through our collection of code examples and snippets.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Demo Projects</h3>
                  <p className="text-muted-foreground">
                    Explore complete demo projects showcasing our platform's capabilities.
                  </p>
                </section>
                <section>
                  <h3 className="text-xl font-medium mb-2">Use Cases</h3>
                  <p className="text-muted-foreground">
                    Real-world examples and implementation scenarios.
                  </p>
                </section>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}