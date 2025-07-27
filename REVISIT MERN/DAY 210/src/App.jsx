import { useForm } from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },

  } = useForm()

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    try {
      let r = await fetch('http://localhost:3000', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      let res = await r.text()
      console.log(data, res)
    } catch (err) {
      console.error("Failed to send data:", err)
    }
  }

  return (
    <>
      {isSubmitting && <div className="loading"></div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input placeholder="Username" {...register("username", { required: { value: true, message: "This field is Required" }, minLength: { value: 3, message: 'min lenght is 3' }, maxLength: { value: 8, message: 'max lenght is 8' } })} type="text" />

          {errors.username && <div className="red">{errors.username.message}</div>}
          <br />
          <input placeholder="Password" {...register("password", { required: { value: true, message: "This field is Required" }, minLength: { value: 6, message: 'min lenght is 6' }, maxLength: { value: 30, message: 'max lenght is 30' } })} type="password" />
          {errors.password && <div className="red">{errors.password.message}</div>}

          <input disabled={isSubmitting} type="submit" value="submit" />
          {errors.myform && <div className="red">{errors.myform.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App

