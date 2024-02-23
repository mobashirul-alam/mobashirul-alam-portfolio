import { RiCloseLine } from "@remixicon/react";

const CodeSnippet = () => {
    return (
        <div>
            <div className="border-b">
                <div className="w-64 flex justify-between items-center gap-x-3 py-3 px-4 border-r font-light">
                    <p>code-snippets</p>
                    <RiCloseLine />
                </div>
            </div>

            <div className="p-5">Code snippets</div>
        </div>
    );
};

export default CodeSnippet;
