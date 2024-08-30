import { Parallax, Background } from 'react-parallax';
// import cover from "../../assets/shop/banner2.jpg";
const Cover = ({title,coverImg}) => {
    return (
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={('path/to/another/image.jpg')}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
  className="hero h-[750px]"
  style={{
    backgroundImage: `url(${coverImg})`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{title}</h1>
      {/* <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p> */}
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </Parallax>
       
    );
};

export default Cover;