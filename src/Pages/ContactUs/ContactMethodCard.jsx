import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const ContactMethodCard = () => {
    return (
        <div className='grid grid-cols-3 gap-10'>
            <div>
            <div className='flex justify-center bg-orange-500 p-4'>
                <FaPhoneAlt/>
            </div>
            <div className='bg-base-300 flex flex-col items-center justify-center p-10'>
                <h5>PHONE</h5>
                <p>+88012545633</p>
            </div>
        </div>
        <div>
            <div className='flex justify-center bg-orange-500 p-4'>
                <FaLocationDot/>
            </div>
            <div className='bg-base-300 flex flex-col items-center justify-center p-10'>
                <h5>ADDRESS</h5>
                <p>RANGPUR, SATMATHA, PURBOGOLI</p>
            </div>
        </div>
        <div>
            <div className='flex justify-center bg-orange-500 p-4'>
                <IoTime/>
            </div>
            <div className='bg-base-300 flex flex-col items-center justify-center p-10'>
                <h5>PHONE</h5>
                <p>Mon - Fri: 08:00 - 22:00</p>
                {/* <p>Sat - Sun: 10:00 - 23:00</p> */}
            </div>
        </div>
        </div>
    );
};

export default ContactMethodCard;