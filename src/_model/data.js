var data = {

    name: 'Doe Livre - ONG',
    slogan: 'A tecnologia a favor da caridade!',
    description: 'Somos uma organização sem fins lucrativos de ajuda humanitária em setores diversos.',
    
    theme: 'dark', // clean || dark
    
    stripePKs: {
        live: 'pk_live_51LEl7NLBoARuK3JS1PDRYJQxZdTDG3D2Ex7tYdGbpp40Ggvi3NgMKelTjIzpfa0MQrFL3cPbdxSOCadX0hppDPYJ00pcPBlJ1N',
        test: 'pk_test_51LEl7NLBoARuK3JSi8WcAFjiuGX0gtPAKK0vaW4oKHpa4G2GjufnJYfbodVeMwVG8aBK4T14lketttsfMN4mmiTG0014lT09Mm'
    },

    deployDomains: {
        heroku: 'zrc-landing-page.herokuapp.com',
        dedicated: 'doelivre.charitifiy.online'
    },

    bodySections: {
        
        first: { 
            title: 'olá', 
            main: 'Somos uma organização sem fins lucrativos de ajuda humanitária em setores diversos.'
        },

        second: { 
            title: 'infantil', 
            main: 'Atuamos na captação de recursos para o emprego de repasse a outras ONGs rsponsáveis por cuidar de ofarnatos, creches e pesquisas de respaldo a natalidade e prevenção.', 
            cta: 'quero doar' 
        },

        thirth: { 
            title: 'adição', 
            main: 'Estamos em confraternidade com as organizações do A.A & N.A que salvam vidas ao redor do mundo inteiro em desfavor do vício das drogas.', 
            cta: 'doar já' 
        },

        fourth: { 
            title: 'asilados', 
            main: 'Eles nunca optaram pelo abandono... Apenas não tiveram escolha. Esta é a realidade de muitos idosos no Brasil e outros paises da America Latina.', 
            cta: 'contribuir' 
        },

        fivety: { 
            title: 'Por que doar?', 
            main: 'Vivemos em um tempo no qual a maioria das pessoas se preocupa mais com acumular do que com compartilhar. Já passou da hora de começarmos a pensar no próximo e praticarmos a generosidade, pois, só assim, conseguiremos promover uma transformação social.',
            cta: 'quero contribuir!'
        }
    }
}

data.stripePK = process.env.NODE_ENV === 'development' 
                                    ? data.stripePKs.test 
                                        : data.stripePKs.live;

export default data;