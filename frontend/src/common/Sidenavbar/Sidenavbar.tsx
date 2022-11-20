import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import img from '../../assets/background.jpg'

const Sidenavbar = () => {
    return (
        <div className='flex fixed'>
            <Sidebar>
                <Menu>
                    <div>
                        <MenuItem>
                            <div className='mx-px flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <div className='mx-2 text-lg'>
                                    Home
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='mx-px flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                <div className='mx-2 text-lg'>
                                    Services
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='mx-px flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                </svg>

                                <div className='mx-2 text-lg'>
                                    Message
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div className='mx-px flex pt-14'>
                                <div className="">
                                    <img className="w-10 h-10 rounded-full" src={img} alt="Rounded avatar" />
                                </div>
                                <div className='mx-2 text-lg'>
                                    Avatar
                                </div>
                            </div>
                        </MenuItem>
                    </div>
                </Menu>
            </Sidebar>
            {/* <main>
                <button className='bg-red-800' onClick={() => collapseSidebar()}>Collapse</button>
            </main> */}
        </div>
    )
}

export default Sidenavbar