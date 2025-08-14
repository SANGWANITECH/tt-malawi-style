import { Card, CardContent } from "./ui/card";
import { Smartphone, CreditCard, Shield } from "lucide-react";

const PaymentMethods = () => {
  const paymentMethods = [
    {
      id: 1,
      name: "Airtel Money",
      description: "Quick and secure payments with Airtel Money",
      icon: Smartphone,
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      id: 2,
      name: "TNM Mpamba",
      description: "Easy mobile payments with TNM Mpamba",
      icon: Smartphone,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      id: 3,
      name: "National Bank Mo626",
      description: "Secure banking with National Bank Mo626",
      icon: CreditCard,
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Secure Payment Options
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Shop with confidence using Malawi's most trusted mobile payment platforms. 
            Fast, secure, and convenient transactions.
          </p>
        </div>

        {/* Payment Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {paymentMethods.map((method) => (
            <Card 
              key={method.id} 
              className="group border-border hover:shadow-lg transition-all duration-300 bg-card"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className={`mx-auto w-16 h-16 ${method.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className={`h-8 w-8 ${method.color}`} />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {method.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {method.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Security Features */}
        <div className="bg-muted/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Why Choose Our Payment System?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <Shield className="h-6 w-6 text-primary mx-auto" />
              <h4 className="font-semibold text-card-foreground">Bank-Level Security</h4>
              <p className="text-sm text-muted-foreground">
                Your transactions are protected with the highest security standards
              </p>
            </div>
            <div className="space-y-2">
              <Smartphone className="h-6 w-6 text-primary mx-auto" />
              <h4 className="font-semibold text-card-foreground">Instant Processing</h4>
              <p className="text-sm text-muted-foreground">
                Payments are processed immediately for faster order fulfillment
              </p>
            </div>
            <div className="space-y-2">
              <CreditCard className="h-6 w-6 text-primary mx-auto" />
              <h4 className="font-semibold text-card-foreground">No Hidden Fees</h4>
              <p className="text-sm text-muted-foreground">
                Transparent pricing with no surprise charges at checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;