import { Card } from "@/components/ui/card";
import { 
  Shield, 
  Lock, 
  Key, 
  UserCheck, 
  Eye, 
  Server,
  AlertTriangle,
  FileCheck
} from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "End-to-End Encryption",
      description: "All data is encrypted in transit and at rest using industry-standard encryption protocols."
    },
    {
      icon: <Lock className="h-8 w-8 text-primary" />,
      title: "Two-Factor Authentication",
      description: "Additional security layer with 2FA support for all user accounts."
    },
    {
      icon: <Key className="h-8 w-8 text-primary" />,
      title: "Role-Based Access Control",
      description: "Granular control over user permissions and access levels."
    },
    {
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      title: "Single Sign-On (SSO)",
      description: "Enterprise SSO integration with major identity providers."
    },
    {
      icon: <Eye className="h-8 w-8 text-primary" />,
      title: "Activity Monitoring",
      description: "Comprehensive audit logs of all system activities and changes."
    },
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Data Backup",
      description: "Automated backups with point-in-time recovery capabilities."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-primary" />,
      title: "Threat Detection",
      description: "Advanced threat detection and prevention systems."
    },
    {
      icon: <FileCheck className="h-8 w-8 text-primary" />,
      title: "Compliance",
      description: "SOC 2, GDPR, and HIPAA compliance for enterprise security requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6">Enterprise-Grade Security</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your data security is our top priority. NimbleLaunch implements multiple layers of security to protect your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Security Certifications</h2>
          <p className="text-center text-muted-foreground">
            NimbleLaunch maintains the highest security standards with regular audits and certifications.
            Our platform is trusted by thousands of businesses worldwide.
          </p>
        </div>
      </div>
    </div>
  );
}