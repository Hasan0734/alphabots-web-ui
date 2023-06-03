import React from 'react';
import Logo from '../../assets/img/alphabots-logo.png'
import { useLogoutQuery } from '../../features/auth/authApi';
import useAuth from '../../hooks/useAuth';
import Avatar from '../../assets/img/user-avatar.png'

const Navbar = ({ setIsTeamMode, isTeamMode }: any) => {
    const auth = useAuth()
    // const {refetch}  = useLogoutQuery(null)

    const logout = (event: any) => {
        // refetch()
       
    };


    return (
        <>
            <nav>
                <div id="app-logo"><img src={Logo} alt="ALPHABOTS" /></div>

                {auth &&
                    <>
                        <div id="navi-tabs">
                            <span onClick={() => setIsTeamMode(false)}
                                className={isTeamMode ? '' : 'active'}>
                                <svg width="30" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)" fill="#131416"><path opacity=".4" d="M13.5 19.5h3V18h-3v1.5zm-4.5 0h3V18H9v1.5zM0 12v6a1.498 1.498 0 001.5 1.5H3v-9H1.5A1.499 1.499 0 000 12zm18 7.5h3V18h-3v1.5zm10.5-9H27v9h1.5A1.499 1.499 0 0030 18v-6a1.497 1.497 0 00-1.5-1.5zM15 0a1.5 1.5 0 00-1.5 1.5v3h3v-3A1.5 1.5 0 0015 0z" /><path d="M21.75 4.5H8.25A3.749 3.749 0 004.5 8.25V21a3.003 3.003 0 003 3h15a3.003 3.003 0 003-3V8.25a3.748 3.748 0 00-3.75-3.75zM12 19.5H9V18h3v1.5zm-1.5-5.625a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75zm6 5.625h-3V18h3v1.5zm4.5 0h-3V18h3v1.5zm-1.5-5.625a1.875 1.875 0 110-3.75 1.875 1.875 0 010 3.75z" /></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v24H0z" /></clipPath></defs></svg>
                            </span>
                            <span onClick={() => setIsTeamMode(true)}
                                className={!isTeamMode ? '' : 'active'}>
                                <svg width="30" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".4" d="M29.827 16.692l-1.21-.698a5.497 5.497 0 000-1.997l1.21-.698a.34.34 0 00.154-.399 7.035 7.035 0 00-1.556-2.69.342.342 0 00-.422-.066l-1.21.698a5.501 5.501 0 00-1.729-.998V8.447a.342.342 0 00-.267-.333 7.073 7.073 0 00-3.103 0 .341.341 0 00-.267.333v1.397a5.504 5.504 0 00-1.73.998l-1.21-.698a.343.343 0 00-.421.066 7.035 7.035 0 00-1.557 2.69.346.346 0 00.155.399l1.21.698a5.497 5.497 0 000 1.997l-1.21.698a.339.339 0 00-.155.399 7.07 7.07 0 001.557 2.69.341.341 0 00.422.066l1.209-.698c.51.435 1.097.773 1.73.998v1.397a.341.341 0 00.267.333 7.07 7.07 0 003.103 0 .34.34 0 00.267-.333v-1.397a5.504 5.504 0 001.73-.998l1.21.698a.343.343 0 00.421-.066 7.035 7.035 0 001.556-2.69.346.346 0 00-.154-.399zm-6.577.577a2.274 2.274 0 110-4.547 2.274 2.274 0 010 4.547z" fill="#131416" /><path d="M15 11.995c.09 0 .173-.023.262-.028a8.642 8.642 0 011.702-2.775 1.847 1.847 0 011.355-.59c.323-.001.64.084.919.248l.37.216c.037-.024.075-.042.112-.066.342-.7.522-1.47.525-2.25A5.25 5.25 0 1015 11.995zm-6.886.872A2.991 2.991 0 006 11.995H3a3.003 3.003 0 00-3 3v1.5a1.5 1.5 0 001.5 1.5h3.09a6.874 6.874 0 013.524-5.128zM4.5 10.495a3 3 0 100-6 3 3 0 000 6zm15.431 10.618c-.108-.057-.215-.122-.319-.183-.384.225-.717.46-1.289.46a1.864 1.864 0 01-1.354-.591 8.546 8.546 0 01-1.885-3.263c-.501-1.617 1.168-2.33 1.21-2.358a4.742 4.742 0 010-.365l-.37-.216a1.912 1.912 0 01-.46-.38c-.155.01-.305.028-.46.028a7.399 7.399 0 01-3.21-.75h-.39A5.4 5.4 0 006 18.895v1.35a2.25 2.25 0 002.25 2.25h11.972a1.804 1.804 0 01-.29-.951v-.431z" fill="#131416" /></svg>
                            </span>
                        </div>

                        <div id="nav-actions">
                            <img id="user-avatar" src={Avatar} alt="" />
                            <span onClick={logout}>Logout</span>
                        </div>
                    </>
                }
            </nav>
        </>
    );
};

export default Navbar;