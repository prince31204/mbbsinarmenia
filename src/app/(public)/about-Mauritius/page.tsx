import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    Bus,
    Building2,
    CheckCircle,
    Clock3,
    DollarSign,
    Flag,
    Globe,
    Heart,
    Landmark,
    Languages,
    MapPinned,
    Mountain,
    Music,
    Palmtree,
    Plane,
    Stethoscope,
    Sparkles,
    Sun,
    Tent,
    Users,
    Utensils,
} from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { getAboutCountryContent } from "@/lib/public-page-content";
import { replaceCurrencySymbol } from "@/lib/currency";

export const metadata: Promise<Metadata> = buildMetadata({
    title: "About Mauritius - Culture, Lifestyle and Education | mbbsinmauritius.com",
    description:
        "Discover Mauritius - a safe, modern, and globally connected destination for MBBS aspirants with quality education and strong clinical exposure.",
    entitySeo: {
        metaKeyword:
            "about Mauritius, Mauritius culture, life in Mauritius for students, mbbs Mauritius environment",
    },
    path: "/about-Mauritius",
    pageKey: "about-Mauritius",
});

const themeStyles = {
    red: {
        softPanel: "border-blue-100 bg-blue-50/80",
        iconWrap: "bg-blue-100 text-blue-600",
        iconHover: "group-hover:bg-blue-600 group-hover:text-white",
        titleHover: "group-hover:text-blue-700",
        wash: "from-blue-500/15 via-white/0 to-amber-400/10",
        ringHover: "hover:border-blue-200 hover:shadow-blue-100/80",
        pill: "bg-blue-100 text-blue-700",
    },
    blue: {
        softPanel: "border-blue-100 bg-blue-50/80",
        iconWrap: "bg-blue-100 text-blue-600",
        iconHover: "group-hover:bg-blue-600 group-hover:text-white",
        titleHover: "group-hover:text-blue-700",
        wash: "from-blue-500/15 via-white/0 to-cyan-400/10",
        ringHover: "hover:border-blue-200 hover:shadow-blue-100/80",
        pill: "bg-blue-100 text-blue-700",
    },
    green: {
        softPanel: "border-green-100 bg-green-50/80",
        iconWrap: "bg-green-100 text-green-600",
        iconHover: "group-hover:bg-green-600 group-hover:text-white",
        titleHover: "group-hover:text-green-700",
        wash: "from-green-500/15 via-white/0 to-emerald-400/10",
        ringHover: "hover:border-green-200 hover:shadow-green-100/80",
        pill: "bg-green-100 text-green-700",
    },
    amber: {
        softPanel: "border-amber-100 bg-amber-50/80",
        iconWrap: "bg-amber-100 text-amber-600",
        iconHover: "group-hover:bg-amber-500 group-hover:text-white",
        titleHover: "group-hover:text-amber-700",
        wash: "from-amber-400/15 via-white/0 to-orange-400/10",
        ringHover: "hover:border-amber-200 hover:shadow-amber-100/80",
        pill: "bg-amber-100 text-amber-700",
    },
    purple: {
        softPanel: "border-purple-100 bg-purple-50/80",
        iconWrap: "bg-purple-100 text-purple-600",
        iconHover: "group-hover:bg-purple-600 group-hover:text-white",
        titleHover: "group-hover:text-purple-700",
        wash: "from-purple-500/15 via-white/0 to-fuchsia-400/10",
        ringHover: "hover:border-purple-200 hover:shadow-purple-100/80",
        pill: "bg-purple-100 text-purple-700",
    },
} as const;

const highlightIcons = [Globe, Sun, Utensils, Mountain, Music, Landmark];
const overviewIcons = [Sparkles, Globe, Landmark, Sun, Users, Mountain];
const detailIcons = [Utensils, Mountain, Music];

const comparisonRows = [
    {
        label: "Tuition Fees / Year",
        mauritius: replaceCurrencySymbol("$8,000 – $10,000"),
        india: replaceCurrencySymbol("$15,000 – $18,000"),
        uk: replaceCurrencySymbol("$60,000 – $80,000"),
    },
    {
        label: "Hostel / Year",
        mauritius: replaceCurrencySymbol("$800 – $2,000"),
        india: replaceCurrencySymbol("$1,500 – $3,000"),
        uk: replaceCurrencySymbol("$8,000 – $15,000"),
    },
    {
        label: "Food / Month",
        mauritius: replaceCurrencySymbol("$200 – $350"),
        india: replaceCurrencySymbol("$150 – $300"),
        uk: replaceCurrencySymbol("$800 – $1,200"),
    }
];

const geographyHighlights = [
    {
        icon: Globe,
        iconColor: "text-blue-600",
        text: "Island nation in the Indian Ocean",
    },
    {
        icon: Palmtree,
        iconColor: "text-emerald-600",
        text: "Surrounded by coral reefs and lagoons",
    },
    {
        icon: Mountain,
        iconColor: "text-violet-600",
        text: "Volcanic origin with scenic landscapes",
    },
    {
        icon: MapPinned,
        iconColor: "text-cyan-600",
        text: "Close to Madagascar and the African coastline",
    },
];

const climateZones = [
    {
        icon: Sun,
        iconColor: "text-amber-500",
        text: "Tropical maritime climate",
    },
    {
        icon: Clock3,
        iconColor: "text-blue-500",
        text: "Warm summers and mild winters",
    },
    {
        icon: Sparkles,
        iconColor: "text-violet-500",
        text: "Pleasant weather year-round",
    },
    {
        icon: CheckCircle,
        iconColor: "text-emerald-500",
        text: "Occasional rainfall during summer months",
    },
];

const mauritiusAttractions = [
    {
        icon: Palmtree,
        title: "Grand Baie",
        description: "Popular beach and tourist hub",
    },
    {
        icon: Globe,
        title: "Chamarel Seven Colored Earth",
        description: "Unique natural formation",
    },
    {
        icon: Mountain,
        title: "Black River Gorges National Park",
        description: "Nature and trekking destination",
    },
    {
        icon: Landmark,
        title: "Le Morne Brabant",
        description: "UNESCO World Heritage site",
    },
];

const transportPoints = [
    {
        icon: Plane,
        iconColor: "text-blue-600",
        text: "Sir Seewoosagur Ramgoolam International Airport connects Mauritius globally",
    },
    {
        icon: Bus,
        iconColor: "text-orange-600",
        text: "Buses and taxis are available across the island for daily student travel",
    },
    {
        icon: Globe,
        iconColor: "text-violet-600",
        text: "Well-connected road network supports inter-city movement",
    },
    {
        icon: MapPinned,
        iconColor: "text-emerald-600",
        text: "Practical local routes connect universities, hostels, and major hubs",
    },
];

const visaOnboardingPoints = [
    {
        icon: CheckCircle,
        iconColor: "text-emerald-600",
        text: "Student visa process is simple and structured for international applicants",
    },
    {
        icon: Clock3,
        iconColor: "text-orange-600",
        text: "Processing timelines are generally fast for student routes",
    },
    {
        icon: Plane,
        iconColor: "text-blue-600",
        text: "Universities assist with documentation and invitation-related requirements",
    },
    {
        icon: Heart,
        iconColor: "text-blue-500",
        text: "Arrival, onboarding, and registration support are provided by universities",
    },
];

const healthcareCards = [
    {
        title: "Public Healthcare",
        description:
            "Government hospitals and teaching institutions provide accessible medical services and foundational clinical exposure for students.",
        accent: "border-sky-200",
    },
    {
        title: "Private Healthcare",
        description:
            "Private hospitals in major cities offer advanced facilities, specialist care, and additional treatment pathways.",
        accent: "border-emerald-200",
    },
    {
        title: "Student Healthcare",
        description:
            "Universities support international students with basic healthcare guidance, referral support, and onboarding assistance.",
        accent: "border-violet-200",
    },
];

export default async function AboutMauritiusPage() {
    const content = await getAboutCountryContent();

    const stats = content.summaryStats.map((item, index) => {
        const icons = [Building2, Users, Languages, DollarSign];
        const eyebrows = ["City", "People", "Language", "Currency"];
        return {
            ...item,
            eyebrow: eyebrows[index % eyebrows.length],
            icon: icons[index % icons.length]
        };
    });

    const highlights = [
        { title: "Blue Penny", description: "Mauritius issued its first postage stamp, the famous \"Blue Mauritius,\" in 1847.", theme: "blue" as const },
        { title: "Welfare State", description: "The government provides free education, healthcare, and public transportation.", theme: "green" as const },
        { title: "Cultural Blend", description: "Mauritian cuisine is a mix of Indian, Chinese, French, and African influences.", theme: "amber" as const },
        { title: "Geography", description: "Located in East Africa, Mauritius includes the main island and several outer islands like Rodrigues, Agaléga, and St. Brandon. The country is famously surrounded by coral reefs.", theme: "purple" as const },
        { title: "Economy", description: "Formerly dependent on agriculture, it has developed a strong economy focused on tourism, textiles, and financial services.", theme: "red" as const },
        { title: "Climate", description: "Tropical climate with a cyclone season, usually from November to April.", theme: "blue" as const },
    ].map((item, index) => ({
        ...item,
        icon: highlightIcons[index % highlightIcons.length],
        style: themeStyles[item.theme],
    }));

    const overviewCards = content.overviewCards.slice(0, 6).map((item, index) => ({
        ...item,
        icon: overviewIcons[index % overviewIcons.length],
        style: themeStyles[item.theme],
    }));

    const attractions = content.attractions.slice(0, 5).map((item, index) => {
        const icons = [Mountain, Palmtree, Tent];
        return {
            ...item,
            icon: icons[index % icons.length],
            style: themeStyles[item.theme],
        };
    });

    const cuisines = content.cuisines.slice(0, 5).map((item, index) => {
        return {
            ...item,
            icon: Utensils,
            style: themeStyles[item.theme],
        };
    });

    const quickFacts = [
        { title: "Capital", value: stats.find((stat) => stat.label === "Capital")?.value || "Port Louis", icon: Building2, style: themeStyles.blue },
        { title: "Population", value: stats.find((stat) => stat.label === "Population")?.value || "1.3 Million+", icon: Users, style: themeStyles.green },
        { title: "Languages", value: stats.find((stat) => stat.label === "Languages")?.value || "English, French, Creole", icon: Languages, style: themeStyles.purple },
        { title: "Currency", value: stats.find((stat) => stat.label === "Currency")?.value || "Mauritian Rupee (MUR)", icon: DollarSign, style: themeStyles.amber },
        { title: "Location", value: content.location, icon: MapPinned, style: themeStyles.red },
        { title: "Timezone", value: content.timezone, icon: Clock3, style: themeStyles.green },
        { title: "Independence", value: content.independenceDay, icon: Flag, style: themeStyles.amber },
        { title: "Highest Peak", value: `${content.highestPeak} (${content.highestPeakHeight})`, icon: Mountain, style: themeStyles.blue },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-blue-700 to-yellow-400 py-20 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(153,27,27,0.18),transparent_32%)]" />
                <div className="relative mx-auto max-w-7xl px-4 text-center">
                    <div className="mb-6">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-gradient-to-r from-blue-600/80 to-blue-500/70 px-6 py-2.5 text-xl font-semibold text-blue-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-sm">
                            <MapPinned className="h-5 w-5" />
                            About Mauritius
                        </span>
                    </div>
                    <h1 className="mb-6 text-4xl font-bold lg:text-6xl">{content.heroTitle}</h1>
                    <p className="mx-auto max-w-3xl text-xl leading-relaxed text-blue-100">{content.heroDescription}</p>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-10">
                <div className="mb-8 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Country Snapshot</span>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">Quick Facts About Mauritius</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        People, area, capital, and student budget insights at a glance before you compare MBBS universities.
                    </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
                    {quickFacts.map((fact) => (
                        <article
                            key={fact.title}
                            className={`group relative overflow-hidden rounded-2xl border p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${fact.style.softPanel} ${fact.style.ringHover}`}
                        >
                            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${fact.style.wash}`} />
                            <div className="relative">
                                <div
                                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${fact.style.iconWrap} ${fact.style.iconHover}`}
                                >
                                    <fact.icon className="h-6 w-6" />
                                </div>
                                <h3 className={`text-lg font-bold text-gray-900 transition-colors duration-300 ${fact.style.titleHover}`}>{fact.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-900">{fact.value}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-16">
                <div className="mb-12 text-center">
                    <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Why Mauritius?</span>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">A Premium Study Destination for MBBS</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                        Mauritius offers internationally aligned medical education with modern infrastructure, English-medium programs, and a safe environment for international students.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {highlights.map((item) => (
                        <article
                            key={item.title}
                            className={`group relative overflow-hidden rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.style.ringHover}`}
                        >
                            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`} />
                            <div className="relative">
                                <div className="mb-4 flex items-center gap-4">
                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover}`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}>{item.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-gray-50 py-16">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Did You Know?</span>
                            <h2 className="mt-2 mb-8 text-3xl font-bold text-gray-900">Mauritius Education Facts</h2>
                            <div className="space-y-4">
                                {[
                                    "Literacy & Enrollment Facts- Adult literacy rate: ~91–94% (one of the highest in Africa). Youth literacy rate: ~99% (very high); Primary enrollment: Over 100% (due to full access + repetition). Literacy is above global average, showing strong education quality.",
                                    "Academic Excellence- Students perform very well in Cambridge International exams (O Level & A Level). Ranked 1st in Africa in Global Innovation Index (2023). Strong focus on practical + skill-based learning.",
                                    "Mauritius has one of the best education systems in Africa, combining: High literacy, Free education, International curriculum, Strong government support.",
                                    "Government Role- Education is managed by: Ministry of Education, Ministry of Tertiary Education. Government spends a significant portion of budget (~5% GDP) on education.",
                                    ...content.supportPoints.filter(p =>
                                        !p.includes("Medical support services are accessible") &&
                                        !p.includes("Private hospitals complement public care")
                                    )
                                ].map((fact) => (
                                    <div key={fact} className="flex items-start gap-3">
                                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                                        <p className="text-gray-700">{fact}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-amber-50 p-8">
                            <h3 className="mb-6 text-xl font-bold text-gray-900">Cost Comparison</h3>
                            <div className="space-y-4">
                                {comparisonRows.map((row) => (
                                    <div key={row.label} className="rounded-xl bg-white p-4 shadow-sm border border-gray-100">
                                        <div className="mb-3 text-sm font-bold text-gray-800">{row.label}</div>
                                        <div className="grid grid-cols-3 gap-3 text-xs leading-normal">
                                            <div className="text-center">
                                                <div className="font-bold text-green-600 mb-1">{row.mauritius}</div>
                                                <div className="text-[10px] uppercase font-medium tracking-wider text-gray-400">Mauritius</div>
                                            </div>
                                            <div className="text-center border-l border-gray-100">
                                                <div className="font-bold text-gray-700 mb-1">{row.india}</div>
                                                <div className="text-[10px] uppercase font-medium tracking-wider text-gray-400">India (Pvt)</div>
                                            </div>
                                            <div className="text-center border-l border-gray-100">
                                                <div className="font-bold text-gray-700 mb-1">{row.uk}</div>
                                                <div className="text-[10px] uppercase font-medium tracking-wider text-gray-400">UK</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {overviewCards.length > 0 ? (
                <section className="mx-auto max-w-7xl px-4 py-16">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">MBBS Education Hub</span>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">International recognition with modern medical training</h2>
                        <p className="mx-auto mt-4 max-w-2xl text-gray-600">
                            Mauritius is an emerging MBBS destination with globally aligned curriculum, English-medium pathways, and quality clinical exposure.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {overviewCards.map((item) => (
                            <article
                                key={item.title}
                                className={`group relative overflow-hidden rounded-3xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${item.style.softPanel} ${item.style.ringHover}`}
                            >
                                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`} />
                                <div className="relative">
                                    <div
                                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover}`}
                                    >
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}>{item.title}</h3>
                                    <p className="mt-3 text-sm leading-7 text-gray-700">{item.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            ) : null}

            {content.universityCities.length > 0 ? (
                <section className="bg-gray-50 py-16">
                    <div className="mx-auto max-w-7xl px-4">
                        <div className="mb-12 text-center">
                            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Major University Cities</span>
                            <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">Urban hubs for MBBS universities in Mauritius</h2>
                            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
                                City-level highlights based on live university records, including active institutions and study-friendly context.
                            </p>
                        </div>
                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                            {content.universityCities.slice(0, 3).map((city, index) => {
                                const gradients = [
                                    "from-blue-600 to-violet-600",
                                    "from-emerald-600 to-green-700",
                                    "from-orange-600 to-blue-600",
                                ];
                                const gradient = gradients[index % gradients.length];

                                return (
                                    <article
                                        key={city.city}
                                        className={`rounded-[1.75rem] bg-gradient-to-br ${gradient} p-7 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                                    >
                                        <h3 className="text-2xl font-bold">
                                            {index === 0 ? "Belle Rive" : index === 1 ? "Montagne Blanche" : city.city}
                                        </h3>
                                        {index === 0 ? (
                                            <div className="mt-6 space-y-6 text-sm leading-relaxed text-white/90">
                                                <section>
                                                    <h4 className="flex items-center gap-2 text-md font-bold text-white">
                                                        <span>🏫</span> About SSR Medical College
                                                    </h4>
                                                    <p className="mt-2">
                                                        SSR Medical College (Sir Seewoosagur Ramgoolam Medical College) is the first medical college in Mauritius, established in 1999 and located in Belle Rive near Curepipe.
                                                        It was founded by the Indian Ocean Medical Institute Trust (IOMIT) in memory of Sir Seewoosagur Ramgoolam, the founding father of Mauritius.
                                                    </p>
                                                    <p className="mt-2">
                                                        The college is affiliated with the University of Mauritius, which awards the MBBS degree.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>📜</span> History & Establishment
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Established in 1999 as the first private medical college in Mauritius</li>
                                                        <li>Created through collaboration between the Government of Mauritius and IOMIT</li>
                                                        <li>Developed to make Mauritius a regional hub for medical education</li>
                                                        <li>Attracts students from India, Africa, UK, USA, and other countries</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🎓</span> Courses Offered
                                                    </h5>
                                                    <div className="mt-2 space-y-3">
                                                        <div>
                                                            <p className="font-semibold text-white">Undergraduate</p>
                                                            <ul className="mt-1 list-inside list-disc space-y-1">
                                                                <li>MBBS (Bachelor of Medicine & Bachelor of Surgery)</li>
                                                                <li>Duration: 5 years + 1 year internship</li>
                                                                <li>Semester System: 10 semesters</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-white">Postgraduate (MD/MS)</p>
                                                            <ul className="mt-1 grid grid-cols-2 gap-x-4 list-inside list-disc">
                                                                <li>General Medicine</li>
                                                                <li>General Surgery</li>
                                                                <li>Radiodiagnosis</li>
                                                                <li>Anaesthesiology</li>
                                                                <li>Ophthalmology</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🌍</span> Accreditation & Recognition
                                                    </h5>
                                                    <p className="mt-2">SSR Medical College is globally recognized and approved by:</p>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Medical Council of Mauritius (MCM)</li>
                                                        <li>Higher Education Commission (HEC), Mauritius</li>
                                                        <li>World Health Organization (WHO)</li>
                                                        <li>National Medical Commission (NMC), India</li>
                                                        <li>ECFMG & Medical Board of California (USA)</li>
                                                    </ul>
                                                    <p className="mt-3 text-xs italic text-blue-100/90">
                                                        👉 Graduates can pursue licensing exams like NEXT, USMLE, PLAB, etc.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏥</span> Clinical Training & Teaching Hospitals
                                                    </h5>
                                                    <p className="mt-2">Training provided in major government hospitals:</p>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Jawaharlal Nehru Hospital</li>
                                                        <li>Victoria Hospital</li>
                                                        <li>SSR National Hospital</li>
                                                        <li>1000+ hospital beds available for clinical exposure</li>
                                                        <li>Hands-on patient interaction and real-case exposure</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏢</span> Campus & Facilities
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>30 acres campus with modern infrastructure</li>
                                                        <li>Advanced laboratories & research facilities</li>
                                                        <li>Digital classrooms & e-learning systems</li>
                                                        <li>Central library with international journals</li>
                                                        <li>Hostel facilities for international students</li>
                                                        <li>Safe and multicultural environment</li>
                                                    </ul>
                                                </section>
                                            </div>
                                        ) : index === 1 ? (
                                            <div className="mt-6 space-y-6 text-sm leading-relaxed text-white/90">
                                                <section>
                                                    <h4 className="flex items-center gap-2 text-md font-bold text-white">
                                                        <span>🏫</span> About Anna Medical College (AMCRC)
                                                    </h4>
                                                    <p className="mt-2">
                                                        Anna Medical College & Research Centre (AMCRC) is one of the leading private medical institutions in Mauritius, located in Montagne Blanche. Established in 2012, the college is managed by the Anna Medical College Trust with a vision to provide high-quality, globally aligned medical education.
                                                    </p>
                                                    <p className="mt-2">
                                                        AMCRC is known for its modern infrastructure, experienced faculty, and strong clinical training, making it a preferred choice for MBBS in Mauritius.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>📜</span> History & Establishment
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Established in 2012 as a modern medical institution</li>
                                                        <li>Built to support Mauritius as a global medical education hub</li>
                                                        <li>Attracts students from India, Africa, and other international regions</li>
                                                        <li>Focus on practical, skill-based medical training</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🎓</span> Courses Offered
                                                    </h5>
                                                    <div className="mt-2 space-y-3">
                                                        <div>
                                                            <p className="font-semibold text-white">Undergraduate</p>
                                                            <ul className="mt-1 list-inside list-disc space-y-1">
                                                                <li>MBBS (Bachelor of Medicine & Bachelor of Surgery)</li>
                                                                <li>Duration: 5 years + 1 year internship</li>
                                                                <li>Curriculum: Integrated theory + clinical training</li>
                                                                <li>Medium: English</li>
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold text-white">Postgraduate (MD/MS)</p>
                                                            <p className="mt-1">Offered in selected disciplines (subject to availability and approvals)</p>
                                                        </div>
                                                    </div>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🌍</span> Accreditation & Recognition
                                                    </h5>
                                                    <p className="mt-2">Anna Medical College is recognized and approved by:</p>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Higher Education Commission Mauritius</li>
                                                        <li>Medical Council of Mauritius (MCM)</li>
                                                        <li>Listed in World Directory of Medical Schools (WDOMS)</li>
                                                        <li>Eligible for NMC (India) guidelines</li>
                                                    </ul>
                                                    <div className="mt-4">
                                                        <p className="text-sm font-semibold text-white">👉 Graduates can appear for:</p>
                                                        <ul className="mt-1 flex flex-wrap gap-x-4 list-inside list-disc">
                                                            <li>NEXT (India)</li>
                                                            <li>USMLE (USA)</li>
                                                            <li>PLAB (UK)</li>
                                                        </ul>
                                                    </div>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏥</span> Clinical Training & Hospitals
                                                    </h5>
                                                    <p className="mt-2">Clinical rotations in government & affiliated hospitals. Strong emphasis on:</p>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Early patient exposure</li>
                                                        <li>Hands-on clinical learning</li>
                                                        <li>Real-time case discussions</li>
                                                    </ul>
                                                    <p className="mt-3 italic text-white/80">
                                                        Students gain practical skills from early years, crucial for global medical practice.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏢</span> Campus & Facilities
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Modern campus with advanced laboratories</li>
                                                        <li>Smart classrooms & digital learning systems</li>
                                                        <li>Fully equipped anatomy, pathology, and microbiology labs</li>
                                                        <li>Central library with global medical resources</li>
                                                        <li>Separate hostel facilities for boys & girls</li>
                                                        <li>Safe, clean, and student-friendly environment</li>
                                                    </ul>
                                                </section>
                                            </div>
                                        ) : index === 2 ? (
                                            <div className="mt-6 space-y-6 text-sm leading-relaxed text-white/90">
                                                <section>
                                                    <h4 className="flex items-center gap-2 text-md font-bold text-white">
                                                        <span>🏙️</span> About Capital City
                                                    </h4>
                                                    <p className="mt-2">
                                                        Port Louis is the vibrant capital city of Mauritius, located on the northwest coast. It serves as the political, economic, and cultural center of the country, offering a unique blend of tradition and modernity.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>📜</span> History & Background
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Founded in 1735 during French colonial rule</li>
                                                        <li>Named after King Louis XV of France</li>
                                                        <li>Developed as a major trading port in the Indian Ocean</li>
                                                        <li>Financial and governmental hub of modern Mauritius</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🌍</span> Importance & Economy
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Main business and financial center of Mauritius</li>
                                                        <li>Houses government offices, banks, and corporate headquarters</li>
                                                        <li>One of the busiest ports in the Indian Ocean region</li>
                                                        <li>Key sectors:
                                                            <ul className="ml-6 mt-1 list-inside list-[circle] space-y-0.5 opacity-90">
                                                                <li>Shipping & trade</li>
                                                                <li>Tourism</li>
                                                                <li>Financial services</li>
                                                                <li>Retail & commerce</li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏙️</span> Major Attractions
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Caudan Waterfront – Dining & Entertainment</li>
                                                        <li>Central Market – Local food & spices</li>
                                                        <li>Blue Penny Museum – Rare stamps & history</li>
                                                        <li>Fort Adelaide – Panoramic city views</li>
                                                        <li>Aapravasi Ghat – UNESCO World Heritage Site</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏛️</span> Cultural & Social Life
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>A true melting pot of cultures—Indian, Creole, Chinese, and European influences</li>
                                                        <li>Festivals like Diwali, Eid, Christmas, and Chinese New Year are widely celebrated</li>
                                                        <li>Street life is vibrant with local vendors, music, and food culture</li>
                                                        <li>Strong presence of art, museums, and heritage sites</li>
                                                    </ul>
                                                    <p className="mt-3 text-xs italic text-blue-100/90">
                                                        👉 This diversity makes the city feel globally connected yet deeply traditional.
                                                    </p>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🏫</span> Lifestyle & Living
                                                    </h5>
                                                    <p className="mt-1">Multicultural influences: Indian, African, Chinese, and European.</p>
                                                    <ul className="mt-1 list-inside list-disc space-y-1">
                                                        <li>Languages: English, French, Creole, Hindi</li>
                                                        <li>Cuisines: Indian, Chinese, and Creole</li>
                                                        <li>Extensive shopping centers and street markets</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🚇</span> Transportation
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Linked via Metro Express (light rail system)</li>
                                                        <li>Well-connected public bus network</li>
                                                        <li>45 minutes drive to International Airport</li>
                                                    </ul>
                                                </section>

                                                <section>
                                                    <h5 className="flex items-center gap-2 font-bold text-white">
                                                        <span>🌤️</span> Climate
                                                    </h5>
                                                    <ul className="mt-2 list-inside list-disc space-y-1">
                                                        <li>Tropical climate throughout the year</li>
                                                        <li>Warm summers and mild winters</li>
                                                        <li>Average temperature: 20°C – 30°C</li>
                                                        <li>Pleasant coastal weather ideal for living and studying</li>
                                                    </ul>
                                                </section>
                                            </div>
                                        ) : (
                                            <p className="mt-4 text-sm leading-8 text-white/90">{city.description}</p>
                                        )}

                                        {index !== 2 && (
                                            <div className="mt-6 space-y-3 text-white/90">
                                                <div className="flex items-center gap-2.5 text-sm">
                                                    <Users className="h-5 w-5" />
                                                    <span>
                                                        {city.universityCount} listed universit{city.universityCount === 1 ? "y" : "ies"}
                                                    </span>
                                                </div>
                                                <div className="flex items-center gap-2.5 text-sm">
                                                    <Sparkles className="h-5 w-5" />
                                                    <span>{city.universityNames.slice(0, 2).join(" • ")}</span>
                                                </div>
                                                {city.avgTuition ? (
                                                    <div className="flex items-center gap-2.5 text-sm">
                                                        <DollarSign className="h-5 w-5" />
                                                        <span>Tuition: {city.avgTuition}</span>
                                                    </div>
                                                ) : null}
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="bg-gradient-to-b from-slate-100 to-slate-200/70 py-14">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold text-slate-800 lg:text-4xl">Geography and Climate</h2>
                        <p className="mt-4 text-base leading-7 text-slate-700">
                            A tropical island nation in the Indian Ocean known for its beaches, stable climate, and modern infrastructure.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
                            <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">Geography Highlights</h3>
                            <ul className="mt-6 space-y-4">
                                {geographyHighlights.map((item) => (
                                    <li key={item.text} className="flex items-start gap-3.5">
                                        <item.icon className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`} />
                                        <p className="text-base leading-7 text-slate-700">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
                            <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">Climate Zones</h3>
                            <ul className="mt-6 space-y-4">
                                {climateZones.map((item) => (
                                    <li key={item.text} className="flex items-start gap-3.5">
                                        <item.icon className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`} />
                                        <p className="text-base leading-7 text-slate-700">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>

                    <div className="mt-8 rounded-[2rem] border border-blue-300/20 bg-gradient-to-r from-orange-500 to-blue-600 px-6 py-8 text-white shadow-lg shadow-blue-200/40 lg:px-10">
                        <h3 className="text-center text-2xl font-bold lg:text-3xl">Top Tourist Attractions</h3>
                        <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {mauritiusAttractions.map((item) => (
                                <article key={item.title} className="rounded-2xl bg-white/10 p-4 text-center ring-1 ring-white/15 backdrop-blur-sm">
                                    <item.icon className="mx-auto h-8 w-8 text-amber-100" />
                                    <h4 className="mt-3 text-xl font-semibold">{item.title}</h4>
                                    <p className="mt-2 text-sm leading-6 text-blue-50">{item.description}</p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-slate-100 py-14">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Plane className="mx-auto h-10 w-10 text-blue-600" />
                        <h2 className="mt-4 text-3xl font-bold text-slate-800 lg:text-4xl">Travel and Connectivity</h2>
                        <p className="mt-4 text-base leading-7 text-slate-700">
                            International arrivals and local transport options make student onboarding practical and manageable.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 lg:grid-cols-2">
                        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
                            <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">Transportation</h3>
                            <ul className="mt-6 space-y-4">
                                {transportPoints.map((item) => (
                                    <li key={item.text} className="flex items-start gap-3.5">
                                        <item.icon className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`} />
                                        <p className="text-base leading-7 text-slate-700">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 lg:p-7">
                            <h3 className="text-xl font-bold text-slate-900 lg:text-2xl">Visa and Onboarding</h3>
                            <ul className="mt-6 space-y-4">
                                {visaOnboardingPoints.map((item) => (
                                    <li key={item.text} className="flex items-start gap-3.5">
                                        <item.icon className={`mt-0.5 h-6 w-6 shrink-0 ${item.iconColor}`} />
                                        <p className="text-base leading-7 text-slate-700">{item.text}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-b from-teal-50 via-sky-50 to-indigo-100/70 py-14">
                <div className="mx-auto max-w-7xl px-4">
                    <div className="mx-auto max-w-4xl text-center">
                        <Stethoscope className="mx-auto h-11 w-11 text-emerald-600" />
                        <h2 className="mt-4 text-3xl font-bold text-slate-800 lg:text-4xl">Healthcare System</h2>
                        <p className="mt-4 text-base leading-7 text-slate-700">
                            Healthcare access for students is available through university support and city-wide medical networks.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                        {healthcareCards.map((card) => (
                            <article
                                key={card.title}
                                className={`rounded-3xl border-t-4 bg-white p-6 shadow-sm ring-1 ring-slate-100 ${card.accent}`}
                            >
                                <h3 className="text-2xl font-bold text-slate-900">{card.title}</h3>
                                <p className="mt-4 text-base leading-8 text-slate-700">{card.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {cuisines.length > 0 || attractions.length > 0 ? (
                <section className="mx-auto max-w-7xl px-4 py-16">
                    <div className="mb-12 text-center">
                        <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">Cuisine and Student Life</span>
                        <h2 className="mt-2 text-3xl font-bold text-gray-900 lg:text-4xl">Food, culture, and lifestyle across Mauritius</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                                    <Utensils className="h-5 w-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Popular cuisines</h3>
                            </div>
                            <div className="space-y-4">
                                {cuisines.map((item) => (
                                    <article
                                        key={item.title}
                                        className={`group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.style.ringHover}`}
                                    >
                                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`} />
                                        <div className="relative">
                                            <div className="flex items-start gap-4 lg:gap-5">
                                                <div
                                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover} shadow-sm`}
                                                >
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <h4 className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}>{item.title}</h4>
                                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                                                    {item.image && (
                                                        <div className="relative mt-4 h-40 w-full overflow-hidden rounded-2xl">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                sizes="(max-width: 768px) 100vw, 400px"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">
                                    <Mountain className="h-5 w-5" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Places and experiences</h3>
                            </div>
                            <div className="space-y-4">
                                {attractions.map((item) => (
                                    <article
                                        key={item.title}
                                        className={`group relative overflow-hidden rounded-[2rem] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${item.style.ringHover}`}
                                    >
                                        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${item.style.wash}`} />
                                        <div className="relative">
                                            <div className="flex items-start gap-4 lg:gap-5">
                                                <div
                                                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${item.style.iconWrap} ${item.style.iconHover} shadow-sm`}
                                                >
                                                    <item.icon className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1 pt-1">
                                                    <h4 className={`text-xl font-bold text-gray-900 transition-colors duration-300 ${item.style.titleHover}`}>{item.title}</h4>
                                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.description}</p>
                                                    {item.image && (
                                                        <div className="relative mt-4 h-40 w-full overflow-hidden rounded-2xl">
                                                            <Image
                                                                src={item.image}
                                                                alt={item.title}
                                                                fill
                                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                                sizes="(max-width: 768px) 100vw, 400px"
                                                            />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="bg-gradient-to-br from-red-600 via-blue-700 to-yellow-400 py-16 text-white">
                <div className="mx-auto max-w-4xl px-4 text-center">
                    <h2 className="text-3xl font-bold lg:text-4xl">Ready to choose Mauritius for your MBBS journey?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-blue-100">
                        Compare universities, tuition, and student support to move from research to confident admission planning.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            href="/universities"
                            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50"
                        >
                            Explore Universities
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/contact-us"
                            className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition-colors hover:bg-white/10"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
