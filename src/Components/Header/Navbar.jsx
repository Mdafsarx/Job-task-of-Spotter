export default function Navbar() {
    return (
       <div>
         <div className="fixed top-0 z-50 w-full flex items-center justify-between h-16 px-8 bg-gradient-to-br from-[#40BDDBE6] via-[#84CEB7E6] to-[#D1E189E6]">
        
             <div>
                 {/* name */}
                 <h4 className="text-xl font-bold">Jetify</h4>
             </div>

             <div className="hidden lg:flex">
                 <ul className="menu menu-horizontal px-1">
                     <li><a>Home</a></li>
                     <li><a>Flights</a></li>
                     <li><a>Contact</a></li>
                 </ul>
             </div>
        
             <div>
                 <a className="btn btn-sm">Login</a>
             </div>
        
         </div>
       </div>
    )
}
