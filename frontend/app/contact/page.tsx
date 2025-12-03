import PhoneInput from "./phone-input";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-100 font-sans">

      {/* Page header */}
      <section className="text-center py-16 bg-gray-800">
        <h2 className="text-4xl font-semibold text-green-400 mb-4">Contact Us</h2>
        <p className="text-lg max-w-2xl mx-auto text-gray-300">
          Have questions? Reach out and we’ll respond promptly.
        </p>
      </section>

      {/* Contact form connected to Formspree */}
      <section className="py-12 px-6 max-w-3xl mx-auto">
        <form
          action="https://formspree.io/f/xnnevooq"
          method="POST"
          className="space-y-6 bg-gray-800 border border-gray-700 rounded p-6"
        >
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
            <input
                type="text"
                name="name"
                placeholder="First Last"
                required
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100"
                style={{ textTransform: "capitalize" }}
                />
          </div>
          <div>
            <PhoneInput/>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
                type="email"
                name="email"
                placeholder="example@email.com"
                required
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                title="Please enter a valid email address"
                className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100"
                />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Type here"
              rows={5}
              required
              className="w-full p-3 rounded bg-gray-900 border border-gray-700 text-gray-100"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
