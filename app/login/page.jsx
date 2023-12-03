import { authenticate } from '@/app/lib/actions'
const LoginPage = () => {
  return (
    <div className="flex items-center w-full h-[100vh] justify-center">
      <form action={authenticate} className="form background-soft p-12 rounded-lg w-[500px] h-[500px] flex flex-col justify-center items-center gap-[30px]">
        <h1 className="text-[30px]">Login</h1>
        <input type="text" name='username' placeholder="username" className="w-full"/>
        <input type="text" name='password' placeholder="password" className="w-full"/>
        <button>Login</button>
      </form>     
    </div>
  )
}

export default LoginPage