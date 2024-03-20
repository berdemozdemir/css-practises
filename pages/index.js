import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen justify-center items-center">
      <div className="p-4 flex flex-col gap-4">
        <Link
          href="/email-subscribe"
          className="hover:underline hover:text-blue-500"
        >
          Email Subscribe
        </Link>

        <Link
          href="/pricing-grids"
          className="hover:underline hover:text-blue-500 text-left"
        >
          Pricing-Grids
        </Link>

        <Link
          href="/product-modal"
          className="hover:underline hover:text-blue-500 text-left"
        >
          Product-Modal
        </Link>

        <Link
          href="/image-gallery"
          className="hover:underline hover:text-blue-500 text-left"
        >
          Image Gallery
        </Link>

        <Link
          href="/login-modal"
          className="hover:underline hover:text-blue-500 text-left"
        >
          Login Modal
        </Link>
      </div>
    </main>
  );
}
