import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold text-white mb-2">AutoGrowth</div>
            <p className="text-sm text-zinc-400">Your market. Dominated.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roi" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/audit" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <a href="mailto:hello@autogrowthai.com" className="text-sm text-zinc-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span>Built in Columbus, OH</span>
            <span>|</span>
            <span>© 2026 AutoGrowth AI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
