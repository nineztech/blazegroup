import React, { useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Ravi Darji',
    role: 'Home owner',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgFBQkGBxYIBwYGBw8ICQgWIBEiIiAdHx8YHSggGCYlGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADEQAQACAQIDBQYFBQAAAAAAAAABAgMEEgURIiEyQlJxEyMxUVNiQXKBkcEzYWNz0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm960pNrzWta13WtZSa7id8szTBNsOPu7vFYFpqNfp9Pzi991vp4+qyDfjUR/Tw7v8AZdUALWONX59WHHy+26Vp+K4MsxW+7Ba31O7+6gAa74jM4NdqMHKKZLWr9O3VVdaHXU1VeU+7yV72PzegJgAAAAAAAAAAAAAAAAI+vzew0uS8T1bdtfWQVXFtZObJOGk+7xW6tvilXAAAAAA9UvalovSbVtXqraryA0fD9XGqw8521yU6b1/lLZjQ6idNqKX59Pdv6NPE845wAAAAAAAAAAAAAAAq+O35YcdPNfd+y0VHHufPD8u0FQAAAAAAAA0+hvN9HitPx2Mw0vDqzXRYonybgSQAAAAAAAAAAAAAFbxyk209LxH9K/V+qyQeL5JporREbva22flBnwAAAAAAAeqV32rWPFba1VKxStaR8KV2spEzExMTtmrR8Nve+jx2yza1rc+q3yBKAAAAAAAAAAAAAAcNZhjUafJSY7du6vq7gMlMcpmJ+NXxO4pprYM83iPd57bq2/v8kEAAAAAH2Im0xERum3drUHTTYbajPTHX42t1W8sNRWsUrWsfCtdtVbwnQ3wzOXL02tXbXH5YWYAAAAAAAAAAAAAAAAOebHXNjtjvG6L12/lZnNjthy2x3jtpba1Sp43p+da56x216L/wCnAAAAWnBNPFsls1o7MXTT1VbQcHrt0VZ89psCcAAAAAAAAAAAAAAAAAAj8RrFtFlifJuSFfxnNFNN7OJ6s9tv6AoQAAAGh4ReLaKkeS01szyz4LqIplthtPZl6qeoLsAAAAAAAAAAAAAAAAR82s0+Hv5MfPy16rK/U8YtbnXT02/wCTJ/wFjqtTj01N2Se3w4/FZntTqL6nLN7+Lu18sOeS98lpvktbJa3is8gAAAAPtZmtotWds16q2fAF/wAP19NRSKXmtMte9XzJ7JRMxPOJ2ystHxW9OVNRFstfDkr3qguxzw5seeu7FeuSPtdAAAAAAAAAHy1orWbWmtYr3rWecuSmKlr5Lba171lBrtdk1NpiN2PHXu4/N6gmavi0Vmaaatck/Vt3Vbl1ObNMzkyXt9u7pcQAAAAAAAAAAAAHql70tFqWtjmvirZPwcXy05RmrXPHm7tlcA0en4hp8/ZF/ZW+nk6UtkU3R8Qy6a0VtNsuP6dvD6A0I54ctM+OMmO26tnQAAAEDi+onDp9lZ22z9P6fiCu4prJ1OXZSfd4rdP3T80EAAAAAAAAAAAAAAAAAAAS+H6u2my9u62O/fr/AC0UTFqxaJ3RbqrZkl5wXUTfDbFad04O76AsgAFBxrJu1ez8MVIqAIAAAAAAAAAAAAAAAAAAAACXwvN7HWU5z05eiwA0YAP/2Q==',
    quote: 'I would appreciate the work of BLAZE GROUP and their experience of implementation of Solar Rooftop System. I have opt for 6.2kWp Solar Rooftop System for my home in Ahmedabad and trust me i am the most happiest Customer with the service, product knowledge and design i got. Thanks BLAZE TEAM.',
  },
  {
    name: 'Janvi Patel',
    role: 'Business Owner',
    image: 'data:image/jpeg;base64,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',
    quote: 'we are happy with the blaze team knowledge and skills of installation of solar system. we get installed 6kw solar in vadodara last year. thanks blaze team for your services.',
  },
  {
    name: 'CHAUDHARI NILESH',
    role: 'Property Developer',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgFBQkGBxYIBwYGBw8ICQgWIBEiIiAdHx8YHSggGCYlGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADEQAQACAQIDBQYFBQAAAAAAAAABAgMEEgURIiEyQlJxEyMxUVNiQXKBkcEzYWNz0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm960pNrzWta13WtZSa7id8szTBNsOPu7vFYFpqNfp9Pzi991vp4+qyDfjUR/Tw7v8AZdUALWONX59WHHy+26Vp+K4MsxW+7Ba31O7+6gAa74jM4NdqMHKKZLWr9O3VVdaHXU1VeU+7yV72PzegJgAAAAAAAAAAAAAAAAI+vzew0uS8T1bdtfWQVXFtZObJOGk+7xW6tvilXAAAAAA9UvalovSbVtXqraryA0fD9XGqw8521yU6b1/lLZjQ6idNqKX59Pdv6NPE845wAAAAAAAAAAAAAAAq+O35YcdPNfd+y0VHHufPD8u0FQAAAAAAAA0+hvN9HitPx2Mw0vDqzXRYonybgSQAAAAAAAAAAAAAFbxyk209LxH9K/V+qyQeL5JporREbva22flBnwAAAAAAAeqV32rWPFba1VKxStaR8KV2spEzExMTtmrR8Nve+jx2yza1rc+q3yBKAAAAAAAAAAAAAAcNZhjUafJSY7du6vq7gMlMcpmJ+NXxO4pprYM83iPd57bq2/v8kEAAAAAH2Im0xERum3drUHTTYbajPTHX42t1W8sNRWsUrWsfCtdtVbwnQ3wzOXL02tXbXH5YWYAAAAAAAAAAAAAAAAOebHXNjtjvG6L12/lZnNjthy2x3jtpba1Sp43p+da56x216L/wCnAAAAWnBNPFsls1o7MXTT1VbQcHrt0VZ89psCcAAAAAAAAAAAAAAAAAAj8RrFtFlifJuSFfxnNFNN7OJ6s9tv6AoQAAAGh4ReLaKkeS01szyz4LqIplthtPZl6qeoLsAAAAAAAAAAAAAAAAR82s0+Hv5MfPy16rK/U8YtbnXT02/wCTJ/wFjqtTj01N2Se3w4/FZntTqL6nLN7+Lu18sOeS98lpvktbJa3is8gAAAAPtZmtotWds16q2fAF/wAP19NRSKXmtMte9XzJ7JRMxPOJ2ystHxW9OVNRFstfDkr3qguxzw5seeu7FeuSPtdAAAAAAAAAHy1orWbWmtYr3rWecuSmKlr5Lba171lBrtdk1NpiN2PHXu4/N6gmavi0Vmaaatck/Vt3Vbl1ObNMzkyXt9u7pcQAAAAAAAAAAAAHql70tFqWtjmvirZPwcXy05RmrXPHm7tlcA0en4hp8/ZF/ZW+nk6UtkU3R8Qy6a0VtNsuP6dvD6A0I54ctM+OMmO26tnQAAAEDi+onDp9lZ22z9P6fiCu4prJ1OXZSfd4rdP3T80EAAAAAAAAAAAAAAAAAAAS+H6u2my9u62O/fr/AC0UTFqxaJ3RbqrZkl5wXUTfDbFad04O76AsgAFBxrJu1ez8MVIqAIAAAAAAAAAAAAAAAAAAAACXwvN7HWU5z05eiwA0YAP/2Q==',
    quote: 'We are lucky that we got BLAZE GROUP as our Solar EPC Contractor out of the crowd of many new Solar Companies in the market. BLAZE Solar maintain their legacy and having huge experience of 7yrs and so my family is so very much satisfied with their Solar Project execution from day1 till Solar meter installation. Best knowledge, very perfect, guide us technically anytime, very supportive staff they have. Thanks, Thanks, a big Thanks!!!',
  },
  {
    name: 'Uzair Shaikh',
    role: 'Home Owner',
    image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgFBQkGBxYIBwYGBw8ICQgWIBEiIiAdHx8YHSggGCYlGx8fITEhJSkrLi4uFx8zODMsNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMgAyAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADEQAQACAQIDBQYFBQAAAAAAAAABAgMEEgURIiEyQlJxEyMxUVNiQXKBkcEzYWNz0f/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHm960pNrzWta13WtZSa7id8szTBNsOPu7vFYFpqNfp9Pzi991vp4+qyDfjUR/Tw7v8AZdUALWONX59WHHy+26Vp+K4MsxW+7Ba31O7+6gAa74jM4NdqMHKKZLWr9O3VVdaHXU1VeU+7yV72PzegJgAAAAAAAAAAAAAAAAI+vzew0uS8T1bdtfWQVXFtZObJOGk+7xW6tvilXAAAAAA9UvalovSbVtXqraryA0fD9XGqw8521yU6b1/lLZjQ6idNqKX59Pdv6NPE845wAAAAAAAAAAAAAAAq+O35YcdPNfd+y0VHHufPD8u0FQAAAAAAAA0+hvN9HitPx2Mw0vDqzXRYonybgSQAAAAAAAAAAAAAFbxyk209LxH9K/V+qyQeL5JporREbva22flBnwAAAAAAAeqV32rWPFba1VKxStaR8KV2spEzExMTtmrR8Nve+jx2yza1rc+q3yBKAAAAAAAAAAAAAAcNZhjUafJSY7du6vq7gMlMcpmJ+NXxO4pprYM83iPd57bq2/v8kEAAAAAH2Im0xERum3drUHTTYbajPTHX42t1W8sNRWsUrWsfCtdtVbwnQ3wzOXL02tXbXH5YWYAAAAAAAAAAAAAAAAOebHXNjtjvG6L12/lZnNjthy2x3jtpba1Sp43p+da56x216L/wCnAAAAWnBNPFsls1o7MXTT1VbQcHrt0VZ89psCcAAAAAAAAAAAAAAAAAAj8RrFtFlifJuSFfxnNFNN7OJ6s9tv6AoQAAAGh4ReLaKkeS01szyz4LqIplthtPZl6qeoLsAAAAAAAAAAAAAAAAR82s0+Hv5MfPy16rK/U8YtbnXT02/wCTJ/wFjqtTj01N2Se3w4/FZntTqL6nLN7+Lu18sOeS98lpvktbJa3is8gAAAAPtZmtotWds16q2fAF/wAP19NRSKXmtMte9XzJ7JRMxPOJ2ystHxW9OVNRFstfDkr3qguxzw5seeu7FeuSPtdAAAAAAAAAHy1orWbWmtYr3rWecuSmKlr5Lba171lBrtdk1NpiN2PHXu4/N6gmavi0Vmaaatck/Vt3Vbl1ObNMzkyXt9u7pcQAAAAAAAAAAAAHql70tFqWtjmvirZPwcXy05RmrXPHm7tlcA0en4hp8/ZF/ZW+nk6UtkU3R8Qy6a0VtNsuP6dvD6A0I54ctM+OMmO26tnQAAAEDi+onDp9lZ22z9P6fiCu4prJ1OXZSfd4rdP3T80EAAAAAAAAAAAAAAAAAAAS+H6u2my9u62O/fr/AC0UTFqxaJ3RbqrZkl5wXUTfDbFad04O76AsgAFBxrJu1ez8MVIqAIAAAAAAAAAAAAAAAAAAAACXwvN7HWU5z05eiwA0YAP/2Q==',
    quote: 'A good experience with blaze group. A gentle hospitality of workers and a proper adviser for solar roof top system, as I have installed 8kwp from them, 1 year back',
  },
];

// Triple the testimonials to ensure smooth infinite scroll
const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  const startAnimation = () => {
    controls.start({
      x: [-1600, -(1600 + testimonials.length * 508)],
      transition: {
        duration: 40,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      },
    });
  };

  const handleHoverStart = () => {
    setIsPaused(true);
    controls.stop();
  };

  const handleHoverEnd = () => {
    setIsPaused(false);
    startAnimation();
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experiences from satisfied customers
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={controls}
            className="flex gap-8"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            style={{ width: 'fit-content' }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="w-[500px] shrink-0 bg-white p-10 rounded-xl shadow-lg relative group hover:bg-gradient-to-br hover:from-blue-50 hover:via-sky-50 hover:to-indigo-50 transition-all duration-300"
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-500 opacity-50 group-hover:text-blue-500 transition-colors" />
                <p className="text-gray-600 mb-6 italic group-hover:text-blue-700 transition-colors whitespace-normal">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 group-hover:text-blue-800 transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;