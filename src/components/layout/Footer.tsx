import Link from "next/link";
import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { prisma } from "@/lib/prisma";

const quickLinks = [
    { name: "Universities", path: "/universities" },
    { name: "About Mauritius", path: "/about-Mauritius" },
    { name: "Compare Universities", path: "/compare" },
    { name: "Education System", path: "/education-system" },
    { name: "Contact Us", path: "/contact-us" },
];

const services = [
    { name: "Admission Assistance", href: "/apply" },
    { name: "Application Guide", href: "/apply" },
    { name: "Visa Support", href: "/contact-us" },
    { name: "Accommodation Help", href: "/contact-us" },
    { name: "Career Guidance", href: "/contact-us" },
];

const resources = [
    { name: "Application Guide", href: "/apply" },
    { name: "Scholarship Guide", href: "/scholarships" },
    { name: "Country Information", href: "/about-Mauritius" },
    { name: "FMGE Pass Rates", href: "/fmge-rates" },
    { name: "Sitemap", href: "/sitemap.xml" },
];

export default async function Footer() {
    // Fetch top 5 universities
    const topUnis = await prisma.university.findMany({
        where: { status: true },
        select: { name: true, slug: true },
        take: 5,
        orderBy: { isFeatured: 'desc' },
    }).catch(() => []);

    const universities = [
        ...topUnis.map(u => ({ name: u.name, href: `/universities/${u.slug}` })),
        { name: "View All Universities", href: "/universities" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid lg:grid-cols-5 gap-4">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">MBBS in Mauritius</h3>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">+91 9667 667 331</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                                <span className="text-gray-400 text-sm">info@mbbsinmauritius.com</span>
                            </div>
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    B-16 Ground Floor, Mayfield Garden, Sector 50, Gurugram, Haryana 122018
                                </span>
                            </div>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                            <div className="flex space-x-4">
                                {[
                                    { Icon: Facebook, href: "https://facebook.com/mbbsinMauritius", label: "Facebook" },
                                    { Icon: Twitter, href: "https://twitter.com/mbbsinMauritius", label: "Twitter" },
                                    { Icon: Instagram, href: "https://instagram.com/mbbsinMauritius", label: "Instagram" },
                                    { Icon: Youtube, href: "https://youtube.com/@mbbsinMauritius", label: "YouTube" },
                                ].map(({ Icon, href, label }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                                        aria-label={label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.path}>
                                    <Link href={link.path} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Universities */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Top Universities</h4>
                        <ul className="space-y-3">
                            {universities.map((u, index) => (
                                <li key={index}>
                                    <Link href={u.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {u.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.map((s) => (
                                <li key={s.name}>
                                    <Link href={s.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {s.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Resources</h4>
                        <ul className="space-y-3">
                            {resources.map((r) => (
                                <li key={r.name}>
                                    <Link href={r.href} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {r.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} MBBS in Mauritius | Partner of Embassy of Mauritius
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
