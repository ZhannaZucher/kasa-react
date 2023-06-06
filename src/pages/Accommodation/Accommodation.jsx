import { useParams } from "react-router-dom"


export default function Accommodation() {
	const params = useParams()
	console.log(params)
	return (
		<h1>Accommodation page</h1>
	)
}