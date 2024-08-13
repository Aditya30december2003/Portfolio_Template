import TestimonialCarousel from '../components/TestimonialCarousel';
import testimonial from '../../public/images/testimonial.png'
const testimonials = [
  {
    name: "John Doe",
    role: "CEO",
    image:testimonial ,
    quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices..."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: testimonial,
    quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices..."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: testimonial,
    quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices..."
  },
  {
    name: "John Doe",
    role: "CEO",
    image: testimonial,
    quote: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices..."
  },
];

const Testimonials = () => {
  return (
    <div id='test' className='mt-20'>
      {/* Other components */}
      <TestimonialCarousel testimonials={testimonials} />
      {/* Other components */}
    </div>
  );
};

export default Testimonials;