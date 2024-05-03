import { FaPlus } from "react-icons/fa";

const Booking = () => {
  return (
    <div className="mt-[160px] mx-4 relative">
        <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
            <form className="flex flex-col md:flex-row">
                <div className="py-1.5 px-2.5 flex-1 border-r-2">
                    <p>Destination form</p>
                    <div className="flex flex-row">
                        <select name="from" id="from" className="outline-none p-2 w-full">
                            <option value="">Please select</option>
                            <option>Nairobi</option>
                            <option>Kampala</option>
                            <option>Mauritius</option>
                            <option>Seychelles</option>
                        </select>
                    </div>
                </div>
                <div className="py-1.5 px-2.5 flex-1 border-r-2">
                    <p>Destination To</p>
                    <div className="flex flex-row">
                        <select name="from" id="from" className="outline-none p-2 w-full">
                            <option value="">Please select</option>
                            <option>Nairobi</option>
                            <option>Kampala</option>
                            <option>Mauritius</option>
                            <option>Seychelles</option>
                        </select>

                        {/* date */}
                        <div className="py-1.5 px-2.5 flex-1 border-r-2">
                    <p>Travel Date</p>
                    <input type="date" name="date" required className="outline-none p-2 w-full"/>
                </div>


                    </div>
                </div>

                <div className="py-1.5 px-2.5 flex-1 border-r-2">
                    <p>Guest</p>
                    <div className="flex flex-row">
                        <select name="from" id="from" className="outline-none p-2 w-full">
                            <option value="">Please select</option>
                            <option>1 person</option>
                            <option>2 persons</option>
                            <option>3 persons</option>
                            <option>4 persons</option>
                        </select>
                    </div>
                </div>

                <div className="py-1.5 px-2.5 flex-1 border-r-2">
                    <p>Travel Class</p>
                    <div className="flex flex-row">
                        <select name="from" id="from" className="outline-none p-2 w-full">
                            <option value="">Please select</option>
                            <option>Busines</option>
                            <option>Economy</option>
                            
                        </select>
                    </div>
                </div>
                {/* button */}
                <button type="submit" className="bg-indigo-500 text-white px-8 py-1 space-x-2 text-center flex items-center justify-center"><FaPlus className="mr-1" />Book Now</button>

            </form>
        </div>
    </div>
  )
}

export default Booking;