// use FORMIK for form // try it in future...................................
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
const AddItem = () => {
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  // console.log(image_hosting_key)
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = async(data) => {
    const imageFile = {image : data.file[0]}
    const res = await axiosPublic.post(image_hosting_api, imageFile,{
      headers: {
        //from google this content type
        'content-type': 'multipart/form-data'
      }
    })
    console.log(res.data)
    if(res.data.success){
      //send the menu data to the server
      const menuItem = {
        name:data.name,
        category: data.category,
        price: parseFloat(data.price),
        image: res.data.data.display_url,
      }
      //
      const menuRes = await axiosSecure.post('/menu',menuItem);
      console.log(menuRes.data)
      console.log('with image url',res.data)
      if(menuRes.data.insertedId){
        //
      }
      reset();
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <label>First Name</label>
          <input {...register("firstName")} /> */}
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">recipe name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Rcipe name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span>
            </div>
            <input
              {...register("price")}
              type="text"
              placeholder="Rcipe name"
              className="input input-bordered w-full"
            />
          </label>
          <label>Gender Selection</label>

          <select defaultValue={"default"}
            {...register("category")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled value='default'>
              select a category
            </option>

            <option value="salad">salad</option>
            <option value="pizza">pizza</option>
            <option value="dessert">dessert</option>
            <option value="drinks">drinks</option>
          </select>
          <input type="file" {...register('file')} className="file-input file-input-bordered w-full max-w-xs" />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default AddItem;
