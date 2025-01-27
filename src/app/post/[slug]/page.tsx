import styles from './styles.module.scss';
import { getItemBySlug } from '../../../ultis/actions/get-data';
import { PostProps } from '@/ultis/post.type';
import { Hero } from '@/app/components/hero';
import { Phone } from 'lucide-react';
import { Container } from '@/app/components/container';
import Image from 'next/image';
import { Metadata } from 'next';

// Função generateMetadata ajustada para corresponder ao tipo esperado
export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata> {
  try {
    const { objects }: PostProps = await getItemBySlug(params.slug); // Garantir que params.slug está sendo usado corretamente

    return {
      title: `DevMotors - ${objects[0].title}`, // Espaço adicionado após 'DevMotors -'
      description: `${objects[0].metadata.description.text}`,
      keywords: ["devmotos", "troca de oleo", "devmotors troca de oleo"],
      openGraph: {
        title: `DevMotors - ${objects[0].title}`, // Espaço adicionado após 'DevMotors -'
        images: [objects[0].metadata.banner.url],
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (err) {
    return {
      title: "DevMotors - Sua oficina especializada!",
      description: "Oficina de carros em São Paulo",
    };
  }
}

// Exportação padrão ajustada para corresponder ao tipo esperado
export default async function Page({ params }: {
  params: { slug: string }
}) {
  const { objects }: PostProps = await getItemBySlug(params.slug); // Garantir que params.slug está sendo usado corretamente

  return (
    <>
      <Hero
        heading={objects[0].title}
        buttonTitle={objects[0].metadata.button.title}
        buttonUrl={objects[0].metadata.button.url}
        bannerUrl={objects[0].metadata.banner.url}
        icon={<Phone size={24} color="#FFF" />}
      />
      <Container>
        <section className={styles.about}>
          <article className={styles.innerAbout}>
            <h1 className={styles.title}>
              {objects[0].metadata.description.title}
            </h1>
            <p>
              {objects[0].metadata.description.text}
            </p>
            {objects[0].metadata.description.button_active && (
              <a
                href={objects[0].metadata.description.button_url as string}
                target='_blank'
                className={styles.link}
              >
                {objects[0].metadata.description.button_title}
              </a>
            )}
          </article>
          <div className={styles.bannerAbout}>
            <Image
              className={styles.imageAbout}
              alt={objects[0].title}
              quality={100}
              fill={true}
              priority={true}
              src={objects[0].metadata.description.banner.url}
              sizes="(max-width: 480px) 100vw, (max-width:1074px) 75vw, 60vw"
            />
          </div>
        </section>
      </Container>
    </>
  );
}
