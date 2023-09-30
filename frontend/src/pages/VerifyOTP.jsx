import { Link } from "react-router-dom"


const VerifyOTP = () => {
    return (
        <div className=" h-screen">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-around px-4">
                {/* <!-- Left column container with background--> */}
                <div className="hidden lg:flex mb-12 md:mb-0 w-4/12">
                    <img
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="w-full"
                        alt="Phone image" />
                </div>

                {/* <!-- Right column container with form --> */}
                <div className="w-full lg:w-5/12 border border-black-2 rounded-lg shadow-lg">
                    <form className="p-5">
                        <h1 className="mb-4 text-3xl font-bold text-gray-900 flex items-center justify-center">
                            <span>
                                Forgot password
                            </span>
                        </h1>
                        {/* <!-- Email input --> */}
                        <h6 className="mb-4  font-bold text-gray-900">
                            Enter the OTP code sent to your phone number
                        </h6>
                        <div className="mb-4">
                            <label htmlFor="OTP" className="block mb-2 text-sm font-medium text-gray-900">OTP code</label>
                            <input type="number" id="OTP" className="text-gray-900 text-sm border-2 rounded-lg border-gray-400 focus:border-sky-900 outline-none block w-full p-2.5" placeholder="x x x x x x x" required></input>
                        </div>

                        {/* <!-- Submit button --> */}
                        <button
                            type="submit"
                            className="inline-block w-full rounded bg-sky-900 text-white px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] "
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Verify OTP
                        </button>
                        <div className="pt-5">

                            <Link to="/login">Back to Login </Link>
                        </div>

                    </form>
                </div>
            </div>
        </div >
    )
}

export default VerifyOTP