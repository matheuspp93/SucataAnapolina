import { NextResponse } from "next/server";

const articles = [
  {
    id: 1,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/DYxtCJq/img-1.png",
    alt: "chair",
    html: ` <figure class="mt-6">
          <img
            src="https://movestock.com/uploads/produtos/RETALHOS-VIGAS.webp"
            alt="Vigas"
            class="w-full"
          />
        </figure>
        <time dateTime="" class="text-zinc-400">
          ● 7 de dezembro de 2023
        </time>
        <h3 class="text-xl text-green-500 font-bold pt-3">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis non iure fuga expedita, quos facere explicabo exercitationem
          error esse, beatae eius asperiores! Ipsam, magni dolor? Dolore esse
          ducimus qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium aperiam sint, expedita sequi consequuntur consectetur
          voluptas tempora, blanditiis repellat ipsum veritatis! Explicabo
          quaerat placeat reprehenderit vel veniam tempora rerum ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          fugiat quod quasi quo nemo, eaque, veniam hic autem, et sequi
          accusantium consectetur reiciendis dolore ducimus. Magnam, illum
          tempore. Repellat.
        </p>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <ul class="list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
        </ul>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas inventore laborum cum numquam laudantium veritatis repellat
          iure! Est nemo unde exercitationem voluptatem veniam fugit porro
          nostrum dolor nam quaerat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut rerum numquam rem! Qui et similique corporis
          repudiandae non minima eos quos cumque ratione soluta. Temporibus,
          ipsam. Officia enim magnam laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui assumenda ducimus impedit enim, quam
          amet esse sapiente in, nostrum, error obcaecati minus praesentium est
          eius magni possimus quis ipsum dolor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Perspiciatis voluptas inventore laborum
          cum numquam laudantium veritatis repellat iure! Est nemo unde
          exercitationem voluptatem veniam fugit porro nostrum dolor nam
          quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          rerum numquam rem! Qui et similique corporis repudiandae non minima
          eos quos cumque ratione soluta. Temporibus, ipsam. Officia enim magnam
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Qui assumenda ducimus impedit enim, quam amet esse sapiente in,
          nostrum, error obcaecati minus praesentium est eius magni possimus
          quis ipsum dolor.
        </p>`,
  },
  {
    id: 2,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/3C5HvxC/img-2.png",
    alt: "wall design",
    html: ` <figure class="mt-6">
          <img
            src="https://movestock.com/uploads/produtos/RETALHOS-VIGAS.webp"
            alt="Vigas"
            class="w-full"
          />
        </figure>
        <time dateTime="" class="text-zinc-400">
          ● 7 de dezembro de 2023
        </time>
        <h3 class="text-xl text-green-500 font-bold pt-3">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis non iure fuga expedita, quos facere explicabo exercitationem
          error esse, beatae eius asperiores! Ipsam, magni dolor? Dolore esse
          ducimus qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium aperiam sint, expedita sequi consequuntur consectetur
          voluptas tempora, blanditiis repellat ipsum veritatis! Explicabo
          quaerat placeat reprehenderit vel veniam tempora rerum ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          fugiat quod quasi quo nemo, eaque, veniam hic autem, et sequi
          accusantium consectetur reiciendis dolore ducimus. Magnam, illum
          tempore. Repellat.
        </p>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <ul class="list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
        </ul>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas inventore laborum cum numquam laudantium veritatis repellat
          iure! Est nemo unde exercitationem voluptatem veniam fugit porro
          nostrum dolor nam quaerat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut rerum numquam rem! Qui et similique corporis
          repudiandae non minima eos quos cumque ratione soluta. Temporibus,
          ipsam. Officia enim magnam laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui assumenda ducimus impedit enim, quam
          amet esse sapiente in, nostrum, error obcaecati minus praesentium est
          eius magni possimus quis ipsum dolor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Perspiciatis voluptas inventore laborum
          cum numquam laudantium veritatis repellat iure! Est nemo unde
          exercitationem voluptatem veniam fugit porro nostrum dolor nam
          quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          rerum numquam rem! Qui et similique corporis repudiandae non minima
          eos quos cumque ratione soluta. Temporibus, ipsam. Officia enim magnam
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Qui assumenda ducimus impedit enim, quam amet esse sapiente in,
          nostrum, error obcaecati minus praesentium est eius magni possimus
          quis ipsum dolor.
        </p>`,
  },
  {
    id: 3,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/Ms4qyXp/img-3.png",
    alt: "sitting place",
    html: ` <figure class="mt-6">
          <img
            src="https://movestock.com/uploads/produtos/RETALHOS-VIGAS.webp"
            alt="Vigas"
            class="w-full"
          />
        </figure>
        <time dateTime="" class="text-zinc-400">
          ● 7 de dezembro de 2023
        </time>
        <h3 class="text-xl text-green-500 font-bold pt-3">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis non iure fuga expedita, quos facere explicabo exercitationem
          error esse, beatae eius asperiores! Ipsam, magni dolor? Dolore esse
          ducimus qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium aperiam sint, expedita sequi consequuntur consectetur
          voluptas tempora, blanditiis repellat ipsum veritatis! Explicabo
          quaerat placeat reprehenderit vel veniam tempora rerum ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          fugiat quod quasi quo nemo, eaque, veniam hic autem, et sequi
          accusantium consectetur reiciendis dolore ducimus. Magnam, illum
          tempore. Repellat.
        </p>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <ul class="list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
        </ul>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas inventore laborum cum numquam laudantium veritatis repellat
          iure! Est nemo unde exercitationem voluptatem veniam fugit porro
          nostrum dolor nam quaerat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut rerum numquam rem! Qui et similique corporis
          repudiandae non minima eos quos cumque ratione soluta. Temporibus,
          ipsam. Officia enim magnam laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui assumenda ducimus impedit enim, quam
          amet esse sapiente in, nostrum, error obcaecati minus praesentium est
          eius magni possimus quis ipsum dolor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Perspiciatis voluptas inventore laborum
          cum numquam laudantium veritatis repellat iure! Est nemo unde
          exercitationem voluptatem veniam fugit porro nostrum dolor nam
          quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          rerum numquam rem! Qui et similique corporis repudiandae non minima
          eos quos cumque ratione soluta. Temporibus, ipsam. Officia enim magnam
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Qui assumenda ducimus impedit enim, quam amet esse sapiente in,
          nostrum, error obcaecati minus praesentium est eius magni possimus
          quis ipsum dolor.
        </p>`,
  },
  {
    id: 4,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/6Wfjf2w/img-4.png",
    alt: "sitting place",
  },
  {
    id: 5,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/3yvZBpm/img-5.png",
    alt: "wall design",
    html: ` <figure class="mt-6">
          <img
            src="https://movestock.com/uploads/produtos/RETALHOS-VIGAS.webp"
            alt="Vigas"
            class="w-full"
          />
        </figure>
        <time dateTime="" class="text-zinc-400">
          ● 7 de dezembro de 2023
        </time>
        <h3 class="text-xl text-green-500 font-bold pt-3">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis non iure fuga expedita, quos facere explicabo exercitationem
          error esse, beatae eius asperiores! Ipsam, magni dolor? Dolore esse
          ducimus qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium aperiam sint, expedita sequi consequuntur consectetur
          voluptas tempora, blanditiis repellat ipsum veritatis! Explicabo
          quaerat placeat reprehenderit vel veniam tempora rerum ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          fugiat quod quasi quo nemo, eaque, veniam hic autem, et sequi
          accusantium consectetur reiciendis dolore ducimus. Magnam, illum
          tempore. Repellat.
        </p>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <ul class="list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
        </ul>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas inventore laborum cum numquam laudantium veritatis repellat
          iure! Est nemo unde exercitationem voluptatem veniam fugit porro
          nostrum dolor nam quaerat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut rerum numquam rem! Qui et similique corporis
          repudiandae non minima eos quos cumque ratione soluta. Temporibus,
          ipsam. Officia enim magnam laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui assumenda ducimus impedit enim, quam
          amet esse sapiente in, nostrum, error obcaecati minus praesentium est
          eius magni possimus quis ipsum dolor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Perspiciatis voluptas inventore laborum
          cum numquam laudantium veritatis repellat iure! Est nemo unde
          exercitationem voluptatem veniam fugit porro nostrum dolor nam
          quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          rerum numquam rem! Qui et similique corporis repudiandae non minima
          eos quos cumque ratione soluta. Temporibus, ipsam. Officia enim magnam
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Qui assumenda ducimus impedit enim, quam amet esse sapiente in,
          nostrum, error obcaecati minus praesentium est eius magni possimus
          quis ipsum dolor.
        </p>`,
  },
  {
    id: 6,
    date: "12 April 2021",
    title: "The Decorated Ways",
    description: "Dive into minimalism",
    imgSrc: "https://i.ibb.co/gDdnJb5/img-6.png",
    alt: "sitting place",
    html: ` <figure class="mt-6">
          <img
            src="https://movestock.com/uploads/produtos/RETALHOS-VIGAS.webp"
            alt="Vigas"
            class="w-full"
          />
        </figure>
        <time dateTime="" class="text-zinc-400">
          ● 7 de dezembro de 2023
        </time>
        <h3 class="text-xl text-green-500 font-bold pt-3">Lorem ipsum</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          debitis non iure fuga expedita, quos facere explicabo exercitationem
          error esse, beatae eius asperiores! Ipsam, magni dolor? Dolore esse
          ducimus qui. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Praesentium aperiam sint, expedita sequi consequuntur consectetur
          voluptas tempora, blanditiis repellat ipsum veritatis! Explicabo
          quaerat placeat reprehenderit vel veniam tempora rerum ratione?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque laborum
          fugiat quod quasi quo nemo, eaque, veniam hic autem, et sequi
          accusantium consectetur reiciendis dolore ducimus. Magnam, illum
          tempore. Repellat.
        </p>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <ul class="list-disc">
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
          <li>Lorem ipsum, dolor</li>
        </ul>
        <h4 class="font-bold text-gray-800">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          voluptas inventore laborum cum numquam laudantium veritatis repellat
          iure! Est nemo unde exercitationem voluptatem veniam fugit porro
          nostrum dolor nam quaerat. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ut rerum numquam rem! Qui et similique corporis
          repudiandae non minima eos quos cumque ratione soluta. Temporibus,
          ipsam. Officia enim magnam laudantium? Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Qui assumenda ducimus impedit enim, quam
          amet esse sapiente in, nostrum, error obcaecati minus praesentium est
          eius magni possimus quis ipsum dolor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Perspiciatis voluptas inventore laborum
          cum numquam laudantium veritatis repellat iure! Est nemo unde
          exercitationem voluptatem veniam fugit porro nostrum dolor nam
          quaerat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
          rerum numquam rem! Qui et similique corporis repudiandae non minima
          eos quos cumque ratione soluta. Temporibus, ipsam. Officia enim magnam
          laudantium? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Qui assumenda ducimus impedit enim, quam amet esse sapiente in,
          nostrum, error obcaecati minus praesentium est eius magni possimus
          quis ipsum dolor.
        </p>`,
  },
];

export async function GET() {
  return NextResponse.json(articles);
}
