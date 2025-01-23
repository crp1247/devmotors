import { Submenu } from "./components/home/submenu";
import { getDataHome, getSubMenu } from "@/ultis/actions/get-data";
import { HomeProps } from "@/ultis/actions/home.type";
import { Hero } from "./components/hero";
import { Phone } from 'lucide-react'
import { Services } from "./components/home/services";
import { Container } from "./components/container";
import { Footer } from "./components/home/footer";
import { MenuProps } from "@/ultis/menu.type";


export default async function Home() {
  const { object }: HomeProps = await getDataHome();
  const menu: MenuProps = await getSubMenu();
  //console.log(menu);

  return (
    <main>
      {menu.objects.length > 0 && <Submenu menu={menu}/>}

      <Hero
        heading={object.metadata.heading}
        buttonTitle={object.metadata.cta_button.title}
        buttonUrl={object.metadata.cta_button.url}
        bannerUrl={object.metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />

      <Container>
        <Services object={object} />
        <Footer object={object} />
      </Container>
      
    </main>
  );
}
