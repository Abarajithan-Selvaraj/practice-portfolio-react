import React from 'react';
import './style.css';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    image: AVTR1,
    name: "Client Name",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur quo, harum saepe hic reiciendis alias veritatis aliquam architecto ab ut ad, assumenda molestias adipisci excepturi, exercitationem repellendus nemo nihil."
  },
  {
    id: 2,
    image: AVTR2,
    name: "Client Name",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur quo, harum saepe hic reiciendis alias veritatis aliquam architecto ab ut ad, assumenda molestias adipisci excepturi, exercitationem repellendus nemo nihil."
  },
  {
    id: 3,
    image: AVTR3,
    name: "Client Name",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur quo, harum saepe hic reiciendis alias veritatis aliquam architecto ab ut ad, assumenda molestias adipisci excepturi, exercitationem repellendus nemo nihil."
  },
  {
    id: 4,
    image: AVTR4,
    name: "Client Name",
    msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi pariatur quo, harum saepe hic reiciendis alias veritatis aliquam architecto ab ut ad, assumenda molestias adipisci excepturi, exercitationem repellendus nemo nihil."
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
         // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ id, image, name, msg }) => {
            return (
              <SwiperSlide key={id} className="testimonial">
                <div className="client__avatar">
                  <img src={image} alt={name} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">{msg}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  ) 
}

export default Testimonials