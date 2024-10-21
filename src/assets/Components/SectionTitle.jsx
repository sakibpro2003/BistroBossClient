
const SectionTitle = ({sectionTitle, subTitle}) => {
    return (
        <div className="text-center m-8 w-1/2 lg:w-1/6 mx-auto">
            <p className="text-yellow-500 border-b-4 p-3">---{subTitle}---</p>

            <h3 className='uppercase border-b-4 p-3 lg:text-2xl'>{sectionTitle}</h3>
        </div>
    );
};

export default SectionTitle;