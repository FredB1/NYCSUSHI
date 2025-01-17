import React from 'react'
import NavBar from '../components/NavBar'
import Link from 'next/link'
import 'tailwindcss/tailwind.css';
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>
      <NavBar />
      <div className="w-full top-[90px] bg-white">
        
        <div className="w-full h-[90%] text-center flex flex-col items-center justify-center px-80 text-black">
          <h1 className='text-2xl pt-10 pb-4'>About Us</h1>

          <p className='px-60'>Welcome to New York City Sushi, your ultimate destination for exquisite sushi and Japanese cuisine in the heart of New York City. At New York CIty Sushi, we believe that dining is not just about satisfying your hunger, but about creating a memorable experience that tantalizes your taste buds and elevates your senses.</p>

          <h1 className='text-2xl pt-10 pb-6'>Our Story</h1>

          <p className='px-60'>Established in 2023, New York City Sushi has been a beloved part of the New York dining scene. Our journey began with a passion for bringing the authentic flavors of Japan to the bustling streets of NYC. Over the years, we've meticulously honed our craft, focusing on the art of sushi-making and perfecting the delicate balance of flavors in each dish.</p>

          <h1 className='text-2xl pt-10 pb-6'>Culinary Excellence</h1>

          <p className='px-60'>Led by our skilled team of master chefs, New York City Sushi takes pride in crafting culinary creations that are as visually stunning as they are delectable. We source the freshest and highest quality ingredients to ensure every plate that leaves our kitchen is a masterpiece. From traditional sushi and sashimi to innovative signature rolls, each dish is a celebration of Japanese culinary traditions with a modern twist.</p>

          <h1 className='text-2xl pt-10 pb-6'>Aesthetic Ambiance</h1>

          <p className='px-60'>Step into our elegant yet inviting space, designed to transport you to the tranquil ambiance of a traditional Japanese dining experience. Our soothing decor, soft lighting, and minimalist design provide the perfect backdrop for an intimate dinner, a celebratory occasion, or a casual get-together with friends and family.</p>

          <h1 className='text-2xl pt-10 pb-6'>Commitment to Sustainability</h1>

          <p className='px-60'>At New York City Sushi, we are not only dedicated to providing an exceptional dining experience but also to preserving our planet for future generations. We are committed to sustainable sourcing practices, using eco-friendly packaging, and minimizing food waste wherever possible.</p>

          <h1 className='text-2xl pt-10 pb-6'>Our Mission</h1>

          <p className='px-60'>Our mission is simple: to create an unforgettable culinary journey for every guest who walks through our doors. Whether you're a sushi aficionado or exploring Japanese cuisine for the first time, we aim to captivate your senses with every bite, leaving you with a lasting memory of flavors, textures, and experiences that are uniquely New York City Sushi.</p>

          <p className='px-60 pt-10 pb-10'>Join us at New York City Sushi as we continue to weave the artistry of sushi into the vibrant tapestry of New York's culinary scene. Thank you for choosing us to be a part of your gastronomic adventure.</p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About