import { useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import { socials } from "#constants/index.js"; 

const Contact = () => {
    // 1. Set up state to hold the form data and success message
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState(false);

    // 2. Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            // Send the data to your Formspree endpoint
            const response = await fetch("https://formspree.io/f/myknezvr", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Success! Turn the button green
                setIsSent(true);
                
                // Reset the form and button after 3 seconds
                setTimeout(() => setIsSent(false), 3000);
                setFormData({ name: '', email: '', message: '' });
            }
        } catch (error) {
            console.error("Failed to send message", error);
            alert("Oops! Something went wrong.");
        }
    };

    return (
        // Widened the window to 450px to give the form room to breathe
        <div style={{ width: "450px" }} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-2xl border border-gray-200/50">
            
            {/* Header */}
            <div id="window-header" className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200 shrink-0">
                <WindowControls target="contact" />
                <h2 className="text-sm font-bold text-gray-400 flex-1 text-center">
                    Contact Me
                </h2>
                <div className="w-14"></div> 
            </div>

            {/* Scrollable Content Area */}
            <div className="p-6 overflow-y-auto max-h-[85vh] flex flex-col">
                
                {/* Intro */}
                <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Let's Connect</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                </div>
            
                {/* Socials - Now in a sleek 2x2 Grid! */}
                <ul className="grid grid-cols-2 gap-3 w-full mb-8">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} className="w-full">
                            <a 
                                href={link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="relative flex items-center justify-center w-full py-2.5 rounded-lg text-white font-medium hover:opacity-90 hover:scale-[1.02] transition-all shadow-sm"
                                style={{ backgroundColor: bg }} 
                            >
                                <img src={icon} alt={text} className="absolute left-3 w-4 h-4 object-contain drop-shadow-sm" />
                                <span className="text-[14px] ml-4">{text}</span>
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Divider Line */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-px bg-gray-200 flex-1"></div>
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Or leave a message</span>
                    <div className="h-px bg-gray-200 flex-1"></div>
                </div>

                {/* The Contact Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    {/* Name & Email Row */}
                    <div className="flex gap-4">
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-600 ml-1">Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="flex-1 flex flex-col gap-1.5">
                            <label className="text-xs font-semibold text-gray-600 ml-1">Email</label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-gray-400"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    {/* Message Area */}
                    <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-gray-600 ml-1">Drop me a message</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                            className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all resize-none placeholder:text-gray-400"
                            placeholder="A question, feedback, or just to say hi!"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSent}
                        className={`mt-2 w-full py-2.5 text-white text-sm font-bold rounded-lg transition-all shadow-md active:scale-[0.98] ${
                            isSent ? "bg-green-500 hover:bg-green-600" : "bg-blue-600 hover:bg-blue-700"
                        }`}
                    >
                        {isSent ? "Message Sent! 🚀" : "Send Message"}
                    </button>
                </form>

            </div>
        </div>
    );
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;