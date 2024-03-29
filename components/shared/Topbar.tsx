import Image from "next/image";
import Link from "next/link";
import { OrganizationSwitcher, SignedIn , SignOutButton} from "@clerk/nextjs";

function Topbar (){
    return (
        <nav className="topbar">
            <Link
            href="/"
            className="flex items-center gap-4"
            >
                <img
                src="/assets/logo.svg"
                alt="Logo"
                height={28}
                width={28}
                />
                <p className="Text-heading3-bold text-light-1 max-xs:hidden">
                    Threads
                </p>
            </Link>
            <div className="flex items-center gap-1">
                <div className="block md:hidden">
                    <SignedIn>
                        <SignOutButton>
                            <div className="flex cursor-pointer">
                                <Image
                                src="/assets/logout.svg"
                                alt="logout"
                                width={24}
                                height={24}
                                />
                            <OrganizationSwitcher
                            appearance={{
                                elements: {
                                    organizationSwitcherTrigger :
                                    "py-2 px-4"
                                }
                            }}/>
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>

            </div>
        </nav>
    )
}

export default Topbar;