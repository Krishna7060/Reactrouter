import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-y">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="data:image/jpeg;base64,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"
                className="mr-3 h-16"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              
              
              
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              
              
              
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                
                    
    
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        
        
            
            


          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="#" className="text-gray-500 hover:text-gray-900">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            
            
            
            
            
            
            
            
    
            
            
            
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="#" className="text-gray-500">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            
            
            
            
            
            
            
            
            
            
        
            
            
            
            
            
          </div>
        </div>
      
    </footer>
  );
}
