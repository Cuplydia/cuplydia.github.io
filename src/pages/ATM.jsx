import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';

export default function ATM() {
  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#9999cc]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-center">Answer the Moment</h2>
            <p className="text-white text-center text-xl">Website Design</p>
          </div>

          {/* Right column */}
          <div className="bg-indigo-100 md:col-span-2">
            <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
              <img src="/images/atm/atm.png" alt="atm" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1 */}
      <section className="bg-[#f1ce71]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Khalilah Lyons</h2>
            <p>
              Designing Khalilah Lyons' first website presented a unique challenge and opportunity
              to capture her business acumen, goals, and personality as a Diversity, Equity, and
              Inclusion (DEI) Professional, while also reflecting her expertise as a Product
              Designer and Front-end Developer. As a visionary entrepreneur, Khalilah's website
              needed to effectively communicate her brand identity to potential clients and
              stakeholders. Here's how the design process likely unfolded:
            </p>
          </div>
          
          {/* Right column */}
          <div className=" p-12 flex justify-center  items-center h-full min-h-[200px]">
            <Device width={400} imageUrl="/images/atm/stairs.jpg" alt="atm" />
            
            </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#g0F0F0] ">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="mb-6">Lead Designer</h2>
            <p>
              As Lead Designer, I led the creation of Khalilah Lyons’ first website—an opportunity
              to distill her multifaceted identity as a DEI leader, Product Designer, and Front-end
              Developer into a cohesive digital presence. My goal was to translate her business
              objectives and personal brand into a site that balanced visual storytelling with
              functionality. Through collaborative discovery, iterative design, and thoughtful
              execution, the final website reflects Khalilah’s vision, expertise, and mission to
              advance equity and inclusion.
            </p>
          </div>

          {/* Right column */}
          <div className="p-16 flex justify-center  items-center h-full min-h-[500px]">
            <img src="/images/atm/atm 3.png" alt="atm" />
          </div>
        </div>
      </section>
      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #d4f37eff, #a4c47bff)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Reflection</h2>
          <p className="text-lg text-gray-900 mb-12">
            As Design Leader, I set out to create a personal brand website that authentically
            captured Khalilah Lyons—an influential DEI professional and advocate for systemic
            change. Through research and collaboration, I discovered that her brand was bold,
            sophisticated, and values-driven, with a visual style rooted in vibrant colors and a
            clean, corporate aesthetic. My goal was to design a site that not only showcased her
            services, but also reflected her mission: empowering women, rejecting performative DEI
            efforts, and promoting equity as an ongoing process. Khalilah’s trust in our team
            fostered a truly collaborative environment, giving me the creative freedom to make
            purposeful design decisions. The final site communicates her vision clearly and connects
            with clients who are ready to engage in real, lasting change.
          </p>
        </div>
      </section>
      <EmblaCarousel>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/atm/about-khalilah.png" alt="atm" />
        </CarouselSlide>
        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/atm/clients-list.png" alt="atm" />
        </CarouselSlide>

        <CarouselSlide className="p-8">
          <img className="m-auto" src="/images/atm/testimonials.png" alt="atm" />
        </CarouselSlide>
      </EmblaCarousel>
    </>
  );
}
