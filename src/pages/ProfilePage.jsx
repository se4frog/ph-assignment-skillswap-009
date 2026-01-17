import React, { use, useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../provider/AuthProvider';
import NoProfile from './NoProfile';
import Loading from './Loading';


const ProfilePage = () => {

    const { user, updateUser, setUser, loading, setLoading } = use(AuthContext);
    const [isEditing, setIsEditing] = useState(false);

    if (!user) {

        if (loading) return <Loading className='items-start'></Loading>;

        return <NoProfile></NoProfile>;
    }


    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log("New Data:", { name, photo });
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
                setUser((prevUser) => {
                    return { ...prevUser, displayName: name, photoURL: photo };
                });
                setIsEditing(false);
                setLoading(false);

            })
            .catch((error) => {
                // console.log(error.message)
                console.log(error.message)
                setIsEditing(false);
            });

    };



    const inputClass = "w-full bg-white/5 border border-zinc-700 rounded-none p-3 text-white focus:outline-none focus:border-[#fae502] transition-all";

    return (

        <div className="min-h-screen bg-black text-white font-sans py-16 px-4">
            {loading ? <Loading className='items-start'></Loading> :
                <div className="max-w-6xl mx-auto">


                    <div className="text-center mb-16 space-y-2">
                        <h1 className="text-5xl font-bold tracking-tight text-white">
                            {isEditing ? "" : user.displayName}
                        </h1>
                    </div>


                    <div className={`${(user?.bio) ? 'grid grid-cols-1 items-center border md:grid-cols-3 gap-12' : 'flex justify-center items-center flex-col md:flex-row md:gap-20'}`}>

                        <div className={`order-2 md:order-1 space-y-4 text-center md:text-left ${(user?.bio) ? '' : 'hidden'}`}>
                            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block">
                                About me
                            </h2>
                            <p className={`text-gray-300 leading-relaxed text-sm lg:text-base`}>
                                {user.bio}
                            </p>

                        </div>


                        <div className={` order-1 md:order-2 flex justify-center ${(isEditing) ? 'hidden' : ''} `}>
                            <div className="relative group">

                                <div className="absolute -inset-1 bg-linear-to-r from-gray-700 to-zinc-800 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>

                                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-zinc-900 shadow-2xl">
                                    <img
                                        src={user.photoURL}
                                        alt={user.displayName}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className="order-3 space-y-6 text-center md:text-left mt-3 md:mt-0">
                            <h2 className="text-2xl font-bold border-b-2 border-zinc-800 pb-2 inline-block ">
                                {isEditing ? "Update Profile" : "Details"}
                            </h2>

                            <div className={`space-y-4 ${isEditing ? "hidden" : ''}`}>
                                <div>
                                    <p className="font-black uppercase text-xs tracking-widest text-gray-500">Name:</p>
                                    <p className="text-gray-200">{user.displayName}</p>
                                </div>

                                <div>
                                    <p className="font-black uppercase text-xs tracking-widest text-gray-500">Email:</p>
                                    <p className="text-gray-200 wrap-break-word">{user.email}</p>
                                </div>

                            </div>

                            {/* update form */}
                            <form onSubmit={handleUpdate} className={`space-y-4 animate-in fade-in duration-500 ${isEditing ? "" : "hidden"}`}>
                                <div>
                                    <label className="font-black uppercase text-[10px] tracking-widest text-gray-500">Name</label>
                                    <input name="name" type="text" defaultValue={user.displayName} className={inputClass} required />
                                </div>
                                <div>
                                    <label className="font-black uppercase text-[10px] tracking-widest text-gray-500">Photo URL</label>
                                    <input name="photo" type="text" defaultValue={user.photoURL} className={inputClass} required />
                                </div>

                                <div className="flex gap-2 pt-2">
                                    <button type="submit" className="flex-1 bg-[#fae502] text-black font-bold py-3 text-xs uppercase tracking-widest hover:bg-yellow-500 transition-all flex items-center justify-center gap-2">
                                        <FaSave /> Save
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="flex-1 border border-zinc-700 text-white font-bold py-3 text-xs uppercase tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-2"
                                    >
                                        <FaTimes /> Cancel
                                    </button>
                                </div>


                            </form>





                            <div className="pt-4">
                                {!isEditing &&
                                    <button onClick={() => setIsEditing(true)} className="btn btn-outline border-zinc-700 text-white rounded-none px-8 gap-2 hover:bg-[#fae502] hover:text-black transition-all uppercase tracking-widest text-xs">
                                        <FaEdit /> Update Profile
                                    </button>
                                }
                            </div>
                        </div>

                    </div>
                </div>}

        </div>

    );

};

export default ProfilePage;