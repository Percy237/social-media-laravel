import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

const CreatePost = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        caption: "",
        image: "",
    });

    const handleOnChange = (event) => {
        const value =
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value;
        setData(event.target.name, value);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route("p"));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Create Post" />
            <h1 className="text-3xl">Add New Post</h1>
            <form
                onSubmit={submit}
                action="/p"
                method="post"
                encType="multipart/form-data"
            >
                <div>
                    <InputLabel htmlFor="caption" value="Post Caption" />

                    <TextInput
                        id="caption"
                        name="caption"
                        value={data.caption}
                        className="mt-1 block w-full"
                        autoComplete="caption"
                        isFocused={true}
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.caption} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="image" value="Post image" />

                    <TextInput
                        id="image"
                        name="image"
                        type="file"
                        className="mt-1 block w-full"
                        onChange={handleOnChange}
                    />

                    <InputError message={errors.image} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Add new post
                    </PrimaryButton>
                </div>
            </form>
        </AuthenticatedLayout>
    );
};

export default CreatePost;
