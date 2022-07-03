<template>
  <v-app>
    <v-app-bar>
      <v-container>


        <v-app-bar-title class="pl-0" style="font-size: 110%">
          <div class="d-flex align-center">
            <v-avatar
              rounded="0"
              class="mr-3"
              :image="logourl" />
            {{ pagdata.slogan }}
          </div>
        </v-app-bar-title>


      </v-container>
    </v-app-bar>

    <v-main id="apptop">
        
      <section id="hero">
        <v-sheet
          class="d-flex align-center py-16"
          color="#333333"
          :style="`background-image: url(${imgurlFirst}) !important; min-height: 300px !important`">
          <v-content class="pa-6">
            <v-responsive>

              <v-row>

                <v-col 
                    md="5" 
                    cols="12" 
                    style="color: black; 
                            background-color: rgba(255, 255, 255, 0.65); 
                            padding: 105px;
                            border: 1px solid black;
                            box-shadow: -6px 5px 1px 0px rgba(0,0,0,0.99) !important">
                
                  <h3 class="text-h4">
                    {{ pagdata.bodySections.first.title }}
                  </h3>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-4 text-medium-emphasis">
                    {{ pagdata.bodySections.first.main }}
                  </p>
                </v-col>

                <v-col md="7" cols="12">
                    <v-card 
                        style="width: 100%; zoom: 70%; opacity: 97%" 
                        density="compact"
                        class="pb-6 pt-6 pr-3">  
                        <v-card-title class="pb-3">
                            <v-icon class="mr-3" color="orange">mdi-hand-coin</v-icon>
                            <span>Para doar agora, use o formulário.</span> 
                            
                        </v-card-title>
                        <v-card-text>
                            
                                <v-form 
                                    ref="donForm.el" 
                                    @submit.prevent="submitdonform">

                                    <v-row>

                                        <!-- field line start -->
                                        <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <v-icon large>mdi-account</v-icon>
                                        </v-col>
                                        <v-col cols="12" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.name.first"
                                                id="firstnameinput"
                                                label="Primeiro nome"
                                                ref="formnamefield" 
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>
                                        <v-col cols="12" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.name.second"
                                                id="secondname"
                                                label="Segundo nome"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>
                                        <v-col cols="12" md="3" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.name.last"
                                                id="surname"
                                                label="Sobrenome"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>

                                        <!-- field line start -->
                                        <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <v-icon large>mdi-email</v-icon>
                                        </v-col>
                                        <v-col cols="11" md="11" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.email"
                                                id="cusemailinput"
                                                label="E-mail"
                                                type="email"
                                                required
                                                hide-details
                                                density="compact"  
                                                class="pb-0 pb-0" />
                                        </v-col>

                                        <!-- field line next -->
                                        <v-col cols="1" md="1" class="input-col prepends">
                                            <v-icon large>mdi-currency-usd</v-icon>
                                        </v-col>
                                        <v-col cols="11" md="11" class="input-col">
                                            <v-text-field 
                                                v-model="fdata.brlamount"
                                                id="amountbrlinput"
                                                label="Minha doação"
                                                prepend-icon="mdi-currency-usd"
                                                append-icon="mdi-map-marker"
                                                required
                                                density="compact" />
                                        </v-col>

                                        <!-- field line next -->
                                        <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <v-icon large>mdi-credit-card</v-icon>
                                        </v-col>
                                        <v-col cols="11" md="11" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.cc.number"
                                                id="cardnumberinput"
                                                label="Númeração cartão crédito"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>

                                        <!-- field line next -->

                                        <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <!-- nothing just spacer -->
                                        </v-col>
                                        <v-col cols="12" md="3" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                id="cardmonthinput"
                                                v-model="fdata.cc.month"
                                                label="Mês"
                                                required
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0" />
                                        </v-col>
                                        <v-col cols="12" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                id="cardyearinput"
                                                v-model="fdata.cc.year"
                                                label="Ano"
                                                required
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0" />
                                        </v-col>
                                        <v-col cols="12" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                id="cardcvvinput"
                                                v-model="fdata.cc.cvv"
                                                label="CVV"
                                                required
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0" />
                                        </v-col>

                                        <!-- field line next -->
                                        <v-col cols="6" md="6" class="pb-0 pb-0 input-col">
                                            <v-checkbox
                                                v-model="moreinfoschecked"
                                                readonly
                                                density="compact" 
                                                label="Adicionar informações de contato?" />
                                        </v-col>
                                        <v-col cols="6" md="6" class="pb-0 pb-0 input-col">
                                            <v-checkbox
                                                v-model="moreinfoschecked"
                                                readonly
                                                density="compact" 
                                                label="Receber notícias sobre nós?" />
                                        </v-col>

                                        <!-- field line next -->
                                         <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <v-icon large>mdi-map-marker</v-icon>
                                        </v-col>
                                        <v-col cols="11" md="5" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.extrainfo.address"
                                                id="inputextraaddr"
                                                label="Endereço"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>
                                        <v-col cols="11" md="2" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.extrainfo.cep"
                                                id="inputextracep"
                                                label="CEP"
                                                required
                                                hide-details
                                                density="compact"  
                                                class="pb-0 pb-0" />
                                        </v-col>
                                        <v-col cols="11" md="2" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.extrainfo.state"
                                                id="inputextrastate"
                                                label="Estado"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>
                                        <v-col cols="11" md="2" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                id="inputextracity"
                                                v-model="fdata.extrainfo.city"
                                                label="Cidade"
                                                required
                                                hide-details
                                                density="compact"  
                                                class="pb-0 pb-0" />
                                        </v-col>


                                        <!-- field line next -->
                                         <v-col cols="1" md="1" class="pb-0 pb-0 input-col prepends">
                                            <v-icon large>mdi-contact</v-icon>
                                        </v-col>
                                        <v-col cols="11" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.extrainfo.phone"
                                                id="inputextraphone"
                                                label="Whatsapp"
                                                hide-details
                                                density="compact" 
                                                class="pb-0 pb-0"
                                                required />
                                        </v-col>
                                        <v-col cols="11" md="4" class="pb-0 pb-0 input-col">
                                            <v-text-field 
                                                v-model="fdata.extrainfo.cpf"
                                                id="inputextracpf"
                                                label="CPF"
                                                required
                                                hide-details
                                                density="compact"  
                                                class="pb-0 pb-0" />
                                        </v-col>
                                        <v-col cols="11" md="3" class="pb-0 pb-0 input-col">
                                               <v-btn
                                                    id="submitbutton"
                                                    :loading="loading"
                                                    :disabled="loading"
                                                    color="green"
                                                    class="ma-2 white--text"
                                                    block
                                                    type="submit">
                                                    enviar
                                                    <v-icon right dark>
                                                        mdi-check-circle
                                                    </v-icon>
                                                </v-btn>
                                        </v-col>
                                    
                                    </v-row>    

                                </v-form>
                        </v-card-text>
                    </v-card>
                </v-col>
              </v-row>
            
            </v-responsive>
          </v-content>
        </v-sheet>

      </section>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.second.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.second.main }}
                  </p>

                  <v-btn class="mt-6" @click="win.scrollTo(); $refs.formnamefield.focus()">
                    {{ pagdata.bodySections.second.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlSecond" />

            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="controls">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.thirth.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.thirth.main }}
                  </p>

                  <v-btn class="mt-6" @click="win.scrollTo(); $refs.formnamefield.focus()">
                    {{ pagdata.bodySections.thirth.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlThirth" />

            </v-row>
          </v-container>
        </section>

        <v-container>
          <v-divider class="my-12" />
        </v-container>

        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="350">
                  
                  <h2 class="text-h4">
                    {{ pagdata.bodySections.fourth.title }}
                  </h2>

                  <hr style="opacity: 0.3; border: 1px;">

                  <p class="mt-8">
                    {{ pagdata.bodySections.fourth.main }}
                  </p>

                  <v-btn class="mt-6" @click="win.scrollTo(); $refs.formnamefield.focus()">
                    {{ pagdata.bodySections.fourth.cta }}
                  </v-btn>

                </v-responsive>
              </v-col>

              <v-img
                max-width="400"
                :src="imgurlFourth" />

            </v-row>
          </v-container>
        </section>
      </v-sheet>

      <v-sheet
        class="py-16"
        color="#181818">
        <section id="grid">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="12">
                <v-responsive
                  class="overflow-visible">

                  <v-row>

                        <v-col cols="8">

                            <h2 class="text-h4">
                                {{ pagdata.bodySections.fivety.title }}
                            </h2>

                            <p class="mt-3">
                                {{ pagdata.bodySections.fivety.main }}
                            </p>
                        
                        </v-col>

                        <v-col cols="4">
                            <v-btn @click="win.scrollTo(); $refs.formnamefield.focus()">
                                {{ pagdata.bodySections.fivety.cta }}
                            </v-btn>
                        </v-col>

                  </v-row>

                </v-responsive>
              </v-col>
            </v-row>
          </v-container>
        </section>
      </v-sheet>

    </v-main>
  </v-app>
</template>

<script>

    import logourl from './_model/logo.png';
    import imgurlFirst from './_model/first.jpeg'
    import imgurlSecond from './_model/second.jpeg'
    import imgurlThirth from './_model/thirth.jpeg'
    import imgurlFourth from './_model/fourth.jpeg'

    export default { 
        
        name: 'App',

        data () {

            return {

                logourl,
                imgurlFirst,
                imgurlSecond,
                imgurlThirth,
                imgurlFourth,

                loading: false,
                moreinfoschecked: true,

                fdata: {
                    
                    brlamount: 0,
                    
                    email: '',
                    
                    name: {
                        first: '',
                        second: '',
                        last: ''
                    },
                    
                    cc: {
                        number: '',
                        month: '',
                        year: '',
                        cvv: ''
                    },

                    extrainfo: {
                        address: '',
                        cep: '',
                        state: '',
                        stateabbr: '',
                        city: '',
                        phone: '',
                        cpf: ''
                    }
                }
            }
        },
 
        methods: {

            submitdonform () {
                console.log(this.pagdata.stripePK)
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                }, 3000)
            }
        },
        
        mounted () {
            this.win.document.title = this.pagdata.name + ' - ' + this.pagdata.slogan;
        }
    }

</script>

<style>
  
  #hero > div {
    background-size: cover;
    background-position: center;
  }

  .v-avatar {
      --v-avatar-height: 145px !important;
  }

  .input-col {
    height: 60px;
  }

  .input-col.prepends {
    text-align: center;
    position: relative;
    top: 10px;
  }
  
  #hero > div > div > div > div.v-responsive__content > div > div:nth-child(2) > div > div.v-card-text > form > div > div.v-col-md-6.v-col-12.pb-0.pb-0 > div > div.v-input__details {
    display: none !important;
    height: 0px;
  }

</style>