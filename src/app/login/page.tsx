import { login,signup } from "./actions"

export default function Home() {
    return (
        <form>
            <div>
                <input type="text" id="email" name="email" placeholder="email" />
                <input type="password" id="password" name="password" placeholder="password" />
            </div>
            <div>
                <button formAction={login} type='submit'>Log in</button>
                <button formAction={signup} type='submit'>Sign up</button>
            </div>
        </form>
    )
}
