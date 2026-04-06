
const Footer = () => {
    return (
        <footer className="bg-[#212529]">
            <div className="container mx-auto px-6 py-5 md:py-6">
                <div className="flex flex-col md:grid md:grid-cols-3 items-center gap-y-3 md:gap-y-0">
                    <div className="hidden md:block"></div>
                    <p className="text-[13px] md:text-sm text-center w-full md:w-auto text-gray-300">&copy; 2026 Lalan Kumar. All rights reserved.</p>
                    <div className="flex items-center space-x-4 justify-end md:mr-24">
                        <a href="https://www.linkedin.com/in/lalan-mahato" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white transition-colors duration-200">
                            <i className="ri-linkedin-fill text-2xl"></i>
                        </a>
                        <a href="https://github.com/lalankumar17" target="_blank" rel="noopener noreferrer"
                           className="text-gray-400 hover:text-white transition-colors duration-200">
                            <i className="ri-github-fill text-2xl"></i>
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
