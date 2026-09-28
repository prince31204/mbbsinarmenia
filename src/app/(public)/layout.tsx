import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { prisma } from "@/lib/prisma";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
    const visibility = await prisma.websiteSetting.findUnique({
        where: { key: "scholarship_visibility" }
    }).catch(() => null);
    const showScholarship = visibility?.value !== "false"; // Default to true

    return (
        <>
            {/* Mauritian Flag Strip */}
            <div className="flex w-full h-1.5" aria-hidden="true">
                <div className="flex-1 bg-red-600" />
                <div className="flex-1 bg-blue-700" />
                <div className="flex-1 bg-amber-400" />
                <div className="flex-1 bg-green-600" />
            </div>
            <Header showScholarship={showScholarship} />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
