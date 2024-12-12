import Image from "next/image"
import TITLE from "@/assets/backgroundImage.png"
import styles from "./style.css"

export const HomeComponent = () => {
    return (
        <main>
            <section className={styles.picture}>
                <Image src={TITLE} alt="title" width={488} height={260} />
            </section>
            <section></section>
        </main>
    )
}
