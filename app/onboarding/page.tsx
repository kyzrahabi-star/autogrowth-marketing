import type { Metadata } from "next";
import { OnboardingForm } from "./OnboardingForm";

export const metadata: Metadata = {
  title: "Client Onboarding — AutoGrowth AI",
  robots: { index: false, follow: false },
};

export default function OnboardingPage() {
  return <OnboardingForm />;
}
