import { projectAssets } from '../assets/Project';
import type { ProjectListType } from '../interfaces/ProjectListTypes';

export const projectList: ProjectListType = [
	{
		name: 'Havo | Weather App',
		github: 'https://github.com/kevkanae/havo-weather-app',
		link: 'https://havo-weather-app.vercel.app/',
		src: projectAssets.havo,
		tech: [projectAssets.react, projectAssets.next, projectAssets.ts, projectAssets.sass],
		desc: 'Sleek Weather Dashboard'
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
		desc: 'Safe & Fun Public Chat Room'
	},
	{
		name: 'Anzen Pay | Payment UI',
		github: 'https://github.com/kevkanae/anzen-pay',
		link: 'https://anzen-pay.vercel.app/',
		src: projectAssets.anzen,
		tech: [projectAssets.react, projectAssets.next, projectAssets.ts, projectAssets.sass],
		desc: 'Aesthetic Payment UI'
	}
];
