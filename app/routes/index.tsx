import { createRoute } from "honox/factory";
import { Name } from "../application";

export default createRoute((c) =>
	c.render(
		<>
			<Hero />
			<Services />
			<Supporters />
		</>,
		{
			route: "",
			description: "Tapera tapi jelek!",
			og: {
				title: Name,
				description: true,
				image: "/static/apple-touch-icon.png",
			},
		},
	),
);

const Hero = () => (
	<div id="hero" class="hero min-h-[calc(100vh-68px)] bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<p class="text-xl">
					Setiap orang berhak hidup sejahtera lahir dan batin, bertempat
					tinggal, dan mendapatkan lingkungan hidup yang baik dan sehat serta
					berhak memperoleh pelayanan kesehatan.
				</p>
				<p class="pt-4 font-title text-sm">Pasal 28H ayat (1) — UUD 1945</p>
				<a href="#" class="m-4 btn btn-primary">
					Info Lebih Lanjut
				</a>
			</div>
		</div>
	</div>
);

const Services = () => (
	<div id="services" class="m-4">
		<h2 class="p-10 text-4xl font-title text-center">Program</h2>
		<div class="flex flex-row flex-wrap">
			<ServiceCard
				href="#"
				icon="&#xe2eb;"
				title={`KPR ${Name}`}
				description="Program pembiayaan kepemilikan rumah pertama"
			/>
			<ServiceCard
				href="#"
				icon="&#xf100;"
				title={`KRR ${Name}`}
				description="Program pembiayaan perbaikan rumah pertama"
			/>
			<ServiceCard
				href="#"
				icon="&#xf14d;"
				title={`KBR ${Name}`}
				description="Program pembiayaan rumah pertama di atas tanah pribadi"
			/>
			<ServiceCard
				href="#"
				icon="&#xe73a;"
				title="KPR PLPP"
				description="Program pembiayaan kepemilikan rumah bagi masyarakat non-ASN"
			/>
		</div>
	</div>
);

type ServiceCardProp = {
	href: string;
	icon: string;
	title: string;
	description: string;
};

const ServiceCard = ({ href, icon, title, description }: ServiceCardProp) => (
	<a
		href={href}
		class="card flex-auto w-64 m-4 bg-base-100 shadow-lg hover:shadow-xl hover:bg-primary hover:text-primary-content transition-all"
	>
		<figure class="px-10 pt-10 material-symbols-outlined font-variation-fill">
			<span class="text-5xl font-variation-grade-200 align-middle">{icon}</span>
		</figure>
		<div class="card-body items-center text-center">
			<h2 class="card-title font-title">{title}</h2>
			<p>{description}</p>
		</div>
	</a>
);

const Supporters = () => (
	<div id="supporters">
		<h2 class="p-10 text-4xl font-title text-center">Pendukung</h2>
		<div class="divider py-4 font-title">Inspirasi</div>
		<SupporterList
			size="h-[36rem]"
			list={[
				{
					href: "https://www.facebook.com/groups/programmerhandal",
					src: "/static/supports/imphnen.png",
					alt: "Ingin Menjadi Programmer Handal Namun Enggan Ngoding",
				},
			]}
		/>
		<div class="divider py-4 font-title">Teknologi</div>
		<SupporterList
			size="h-36"
			list={[
				{
					href: "https://hono.dev/",
					src: "/static/supports/Hono.png",
					alt: "Hono",
				},
				{
					href: "https://tailwindcss.dev/",
					src: "/static/supports/Tailwindcss6.png",
					alt: "Tailwind",
				},
				{
					href: "https://vitejs.dev/",
					src: "/static/supports/Vite.png",
					alt: "Vite",
				},
			]}
		/>
		<div class="divider py-4 font-title">Kerangka</div>
		<SupporterList
			size="h-24"
			list={[
				{
					href: "https://bun.sh/",
					src: "/static/supports/BunLogo.png",
					alt: "Bun",
				},
				{
					href: "https://www.typescriptlang.org/",
					src: "/static/supports/TypeScript.png",
					alt: "TypeScript",
				},
				{
					href: "https://react.dev/",
					src: "/static/supports/React.png",
					alt: "React",
				},
				{
					href: "https://github.com/",
					src: "/static/supports/GitHub.png",
					alt: "GitHub",
				},
				{
					href: "https://code.visualstudio.com/",
					src: "/static/supports/VSCode.png",
					alt: "Visual Studio Code",
				},
			]}
		/>
		<div class="divider py-4 font-title">Kredit</div>
		<ul class="w-full flex flex-row flex-wrap justify-center">
			<li>
				<a
					href="https://twitter.com/sawaratsuki1004"
					target="_blank"
					rel="noreferrer"
					class="m-4"
				>
					SAWARATSUKI
				</a>
			</li>
			<li>
				<a
					href="https://twitter.com/Aikoyori"
					target="_blank"
					rel="noreferrer"
					class="m-4"
				>
					Aikoyori
				</a>
			</li>
			<li>
				<a
					href="https://www.facebook.com/HenriKoiwai/"
					target="_blank"
					rel="noreferrer"
					class="m-4"
				>
					Henri Koiwai
				</a>
			</li>
		</ul>
		<div class="divider py-4" />
	</div>
);

type SupporterListProp = {
	size: "h-[36rem]" | "h-36" | "h-24";
	list?: {
		href: string;
		src: string;
		alt: string;
	}[];
};

const SupporterList = ({ size, list }: SupporterListProp) => (
	<ul class="w-full flex flex-row flex-wrap justify-center">
		{list?.map(({ href, src, alt }) => (
			<li>
				<a href={href} target="_blank" rel="noreferrer">
					<img
						src={src}
						alt={alt}
						class={`${size} object-contain hover:scale-110 transition-transform`}
					/>
				</a>
			</li>
		))}
	</ul>
);
