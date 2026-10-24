import { permanentRedirect } from "next/navigation";
import { walnutPath } from "@/lib/walnut-blasting";

export default function WalnutBlastingPage() {
  permanentRedirect(walnutPath);
}
