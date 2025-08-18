export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="mx-auto max-w-4xl px-4 text-center">
      <blockquote className="mb-12 text-2xl leading-relaxed font-light text-[#6B7280] italic md:text-3xl lg:text-4xl dark:text-white">
        &quot;{testimonial.quote}&quot;
      </blockquote>

      <div className="space-y-2">
        <h4 className="text-neutral-1-light text-xl font-semibold dark:text-white">
          {testimonial.author}
        </h4>
        <p className="text-gray-400">
          {testimonial.position}
          {testimonial.company && `, ${testimonial.company}`}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
