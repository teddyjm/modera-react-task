import axios from 'axios';

export class TvMazeApi {
	axiosClient = axios.create();

	Search = async (query) => {
		let url = `http://api.tvmaze.com/search/shows?q=${query}`;

		let response = await this.axiosClient.get(url);

		return response.data;
	}
}

export default TvMazeApi;