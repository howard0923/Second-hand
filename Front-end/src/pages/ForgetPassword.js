import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import Layout from 'Layout';


export default function ForgetPassword(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isEmail, setIsEmail] = useState(false);
  const [C_token, setC_token] = useState();
  const [tmpEmail, setTmpEmail] = useState();

  const onSubmit = async data => {
    // 3. 处理登录逻辑
    if (isEmail) {
      try {
        const { token } = data;
        if (token == C_token) {
          toast.success('認證成功，請輸入新密碼');
          // 4. 跳转到首页视图
          props.history.push({
            pathname: '/resetPassword',
            state: { email: tmpEmail }
          })
        }
        else {
          toast.error("您輸入的驗證碼不正確");
        }
      } catch (error) {
        console.log(error);
      }
    }
    else {
      try {
        const { email } = data;
        setTmpEmail(data.email);
        const res = await axios.post('http://140.117.71.141:3001/api/getToken', { email });
        setC_token(res.data);
        setIsEmail(true);
        toast.info("認證信已寄至您輸入的信箱")
      } catch (error) {
        const message = error.response.data.message;
        toast.error(message);
      }
    }
  };



  return (
    <Layout>

      <form className="w80per registerposition mart40px" onSubmit={handleSubmit(onSubmit)}>
        {isEmail ? (
          <React.Fragment>
            <label className="fontbold">verify :</label>
            <input
              className={`loginitem h40px ${errors.token && 'is-danger'}`}
              type="number"
              placeholder=""
              name="token"
              {...register('token', {
                required: 'token is required',
              })}
            />
            {
              errors.token && (
                <p className="helper has-text-danger">{errors.token.message}</p>
              )
            }
            < button className="loginbtn martb30px" > 送出</button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label className="fontbold">請輸入您的信箱:</label>
            <input
              className={`loginitem h40px ${errors.email && 'is-danger'}`}
              type="text"
              placeholder=""
              name="email"
              {...register('email', {
                required: 'email is required',
              })}
            />
            {errors.email && (
              <p className="helper has-text-danger">{errors.email.message}</p>
            )}
            <button className="loginbtn martb30px">送出</button>
          </React.Fragment>
        )
        }
      </form>

    </Layout >
  );
}