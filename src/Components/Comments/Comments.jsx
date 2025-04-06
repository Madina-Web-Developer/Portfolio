import React from 'react'
import './Comment.css'
import revimg from '../../assets/RV3.png'
import Boxeffect from '../../assets/Box_C.png'
import Farhatimg from '../../assets/Farhat.png'
import Riazimg from '../../assets/Riaz.png'
import Susitimg from '../../assets/Raj.png'
import Anasimg from '../../assets/Anas.png'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick'


const Comments = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:6000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section id='Review'style={{background:`url(${revimg})center/cover no-repeat`}} className='review_madina'>
      <div className="container">

        <div className="box_com">
          <img className='dot-animation' src={Boxeffect} alt="animation" />
        </div>

        <div className="Comment_text_part">
          <div className="com_head">
            <h1>TESTIMONIAL</h1>
          </div>
          <h2>People Trust Me</h2>
        </div>


        <Slider {...settings}>
    
      <div>
      <div className="slider_com_part">

<div className="people_img">
  <img src={Farhatimg} alt="farhatimg" />
</div>
<div className="people_comments">
  <p>"Working with Mina was an absolute pleasure ! She took the time to understand my vision and turned it into a stunning, functional website. Her attention to detail, responsiveness, and creativity made the entire process smooth and enjoyable. Highly recommend !"</p>
  <h3>Farhat Ali</h3>
  <h4>Person Name</h4>
</div>
      </div>
      </div>

      <div>
      <div className="slider_com_part">

      <div className="people_img">
        <img src={Riazimg} alt="farhatimg" />
      </div>
      <div className="people_comments">
        <p>"Mina is an incredible developer ! She carefully listened to my ideas and transformed them into a beautifully designed, user-friendly website. Her dedication, creativity, and keen eye for detail made the entire experience seamless. She was communicative, professional, and truly brought my vision to life. I couldn’t be happier with the results !"</p>
        <h3>Riaz Ahmad</h3>
        <h4>Person Name</h4>
      </div>
      </div>
      </div> 

      <div>
      <div className="slider_com_part">

<div className="people_img">
  <img src={Susitimg} alt="farhatimg" />
</div>
<div className="people_comments">
  <p>"Mina exceeded my expectations! She took my ideas and crafted a website that is not only visually stunning but also highly functional. Her professionalism, creativity, and attention to detail made the entire process effortless. She’s a great communicator and truly cares about delivering the best results. I highly recommend her!"</p>
  <h3>Sushith Raj</h3>
  <h4>Person Name</h4>
</div>
      </div>
      </div> 

      
      <div>
      <div className="slider_com_part">

      <div className="people_img">
        <img src={Anasimg} alt="farhatimg" />
      </div>
      <div className="people_comments">
        <p>"Mina was recommended to me by a friend, and now I see why. She’s not only skilled but also really easy to work with. I appreciated how she kept me in the loop during the whole process and was open to feedback. The site turned out clean, fast, and exactly what I needed. Would definitely work with her again!"</p>
        <h3>Muhammad Anas Mir</h3>
        <h4>Person Name</h4>
      </div>
      </div>
      </div> 

    </Slider>  
      </div>
    </section>
  )
}

export default Comments

