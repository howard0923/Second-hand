import React, { useRef, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import TWzipcode from "react-twzipcode"
import Layout from "Layout"
// import "../css/verify.css"
// import "bulma/css/bulma.css"
export default function Register(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

 

  const current = new Date().toISOString().split("T")[0]
  const password = useRef({})
  password.current = watch("password", "")

  const [county, setCounty] = useState("基隆市")
  const [district, setDistrict] = useState("仁愛區")
  const [zipcode, setZipcode] = useState("200")
  const handleChange = (data) => {
    setCounty(data.county)
    setDistrict(data.district)
    setZipcode(data.zipcode)
  }

  const onSubmit = async (data) => {
    // 3. 处理注册逻辑
    try {
      const {
        nickname,
        birthday,
        gender,
        email,
        phone,
        address_remaining,
        password,
      } = data
      //const birthdays = new Date(birthday);

      
      const res = await axios.post("http://140.117.71.141:3001/api/register", {
        nickname,
        birthday,
        gender,
        email,
        phone,
        county,
        district,
        zipcode,
        address_remaining,
        password,
        isStaff: 0
      })
      const jwToken = res.data
      global.auth.setToken(jwToken)
      toast.success("Please check you email -> " + data.email)





      // 4. 跳转到首页视图
      window.location.href = "http://140.117.71.141:3000/verify";

    } catch (error) {
      console.log(error);
      const message = error.response.data.message
      toast.error(message)
      
    }
  }

  return (
    <Layout>
      <div className="w80per registerposition">
        <div className="">
          <h1 className="fontbold fontxlarge martb20px">您的基本資料：</h1>
        </div>
        <div className="">
          <form className="login-box" onSubmit={handleSubmit(onSubmit)}>
            <div className="field">
              <label className="label"><font color="red">*</font>您的姓名：</label>
              <div className="control">
                <input
                  className={`input registeritem ${errors.nickname && "is-danger"}`}
                  type="text"
                  placeholder="姓名*"
                  name="nickname"
                  {...register("nickname", {
                    required: "nickname is required",
                  })}
                />
                {errors.nickname && (
                  <p className="helper has-text-danger">
                    {errors.nickname.message}
                  </p>
                )}
              </div>
            </div>
            <div className="field">
              <label className="label"><font color="red">*</font>生日：</label>
              <div className="control">
                <input
                  className="registeritem"
                  type="date"
                  name="birthday"
                  max={current}
                  {...register("birthday", {
                    required: "birthday is required",
                  })}
                />
                {errors.birthday && (
                  <p className="helper has-text-danger">
                    {errors.birthday.message}
                  </p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label"><font color="red">*</font>性別：</label>
              <div className="control">
                <label className="labelsize verticalcenter fontbold">
                  &nbsp;&nbsp;
                  <input
                    className="radiosize"
                    type="radio"
                    name="gender"
                    checked="checked"
                    value="生理男"
                    {...register("gender", {
                      required: "gender is required",
                    })}
                  />
                  &nbsp;&nbsp;生理男
                </label>
                <label class="labelsize verticalcenter fontbold">
                  &nbsp;&nbsp;
                  <input
                    className="radiosize"
                    type="radio"
                    name="gender"
                    value="生理女"
                    {...register("gender", {
                      required: "gender is required",
                    })}
                  />
                  &nbsp;&nbsp;生理女
                </label>
                <label class="labelsize verticalcenter fontbold">
                  &nbsp;&nbsp;
                  <input
                    className="radiosize"
                    type="radio"
                    name="gender"
                    value="其他"
                    {...register("gender", {
                      required: "gender is required",
                    })}
                  />
                  &nbsp;&nbsp;其他
                </label>
              </div>
            </div>
            <div className="field floatclear mart40px">
              <label className="label"><font color="red">*</font>電話</label>
              <div className="control">
                <input
                  className={`input registeritem ${errors.phone && "is-danger"}`}
                  type="number"
                  placeholder="電話*"
                  name="phone"
                  {...register("phone", {
                    required: "phone is required",
                    minLength: {
                      value: 10,
                      message: "phone must have 10 number",
                    },
                    maxLength: {
                      value: 10,
                      message: "phone must be 10 number",
                    },
                  })}
                />
                {errors.phone && (
                  <p className="helper has-text-danger">{errors.phone.message}</p>
                )}
              </div>
            </div>
            <div className="field">
              <label className="label"><font color="red">*</font>地址(宅配用，離島地區尚未提供服務)</label>
              <div className="control">
                <TWzipcode
                  css={[
                    "form-control county-sel",
                    "form-control district-sel",
                    "form-control zipcodev registeritem",
                  ]}
                  handleChangeCounty={handleChange}
                  handleChangeDistrict={handleChange}
                  handleChangeZipcode={handleChange}
                />
                <input
                  className={`input registeritem ${errors.address_remaining && "is-danger"}`}
                  type="text"
                  placeholder="地址*"
                  name="address_remainging"
                  {...register("address_remaining", {
                    required: "address is required",
                  })}
                />
                {errors.address_remaining && (
                  <p className="helper has-text-danger">
                    {errors.address_remaining.message}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <h1 className="fontbold fontxlarge martb20px">您的帳號及密碼：</h1>
            </div>
            <div className="field">
              <label className="label"><font color="red">*</font>帳號(Email)</label>
              <div className="control">
                <input
                  className={`input registeritem ${errors.email && "is-danger"}`}
                  type="text"
                  placeholder="帳號 或 Email*"
                  name="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value:
                        /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
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
              <label className="label"><font color="red">*</font>密碼</label>
              <div className="control">
                <input
                  className={`input registeritem ${errors.password && "is-danger"}`}
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
            <div className="field">
              <label className="label"><font color="red">*</font>確認密碼</label>
              <div className="control">
                <input
                  className={`input registeritem ${errors.password && "is-danger"}`}
                  type="password"
                  placeholder="請再輸入一次密碼*"
                  name="password_repeat"
                  {...register("password_repeat", {
                    validate: (value) =>
                      value === password.current || "The passwords do not match",
                  })}
                />
                {errors.password_repeat && (
                  <p className="helper has-text-danger">
                    {errors.password_repeat.message}
                  </p>
                )}
              </div>
            </div>
            <div className="control martb30px">
              <button className="loginbtn martb30px">CREATE AN ACCOUNT</button>
            </div>
          </form>
        </div>
      </div>

    </Layout>
  )
}

