import { Fragment } from "react"
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



export const Footer = () => {
  return (
    <Fragment>

<div className="bg-black text-gray-400">

<footer className="bg-black py-8">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <h3 className="text-white text-xl font-bold mb-4">Metacode3</h3>
                <p>Metacode3 is optimized for learning and training. Examples might be simplified to improve reading and learning.</p>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <h3 className="text-white text-xl font-bold mb-4">Top Tutorials</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">HTML Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">CSS Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">MY Sql Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">React Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">JavaScript Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">Python Tutorial</a></li>
                    <li><a href="#" className="hover:text-white">Java Tutorial</a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
                <h3 className="text-white text-xl font-bold mb-4">Top References</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">HTML References</a></li>
                    <li><a href="#" className="hover:text-white">CSS References</a></li>
                    <li><a href="#" className="hover:text-white">MY Sql References</a></li>
                    <li><a href="#" className="hover:text-white">React References</a></li>
                    <li><a href="#" className="hover:text-white">JavaScript References</a></li>
                    <li><a href="#" className="hover:text-white">Python References</a></li>
                    <li><a href="#" className="hover:text-white">Java References</a></li>
                </ul>
            </div>
            <div className="w-full md:w-1/4">
                <h3 className="text-white text-xl font-bold mb-4">Top Examples</h3>
                <ul>
                    <li><a href="#" className="hover:text-white">HTML Examples</a></li>
                    <li><a href="#" className="hover:text-white">CSS Examples</a></li>
                    <li><a href="#" className="hover:text-white">MY Sql Examples</a></li>
                    <li><a href="#" className="hover:text-white">React Examples</a></li>
                    <li><a href="#" className="hover:text-white">JavaScript Examples</a></li>
                    <li><a href="#" className="hover:text-white">Python Examples</a></li>
                    <li><a href="#" className="hover:text-white">Java Examples</a></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-8">
            <div className="text-sm">
                <a href="#" className="mr-4 hover:text-white">Privacy Policy</a>
                <a href="#" className="mr-4 hover:text-white">Terms & Conditions</a>
                <a href="#" className="hover:text-white">Code of Conduct</a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <FaXTwitter />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <FaLinkedin />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                <FaYoutube />
                </a>
            </div>
        </div>
    </div>
</footer>

</div>
    </Fragment>
  )
}
