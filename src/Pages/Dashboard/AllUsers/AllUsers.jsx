import { useQuery } from "@tanstack/react-query";
//   import { getTodos, postTodo } from '../my-api'
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaUser } from "react-icons/fa";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  // console.log(localStorage.getItem('access-token'))


  const { refetch, data: user = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user");
      return res.data;
    },
  });
  const handleMakeAdmin = (id)=>{
    // console.log(id)
    axiosSecure.patch(`/user/admin/${id}`)
    .then(res=>{
      // console.log(res)
      if(res.data.acknowledged == true){
        // console.log("done")
        refetch();
      }
    })
  }
  const handleDeleteUser = (id) => {
    // console.log(id);
    axiosSecure.delete(`/deleteuser/${id}`).then((res) => {
      // console.log(res.data);
      refetch();
    });
  };
  return (
    <div>
      <div className="flex justify-evenly">
        <h3 className="text-3xl">All User:</h3>
        <h3 className="text-3xl">Total User:</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {user.map((singleUser, index) => (
              <tr key={singleUser._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{singleUser.fullName}</td>
                <td>{singleUser.email}</td>
                <td>
                  <button onClick={()=>handleMakeAdmin(singleUser._id)} className="btn bg-orange-400">
                    {
                      singleUser.role ? <>admin</>:<><FaUser></FaUser></>
                    }
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(singleUser._id)}
                    className="btn bg-orange-400"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
