import { useDispatch, useSelector } from "react-redux";
import { TiDelete } from "react-icons/ti";


const Table = () => {
    const data = useSelector((state) => state.data);
    const dispatch = useDispatch();
    console.log(data)
  return (
    <>
    {
        data.length && (
            <div className="max-w-6xl mx-auto mt-5 bg-white">
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                        <tr>
                            <th></th>
                            <th>DESTINATION FROM</th>
                            <th>DESTINATION TO</th>
                            <th>TRAVEL DATE</th>
                            <th>GUESTS</th>
                            <th>TRAVEL CLASS</th>
                            <th>DELETE</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((data, index) => (
                                    <tr key={index}>
                            <th>{data.from}</th>
                            <td>{data.to}</td>
                            <td>{data.date}</td>
                            <td>{data.guest}</td>
                            <td>{data.ticketclassName}</td>
                            <td><button id={`${data.id}`}  
                            className="btn-xs bg-red-500 text-white"><TiDelete /></button></td>
                        </tr>

                                ))
                            }
                        
                        
                    
                    </tbody>
                </table>
                </div>

            </div>
        )
        }
    
    </>
  )
}

export default Table;