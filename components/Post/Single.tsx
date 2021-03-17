import React from "react";
import Header from "../Header/Header";
import { SEOBlock, seoBlockQuery } from "../../common/types/SEOBlock";
import { MenuMap } from "../../common/types/Menu";

export interface PostSingleQuery {
	title: string;
	excerpt?: string;
	content?: string;
	modified: string;
	seo: SEOBlock;
	categories?: {
		nodes: {
			uri: string;
			name: string;
		}[]
	}
	featuredImage?: {
		node: {
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			}
		}
	}
}


interface PostSingleProps {
	post: PostSingleQuery;
	menus: MenuMap
	uri: string;
}

const PostSingle: React.FC<PostSingleProps> = ({
	post,
	menus,
	uri,
}) => {
	return <>
		<Header menu={menus["MAIN_MENU"]} uri={uri} />
		<article>
			<h1>{post.title}</h1>
			{post.excerpt ? <div dangerouslySetInnerHTML={{ __html: post.excerpt }}></div> : null}
			{post.content ? <div dangerouslySetInnerHTML={{ __html: post.content }}></div> : null}
		</article>
	</>
}

export default PostSingle;
