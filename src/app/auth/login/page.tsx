'use client';
import {useRouter, useSearchParams} from 'next/navigation';
export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams()
    const handleLogin = async(event: any) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());
        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        if (res.status === 200) {
            let returnUrl = searchParams.get('return');
            returnUrl = (returnUrl && decodeURIComponent(returnUrl)) ?? '/'
            router.push(returnUrl);
        }

    };

    // TODO: Challenge: #4 - Change to use form generator with useFormGenerator hook and do the submit
    // TODO: Optional Challenge #1 - Use tailwindcss to style the login page
    return (
        <div className="w-full md:w-96">
            <form onSubmit={(event) => handleLogin(event)}>
                <h1>Login</h1>
                <div>
                <label>Username</label>
                <input type="text" name="email" />
                </div>
                <label>Password</label>
                <input type="password" name="password" />
                <div>
                <button type="submit" className="">Login</button>
                </div>
            </form>
        </div>
    )
}