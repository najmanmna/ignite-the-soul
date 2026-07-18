// default open-next.config.ts file created by @opennextjs/cloudflare
import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// No incremental cache override configured yet — the R2-backed option
// requires creating an R2 bucket first (see wrangler.jsonc). The site has
// no ISR/revalidating pages yet, so this isn't blocking anything.
export default defineCloudflareConfig();
