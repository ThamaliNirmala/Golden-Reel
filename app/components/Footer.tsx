export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-900 rounded-none shadow-sm">
      <div className="w-full max-w-screen-xl mx-auto p-4 flex justify-center items-center">
        <span className="text-sm text-gray-400 text-center">
          © {new Date().getFullYear()}{" "}
          <a
            href="https://flowbite.com/"
            className="hover:underline text-white"
          >
            Golden Reel™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
