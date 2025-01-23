import { HomeProps } from "@/ultis/actions/home.type";
import  styles from './styles.module.scss';
import {Mail, Map, Phone, Clock, Link} from 'lucide-react'

export function Footer({object} : HomeProps){
    return(
        <footer id="contatos" className={styles.footer}>
            <section className={styles.section}>
                <h2 className={styles.title}> Contatos </h2>
                <div className={styles.content}>
                    <div className={styles.item}>
                        <Mail size={28} color="#fff" />
                        <div >
                            <strong>Email</strong>
                            <p>{object.metadata.contato.email}</p>
                        </div>
                    </div>   

                    <div className={styles.item}>
                         <Phone size={28} color="#fff" />
                        <div >
                            <strong>Telefone</strong>
                            <p>{object.metadata.contato.phone}</p>
                        </div>
                    </div>  
                    <div className={styles.item}>
                        <Map size={28} color="#fff" />
                        <div >
                            <strong>Endereço</strong>
                            <p>{object.metadata.contato.address}</p>
                        </div>
                    </div>  
                    <div className={styles.item}>
                        <Clock size={28} color="#fff" />
                        <div >
                            <strong>Horario</strong>
                            <p>{object.metadata.contato.time}</p>
                        </div>
                    </div>
                    
                </div>
            </section>

         <a 
         href={object.metadata.cta_button.url}
         target="_blank" 
         className={styles.link}>
            <Phone size={24} color="#fff"/>
            {object.metadata.cta_button.title}
         </a>
       
        </footer>
    )
}