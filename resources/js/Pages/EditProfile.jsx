import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

const ShowPost = (props) => {
    console.log(props);
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        title: props.user?.profile?.title || "",
        description: props.user?.profile?.description || "",
        url: props.user?.profile?.url || "",
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
        patch(route("profile.update", { user: props.user.id }));
    };
    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Edit Profile" />
            <div className="flex justify-center items-center mt-16">
                <div>
                    <h1 className="text-3xl">Edit Profile</h1>
                    <form
                        className="md:mt-3 md:w-[500px] lg:mt-3 lg:w-[500px]"
                        onSubmit={submit}
                        action={`/profile/${props.user.id}`}
                        method="patch"
                        encType="multipart/form-data"
                    >
                        <div className="mt-4">
                            <InputLabel htmlFor="" value="Title" />

                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-full"
                                autoComplete="title"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.title}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="bio" value="Bio" />

                            <TextInput
                                id="description"
                                name="description"
                                value={data.description}
                                className="mt-1 block w-full"
                                autoComplete="bio"
                                isFocused={true}
                                onChange={handleOnChange}
                            />
                            <InputError
                                message={errors.description}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="url" value="Your website" />

                            <TextInput
                                id="url"
                                name="url"
                                value={data.url}
                                className="mt-1 block w-full"
                                autoComplete="bio"
                                isFocused={true}
                                onChange={handleOnChange}
                            />

                            <InputError message={errors.url} className="mt-2" />
                        </div>
                        {/* <div className="mt-4">
                            <InputLabel htmlFor="image" value="Profile image" />

                            <TextInput
                                id="image"
                                name="image"
                                type="file"
                                className="mt-1 block w-full"
                                onChange={handleOnChange}
                            />

                            <InputError
                                message={errors.image}
                                className="mt-2"
                            />
                        </div> */}

                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Save Profile
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
export default ShowPost;
