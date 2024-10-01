import { useNavigate} from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useMenu from "../../../hooks/useMenu";


const ManageItem = () => {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const [menu] = useMenu();
  
  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/menu/delete/${id}`);
    console.log(res.data);
    if (res.data.deletedCount > 0) {
      // console.log("gotit");
    }
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/item/${id}`);
  };
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="bg-base-200">
            <th>#</th>
            <th>image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {
          menu.map((item,index)=>(
            <tr key={item._id} >
              <th>{index + 1}</th>
              <th><img className="w-16 rounded-md" src={item.image} alt="" /></th>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td><button onClick={()=>handleUpdate(item._id)}  className="btn bg-green-600">Update</button></td>
              <td><button onClick={()=>handleDelete(item._id)} className="btn bg-red-600">Delete</button></td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default ManageItem;
