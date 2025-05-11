const reviews = [
  { name: 'Jane Doe', role: 'CTO', company: 'FinTechX', text: 'SoftSell made license reselling effortless and fast!' },
  { name: 'John Smith', role: 'IT Manager', company: 'TechNova', text: 'Excellent service and great returns on unused software.' },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">What Our Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-12">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md max-w-sm">
            <p className="text-gray-600 dark:text-gray-300 mb-4">“{review.text}”</p>
            <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
            <p className="text-sm text-gray-500">{review.role}, {review.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
