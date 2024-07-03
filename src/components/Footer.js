import { Link } from "react-router-dom"

export const Footer = () => {
  return (
	<footer className="bg-white shadow border-t border-gray-200 dark:border-gray-700  dark:bg-gray-800">
		<div className="w-full max-w-screen-xl p-8 md:flex md:items-center md:justify-between">
		<span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
		</span>
		<ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
			<li>
				<a href="https://www.instagram.com/dheer_jay?igsh=MTVqZzdmOHlvaWtxMg==" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagram</a>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/thilina-jayasinghe-43a4a5292" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
			</li>
			<li>
				<a href="https://github.com/coding-genius01" target="_blank" className="hover:underline">GitHub</a>
			</li>
		</ul>
		</div>
	</footer>
  )
}
