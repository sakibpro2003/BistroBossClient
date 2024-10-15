import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useAuth();
  console.log(user?.email);
  const axiosSecure = useAxiosSecure();
  const { data: payments=[] } = useQuery({
    queryKey: ["payments", user?.email],

    queryFn: async () => {
      const res = await axios.get(`https://bistro-boss-server-brown-xi.vercel.app/payments/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="text-3xl text-center mb-10">Payment History</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-base-200">
                <th>#</th>
                <th>Name</th>
                <th>Job</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                payments.map((payment,index) => (<tr key={payment._id} className="">
                  <th>{index+1}</th>
                  <td>{payment.status}</td>
                  {/* TODO: here id should be transaction id of stripe payment */}
                  <td>{payment._id}</td>
                  <td>{payment.price}</td>
                </tr>))
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
