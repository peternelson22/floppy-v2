import { Link } from 'react-router-dom';
import img from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';

const images = [img, img2, img3, img4];

const Hero = () => {
  return (
    <section className='grid md:grid-cols-2 gap-10 items-center'>
      <div>
        <h1 className='max-w-4xl text-4xl sm:text-5xl font-bold tracking-tight'>
          We are changing{' '}
          <span className='text-info underline p-2 font-mono tracking-wide'>
            Akube
          </span>
          shopping
        </h1>
        <p className='mt-6 leading-8 tracking-wide max-w-xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          provident voluptate voluptatibus molestiae deserunt hic est
          perspiciatis ducimus atque, veritatis, at quae totam dolorum.
        </p>
        <div className='mt-8'>
          <Link to='/products' className='btn btn-info'>
            View Products
          </Link>
        </div>
      </div>
      <div className='hidden md:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box h-[23rem]'>
        {images.map((image, index) => (
          <div className='carousel-item' key={index}>
            <img
              src={image}
              alt='hero'
              className='rounded-box object-cover w-80 h-full'
            />
          </div>
        ))}
      </div>
    </section>
  );
};
export default Hero;
