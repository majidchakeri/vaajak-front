"use client";

import React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import { GetCookie, SetCookie } from "@/helpers/manageCookie";
import { Cookie } from "@/utils/types/helpers-types";
import { LoginForm } from "@/utils/types/auth-types";
import api from "@/helpers/apiMethods";
import { useAppSelector, useAppDispatch, useAppStore } from "@/utils/hooks/reduxHooks";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "@/app/globals.css";

import AuthLayout from "../layout";
import resources from "@/utils/const/resources";
import { updateUser } from "@/lib/features/login/loginSlice";
// import { AppDispatch, RootState } from "@/lib/store";
import ButtonMain from "@/components/ui-components/button/button";
import * as Yup from "yup";

import Logo from "@/../public/AlisEn.png";
import aliss from "../../../public/pictures/Al_iss.png";
import loginLogo from "../../../public/pictures/loginLogo.png";
import background from "../../../public/pictures/signinBackground.jpeg";
import Input from "@/components/ui-components/input/input";

const Login = () => {
	const router = useRouter();

	const store = useAppStore();
	const users = useAppSelector((state) => state.users.user);
	const dispatch = useAppDispatch();

	const initialState = {};
	const [state, setState] = useState(initialState);
	const regex = /((0)(9){1}((0)|(1)|(3)|(9)|(2)){1}[0-9]{8})/;

	const validateYupSchema = Yup.object().shape({
		phoneNumber: Yup.string()
			// .matches(regex, `${resources.yup.phonNumberCount}`)
			.max(11, `${resources.yup.phonNumberCount}`)
			.required(`${resources.yup.numberrequire}`),
		password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validateYupSchema),
	});

	const onSubmit: SubmitHandler<LoginForm> = (formData, event) => {
		api.auth
			.signin(formData)
			.then((res) => {
				console.log("res res login login ======", res);
				let userId: string = res.userId;
				const cookie: Cookie = {
					name: "token",
					value: JSON.stringify(res.token),
					domain: "example.com",
					days: 7,
				};
				const confirmStatus: Cookie = {
					name: "status",
					value: JSON.stringify(res.confirmStatus),
					domain: "example.com",
					days: 7,
				};
				SetCookie(cookie);
				SetCookie(confirmStatus);
				setState((prevState) => ({ ...prevState, submitting: false }));
				// setSubmitting(false);

				dispatch(updateUser(userId));

				router.push("/");
			})
			.catch(() => {
				setState((prevState) => ({ ...prevState, submitting: false }));
			});
	};
	const route = useRouter();
	const currentRoute = route.pathname;
	return (
		<div className="flex bg-loginBackground bg-no-repeat bg-cover bg-center	 bg-white justify-center items-center sm:items-start flex-col relative w-screen h-screen p-2 md:pr-16 pt-8">
			<AuthLayout>
				<div className="flex w-full justify-between px-10">
					<div className=" flex flex-col items-center justify-center px-6 py-6  lg:px-8 sm:mx-auto w-full rounded-3xl shadow-xl top-1/2 bg-white shrink-0 ">
						<div className="flex justify-center w-full ">
							<div className="flex justify-evenly  w-full border-b-2 ">
								<div>
									<Link href="/auth/signup">
										<p className={`py-2 px-4 ${currentRoute.endsWith("/auth/signup") ? "text-alis-blue border-b-2 border-alis-blue" : ""}`}>
											{resources.signUp}
										</p>
									</Link>
								</div>
								<div>
									<Link href={"/auth/signin"}>
										<p className={`py-2 px-4 ${currentRoute.endsWith("/auth/signin") ? "text-alis-blue border-b-2 border-alis-blue" : ""}`}>
											{resources.signIn}
										</p>
									</Link>
								</div>
							</div>
						</div>
						<div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
							{/* <Image alt="" src={Logo} /> */}
							<h3 className="sm:mt-2 md:mt-4 mt-1 text-center  leading-9">{`${resources.yup.completeTheInformations}`}</h3>
						</div>

						<div className="flex flex-col mt-2 md:mt-4 space-y-6 w-full">
							{/* <Image
            src={Logo}
            alt="alis"
            className="absolute -top-20 left-1/2 -translate-x-1/2 "
            width={200}
            /> */}
							{/* <Image src={alisChar} className="absolute -top-5 right-0 translate-x-1/2"  alt="alis"  width={200}  /> */}

							<form onSubmit={handleSubmit(onSubmit)}>
								<div>
									<label htmlFor="userNameField">{resources.username}</label>
									<input
										id="userNameField"
										{...register("phoneNumber")}
										className="mt-1 outline-none sm:mt-1 md:mt-2 lg:mt-3 w-full xl:mt-4 2xl:mt-4 h-8 sm:h-10 md:h-12  p-2  border md:border-2 rounded-lg"
									/>
									<p>{errors.phoneNumber?.message}</p>
								</div>

								<div className="md:mt-5">
									<label
										htmlFor="passwordField"
										className="py-2"
									>
										{resources.password}
									</label>
									<div className="text-label rounded-lg border">
										<Input
											type="password"
											id="passwordField"
											name="password"
											register={register}
										/>
									</div>
									{/* <input
                    id="passwordField"
                    type="password"
                    {...register("password")}
                    className="mt-1 sm:mt-1 md:mt-2 lg:mt-3 w-full xl:mt-4 2xl:mt-4 h-8 sm:h-10 md:h-12  p-2  border md:border-2 rounded-lg"
                  /> */}
									<p>{errors.password?.message}</p>
								</div>
								<div className=" md:pt-2 flex flex-col md:flex-row w-full justify-between items-baseline pt-3 ">
									<div className="mt-1 ms:mt-2 md:mt-3 lg:mt-4 ">
										<br />
										<Link href="/auth/resetPassword/changePassword">
											<p className="text-center w-full mt-1  sm:mt-2 md:mt-3 xl:mt-4">
												{resources.forget} {resources.password}
											</p>
										</Link>
									</div>
								</div>

								<div className="pt-1 md:pt-2  2xl:pt-5 w-full flex justify-center">
									<div className="w-1/2">
										<ButtonMain
											size={"full"}
											variant={"orange"}
											shape={"md"}
											disabled={false}
											type="submit"
										>
											{resources.signIn}
										</ButtonMain>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				<div className="hidden absolute md:flex justify-center h-fit w-[30%] md:left-[13vw] lg:left-[20vw]">
					<Image
						src={loginLogo}
						alt="logo"
					/>
				</div>
				<p className="pt-16 text-center alis-caption-md">{resources.allRightsReserved}</p>
			</AuthLayout>
		</div>
	);
};

export default Login;
