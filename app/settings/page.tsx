'use client'
import { getCurrentUser, updateUser } from "../data";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect } from "react";
import ErrorMessages from "../ui/errorMessages";
import { UserAuthInfo } from "../lib/definitions";
export default function Page() {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    useEffect(() => {
        async function fetchData() {
            console.log('fetchData');
            const data = await getCurrentUser();

            setValue('email', data.email);
            setValue('username', data.username);
            setValue('bio', data.bio);
            setValue('image', data.image);
        };

        fetchData();
    }, [setValue]); // setValue를 의존성 배열에 추가

    // 폼 제출 핸들러
    const onSubmit: SubmitHandler<UserAuthInfo> = async (data) => {
        console.log("onsubemt", data);
        await updateUser(data)        
    };


    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>
                        {errors && <ErrorMessages errors={errors} />}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control"
                                        type="text"
                                        placeholder="URL of profile picture"
                                        {...register("image")} />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control form-control-lg"
                                        type="text"
                                        placeholder="Your Name"
                                        {...register("username")} />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        rows={8}
                                        placeholder="Short bio about you"
                                        {...register("bio")}
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control form-control-lg"
                                        type="email"
                                        placeholder="Email"
                                        {...register("email")} />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="New Password"
                                        {...register("password")}
                                    />
                                </fieldset>
                                <button className="btn btn-lg btn-primary pull-xs-right">
                                    Update Settings</button>
                            </fieldset>
                        </form>
                        <hr />
                        <button className="btn btn-outline-danger">
                            Or click here to logout.</button>
                    </div>
                </div>
            </div>
        </div>
    )
}