export default function Services() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Our Services</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Comprehensive tax preparation and compliance support for individuals and small businesses in Arizona.
        </p>
      </section>

      {/* Services grid */}
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Individual Returns */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Individual Returns</h3>
            <p className="text-gray-300 text-sm mb-4">
              Form 1040, W‑2, 1099, itemized deductions, tax credits, and e‑file submission.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Federal & Arizona returns</li>
              <li>Amended returns</li>
              <li>ITIN support</li>
            </ul>
          </div>

          {/* Small Business (Schedule C) */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Small Business (Schedule C)</h3>
            <p className="text-gray-300 text-sm mb-4">
              Sole proprietor filings with income/expense categorization and quarterly estimates.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Books review and cleanup</li>
              <li>Depreciation and assets</li>
              <li>Estimated tax planning</li>
            </ul>
          </div>

          {/* Arizona TPT */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Arizona TPT Filings</h3>
            <p className="text-gray-300 text-sm mb-4">
              Transaction Privilege Tax setup, monthly/quarterly filings, and compliance checks.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>City and state reporting</li>
              <li>Nexus evaluation</li>
              <li>Late filing remediation</li>
            </ul>
          </div>

          {/* Penalty Abatement */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Penalty Abatement</h3>
            <p className="text-gray-300 text-sm mb-4">
              Guidance and preparation for reasonable cause penalty relief with IRS & AZDOR.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Case review and documentation</li>
              <li>Submission preparation</li>
              <li>Status tracking</li>
            </ul>
          </div>

          {/* Compliance & Advisory */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Compliance & Advisory</h3>
            <p className="text-gray-300 text-sm mb-4">
              Year‑round support to stay compliant, optimize deductions, and plan ahead.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Withholding reviews</li>
              <li>Entity considerations</li>
              <li>Record‑keeping best practices</li>
            </ul>
          </div>

          {/* Document Support */}
          <div className="p-6 border border-gray-700 rounded bg-gray-800">
            <h3 className="text-green-400 font-semibold text-xl mb-2">Document Support</h3>
            <p className="text-gray-300 text-sm mb-4">
              Secure intake, checklist generation, and guidance on required records.
            </p>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>Encrypted uploads</li>
              <li>Personalized checklists</li>
              <li>Turnaround transparency</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
        <section className="bg-gray-800 border border-gray-700 rounded-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Why Choose GG Tax Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Personalized Approach</h3>
              <p className="text-gray-300">
                We don't use generic tax software and call it a day. Each client gets a thorough review 
                and customized strategy based on their specific financial situation.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Expertise & Credentials</h3>
              <p className="text-gray-300">
                AFSP certified and IRS PTIN registered. We're committed to staying current with tax law 
                changes and providing expert guidance.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Maximum Refunds</h3>
              <p className="text-gray-300">
                We identify deductions and credits that many people miss. Our goal is to ensure you're 
                not leaving money on the table.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Year-Round Support</h3>
              <p className="text-gray-300">
                Tax time isn't just April. We're here to answer questions, provide guidance, and help 
                you plan throughout the year.
              </p>
            </div>
          </div>
        </section>

      {/* Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Process</h2>
          <div className="space-y-4">
            {[
              {
                step: 1,
                title: "Initial Consultation",
                description: "We meet with you to understand your financial situation, goals, and any changes since last year."
              },
              {
                step: 2,
                title: "Document Collection",
                description: "We provide a checklist of needed documents. You can deliver them in person or through our secure file transfer system."
              },
              {
                step: 3,
                title: "Thorough Review",
                description: "We meticulously review all information, identify deductions, and explore tax-saving strategies."
              },
              {
                step: 4,
                title: "Return Preparation",
                description: "We prepare your complete return with accuracy and attention to detail."
              },
              {
                step: 5,
                title: "Review & Approval",
                description: "We review the return with you, answer any questions, and get your approval before filing."
              },
              {
                step: 6,
                title: "Filing & Follow-Up",
                description: "We file your return and provide ongoing support if any questions arise with the IRS."
              }
            ].map((item) => (
              <div key={item.step} className="flex gap-4 bg-gray-800 p-6 rounded-lg border border-gray-700">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-green-400 text-gray-900 font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gray-800">
        <p className="text-gray-300 mb-4">Ready to get started?</p>
        <a href="/scheduling" className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500">
          Schedule a Call
        </a>
      </section>

    </main>
  );
}
