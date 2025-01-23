export interface HomeProps{
    object:{
        slug:string;
        title:string;
        typer:string;
        metadata:{
            banner:{
                url:string;
            }
            heading:string;
            cta_button:{
                title:string;
                url:string
            };
            about:{
                description:string;
                banner:{
                    url:string;
                }
            };
            services: ServiceProps[];
            contato:{
                email:string;
                phone:string;
                address:string;
                time:string;
            }
        }
    }
}

interface ServiceProps{
    image:{
        url:string;
    };
    description:string;
}