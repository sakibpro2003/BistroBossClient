import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";
import SectionTitle from "../../assets/Components/SectionTitle";
import useAuth from "../../hooks/useAuth";

const ContactMethodCard = () => {
    const {user} = useAuth();
    console.log(user)

    const handleForm = e=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const message = e.target.message.value;
        console.log({name,email,phone,message})

    }
  return (
    <div>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <div className="flex justify-center bg-orange-500 p-4">
            <FaPhoneAlt />
          </div>
          <div className="bg-base-300 flex flex-col items-center justify-center p-10">
            <h5>PHONE</h5>
            <p>+88012545633</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center bg-orange-500 p-4">
            <FaLocationDot />
          </div>
          <div className="bg-base-300 flex flex-col items-center justify-center p-10">
            <h5>ADDRESS</h5>
            <p>RANGPUR, SATMATHA, PURBOGOLI</p>
          </div>
        </div>
        <div>
          <div className="flex justify-center bg-orange-500 p-4">
            <IoTime />
          </div>
          <div className="bg-base-300 flex flex-col items-center justify-center p-10">
            <h5>PHONE</h5>
            <p>Mon - Fri: 08:00 - 22:00</p>
            {/* <p>Sat - Sun: 10:00 - 23:00</p> */}
          </div>
        </div>
      </div>
      <SectionTitle
        sectionTitle={"Contact Form"}
        subTitle={"Send us a message"}
      ></SectionTitle>


      <section className="">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form onSubmit={handleForm} action="#" className="space-y-8">
            <div className="flex">
            <div className=" flex-grow">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Name*
              </label>
              <input
                type="text"
                name="name"
                className="shadow-sm bg-gray-50 border border-gray-30 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required=""
              />
            </div>
            <div className=" flex-grow">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required=""
              />
            </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium"
              >
                Phone
              </label>
              <input
                type="text"
                name="phone"
                className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required=""
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium"
              >
                Your message
              </label>
              <textarea
                name="message"
                rows={6}
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactMethodCard;
