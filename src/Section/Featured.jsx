import SectionTitle from "../assets/Components/SectionTitle";
import feturedImg from "../assets/home/featured.jpg"
const Featured = () => {
    return (
        <div className="bg-black text-white">
        <SectionTitle subTitle={"Should Try"} sectionTitle={"Cheffs Recommends"}></SectionTitle>

            {/* <img className="" src={feturedImg} alt="" /> */}
            <div className="flex items-center relative">
                <img className="w-1/2" src={feturedImg} alt="" />
                <h3>Tiel of featerd sefcton</h3>
                <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit veniam, consequatur sunt unde voluptatum magni, illum ex, quod possimus sapiente hic sit voluptatibus totam voluptatem delectus reprehenderit consectetur architecto deleniti officia doloribus assumenda? Facere quis fugit porro voluptatem, non vero repellendus necessitatibus labore et temporibus ipsa, similique officiis laborum fugiat.</p>
            </div>
        </div>
    );
};

export default Featured;