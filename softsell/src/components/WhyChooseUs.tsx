import { ShieldCheck, Bolt, ThumbsUp, Users } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: 'Secure Transactions', desc: 'Your data and licenses are protected.' },
  { icon: Bolt, title: 'Quick Payments', desc: 'Get paid fast with no delays.' },
  { icon: ThumbsUp, title: 'Best Market Rates', desc: 'We offer top prices for your licenses.' },
  { icon: Users, title: 'Trusted by Companies', desc: '100+ businesses trust SoftSell.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((reason, index) => (
          <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <reason.icon size={40} className="text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{reason.title}</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
