import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";



const Navbar = () => {

    const [theme, setTheme] = useState('light');
    const { user, setLoading, logOut } = useAuth();


    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark')
        }
        else {
            setTheme('light')
        }
    }
    console.log(theme)

    const handleLogOut = async ()=>{
        try{
            setLoading(true)
            await logOut()
        }catch(err){
            console.log(err);
        }
    }

    const navLinks = <>
        <div className="sm:flex md:gap-3 items-center justify-center">
            <li><NavLink to='/' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Home</NavLink></li>
            <li><NavLink to='/addBook' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Add Book</NavLink></li>
            <li><NavLink to='/all-books' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>All Books</NavLink></li>
            <li><NavLink to='/borrowed-books' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Borrowed Books</NavLink></li>
            <li><NavLink to='/register' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Register</NavLink></li>
            {
                user ? <li><NavLink onClick={handleLogOut} className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Logout</NavLink></li> : <li><NavLink to='/login' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>Login</NavLink></li>
            }
            {/* <li><NavLink to='/updateBook' className={({ isActive }) => isActive ? 'text-purple-600 border p-2 rounded-md border-purple-600 font-mono' : 'font-normal'}>UpdateBook</NavLink></li> */}

        </div>
    </>

    return (
        <div className="navbar bg-base-100 container px-4 mx-auto mt-3 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className=" btn btn-ghost text-xl font-mono font-bold">College <span className="font-bold text-purple-600">Library</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full" title={user?.displayName || 'No Name'}>
                        <img referrerPolicy='no-referrer' alt="Tailwind CSS Navbar component" src={user?.photoURL || 'https://i.ibb.co/f8yQ8ZN/360-F-606375369-Rq-PF7-Mlk-XUMJk-E4dr3080-Mdw-Sg4-Fay74.jpg'} />
                    </div>
                </div>


            </div>
            <div className="ml-4">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleToggle} type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
            </div>
        </div>
    );
};

export default Navbar;