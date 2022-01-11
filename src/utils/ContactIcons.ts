import { contactAssets } from '../assets/Contact';
import type { ContactIconTypes } from '../interfaces/ContactIconTypes';

export const contactIcons = <ContactIconTypes>[
	{ src: contactAssets.github, alt: 'GitHub', link: 'https://github.com/kevkanae' },
	{
		src: contactAssets.linkedin,
		alt: 'LinkedIn',
		link: 'https://www.linkedin.com/in/kevkanae/'
	},
	{ src: contactAssets.gmail, alt: 'Email', link: 'mailto:kevkanae777@gmail.com' },
	{
		src: contactAssets.twitter,
		alt: 'Twitter',
		link: 'https://twitter.com/kevkanae'
	}
];
