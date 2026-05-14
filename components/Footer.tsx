import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="text-xl font-bold tracking-tight text-gray-900 mb-2">
              Auto<span className="text-indigo-600">Growth</span>
            </div>
            <p className="text-sm text-gray-500">Your market. Dominated.</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roi" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  ROI Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Free Tools
                </Link>
              </li>
              <li>
                <Link href="/audit" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Free Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-gray-900 font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/demo" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 pb-4">
          <p className="text-xs text-gray-400 text-center mb-6">
            <strong className="text-gray-500">The AutoGrowth Engine™</strong> is a proprietary AI-powered growth system for local service businesses.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span className="text-gray-500">Built in Columbus, OH</span>
            <span>|</span>
            <span>© 2026 AutoGrowth AI. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
