"use client";

import { useFeatureData } from "./feature-data";
import { ClientFeatureCard } from "./client-feature-card";

export default function ClientFeaturesGrid() {
  const features = useFeatureData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <ClientFeatureCard key={feature.title} index={index} {...feature} />
      ))}
    </div>
  );
}
