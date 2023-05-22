import React from "react"
import axios from "../commons/axios";
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import Layout from "Layout"

export default function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    // 3. 处理登录逻辑
    try {
      const { email, password } = data
      const res = await axios.post("/api/login", {
        email,
        password,
      })
      const jwToken = res.data
      global.auth.setToken(jwToken)
      toast.success("Login Success")
      // 4. 跳转到首页视图
      props.history.push("/")
    } catch (error) {
      const message = error.response.data.message
      console.log(message)
      toast.error(message)
    }
  }

  return (
    <Layout>
    <div className="loginposition w80per">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          {/* <label className="label">Email</label> */}
          <div className="control">
            <input
              className={`input loginitem ${errors.email && "is-danger"}`}
              type="text"
              placeholder="帳號或信箱*"
              name="email"
              {...register("email", {
                required: "email is required",
                pattern: {
                  value:
                    /^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+.)+[A-Za-z]{2,6}$/,
                  message: "invalid email",
                },
              })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
          </div>
        </div>
        <div className="field">
          {/* <label className="label">Password</label> */}
          <div className="control">
            <input
              className={`input loginitem ${errors.password && "is-danger"}`}
              type="password"
              placeholder="密碼*"
              name="password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "cannot be less than 6 digits",
                },
              })}
            />
            {errors.password && (
              <p className="helper has-text-danger">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <div className="control martb30px">
          <button className="loginbtn martb20px">Log In</button>
        </div>
        <Link to="/forgetPassword">
          <div className="control martb20px">
            <button className="loginbtn martb10px">忘記密碼</button>
          </div>
        </Link>
      </form>
    </div>
    </Layout>
  )
}
