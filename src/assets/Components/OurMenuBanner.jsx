
const OurMenuBanner = ({bgImage,title,sub_title}) => {
    return (
        <div
            className="relative flex items-center justify-center h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="text-center text-white bg-black/70 p-8 rounded-lg max-w-lg">
                <h2 className="text-2xl font-bold">{title}</h2>
                <p className="mt-2">{sub_title}</p>
            </div>
        </div>
    );
};

export default OurMenuBanner;
