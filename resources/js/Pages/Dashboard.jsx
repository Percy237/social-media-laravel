import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard(props) {
    console.log(props);
    let numberOfPosts = Object.keys(props.user.posts).length;

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Profile" />

            <div className="max-w-[935px]  mx-auto mb-[30px] p-5">
                <header className="md:flex md:justify-center lg:flex lg:justify-center xl:flex xl:justify-center">
                    <div className="md:flex md:flex-col">
                        <div className="pt-3">
                            <strong>{numberOfPosts}</strong> posts
                        </div>
                        <div className="pt-3">
                        <strong>23K</strong> followers
                        </div>
                        <div className="pt-3">
                            <strong>212</strong> following
                        </div>
                        <a href="/p/create" className="cursor-pointer pt-3">
                            <button className=" text-purple-500">
                                Add new post
                            </button>
                        </a>
                    </div>
                    <div className="pl-20 pr-20 md:flex md:flex-col md:justify-center md:items-center">
                        <img
                            src="https://th.bing.com/th/id/OIP.0p1XlN6XGsRoea__dKlrswHaJQ?w=195&h=244&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt="profile-photo"
                            className="rounded-full h-[200px] w-[200px] object-cover"
                        />
                        <h1 className="text-3xl pt-1 font-medium italic">
                            {props.user.username}
                        </h1>
                        <div className="flex gap-2 pt-1">
                            <button className="p-2 w-[100px] bg-purple-500 text-white rounded-md">
                                Follow
                            </button>
                            <button className="p-2 w-[100px] bg-purple-500 text-white rounded-md">
                                Message
                            </button>
                        </div>
                    </div>
                    <div className="md:flex md:flex-col ">
                        <h3 className="font-bold pt-3">
                            {props.user?.profile?.title
                                ? props.user.profile.title
                                : "Nothing"}
                        </h3>
                        <div className="pt-3">
                            {props.user?.profile?.description
                                ? props.user.profile.description
                                : "Nothing"}
                        </div>
                        <div className="pt-3">
                            <a
                                className="cursor-pointer text-blue-400"
                                href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Foliviarodrigo&e=AT0EOrKwIYYDRkxYgpKGsZt7iaBsQ9CN9U5x0nX93Cg7hGIihGx3JpWgm-HEqKfb2kbs1iyE9SzhrzVImvzcutOIAv6GxzLC"
                            >
                                {props.user?.profile?.url
                                    ? props.user.profile.url
                                    : "Nothing"}
                            </a>
                        </div>
                        <a
                            href={`/profile/${props.user.id}/edit`}
                            className="cursor-pointer pt-3"
                        >
                            <button className="text-purple-500">
                                Edit profile
                            </button>
                        </a>
                    </div>
                </header>
                <div className="flex flex-row pt-10">
                    <div className="columns-3">
                        {props.user.posts.map((post) => (
                            <Link
                                key={post.id}
                                href={route("post.show", {
                                    post: post.id,
                                })}
                            >
                                <img
                                    className="pb-4"
                                    src={`/storage/${post.image}`}
                                    alt="post-image"
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
