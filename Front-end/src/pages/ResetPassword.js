import React, { useRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Layout from "Layout";


export default function ResetPassword(props) {
    const email = props.location.state.email;
    const [isNeedPassword, setIsNeedPassword] = useState(props.location.state.password || false);  
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm()

    const password = useRef({})
    password.current = watch("password", "")

    const onSubmit = async (data) => {
        if (isNeedPassword) {
            try {
                const { password } = data;
                const res = await axios.post("http://140.117.71.141:3001/api/checkPassword", {
                    password, email
                });
                if(res.data.length > 0){
                   setIsNeedPassword(false)
                }
            } catch (error) {
                const message = error.response.data.message;
                toast.error(message);
            }
        }
        else {
            try {
                const { password } = data;
                const res = await axios.post("http://140.117.71.141:3001/api/resetPassword", {
                    password, email
                });
                toast.success(res.data)
                // 4. 跳转到首页视图
                props.history.push("/")
            } catch (error) {
                const message = error.response.data.message;
                toast.error(message);
            }
        }
    }

    return (
        <Layout>
            <form className="w80per registerposition mart40px" onSubmit={handleSubmit(onSubmit)}>
                {isNeedPassword ? (
                    <React.Fragment>
                        <label className="fontbold">請輸入舊密碼</label>
                        <input
                            className={`loginitem h40px ${errors.password && 'is-danger'}`}
                            type="password"
                            placeholder=""
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
                            <p className="helper has-text-danger">{errors.password.message}</p>
                        )}
                        <button className="loginbtn martb30px">送出</button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <label className="fontbold">請輸入新密碼</label>
                        <input
                            className={`loginitem h40px ${errors.password && 'is-danger'}`}
                            type="password"
                            placeholder=""
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
                            <p className="helper has-text-danger">{errors.password.message}</p>
                        )}
                        <label className="fontbold">確認密碼</label>
                        <input
                            className={`loginitem h40px ${errors.password && 'is-danger'}`}
                            type="password"
                            placeholder=""
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
                        <button className="loginbtn martb30px">送出</button>
                    </React.Fragment>
                )}
            </form>
        </Layout>
    )
}

