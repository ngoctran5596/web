import Hero from "@/components/main/Hero";
import ScrollViewImages from "@/components/main/ScrollViewImages";
import Anniversary from "@/components/main/Anniversary";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap=20">
        <Hero />
        <div className="hidden md:block">
          <Anniversary />
        </div>
        <ScrollViewImages />
        <Footer />
      </div>
    </main>
  );
}
