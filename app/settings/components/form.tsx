'use client';
import { getCurrentUser, updateUser } from "@/app/data";
import { UserAuthInfo } from "@/app/lib/definitions";
import ErrorMessages from "@/app/ui/errorMessages";
import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Form({info}: UserAuthInfo | any) {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    const [serverErrors, setServerErrors] = useState({ server: '' });    

    useEffect(() => {
        function fetchData() {            
            setValue('email', info.email);
            setValue('username', info.username);
            setValue('bio', info.bio);
            setValue('image', info.image);
        };

        fetchData();
    }, [info, setValue]); // setValue를 의존성 배열에 추가


    // setValue를 의존성 배열에 추가

    // 폼 제출 핸들러
    const onSubmit: SubmitHandler<UserAuthInfo> = async (data) => {
        console.log("onsubemt", data);
        const res = await updateUser(data)
        if (res === undefined) {
            setServerErrors({ server: 'There was a problem' });
        } else {
            alert("success");
        }
    };

    return (<>
        {(errors || serverErrors) && <ErrorMessages errors={errors} />}
        <form
            onSubmit={handleSubmit(onSubmit)}>
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
    </>
    )
}