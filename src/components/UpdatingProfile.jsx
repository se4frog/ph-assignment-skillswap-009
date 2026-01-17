import React, { use } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FaSave, FaTimes } from 'react-icons/fa';

const UpdatingProfile = ({setIsEditing}) => {


     const {user} = use(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;

        console.log("New Data:", { name, photo });
        // Here you will call your updateUserProfile function from context
        setIsEditing(false);
    };

    const inputClass = "w-full bg-white/5 border border-zinc-700 rounded-none p-3 text-white focus:outline-none focus:border-[#fae502] transition-all";
    return (
        <div>
            <form onSubmit={handleUpdate} className="space-y-4 animate-in fade-in duration-500">
                <div>
                    <label className="font-black uppercase text-[10px] tracking-widest text-gray-500">Display Name</label>
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
        </div>
    );
};

export default UpdatingProfile;