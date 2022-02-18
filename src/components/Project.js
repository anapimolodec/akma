import * from "react";

const Project = ({number}) => {
	return (
		<div>
			<img alt = {`photo ${number}`} src ={`https://robohash.org/${number}`} />
		</div>
	);
}

export default Project;