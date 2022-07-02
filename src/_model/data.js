export default {

    name: 'DoeLivre - ONG',
    slogan: 'A tecnologia a favor da caridade!',
    description: 'Somos uma organização sem fins lucrativos de ajuda humanitária em setores diversos.',
    
    theme: 'dark', // clean || dark
    
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
        }
    }
}