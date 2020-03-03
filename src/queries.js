import gql from "graphql-tag";

export const HOME_PAGE = gql`
	query {
		movies(limit: 50, rating: 7) {
			id
			title
			rating
		}
	}
`;

// export const HOME_PAGE = gql`
// 	query movies($limit: number, $rating: number) {
// 		movies(limit: $limit, rating: $rating) {
// 			id
// 			title
// 			rating
// 		}
// 	}
// `;
