import React from "react";
import "./Testimonials.css";
import Hero from "../../assets/testimonialHero.png";
import {TestimonialsData} from "../../data/testimonials"
import {Swiper,SwiperSlide} from "swiper/react"

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="wrappers">
        <div className="containerss">
          <span>Top Rated</span>
          <span>
            Seedily say has suitable disposal and boy.Exercise joy man children
            rejoiced.
          </span>
        </div>

        <img src={Hero} alt="" />

        <div className="containerss1">
          <span>100k</span>
          <span>Happy Customers With Us</span>
        </div>
      </div>
       <div className="reviews">Reviews</div>
      <div className="carousel">
        <Swiper
        slidesPerView={3} 
        slidesPerGroup={1} 
        spaceBetween={20}
        className="tCarousel"
        breakpoints={{
          800:{
            slidesPerView:3,
          },
          640:{
            slidesPerView:1,
          },
          0:{
            slidesPerView:1
          }
        }}
        >
          {
            TestimonialsData.map((testimonial,i)=>(
              <SwiperSlide>
                <div className="testimonial">
                  <img src={testimonial.image} alt="" />
                  <span>{testimonial.comment}</span>
                  <hr />
                  <span>{testimonial.name}</span>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
