import { useRouter } from "next/router";
import Navbar from "../../navbar";

const disableNavbar = ['/auth', '/auth/login', '/auth/register', '/404'];

type AppShellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (  
            <main>
                <div>
                {!disableNavbar.includes(pathname) && <Navbar />}
                {children}
                </div>
            </main>
        
    );
}
export default Appshell;