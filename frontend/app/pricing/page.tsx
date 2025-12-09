export default function Pricing() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Transparent Pricing</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          No hidden fees. Clear rates for every service. Custom quotes available for complex filings.
        </p>
      </section>

      {/* Pricing table */}
      <section className="py-12 px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Individual Tax Return</h3>
            <p className="text-gray-300 mb-2">Starting at <span className="text-white font-bold">$100</span></p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Federal + Arizona filing</li>
              <li>Includes W‑2, 1099, standard deductions</li>
              <li>Additional forms billed per complexity</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Small Business (Schedule C)</h3>
            <p className="text-gray-300 mb-2">Starting at <span className="text-white font-bold">$150</span></p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Income/expense categorization</li>
              <li>Quarterly estimates optional</li>
              <li>Includes sole proprietor filing</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Arizona TPT Filing</h3>
            <p className="text-gray-300 mb-2">Flat rate <span className="text-white font-bold">$25</span> per filing</p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Monthly or quarterly</li>
              <li>Includes city and state reporting</li>
              <li>Late filings may incur surcharge</li>
            </ul>
          </div>

          <div className="border border-gray-700 rounded bg-gray-800 p-6">
            <h3 className="text-xl font-semibold text-green-400 mb-2">Penalty Abatement Support</h3>
            <p className="text-gray-300 mb-2">Starting at <span className="text-white font-bold">$25</span></p>
            <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
              <li>Case review and documentation</li>
              <li>Submission preparation</li>
              <li>Follow-up support included</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gray-800">
        <p className="text-gray-300 mb-4">Need a custom quote?</p>
        <a href="/scheduling" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
          Schedule a Consultation
        </a>
      </section>

    </main>
  );
}
