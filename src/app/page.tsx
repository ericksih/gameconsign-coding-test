import {cookies} from "next/headers";
import {logout} from "@/actions/logout";
import {redirect} from 'next/navigation';
import Link from 'next/link';

export default function Page() {
    const cookie = cookies().get('auth');
    if (!cookie) {
        redirect('auth/login');
    }
        return (
            <>
                <h1>Home</h1>

                <ul>
                    <Link href={"/form"}>Form Link</Link>
                </ul>
                <hr className={"my-6"} />
                <form action={logout}>
                    <button type={"submit"}>Logout</button>
                </form>
            </>
        );

}