/**
 * v0 by Vercel.
 * @see https://v0.dev/t/6XPnqcEHk9o
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";

export default function Component() {
  return (
    <header className="h-[100px] bg-green-800 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex w-20 items-center">
          <img
            src="https://insightpestcanada.com/wp-content/uploads/2023/04/insight-canada-logo.png"
            alt="Logo"
            className="h-8 w-auto"
          />
        </div>
        <div className="flex w-full !max-w-[100px] justify-between">
          <div>Shick</div>
          <div>Schack</div>
          <div>Shouck</div>
        </div>
        <div></div>
      </div>
    </header>
  );
}
