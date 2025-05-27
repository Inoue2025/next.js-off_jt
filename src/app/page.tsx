import { LinkButton } from "./components/LinkButton";

export default function Page() {
	const now = new Date();
	const dateString = now.toLocaleDateString("ja-JP");

	return (
		<main>
			<div className="text-center mt-60 text-3xl">
				<h1>きょうは{dateString}です</h1>
				<p>やあ！きょうも一日頑張ろうね！！</p>
				<LinkButton />
			</div>
		</main>
	);
}
