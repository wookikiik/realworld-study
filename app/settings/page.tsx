'use client'
import { getCurrentUser } from "../login/data";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
export default function Page() {

    const { register, handleSubmit, setValue } = useForm();

    useEffect(() => {
        async function fetchData() {
            console.log('fetchData');
            const response = await getCurrentUser();
            console.log('response', response);
            // const data = await response.json();

            // setValue('email', data?.email);
            // setValue('username', data?.username);
            // setValue('bio', data?.bio);
            // setValue('image', data.image);
        };

        fetchData();
    }, [setValue]); // setValue를 의존성 배열에 추가

    // 폼 제출 핸들러
    const onSubmit = (data: any) => console.log(data);


    return (
        <div className="settings-page">
            <div className="container page">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xs-12">
                        <h1 className="text-xs-center">Your Settings</h1>

                        <ul className="error-messages">
                            <li>That name is required</li>
                        </ul>

                        <form>
                            <fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control" type="text" placeholder="URL of profile picture" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control form-control-lg" type="text" placeholder="Your Name" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <textarea
                                        className="form-control form-control-lg"
                                        rows={8}
                                        placeholder="Short bio about you"
                                    ></textarea>
                                </fieldset>
                                <fieldset className="form-group">
                                    <input className="form-control form-control-lg" type="text" placeholder="Email" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <input
                                        className="form-control form-control-lg"
                                        type="password"
                                        placeholder="New Password"
                                    />
                                </fieldset>
                                <button className="btn btn-lg btn-primary pull-xs-right">Update Settings</button>
                            </fieldset>
                        </form>
                        <hr />
                        <button className="btn btn-outline-danger">Or click here to logout.</button>
                    </div>
                </div>
            </div>
        </div>
    )
}