import { RiCloseLine } from "@remixicon/react";

const CodeSnippet = () => {
    return (
        <div className="md:border-l lg:border-l-0 xl:border-l md:border-t lg:border-t-0">
            <div className="border-b border-t md:border-t-0">
                <div className="w-full md:w-64 flex justify-between items-center gap-x-3 py-3 px-4 md:border-r font-light">
                    <p>code-snippets</p>
                    <RiCloseLine />
                </div>
            </div>

            <div className="p-5">Coming soon...</div>
        </div>
    );
};

export default CodeSnippet;
