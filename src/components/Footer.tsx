const Footer = () => {
    return (
        <div className="container-fluid pb-16 footer">
            <div className="upperFooter">
                <h2>Want to know more?</h2>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 pt-4">
                    <input className="rounded-sm px-4 py-2 outline-none w-full md:w-auto" type="text" placeholder="Your Name" />
                    <input className="rounded-sm px-4 py-2 outline-none w-full md:w-auto" type="tel" minLength={11} maxLength={14} placeholder="Your Phone" />
                    <input className="rounded-sm px-4 py-2 outline-none w-full md:w-auto" type="email" placeholder="Your Email" />
                    <button type="submit" className="btn-outline ml-4 rounded-xl px-16 w-full md:w-auto">Get Contacted</button>
                </div>
            </div>
            <div className="container lowerFooter">
                <div className="footerSec">
                    <div className="upper flex space-x-4">
                        <div className="flex flex-col firstCol">
                            <a href="#" className="appbtns">
                                <img src="https://tplinsurance.com/storage/2023/07/TPL-insurance-logo-updatenew.webp" alt="TPL Insurance Logo" width="100%" height="auto" />
                            </a>
                            <p className="text-md">
                                TPL Insurance is the first insurance company in Pakistan to sell general insurance products directly to the consumer. Since launch in 2005, the company has grown from strength-to-strength, delivering superior and hassle-free Insurance products to individual and corporate clients. 
                                <a href="https://tplinsurance.com/about-us/" className="hover:text-[#ec6d21]"> Read More</a>
                            </p>
                        </div>
                        <div className="flex flex-col secondCol">
                            <h2 className="headingApp text-[#F36D35]">Quick Links</h2>
                            <div className="quickmenu-col">
                                <div className="quick1">
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/category/articles-blogs/">Media</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/products/mobile-insurance/">Mobile Insurance</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/group-of-companies/">Group of Companies</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/complaints-resolution-forums/">Complaint Resolution Forums</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/storage/2024/05/Panel-Hospitals.pdf">Panel Hospitals</a>
                                </div>
                                <div className="quick2">
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/my-tpli/">My TPLI</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/brochures/">Product Brochures</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/rfp/">RFP</a>
                                    <a className="text-sm hover:text-[#F36D35]" href="https://tplinsurance.com/code-of-conduct/">Code of Conduct</a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col thirdCol justify-center items-center">
                            <span className="appCTA-footer">
                                <img src="https://tplinsurance.com/storage/2023/07/Download-TPLI-APP.png" width={150} height="auto" alt="" />
                            </span>
                            <span className="social space-x-1">
                                <a target="_blank" className="rounded-lg" href="https://twitter.com/TPL_Insurance">
                                    <i className="bi bi-twitter-x"></i>
                                </a>
                                <a target="_blank" className="rounded-lg" href="https://www.facebook.com/insurancetpl/">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a target="_blank" className="rounded-lg" href="https://twitter.com/TPL_Insurance">
                                    <i className="bi bi-youtube"></i>
                                </a>
                                <a target="_blank" className="rounded-lg" href="https://twitter.com/TPL_Insurance">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                                <a target="_blank" className="rounded-lg" href="https://twitter.com/TPL_Insurance">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="fLower2 flex flex-col lg:flex-row items-center justify-between border-t border-gray-400 mt-3 pt-4 space-y-4">
                            <a href="https://jamapunji.pk/">
                                <img src="https://tplinsurance.com/storage/2024/02/jamapunji_parkash_parmar.png" alt="auto" width={150} />
                            </a>
                            <div className="flex gap-3">
                                <a href="" className="text-sm font-semibold hover:text-[#F36D35]">Privacy Policy</a>
                                <a href="" className="text-sm font-semibold hover:text-[#F36D35]">Quality Policy</a>
                                <a href="" className="text-sm font-semibold hover:text-[#F36D35]">Signup</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 mt-3 pt-4">
                        <div className="text-gray-400 text-sm">
                            © TPL Insurance Ltd. , All Right Reserved.
                        </div>
                        <div className="text-gray-400 text-sm">

                            Last Updated: 13-09-2024.

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Footer;