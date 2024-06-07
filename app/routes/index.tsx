import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(
		<>
			<Hero />
			<Products />
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

const Products = () => (
	<div id="products" class="m-4">
		<h2 class="px-10 pt-10 text-4xl font-bagnard text-center">Products</h2>
		<div class="flex flex-row flex-wrap">
			<ProductCard
				href="#"
				icon="&#xe2eb;"
				title="KPR Tepar"
				description="Program pembiayaan kepemilikan rumah pertama."
			/>
			<ProductCard
				href="#"
				icon="&#xf100;"
				title="KRR Tepar"
				description="Program pembiayaan perbaikan rumah pertama."
			/>
			<ProductCard
				href="#"
				icon="&#xf14d;"
				title="KBR Tepar"
				description="Program pembiayaan rumah pertama di atas tanah pribadi."
			/>
			<ProductCard
				href="#"
				icon="&#xe73a;"
				title="KPR FLPP"
				description="Program pembiayaan kepemilikan rumah bagi masyarakat non-ASN."
			/>
		</div>
	</div>
);

type ProductCardProp = {
	href: string;
	icon: string;
	title: string;
	description: string;
};

const ProductCard = ({ href, icon, title, description }: ProductCardProp) => (
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
