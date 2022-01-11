import { projectAssets } from '../assets/Project';
import type { ProjectListType } from '../interfaces/ProjectListTypes';

export const projectList: ProjectListType = [
	{
		name: 'Havo | Weather App',
		github: 'https://github.com/kevkanae/havo-weather-app',
		link: 'https://havo-weather-app.vercel.app/',
		src: projectAssets.havo,
		tech: [projectAssets.react, projectAssets.next, projectAssets.ts, projectAssets.sass],
		desc: 'Sleek Weather Dashboard',
		svg: '/cards/A.svg'
	},
	{
		name: 'Cynefin | Chat App',
		github: 'https://github.com/kevkanae/Chat-App',
		link: 'http://cynefin.vercel.app/',
		src: projectAssets.cynefin,
		tech: [
			projectAssets.react,
			projectAssets.next,
			projectAssets.firebase,
			projectAssets.ts,
			projectAssets.sass
		],
		desc: 'Safe & Fun Public Chat Room',
		svg: '/cards/B.svg'
	},
	{
		name: 'Anzen Pay | Payment UI',
		github: 'https://github.com/kevkanae/anzen-pay',
		link: 'https://anzen-pay.vercel.app/',
		src: projectAssets.anzen,
		tech: [projectAssets.react, projectAssets.next, projectAssets.ts, projectAssets.sass],
		desc: 'Aesthetic Payment UI',
		svg: '/cards/C.svg'
	},
	{
		name: 'BloggerX',
		github: 'https://github.com/kevkanae/BloggerWeb',
		link: 'http://blogger-web.vercel.app/',
		src: projectAssets.blog,
		tech: [
			projectAssets.react,
			projectAssets.next,
			projectAssets.ts,
			projectAssets.mongo,
			projectAssets.sass
		],
		desc: 'Research Paper Blogsite with a Serverless Backend',
		svg: '/cards/D.svg'
	}
];
