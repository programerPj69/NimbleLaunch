import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Slack",
      description: "Real-time messaging and notifications integration",
      image: "https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg"
    },
    {
      name: "Google Workspace",
      description: "Seamless integration with Google's productivity suite",
      image: "https://workspace.google.com/static/img/google-workspace-logo.svg"
    },
    {
      name: "Microsoft 365",
      description: "Connect with Microsoft's enterprise tools",
      image: "https://www.microsoft.com/favicon.ico"
    },
    {
      name: "Jira",
      description: "Project tracking and issue management",
      image: "https://wac-cdn.atlassian.com/assets/img/favicons/atlassian/favicon.png"
    },
    {
      name: "GitHub",
      description: "Code repository and version control integration",
      image: "https://github.githubassets.com/favicons/favicon.svg"
    },
    {
      name: "Salesforce",
      description: "CRM and customer data synchronization",
      image: "https://www.salesforce.com/favicon.ico"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Integrations</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect NimbleLaunch with your favorite tools and services to create a seamless workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-16 w-16 mb-4 relative mx-auto">
                <Image
                  src={integration.image}
                  alt={integration.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{integration.name}</h3>
              <p className="text-muted-foreground text-center">{integration.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Don't see the integration you need? Contact us to request new integrations.
          </p>
        </div>
      </div>
    </div>
  );
}