import MeteorShower from "@/components/MeteorShower";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen  text-white">
      <MeteorShower />
      <main className="relative z-10">
        <h1 className="text-4xl font-bold text-center pt-20 mt-20">
          Contact Us
        </h1>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* First Name */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white shadow-sm  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white shadow-sm  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Company */}
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm font-semibold text-white"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white shadow-sm  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white shadow-sm  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold text-white"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-gray-900  outline-1 outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    className="rounded-l-md border-r px-3 py-2 text-base text-gray-500 focus:outline-none sm:text-sm"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>IN</option>
                  </select>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder="123-456-7890"
                    className="flex-1 rounded-r-md px-3 py-2 text-base text-white placeholder:text-gray-400 focus:outline-none sm:text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-gray-900 px-3.5 py-2 text-base text-white shadow-sm  outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
                ></textarea>
              </div>
            </div>

            {/* Checkbox */}
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <input
                  id="agree-to-policies"
                  name="agree-to-policies"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm text-gray-600"
              >
                By selecting this, you agree to our{" "}
                <a href="#" className="font-semibold text-indigo-600">
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
        ;
      </main>
    </div>
  );
}
