import { createRoute } from "honox/factory";

export default createRoute((c) =>
	c.render(
		<>
			<div id="hero" class="hero min-h-screen bg-base-200">
				<div class="hero-content text-center">
					<div class="max-w-md">
						<h1 class="font-bagnard">
							UUD 1945
							<br />
							Pasal 28H Ayat 1
						</h1>
						<p class="py-4">
							Setiap orang berhak hidup sejahtera lahir dan batin, bertempat
							tinggal, dan mendapatkan lingkungan hidup yang baik dan sehat
							serta berhak memperoleh pelayanan kesehatan.
						</p>
						<button type="button" class="m-4 btn btn-primary">
							Informasi Lebih
						</button>
					</div>
				</div>
			</div>
		</>,
		{
			title: "Tepar",
		},
	),
);
