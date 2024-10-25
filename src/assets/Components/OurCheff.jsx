import chefServiceImg from '../home/chef-service.jpg'

const OurCheff = () => {
    return (
        <div className='relative'>
            <img src={chefServiceImg} className='h-60 lg:h-max' alt="" />
            <div className='bg-white absolute bottom-8 right-9 w-10/12 lg:bottom-1/4 lg:p-12 lg:w-1/2 lg:right-1/4 '>
                <h3 className='text-center font-bold lg:text-3xl '>Bistro Boss</h3>
                <p className='text-center'>At the heart of our kitchen is our talented chef, a passionate artist dedicated to crafting unforgettable dining experiences. With years of experience and a love for fresh, local ingredients, our chef combines traditional techniques with modern flair to create dishes that tantalize your taste buds.</p>
            </div>
        </div>
    );
};

export default OurCheff;