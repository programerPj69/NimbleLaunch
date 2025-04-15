import { Card } from "@/components/ui/card";
import { 
  BarChart2, 
  Clock, 
  Users, 
  MessageSquare, 
  PieChart,
  Zap,
  Search,
  FileText
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain deep insights into your business performance with real-time metrics and customizable dashboards."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Time Tracking",
      description: "Track time spent on projects and tasks with automated timesheets and reporting."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Collaboration",
      description: "Work seamlessly with your team through shared workspaces and real-time updates."
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Communication Tools",
      description: "Built-in messaging and notification systems to keep everyone in sync."
    },
    {
      icon: <PieChart className="h-8 w-8 text-primary" />,
      title: "Resource Management",
      description: "Efficiently allocate and manage resources across projects and teams."
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost productivity."
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "Smart Search",
      description: "Powerful search capabilities to find anything in your workspace instantly."
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Document Management",
      description: "Centralized document storage with version control and collaboration features."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Core Features</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make NimbleLaunch the perfect solution for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}