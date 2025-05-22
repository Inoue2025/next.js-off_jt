import { LinkButton } from "./components/LinkButton";

export default function Page() {
	const now = new Date();
	const dateString = now.toLocaleDateString("ja-JP");

	return (
		<div className="text-center mt-60 text-3xl">
			<p>きょうは{dateString}です</p>
			<h1>やあ！きょうも一日頑張ろうね！！</h1>
			<LinkButton />
		</div>
	);
}
