import { configs } from "@/lib/config";
import { MetadataRoute } from "next";

const BASE = configs.DOMAIN || "http://localhost:3000"; // fallback
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!BASE) {
    throw new Error("\nENV DOMAIN is not defined\n");
  }
  return [
    {
      url: `${BASE}`,
      priority: 1,
    },
  ];
}
