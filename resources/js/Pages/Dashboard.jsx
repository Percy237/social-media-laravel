import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard(props) {
    let numberOfPosts = Object.keys(props.user.posts).length;

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}>
            <Head title="Dashboard" />

            <div className="max-w-[935px]  mx-auto mb-[30px] p-5">
                <header className="flex">
                    <div className="basis-1/4 flex justify-center items-center">
                        <img
                            src="https://th.bing.com/th/id/OIP.0p1XlN6XGsRoea__dKlrswHaJQ?w=195&h=244&c=7&r=0&o=5&dpr=1.5&pid=1.7"
                            alt="profile-photo"
                            className="rounded-full h-[150px] w-[150px] object-cover"
                        />
                    </div>
                    <div className="flex-1 pt-5">
                        <div className="flex justify-between items-baseline">
                            <h1 className="text-3xl">{props.user.username}</h1>
                            <a href="/p/create" className="cursor-pointer ">
                                <button className="hover:underline">
                                    Add new post
                                </button>
                            </a>
                        </div>
                        <div className="flex pt-4">
                            <div className="pr-6">
                                <strong>{numberOfPosts}</strong> posts
                            </div>
                            <div className="pr-6">
                                <strong>23K</strong> followers
                            </div>
                            <div className="pr-6">
                                <strong>212</strong> following
                            </div>
                        </div>
                        <div className="pt-4">
                            <h3 className="font-bold">
                                {props.user.profile.title}
                            </h3>
                            <div>{props.user.profile.description}</div>
                            <div>
                                <a
                                    className="cursor-pointer text-blue-400"
                                    href="https://l.instagram.com/?u=https%3A%2F%2Flinktr.ee%2Foliviarodrigo&e=AT0EOrKwIYYDRkxYgpKGsZt7iaBsQ9CN9U5x0nX93Cg7hGIihGx3JpWgm-HEqKfb2kbs1iyE9SzhrzVImvzcutOIAv6GxzLC"
                                >
                                    {props.user.profile.url}
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="flex flex-row pt-10">
                    <div className="columns-3">
                        {props.user.posts.map((post) => (
                            <img
                                className="pb-4"
                                key={post.id}
                                src={`/storage/${post.image}`}
                                alt="post-image"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
