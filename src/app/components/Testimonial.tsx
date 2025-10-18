type Props = {
  quote: string;
  author: string;
  role: string;
};

export default function Testimonial({ quote, author, role }: Props) {
  return (
    <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <p className="text-lg text-gray-700 italic leading-relaxed mb-6">“{quote}”</p>
      <div className="text-right">
        <p className="font-semibold text-brandDark">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}
