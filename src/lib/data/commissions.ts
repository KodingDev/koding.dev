import Ally2Main from '$assets/commissions/ally/2/main.png';
import Alpha1Background from '$assets/commissions/alpha/1/background.png';
import Alpha1Main from '$assets/commissions/alpha/1/main.png';
import Amber1Main from '$assets/commissions/amber/1/main.jpg';
import Amber2Main from '$assets/commissions/amber/2/main.png';
import Amber3Main from '$assets/commissions/amber/3/main.png';
import Amiee2Main from '$assets/commissions/amiee/2/main.png';
import Andredan1Main from '$assets/commissions/andredan/1/main.png';
import Andredan1Paper from '$assets/commissions/andredan/1/paper.jpg';
import Charwiewie1Main from '$assets/commissions/charwiewie/1/main.png';
import Hanako1Background from '$assets/commissions/hanako/1/background.png';
import Hiss1Main from '$assets/commissions/hiss/1/main.jpg';
import Kinneticto1Main from '$assets/commissions/kinneticto/1/main.png';
import Livillon1Set1 from '$assets/commissions/livillon/1/1.png';
import Livillon1Set2 from '$assets/commissions/livillon/1/2.png';
import Midge1Main from '$assets/commissions/midge/1/main.png';
import Peachy1Banner from '$assets/commissions/peachy/1/banner.png';
import Peachy1Main from '$assets/commissions/peachy/1/main.png';
import Siomi1Main from '$assets/commissions/siomi/1/main.png';
import Siomi1NoWings from '$assets/commissions/siomi/1/no-wings.png';
import Siomi2Main from '$assets/commissions/siomi/2/main.png';
import Sophie1Main from '$assets/commissions/sophie/1/main.png';
import Tof3Banner from '$assets/commissions/tof/3/banner.png';
import Tof3Main from '$assets/commissions/tof/3/main.png';
import Tutta1Main from '$assets/commissions/tutta/1/main.png';

export type ImageData =
	| {
			src: string;
			text?: string;
			mode?: 'expanded' | 'full';
	  }
	| string;

export const getURL = (data: ImageData) => (typeof data === 'string' ? data : data.src);
export const getText = (data: ImageData) => (typeof data === 'string' ? undefined : data.text);

export interface CommissionData {
	images: ImageData[];

	title: string;
	description?: string;
	slug?: string;

	layout?: 'horizontal' | 'vertical';
	artist: ArtistData;

	links?: {
		text: string;
		href: string;
	}[];

	hidden?: boolean;
}

export interface ArtistData {
	name: string;
	link?: string;
	icon?: string;
}

/*
 * Actual data starts here
 * TODO: Format this nicer
 */

export const artists: Record<string, ArtistData> = {
	Ally: {
		name: 'Ally'
	},
	Alpha: {
		name: 'Alpha',
		link: 'https://twitter.com/Alphiixy',
		icon: 'https://pbs.twimg.com/profile_images/1460306089782779920/4O0AIGA__400x400.jpg'
	},
	Amber: {
		name: 'Amber',
		link: 'https://twitter.com/FCLmao',
		icon: 'https://pbs.twimg.com/profile_images/1536432565665554435/zfMmoy5d_400x400.jpg'
	},
	Amiee: {
		name: 'Amiee',
		link: 'https://twitter.com/solarcello',
		icon: 'https://pbs.twimg.com/profile_images/1476686341089988608/33vYvnW1_400x400.jpg'
	},
	Andredan: {
		name: 'Andredan',
		link: 'https://twitter.com/andredan_art',
		icon: 'https://pbs.twimg.com/profile_images/1587270553685082112/x8Bwpt2k_400x400.jpg'
	},
	Charwiewie: {
		name: 'Charwiewie',
		link: 'https://twitter.com/charwiewie',
		icon: 'https://pbs.twimg.com/profile_images/1591952966721933312/0ITY9Rqc_400x400.jpg'
	},
	Hanako: {
		name: 'Hanako',
		link: 'https://twitter.com/hanakosart',
		icon: 'https://pbs.twimg.com/profile_images/1593057679458848768/xKNnK3qS_400x400.jpg'
	},
	Hiss: {
		name: 'Hiss'
	},
	Kinneticto: {
		name: 'Kinneticto',
		link: 'https://twitter.com/kinneticto',
		icon: 'https://pbs.twimg.com/profile_images/1591496559287410688/QmCiXn-Z_400x400.jpg'
	},
	Livillon: {
		name: 'Livillon',
		link: 'https://twitter.com/Livillon',
		icon: 'https://pbs.twimg.com/profile_images/1597049619317460993/-7SAlVoa_400x400.jpg'
	},
	Midge: {
		name: 'Midge',
		link: 'https://twitter.com/midgitea',
		icon: 'https://pbs.twimg.com/profile_images/1409995203075883012/oUZmNSMV_400x400.jpg'
	},
	Peachy: {
		name: 'Peachy',
		link: 'https://twitter.com/peachy3334',
		icon: 'https://pbs.twimg.com/profile_images/1519794144897830913/_NEuH92D_400x400.jpg'
	},
	Siomi: {
		name: 'Siomi',
		link: 'https://twitter.com/Siomi995',
		icon: 'https://pbs.twimg.com/profile_images/1541309560123576320/ffyQJFcI_400x400.jpg'
	},
	Sophie: {
		name: 'Sophie',
		icon: 'https://cdn.discordapp.com/avatars/586630489851559936/322bfa15f8052ddf3aac18c70d3a9ae2.png?size=128'
	},
	Tof: {
		name: 'Tof',
		link: 'https://twitter.com/tofffxx_',
		icon: 'https://pbs.twimg.com/profile_images/1522059822086115328/JwMLC6TY_400x400.jpg'
	},
	Tutta: {
		name: 'Tutta',
		link: 'https://twitter.com/MrsTDraw',
		icon: 'https://pbs.twimg.com/profile_images/1375232771019390987/zgY9pcVJ_400x400.jpg'
	}
};

export const pinned: CommissionData = {
	images: [Amber2Main],
	title: 'Reference Sheet',
	description: 'A reference sheet for my character, Stella!',
	slug: 'ref',
	artist: artists.Amber
};

export const commissions: CommissionData[] = [
	{ ...pinned, hidden: true },
	{
		images: [Amber3Main],
		title: 'Amber: Commission 3',
		slug: 'amber-3',
		artist: artists.Amber
	},
	{
		images: [
			{ src: Livillon1Set1, text: 'Set 1' },
			{ src: Livillon1Set2, text: 'Set 2' }
		],
		title: 'Livillon: Commission 1',
		slug: 'livillon-1',
		artist: artists.Livillon,
		links: [
			{
				text: 'Set 1',
				href: 'https://twitter.com/Livillon/status/1534973612695900174'
			},
			{
				text: 'Set 2',
				href: 'https://twitter.com/Livillon/status/1550148606790868992'
			}
		]
	},
	{
		images: [Hiss1Main],
		title: 'Hiss: Commission 1',
		slug: 'hiss-1',
		artist: artists.Hiss
	},
	{
		images: [{ src: Hanako1Background, text: 'Background' }],
		title: 'Hanako: Commission 1',
		slug: 'hanako-1',
		artist: artists.Hanako,
		links: [
			{
				text: 'WIP Tweet',
				href: 'https://twitter.com/hanakosart/status/1480870896973737984'
			}
		]
	},
	{
		images: [Andredan1Main, { src: Andredan1Paper, text: 'Sketch on paper' }],
		title: 'Andredan: Commission 1',
		slug: 'andredan-1',
		artist: artists.Andredan,
		links: [
			{
				text: 'Finished Tweet',
				href: 'https://twitter.com/andredan_art/status/1497230139029086208'
			}
		]
	},
	{
		images: [Siomi2Main],
		title: 'Siomi: Commission 2',
		slug: 'siomi-2',
		artist: artists.Siomi,
		links: [
			{
				text: 'Finished Tweet',
				href: 'https://twitter.com/Siomi995/status/1444960165158014979'
			}
		]
	},
	{
		images: [Amber1Main],
		title: 'Amber: Commission 1',
		slug: 'amber-1',
		artist: artists.Amber
	},
	{
		images: [Kinneticto1Main],
		title: 'Kinneticto: Commission 1',
		slug: 'kinneticto-1',
		artist: artists.Kinneticto
	},
	{
		images: [Peachy1Main, { src: Peachy1Banner, text: 'Banner crop', mode: 'expanded' }],
		title: 'Peachy: Commission 1',
		slug: 'peachy-1',
		artist: artists.Peachy
	},
	{
		images: [Siomi1Main, { src: Siomi1NoWings, text: 'No Wings' }],
		title: 'Siomi: Commission 1',
		slug: 'siomi-1',
		artist: artists.Siomi,
		links: [
			{
				text: 'Finished Tweet',
				href: 'https://twitter.com/Siomi995/status/1413732087144673284'
			}
		]
	},
	{
		images: [{ src: Amiee2Main, mode: 'full' }],
		title: 'Amiee: Commission 2',
		slug: 'amiee-2',
		artist: artists.Amiee
	},
	{
		images: [Charwiewie1Main],
		title: 'Charwiewie: Commission 1',
		slug: 'charwiewie-1',
		artist: artists.Charwiewie
	},
	{
		images: [Alpha1Main, { src: Alpha1Background, text: 'Background' }],
		title: 'Alpha: Commission 1',
		slug: 'alpha-1',
		artist: artists.Alpha,
		links: [
			{
				text: 'Finished Tweet',
				href: 'https://twitter.com/Alphiixy/status/1382542828924936193'
			}
		]
	},
	{
		images: [Sophie1Main],
		title: 'Sophie: Commission 1',
		slug: 'sophie-1',
		artist: artists.Sophie
	},
	{
		images: [Ally2Main],
		title: 'Ally: Commission 2',
		slug: 'ally-2',
		artist: artists.Ally
	},
	{
		images: [Tof3Main, { src: Tof3Banner, text: 'Twitter Banner', mode: 'expanded' }],
		title: 'Tof: Commission 3',
		slug: 'tof-3',
		artist: artists.Tof
	},
	{
		images: [Tutta1Main],
		title: 'Tutta: Commission 1',
		slug: 'tutta-1',
		artist: artists.Tutta
	},
	{
		images: [Midge1Main],
		title: 'Midge: Commission 1',
		slug: 'midge-1',
		artist: artists.Midge
	}
];
