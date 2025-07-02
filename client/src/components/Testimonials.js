export default function Testimonials() {
  return (
    <div className="grid md:grid-cols-2 gap-4 mt-6">
      {/* Donor Testimonials */}
      <div className="bg-white p-4 rounded-xl shadow-md space-y-4">
        <h2 className="text-lg font-bold mb-2">Donor Testimonials</h2>

        <div className="bg-gray-100 p-3 rounded">
          <p className="text-gray-700 italic">
            &quot;Supporting this NGO has been the most fulfilling experience. Their transparency and impact are unmatched.&quot;
          </p>
          <p className="text-sm mt-2 font-semibold text-right">– A. Sharma, Donor</p>
        </div>

        <div className="bg-gray-100 p-3 rounded">
          <p className="text-gray-700 italic">
            &quot;I’ve seen firsthand how Kalaam Foundation changes lives. It’s not just charity — it’s empowerment.&quot;
          </p>
          <p className="text-sm mt-2 font-semibold text-right">– Dr. Meera Patil, Corporate Donor</p>
        </div>
      </div>

      {/* User Testimonial via YouTube */}
      <div className="bg-white p-4 rounded-xl shadow-md">
        <h2 className="text-lg font-bold mb-2">User Testimonial (with Video)</h2>

        <div className="aspect-w-16 aspect-h-9 w-full h-64 md:h-72">
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/czQ70eHzKy8"
            title="User Testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-sm mt-2 font-semibold text-right">– Rashmi, Beneficiary</p>
      </div>
    </div>
  );
}
