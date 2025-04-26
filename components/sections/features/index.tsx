"use client";
import ClientFeaturesGrid from "./client-features-grid";
import { useDictionary } from "@/hooks/useDictionary";

export default function Features() {
  const dict = useDictionary();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{dict.features.title}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {dict.features.subtitle}
          </p>
        </div>
        <ClientFeaturesGrid />
      </div>
    </section>
  );
}
