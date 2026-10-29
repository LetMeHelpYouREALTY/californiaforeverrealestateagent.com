import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Shield, Users, Globe, Award, TrendingUp, CheckCircle, Phone } from "lucide-react";

import { buildPageMetadata } from "@/lib/seo/metadata";

export const metadata = buildPageMetadata({
  title: "Why Work With Dr. Jan Duffy | Las Vegas Real Estate",
  description: "Why work with Dr. Jan Duffy, REALTOR®: in real estate since 1983, $127M+ in closed transactions, and deep knowledge of Las Vegas neighborhoods.",
  path: "/why-berkshire-hathaway",
  keywords: ["Berkshire Hathaway HomeServices", "why choose BHHS", "Warren Buffett real estate", "trusted real estate brand", "BHHS Nevada Properties"],
});

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: "https://heyberkshire.com/favicon-32x32.png",
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              In Real Estate Since 1983
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Work With Dr. Jan Duffy?
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              When you work with Dr. Jan Duffy, Top 1% Las Vegas REALTOR®, you get an advisor who has
              been in real estate since 1983 and who puts trust, ethical standards, and honest advice first.
            </p>
          </div>

          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              What You Can Expect
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { Icon: Shield, title: "Trust and Integrity", desc: "Honest advice and transparent communication in every transaction, from first consultation to closing." },
                { Icon: Users, title: "Referral Connections", desc: "Moving to or from Las Vegas? Dr. Jan coordinates with trusted agents in other cities so both sides of your move stay on track." },
                { Icon: Globe, title: "Professional Marketing", desc: "Professional photography, MLS syndication, and targeted digital marketing that reach qualified buyers." },
                { Icon: Award, title: "Ethical Standards", desc: "As a REALTOR®, Dr. Jan adheres to the REALTOR® Code of Ethics. Your interests always come first." },
                { Icon: TrendingUp, title: "Local Market Knowledge", desc: "Accurate pricing and negotiation grounded in current MLS data and neighborhood-level insight across Southern Nevada." },
                { Icon: CheckCircle, title: "Proven Results", desc: "$127M+ in closed transactions and 500+ transactions across Southern Nevada." },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16 max-w-4xl mx-auto text-center">
            <Link href="/about" className="text-blue-600 hover:text-blue-700 font-semibold">
              Meet Dr. Jan Duffy →
            </Link>
          </section>

          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience the Difference</h2>
            <p className="text-xl text-slate-300 mb-8">
              Ready to work with a REALTOR® in real estate since 1983? Contact Dr. Jan Duffy today.
            </p>
            <a
              href="tel:+17025001955"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
            >
              <Phone className="h-5 w-5 mr-2" />
              Call (702) 500-1955
            </a>
          </section>
        </div>
      
</main>
      <RealScoutListings />
      <Footer />
    </>
  );
}
