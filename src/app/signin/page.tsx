"use client"

import React from "react";
import cn from "classnames";
import styles from "./signin.module.sass";
import TextInput from "../../components/TextInput";
import Image from "../../components/Image";
import {use100vh} from "@/core/hooks/use-100vh";
import Link from "next/link";

const SignIn = () => {
    const heightWindow = use100vh();

    return (
        <div className={styles.login} style={{minHeight: heightWindow ?? 0}}>
            <div className={styles.wrapper}>
                <Link className={styles.logo} href="/">
                    <Image
                        className={styles.pic}
                        src="/android-icon-192x192.png"
                        srcDark="/android-icon-192x192.png"
                        alt="Core"
                    />
                </Link>
                <div className={cn("h2", styles.title)}>Sign in</div>
                <div className={styles.head}>
                    <div className={styles.subtitle}>Sign up with Open account</div>
                    <div className={styles.btns}>
                        <button className={cn("button-stroke", styles.button)}>
                            <Image
                                className={styles.pic}
                                src="/images/google.svg"
                                srcDark="/images/google.svg"
                                alt="Google"
                            />
                            Google
                        </button>
                        <button className={cn("button-stroke", styles.button)}>
                            <Image
                                className={"mr-1"}
                                src="/images/apple-dark.svg"
                                srcDark="/images/apple-light.svg"
                                alt="Apple"
                            />
                            Apple ID
                        </button>
                    </div>
                    <div className={"w-full mt-2"}>
                        <button className={"button-stroke w-full px-[16px]"}>
                            <Image
                                className={"w-6 mr-[10px] fill-white"}
                                src="/images/safari-pinned-tab.svg"
                                srcDark="/images/safari-pinned-tab.svg"
                                alt="Apple"
                            />
                            Verify with World ID
                        </button>
                    </div>
                </div>
                <div className={styles.body}>
                    <div className={styles.subtitle}>Or continue with email address</div>
                    <TextInput
                        className={styles.field}
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        icon="mail"
                    />
                    <TextInput
                        className={styles.field}
                        name="password"
                        type="password"
                        placeholder="Password"
                        required
                        icon="lock"
                    />
                    <button className={cn("button", styles.button)}>Sign in</button>
                    <div className={styles.info}>
                        Don’t have an account?{" "}
                        <Link className={styles.link} href="/sign-up">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
