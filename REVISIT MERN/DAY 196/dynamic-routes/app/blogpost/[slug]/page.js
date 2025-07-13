export default function Page({ params }) {
    let languages = ['javaScript', 'python', 'java', 'c++'];
    if (languages.includes(params.slug)) {
        return (
            <div className="flex items-center justify-center min-h-screen text-lg font-semibold">
                Blog post: {params.slug}
            </div>
        );
    }
    else {
        return <div className="text-red-500">Blog post not found</div>;

    }
    return (
        <div className="flex items-center justify-center min-h-screen  text-lg font-semibold">
            Blog post: {params.slug}
        </div>
    )
}