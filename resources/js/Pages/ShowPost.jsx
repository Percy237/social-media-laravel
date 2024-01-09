import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const ShowPost = (props) => {
    console.log(props);
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Post" />
            <div className="md:flex md:justify-center md:gap-2 md:p-16">
                <div className="basis-1/3">
                    <img
                        className="w-full"
                        src={`/storage/${props.post.image}`}
                        alt="post-image"
                    />
                </div>
                <div>
                    <h1 className="text-3xl">{props.auth.user.username}</h1>
                    <h3>{props.post.caption}</h3>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default ShowPost;
