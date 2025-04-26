"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Feature } from "./types";
import { LucideIcon } from "lucide-react";

interface ClientFeatureCardProps extends Feature {
  index: number;
}

export function ClientFeatureCard({
  title,
  description,
  iconName,
  details,
  index,
}: ClientFeatureCardProps) {
  const Icon: LucideIcon = LucideIcons[
    iconName as keyof typeof LucideIcons
  ] as LucideIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full flex flex-col">
        <Icon className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, idx) => (
            <li
              key={idx}
              className="flex items-center text-sm text-muted-foreground"
            >
              <span className="mr-2 text-primary">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
