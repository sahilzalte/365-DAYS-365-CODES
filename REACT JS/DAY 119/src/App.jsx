
import './App.css'
import { useForm } from "react-hook-form"




function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000)
    })
  }
  const onSubmit = async (data) => {
    await delay(2) // Simulate a delay of 4 seconds
    let r = await fetch('http://localhost:3000/', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    let res = await r.text()

    console.log(data, res)
    // if (data.username !== 'shubham') {
    //   setError("myform", { message: "Your Form is not in good order beacuse username is invalid" })
    // }
    // if (data.username === 'rohan') {
    //   setError("Blocked", { message: "Your Entry is Blocked" })
    // }
  }

  return (
    <>
      <div></div>
      {isSubmitting && <div>Loading ...</div>}
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: 'username is required' }, minLength: { value: 3, message: 'Min length is 3' }, maxLength: { value: 8, message: 'Max length is 8' } })} type="text" name='username' id="" />
          {errors.username && <div>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { minLength: { value: 7, message: 'Min length of Password is 7' } })}
            type="password" name='password' id="" />
          {errors.password && <div>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div>{errors.myform.message}</div>}
          {errors.Blocked && <div>{errors.Blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
