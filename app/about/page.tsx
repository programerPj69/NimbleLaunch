export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">About PJSofonic</h1>
          <p className="text-xl text-muted-foreground">
            A leading technology organization empowering businesses with innovative solutions since 2024
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              At PJSofonic, we're dedicated to transforming how businesses operate in the digital age. 
              Our platform combines cutting-edge technology with intuitive design to streamline operations 
              and boost productivity for organizations worldwide.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
            <p className="text-muted-foreground">
              As part of the PJSofonic Organization, we envision a future where every business, 
              regardless of size, has access to enterprise-grade tools that drive growth and innovation. 
              Our commitment to continuous improvement and customer success guides everything we do.
            </p>
          </div>
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Team collaboration"
              className="rounded-lg shadow-xl object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-muted-foreground">Team Members</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">1000+</h3>
            <p className="text-muted-foreground">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">15+</h3>
            <p className="text-muted-foreground">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
}