import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';


const Sidenavbar = () => {
    const { collapseSidebar } = useProSidebar();
    return (
        <div className='.flex fixed'>
            <Sidebar>
                <Menu>
                    <MenuItem> Documentation</MenuItem>
                    <MenuItem> Calendar</MenuItem>
                    <MenuItem> E-commerce</MenuItem>
                </Menu>
            </Sidebar>
            {/* <main>
                <button className='bg-red-800' onClick={() => collapseSidebar()}>Collapse</button>
            </main> */}
        </div>
    )
}

export default Sidenavbar