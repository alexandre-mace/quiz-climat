import Link from "next/link";

const Footer = () => (
    <footer className={"flex text-[#8979B0] justify-center gap-4 text-sm"}>
        <div>Contenu : <Link target={"_blank"} className={"text-[#B1A6CB] hover:underline"} href={"https://www.linkedin.com/in/thomas-wagner-0807b932"}>Thomas Wagner</Link></div>
        <div>-</div>
        <div>Développement : <Link target={"_blank"} className={"text-[#B1A6CB] hover:underline"} href={"https://www.linkedin.com/in/alexandre-mac%C3%A9"}>Alexandre Macé</Link></div>
        <div>-</div>
        <div>Design : <Link target={"_blank"} className={"text-[#B1A6CB] hover:underline"} href={"https://fr.linkedin.com/in/valentine-michel-designer"}>Valentine Michel</Link></div>
    </footer>
)

export default Footer;