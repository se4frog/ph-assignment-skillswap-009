import React, { useState } from 'react';
import { FaStar, FaEnvelope, FaUser, FaTag, FaCheckCircle, FaUserAlt, FaUserAstronaut } from 'react-icons/fa';
import { FaPaperPlane } from 'react-icons/fa6';




const SkillDetailsCard = ({ skill }) => {




    const [formData, setFormData] = useState({ name: '', email: '' });
    const [showToast, setShowToast] = useState(false);

    const handleBooking = (e) => {
        e.preventDefault();
        setShowToast(true);
        setFormData({ name: '', email: '' });
        setTimeout(() => setShowToast(false), 3000);
    };


    return (
        <div className="min-h-80 flex items-center py-10 px-4 md:px-10
         bg-white/5 backdrop-blur-md  border border-white/1 shadow-lg">
            <div className="max-w-6xl mx-auto grow">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">


                    <div className="lg:col-span-2 space-y-6">
                        <figure className="rounded-3xl overflow-hidden shadow-xl ">
                            <img
                                src={skill.image}
                                alt={skill.skillName}
                                className="w-full h-100 object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </figure>

                        <div className="card p-8
                         bg-white/1 backdrop-blur-md  border border-white/1 shadow-lg">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <div className="badge badge-secondary gap-2 mb-2">
                                        <FaTag className="text-xs" /> {skill.category}
                                    </div>
                                    <h1 className="text-4xl font-bold text-base-content">{skill.skillName}</h1>
                                </div>
                                <div className="flex items-center gap-1 bg-[#fae502] text-yellow-700 px-3 py-1 rounded-full font-bold">
                                    <FaStar /> {skill.rating}
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-3 border-b pb-2">About this Skill</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {skill.description}
                            </p>
                        </div>
                    </div>


                    <div className="lg:col-span-1">
                        <div className="card bg-base-100 shadow-xl sticky top-10 border-t-4 border-primary">
                            <div className="card-body">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-3xl font-bold text-primary">${skill.price}</span>
                                    <span className="text-sm opacity-70">/per hour</span>
                                </div>

                                <div className="divider my-0"></div>

                                <div className="space-y-4 py-4">
                                    <div className="flex items-center gap-4">
                                        <FaUserAstronaut></FaUserAstronaut>
                                        <div>
                                            <p className="text-xs opacity-60">Provider</p>
                                            <p className="font-bold flex items-center gap-1">
                                                {skill.providerName} <FaCheckCircle className="text-blue-500 text-xs" />
                                            </p>
                                        </div>
                                    </div>

                                    <div className={`alert ${skill.slotsAvailable < 4 ? 'alert-warning' : 'alert-info'} py-2`}>
                                        <span className="text-sm font-medium">🔥 {skill.slotsAvailable} slots available!</span>
                                    </div>
                                </div>

                                <div className="bg-base-200 p-4 rounded-xl mt-4">
                                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                                        <FaPaperPlane className="text-primary text-sm" /> Book a Session
                                    </h3>

                                    <form onSubmit={handleBooking} className="space-y-3">
                                        <div className="form-control">
                                            <input
                                                type="text"
                                                placeholder="Your Name"
                                                className="input input-bordered w-full bg-base-100"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <div className="form-control">
                                            <input
                                                type="email"
                                                placeholder="Your Email"
                                                className="input input-bordered w-full bg-base-100"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-block mt-2">
                                            Submit Booking
                                        </button>
                                    </form>
                                </div>
                                {showToast && (
                                    <div className="toast toast-end toast-top z-50">
                                        <div className="alert alert-success shadow-lg text-white font-medium">
                                            <FaCheckCircle />
                                            <span>Booking successful!</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SkillDetailsCard;