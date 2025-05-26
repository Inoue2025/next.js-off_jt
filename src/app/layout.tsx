import "./globals.css";
import Link from "next/link";

export const metadata = {
	title: "こんにちは",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body className="flex flex-col min-h-screen">
				<header className="bg-gray-200 text-center p-4">
					<nav>
						<ul>
							<li>
								<Link href="/">home</Link>
							</li>
							<li>
								<Link href="/top">top</Link>
							</li>
							<li>
								<Link href="/list">list</Link>
							</li>
						</ul>
					</nav>
				</header>

				<main className="flex-1 p-4">{children}</main>

				<footer className="bg-gray-200 text-center p-4">
					<p>©2025 My Memo App</p>
				</footer>
			</body>
		</html>
	);
}
