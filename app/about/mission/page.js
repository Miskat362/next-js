import Button from "@/app/components/Button";
import Image from "next/image";
import sky from "@/public/images/sky.jpg";


export default function Mission() {
    return (
        <main className="mt-10">
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quod.
            </div>

            <Image src={sky} alt="sky" />

            <Button />
        </main>
    );
}
