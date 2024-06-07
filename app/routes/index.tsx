import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(
		<>
			<Hero />
			<Services />
		</>,
		{
			title: "Tepar",
		},
	),
);

const Hero = () => (
	<div id="hero" class="hero min-h-screen bg-base-200">
		<div class="hero-content text-center">
			<div class="max-w-md">
				<p class="text-xl">
					Setiap orang berhak hidup sejahtera lahir dan batin, bertempat
					tinggal, dan mendapatkan lingkungan hidup yang baik dan sehat serta
					berhak memperoleh pelayanan kesehatan.
				</p>
				<p class="pt-4 font-bagnard text-sm">UUD 1945 — Pasal 28H Ayat 1</p>
				<a
					href="https://youtu.be/dCEMSaho0io?si=BCm9WF6xL0clejE3"
					target="_blank"
					rel="noreferrer"
					class="m-4 btn btn-primary"
				>
					Info Lebih Lanjut
				</a>
			</div>
		</div>
	</div>
);

const Services = () => (
	<div id="services" class="m-4">
		<h2 class="px-10 pt-10 text-4xl font-bagnard text-center">Servis</h2>
		<div class="flex flex-row flex-wrap">
			<ServiceCard
				href="#"
				icon="&#xe2eb;"
				title="KPA Tepar"
				description="Program pembiayaan kepemilikan anime pertama."
			/>
			<ServiceCard
				href="#"
				icon="&#xf100;"
				title="KRA Tepar"
				description="Program pembiayaan perbaikan anime pertama."
			/>
			<ServiceCard
				href="#"
				icon="&#xf14d;"
				title="KBA Tepar"
				description="Program pembiayaan anime pertama di atas tanah pribadi."
			/>
			<ServiceCard
				href="#"
				icon="&#xe73a;"
				title="KPA NEET"
				description="Program pembiayaan kepemilikan anime bagi masyarakat NEET."
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
			<h2 class="card-title font-bagnard">{title}</h2>
			<p>{description}</p>
		</div>
	</a>
);
